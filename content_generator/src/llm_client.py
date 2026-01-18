import time
import json
from google import genai
from google.genai import types

from .config import GEMINI_API_KEY, GEMINI_MODEL
from .models import Question


class LLMClient:
    """Client for generating questions using Gemini API."""

    def __init__(self, api_key: str | None = None):
        self.client = genai.Client(
            api_key=api_key or GEMINI_API_KEY,
        )
        self.model = GEMINI_MODEL

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

        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = self.client.models.generate_content(
                    model=self.model,
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        system_instruction=self._system_prompt(),
                        response_mime_type="application/json",
                        temperature=0.7,
                        max_output_tokens=8000,
                    ),
                )

                content_text = response.text
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
        return """You are an expert quiz question generator. Generate high-quality multiple choice questions based on the provided content.

Rules:
1. Each question must have exactly 4 options
2. The answer must EXACTLY match one of the 4 options (character-for-character)
3. Provide clear, educational explanations
4. Questions should test understanding, not just memorization
5. Avoid trick questions or ambiguous options
6. Output must be valid JSON array

Output format (JSON array):
[
  {
    "id": 1,
    "question": "What is...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "Option B",
    "explanation": "The answer is Option B because..."
  }
]"""

    def _build_prompt(
        self,
        topic: str,
        content: str,
        count: int,
        difficulty: str,
        start_id: int,
    ) -> str:
        difficulty_guidance = {
            "Beginner": "Basic concepts, definitions, and fundamental knowledge. Suitable for newcomers.",
            "Intermediate": "Applied knowledge, common patterns, and practical usage. Requires working experience.",
            "Advanced": "Deep understanding, edge cases, optimization, and expert-level concepts.",
        }

        return f"""Generate {count} {difficulty} level quiz questions about {topic}.

Difficulty guidance: {difficulty_guidance.get(difficulty, "")}

Base your questions on this recent content:
---
{content[:6000]}
---

Requirements:
- Start question IDs from {start_id}
- Create {count} unique questions
- Difficulty level: {difficulty}
- Output ONLY the JSON array, no other text"""

    def _parse_response(self, content: str) -> list[dict]:
        """Parse LLM response to extract JSON questions."""
        # Try to find JSON array in response
        content = content.strip()

        # Remove markdown code blocks if present
        if content.startswith("```"):
            lines = content.split("\n")
            content = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])

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
