"""Main question generator orchestrating search and LLM generation."""

from datetime import datetime

from .config import (
    TOPICS,
    TOPIC_SEARCH_QUERIES,
    QUESTIONS_PER_TOPIC,
    DIFFICULTY_DISTRIBUTION,
)
from .tavily_client import TavilySearchClient
from .llm_client import LLMClient
from .models import GeneratedQuestions


class QuestionGenerator:
    """Orchestrates the question generation pipeline."""

    def __init__(self):
        self.search_client = TavilySearchClient()
        self.llm_client = LLMClient()

    def generate_for_topic(
        self,
        topic: str,
        total_questions: int = QUESTIONS_PER_TOPIC,
    ) -> GeneratedQuestions:
        """
        Generate questions for a single topic.

        Args:
            topic: Topic identifier (e.g., 'python', 'react')
            total_questions: Total number of questions to generate

        Returns:
            GeneratedQuestions object with all questions
        """
        if topic not in TOPICS:
            raise ValueError(f"Unknown topic: {topic}. Available: {TOPICS}")

        print(f"\n{'=' * 50}")
        print(f"Generating questions for: {topic}")
        print(f"{'=' * 50}")

        # Step 1: Search for latest content
        print(f"\n[1/3] Searching for latest {topic} content...")
        search_query = TOPIC_SEARCH_QUERIES.get(topic, topic)
        content = self.search_client.search_topic(f"{search_query} 2026 latest trends")
        print(f"      Found {len(content)} characters of content")

        # Step 2: Generate questions by difficulty
        print(f"\n[2/3] Generating {total_questions} questions...")
        all_questions = []
        current_id = 1

        for difficulty, count in DIFFICULTY_DISTRIBUTION.items():
            # Scale count to match total_questions
            scaled_count = int((count / 100) * total_questions)
            print(f"      Generating {scaled_count} {difficulty} questions...")

            questions = self.llm_client.generate_questions(
                topic=topic,
                content=content,
                count=scaled_count,
                difficulty=difficulty,
                start_id=current_id,
            )

            # Fix IDs to be sequential
            for q in questions:
                q["id"] = current_id
                current_id += 1

            all_questions.extend(questions)
            print(f"      Generated {len(questions)} valid questions")

        # Step 3: Create result object
        print("\n[3/3] Validating and packaging...")
        result = GeneratedQuestions(
            topic=topic,
            questions=[q for q in all_questions],
            generated_at=datetime.now().isoformat(),
        )

        print(
            f"\n✅ Successfully generated {len(result.questions)} questions for {topic}"
        )
        return result

    def generate_all(
        self, topics: list[str] | None = None
    ) -> dict[str, GeneratedQuestions]:
        """
        Generate questions for multiple topics.

        Args:
            topics: List of topics to generate, or None for all topics

        Returns:
            Dictionary mapping topic to GeneratedQuestions
        """
        target_topics = topics or TOPICS
        results = {}

        for topic in target_topics:
            try:
                results[topic] = self.generate_for_topic(topic)
            except Exception as e:
                print(f"❌ Failed to generate for {topic}: {e}")

        return results
