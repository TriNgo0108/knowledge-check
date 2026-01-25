import time
import json
from zai import ZaiClient

from .config import ZAI_API_KEY, GLM_MODEL, ZAI_BASE_URL
from .models import Question
from .prompts import SYSTEM_PROMPT, build_user_prompt


class LLMClient:
    """Client for generating questions using GLM API via Z.AI SDK."""

    def __init__(self, api_key: str | None = None):
        self.client = ZaiClient(
            api_key=api_key or ZAI_API_KEY,
            base_url=ZAI_BASE_URL,
        )
        self.model = GLM_MODEL

    def generate_questions(
        self,
        topic: str,
        content: str,
        count: int,
        difficulty: str,
        start_id: int = 1,
    ) -> list[dict]:
        """
        Generate quiz questions using LLM.

        Args:
            topic: Topic name for context
            content: Research content to base questions on
            count: Number of questions to generate
            difficulty: Difficulty level (Beginner, Intermediate, Advanced)
            start_id: Starting ID for questions

        Returns:
            List of question dictionaries
        """
        prompt = self._build_prompt(topic, content, count, difficulty, start_id)

        system_instruction = self._system_prompt()

        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=[
                        {"role": "system", "content": system_instruction},
                        {"role": "user", "content": prompt},
                    ],
                    temperature=0.7,
                )

                content_text = response.choices[0].message.content
                questions = self._parse_response(content_text)

                # Validate questions
                validated = []
                for q in questions:
                    try:
                        q["difficulty"] = difficulty
                        # Ensure ID is unique and sequential if possible, or just trust the LLM/validation
                        Question(**q)
                        validated.append(q)
                    except Exception as e:
                        print(f"Skipping invalid question: {e}")

                return validated

            except Exception as e:
                print(f"Attempt {attempt + 1} failed: {e}")
                if attempt < max_retries - 1:
                    time.sleep(2**attempt)  # Exponential backoff
                else:
                    raise

        return []

    def _system_prompt(self) -> str:
        """Return the enhanced system prompt with expert persona and CoT guidance."""
        return SYSTEM_PROMPT

    def _build_prompt(
        self,
        topic: str,
        content: str,
        count: int,
        difficulty: str,
        start_id: int,
    ) -> str:
        """Build user prompt with few-shot examples and structured guidance."""
        return build_user_prompt(
            topic=topic,
            content=content,
            count=count,
            difficulty=difficulty,
            start_id=start_id,
        )

    def _parse_response(self, content: str) -> list[dict]:
        """Parse LLM response to extract JSON questions."""
        # Try to find JSON array in response
        content = content.strip()

        # Remove markdown code blocks if present
        if content.startswith("```"):
            lines = content.splitlines()
            if lines[0].strip().startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].strip() == "```":
                lines = lines[:-1]
            content = "\n".join(lines)

        # Find JSON array
        start = content.find("[")
        end = content.rfind("]") + 1

        if start != -1 and end > start:
            json_str = content[start:end]
            return json.loads(json_str)

        # If headers/mime-type works perfectly, we might get pure JSON,
        # but robust parsing is still good.
        try:
            return json.loads(content)
        except:
            pass

        raise ValueError("Could not find valid JSON array in response")
