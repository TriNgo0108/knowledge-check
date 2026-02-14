import re
import time
import json_repair
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
                        # Fix letter answers (A/B/C/D) by mapping to actual option text
                        q = self._fix_letter_answer(q)
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

    @staticmethod
    def _fix_letter_answer(q: dict) -> dict:
        """Map letter-style answers to the actual option text.

        Handles formats: 'B', 'B.', 'B)', '(B)', 'b', etc.
        Only applies the fix if the answer is NOT already one of the options
        (avoids false positives when an option is legitimately a short string).
        """
        answer = q.get("answer", "").strip()
        options = q.get("options", [])

        if not options:
            return q

        # Skip if the answer already matches an option exactly
        if answer in options:
            return q

        cleaned = re.sub(r"^[\(\[]?\s*([A-Da-d])\s*[\.\)\]:]?\s*$", r"\1", answer)

        letter_map = {"A": 0, "B": 1, "C": 2, "D": 3}
        upper = cleaned.upper()

        if upper in letter_map:
            idx = letter_map[upper]
            if idx < len(options):
                q["answer"] = options[idx]

        return q

    def _parse_response(self, content: str) -> list[dict]:
        """Parse LLM response to extract JSON questions."""
        try:
            # Try to repair and parse JSON from the content
            # json_repair handles markdown blocks, valid/invalid JSON, etc.
            parsed = json_repair.repair_json(content, return_objects=True)

            if isinstance(parsed, list):
                return parsed

            # If it returned a single dict, check if it wraps the list
            if isinstance(parsed, dict):
                if "questions" in parsed and isinstance(parsed["questions"], list):
                    return parsed["questions"]
                return [parsed]

            raise ValueError(f"Parsed content is not a list or dict: {type(parsed)}")

        except Exception as e:
            # If json_repair fails entirely, we likely really don't have JSON
            raise ValueError(f"Failed to parse JSON response: {e}") from e
