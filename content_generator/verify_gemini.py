from src.llm_client import LLMClient
from dotenv import load_dotenv
import os

load_dotenv()


def test_generation():
    print("Testing Gemini generation...")

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY is missing from environment.")
        return

    try:
        client = LLMClient()
        print(f"Client initialized with model: {client.model}")

        questions = client.generate_questions(
            topic="Python",
            content="Python is a high-level, general-purpose programming language.",
            count=1,
            difficulty="Beginner",
        )

        print("\nGenerated Questions:")
        for q in questions:
            print(f"Q: {q['question']}")
            print(f"A: {q['answer']}")
            print("-" * 20)

    except Exception as e:
        print(f"Verification Failed: {e}")


if __name__ == "__main__":
    test_generation()
