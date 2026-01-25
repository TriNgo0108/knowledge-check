"""Prompt templates and few-shot examples for question generation.

This module implements advanced prompt engineering patterns:
- Role-based system prompts with expert persona
- Few-shot examples organized by difficulty level
- Chain-of-thought reasoning guidance
- Self-verification patterns
"""

from dataclasses import dataclass


@dataclass
class QuestionExample:
    """A few-shot example for question generation."""

    question: str
    options: list[str]
    answer: str
    explanation: str
    difficulty: str


# ============================================================================
# FEW-SHOT EXAMPLES BY DIFFICULTY
# ============================================================================

BEGINNER_EXAMPLES: list[QuestionExample] = [
    QuestionExample(
        question="What is the primary purpose of a variable in programming?",
        options=[
            "To store and reference data values",
            "To execute mathematical operations",
            "To connect to external databases",
            "To define the program's entry point",
        ],
        answer="To store and reference data values",
        explanation="Variables are named containers that store data values in memory. They allow programs to save, access, and modify data throughout execution. While variables can hold values used in math operations, their primary purpose is to provide a way to store and reference data by name.",
        difficulty="Beginner",
    ),
    QuestionExample(
        question="Which data type would be most appropriate for storing a person's age?",
        options=[
            "String",
            "Integer",
            "Boolean",
            "Float",
        ],
        answer="Integer",
        explanation="An integer (int) is the most appropriate data type for storing age because age is typically represented as a whole number without decimal places. While a float could technically store an age value, using an integer better represents the concept and uses less memory. Strings are for text, and booleans are for true/false values.",
        difficulty="Beginner",
    ),
]

INTERMEDIATE_EXAMPLES: list[QuestionExample] = [
    QuestionExample(
        question="When would you use a dictionary (hash map) instead of a list (array)?",
        options=[
            "When you need to maintain insertion order only",
            "When you need fast key-based lookups",
            "When you need to store only numeric values",
            "When you need to minimize memory usage",
        ],
        answer="When you need fast key-based lookups",
        explanation="Dictionaries provide O(1) average-case time complexity for key-based lookups, insertions, and deletions, making them ideal when you need to access elements by a unique identifier. Lists require O(n) time for searching. While modern dictionaries maintain insertion order (Python 3.7+), that's not their primary advantage. Dictionaries typically use more memory than lists due to hash table overhead.",
        difficulty="Intermediate",
    ),
    QuestionExample(
        question="What is the main benefit of using dependency injection in software design?",
        options=[
            "It reduces the total lines of code",
            "It enables loose coupling and easier testing",
            "It improves runtime performance",
            "It automatically handles memory management",
        ],
        answer="It enables loose coupling and easier testing",
        explanation="Dependency injection (DI) is a design pattern where dependencies are 'injected' into a class rather than created internally. This promotes loose coupling because classes don't need to know how to create their dependencies, and it makes testing easier because you can inject mock dependencies for unit tests. DI doesn't necessarily reduce code or improve runtime performance.",
        difficulty="Intermediate",
    ),
]

ADVANCED_EXAMPLES: list[QuestionExample] = [
    QuestionExample(
        question="In a distributed system, what problem does the CAP theorem describe?",
        options=[
            "The trade-off between code complexity, abstraction, and performance",
            "The impossibility of simultaneously providing consistency, availability, and partition tolerance",
            "The relationship between CPU, memory, and disk I/O optimization",
            "The balance between caching, API design, and persistence layers",
        ],
        answer="The impossibility of simultaneously providing consistency, availability, and partition tolerance",
        explanation="The CAP theorem, proven by Eric Brewer, states that a distributed data store can only provide two of three guarantees simultaneously: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition tolerance (the system operates despite network partitions). Since network partitions are inevitable, real systems must choose between CP (consistent but may be unavailable) or AP (available but may be inconsistent).",
        difficulty="Advanced",
    ),
    QuestionExample(
        question="What is the time complexity of the most efficient comparison-based sorting algorithm in the worst case?",
        options=[
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(log n)",
        ],
        answer="O(n log n)",
        explanation="O(n log n) is the theoretical lower bound for comparison-based sorting, proven through decision tree analysis. Algorithms like Merge Sort and Heap Sort achieve this in the worst case. Quick Sort has O(n²) worst case but O(n log n) average. O(n) linear time is only achievable by non-comparison sorts (like Radix Sort) with specific constraints. The lower bound exists because comparison-based sorting must make at least log₂(n!) comparisons to distinguish between all possible permutations.",
        difficulty="Advanced",
    ),
]


# ============================================================================
# SYSTEM PROMPT
# ============================================================================

SYSTEM_PROMPT = """You are an expert educational content developer with 10+ years of experience creating technical certification exams for companies like AWS, Google, and Microsoft. You specialize in generating high-quality multiple-choice questions that test deep understanding, not just memorization.

## Your Expertise
- Creating questions that distinguish between surface-level knowledge and true understanding
- Crafting plausible "distractors" (wrong answers that seem reasonable to someone who doesn't fully understand)
- Writing explanations that teach concepts, not just confirm correct answers
- Tailoring difficulty to match learner progression

## Core Rules
1. Each question MUST have exactly 4 options
2. The answer MUST EXACTLY match one of the 4 options (character-for-character, including punctuation)
3. Explanations should be educational - explain WHY the answer is correct AND why other options are wrong
4. Avoid trick questions, ambiguous wording, or "all of the above" options
5. Output MUST be valid JSON array - no additional text before or after

## Question Generation Process (Chain-of-Thought)
For each question, mentally follow these steps:
1. IDENTIFY a key concept from the source content worth testing
2. DETERMINE the cognitive level to test (recall, comprehension, application, analysis)
3. CRAFT a clear question stem that targets one specific concept
4. GENERATE 4 options: 1 correct answer and 3 plausible distractors
5. WRITE an explanation that teaches the concept and addresses why distractors are wrong
6. VERIFY the answer string exactly matches one option

## Output Format (JSON Array)
[
  {
    "id": 1,
    "question": "Clear, unambiguous question text?",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "answer": "Option B text",
    "explanation": "Option B is correct because [reason]. Option A is incorrect because [reason]. Option C... Option D..."
  }
]"""


# ============================================================================
# USER PROMPT TEMPLATE
# ============================================================================


def build_user_prompt(
    topic: str,
    content: str,
    count: int,
    difficulty: str,
    start_id: int,
    max_content_chars: int = 6000,
) -> str:
    """Build the user prompt with few-shot examples and content.

    Args:
        topic: Topic name (e.g., 'python', 'react')
        content: Research content to base questions on
        count: Number of questions to generate
        difficulty: Difficulty level (Beginner, Intermediate, Advanced)
        start_id: Starting ID for questions
        max_content_chars: Maximum characters of content to include

    Returns:
        Formatted user prompt string
    """
    # Select appropriate examples based on difficulty
    examples = _get_examples_for_difficulty(difficulty)
    examples_text = _format_examples(examples)

    # Difficulty-specific guidance
    difficulty_guidance = {
        "Beginner": """Focus on:
- Basic terminology and definitions
- Fundamental concepts and their purposes
- Simple syntax and straightforward use cases
- Questions a newcomer should be able to answer after initial learning""",
        "Intermediate": """Focus on:
- Practical application and common patterns
- Trade-offs between different approaches
- Best practices and when to apply them
- Questions requiring working experience to answer confidently""",
        "Advanced": """Focus on:
- Edge cases, gotchas, and subtle distinctions
- Performance optimization and scalability considerations
- Deep architectural understanding
- Questions that challenge even experienced practitioners""",
    }

    return f"""Generate {count} {difficulty}-level multiple-choice questions about {topic}.

## Difficulty Guidelines
{difficulty_guidance.get(difficulty, "")}

## Reference Examples
Here are high-quality examples at the {difficulty} level. Match this style and quality:

{examples_text}

## Source Content
Base your questions on this current content about {topic}:
---
{content[:max_content_chars]}
---

## Requirements
- Generate exactly {count} questions
- Start question IDs from {start_id}
- Difficulty level: {difficulty}
- Match the quality of reference examples above
- Output ONLY the JSON array, no other text

## Final Verification Checklist
Before outputting, verify each question:
✓ Answer string exactly matches one of the 4 options
✓ All 4 options are distinct and unambiguous
✓ Explanation teaches the concept, not just states "The answer is X"
✓ Difficulty matches the {difficulty} level guidelines"""


def _get_examples_for_difficulty(difficulty: str) -> list[QuestionExample]:
    """Get few-shot examples for the specified difficulty."""
    examples_map = {
        "Beginner": BEGINNER_EXAMPLES,
        "Intermediate": INTERMEDIATE_EXAMPLES,
        "Advanced": ADVANCED_EXAMPLES,
    }
    return examples_map.get(difficulty, BEGINNER_EXAMPLES)


def _format_examples(examples: list[QuestionExample]) -> str:
    """Format examples as a readable string for the prompt."""
    formatted_parts = []
    for i, ex in enumerate(examples, 1):
        options_str = "\n".join(f"    - {opt}" for opt in ex.options)
        formatted_parts.append(
            f"""### Example {i}
Question: {ex.question}
Options:
{options_str}
Answer: {ex.answer}
Explanation: {ex.explanation}
"""
        )
    return "\n".join(formatted_parts)
