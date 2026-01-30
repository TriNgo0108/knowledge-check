"""Prompt templates and few-shot examples for question generation.

This module implements advanced prompt engineering patterns:
- Role-based system prompts with expert persona (Certification Exam Creator)
- Few-shot examples organized by difficulty level with concise explanations
- Chain-of-Thought reasoning guidance
- Strict output validation constraints
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
        question="What is the primary function of the 'GIL' in CPython?",
        options=[
            "To manage memory allocation within the heap",
            "To prevent multiple threads from executing Python bytecodes at once",
            "To optimize garbage collection cycles",
            "To compilie Python code to machine code",
        ],
        answer="To prevent multiple threads from executing Python bytecodes at once",
        explanation="The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously. This simplifies the CPython implementation and makes object access thread-safe by default, but limits CPU-bound parallelism.",
        difficulty="Beginner",
    ),
    QuestionExample(
        question="In React, which hook is used to handle side effects in functional components?",
        options=[
            "useState",
            "useContext",
            "useEffect",
            "useReducer",
        ],
        answer="useEffect",
        explanation="useEffect is specifically designed for side effects (data fetching, subscriptions, manual DOM manipulations). It runs after rendering. useState handles state, useContext handles context, and useReducer handles complex state logic, but none are the primary hook for side effects.",
        difficulty="Beginner",
    ),
]

INTERMEDIATE_EXAMPLES: list[QuestionExample] = [
    QuestionExample(
        question="What is the key difference between 'INNER JOIN' and 'LEFT JOIN' in SQL?",
        options=[
            "INNER JOIN returns all rows from both tables; LEFT JOIN returns only matching rows",
            "INNER JOIN requires a primary key; LEFT JOIN does not",
            "INNER JOIN returns only specific columns; LEFT JOIN returns all columns",
            "INNER JOIN returns only rows with matches in both tables; LEFT JOIN returns all rows from the left table",
        ],
        answer="INNER JOIN returns only rows with matches in both tables; LEFT JOIN returns all rows from the left table",
        explanation="An INNER JOIN selects records that have matching values in both tables. A LEFT JOIN returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side if there is no match.",
        difficulty="Intermediate",
    ),
    QuestionExample(
        question="In Python, how does a generator differ from a standard function?",
        options=[
            "Generators run faster than standard functions",
            "Generators return a single value using 'return' while functions use 'yield'",
            "Generators yield a sequence of values over time, preserving state between yields",
            "Generators cannot take arguments",
        ],
        answer="Generators yield a sequence of values over time, preserving state between yields",
        explanation="A generator function uses the `yield` keyword instead of `return`. When called, it returns an iterator (generator object) but does not start execution immediately. Each call to `next()` resumes execution where it left off, retaining local variable state, whereas standard functions start fresh each call.",
        difficulty="Intermediate",
    ),
]

ADVANCED_EXAMPLES: list[QuestionExample] = [
    QuestionExample(
        question="What is the 'thundering herd' problem in the context of caching and distributed systems?",
        options=[
            "When too many cache keys expire simultaneously, causing a spike in database load",
            "When distributed locks are released and all waiting processes wake up simultaneously to contend for the lock",
            "When a network partition causes a split-brain scenario",
            "When a load balancer fails to distribute traffic evenly",
        ],
        answer="When distributed locks are released and all waiting processes wake up simultaneously to contend for the lock",
        explanation="The thundering herd problem occurs when a large number of processes or threads waiting for an event (like a lock release or cache expiry) are all woken up at the same time. This causes a massive spike in CPU/network usage as they all contend for the resource, often causing performance degradation or further failures.",
        difficulty="Advanced",
    ),
    QuestionExample(
        question="How does PostgreSQL's MVCC (Multi-Version Concurrency Control) handle row updates?",
        options=[
            "It modifies the row in-place and locks the table",
            "It creates a new version of the row with a new transaction ID and marks the old version as dead",
            "It writes the update to a separate log file without modifying the main table",
            "It uses a global lock to prevent other transactions from reading the row",
        ],
        answer="It creates a new version of the row with a new transaction ID and marks the old version as dead",
        explanation="PostgreSQL implements MVCC by keeping multiple versions of a row. When a record is updated, a new version (tuple) is created with the current transaction ID (`xmin`). The old version is marked with the deleting transaction ID (`xmax`). This allows readers to continue seeing the old version (snapshot isolation) while the writer works on the new one, avoiding read locks.",
        difficulty="Advanced",
    ),
]


# ============================================================================
# SYSTEM PROMPT
# ============================================================================

SYSTEM_PROMPT = """You are a Senior Technical Examiner creating high-stakes certification questions.
Your goal is to test *precise technical knowledge* and *conceptual understanding*, avoiding fluff, vagueness, or trivia.

## Persona
- **Role**: Senior Technical Content Developer for Professional Certifications.
- **Tone**: Professional, precise, concise, and technically rigorous.
- **Style**: No "yapping". No "educational filler". Direct facts only.

## Question Guidelines
1. **Focus**: Each question must test a specific, non-trivial technical concept relevant to the topic.
2. **Options**:
   - Provide EXACTLY 4 options.
   - 1 Correct Answer: Must be objectively verifiable and technically precise.
   - 3 Distractors: Plausible misconceptions or related but incorrect terms.
   - NO "All of the above", "None of the above", or "A and B".
   - NO ambiguity.
   - Answer MUST be one of the options.
3. **Explanation**:
   - Be extremely concise (max 3 sentences).
   - Explain strictly WHY the answer is correct and WHY the key distractors are wrong.
   - Do not repeat the question or answer in the explanation.

## Output Format
You must output ONLY a raw JSON array. Do not include markdown formatting (```json ... ```).
[
  {
    "id": 1,
    "question": "Technically precise question stem?",
    "options": ["A", "B", "C", "D"],
    "answer": "B",
    "explanation": "B is correct because [reason]. A implies [wrong concept]. C is irrelevant because [reason]."
  }
]
"""


# ============================================================================
# USER PROMPT TEMPLATE
# ============================================================================


def build_user_prompt(
    topic: str,
    content: str,
    count: int,
    difficulty: str,
    start_id: int,
    max_content_chars: int = 8000,
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

    return f"""Target Topic: {topic}
Difficulty: {difficulty}
Quantity: {count} questions
Starting ID: {start_id}

# INSTRUCTIONS
Generate {count} high-quality technical multiple-choice questions based on the provided context (if relevant) and your general expert knowledge of the topic.
The context provided is for inspiration on *what* to test, but rely on your internal knowledge base for technical accuracy if the context is thin.

# CONTEXT (Use for topic inspiration)
---
{content[:max_content_chars]}
---

# FEW-SHOT EXAMPLES (Follow this style of rigour and conciseness)
{examples_text}

# CRITICAL CONSTRAINTS
- Output ONLY valid JSON array.
- No markdown.
- No conversational text.
- Questions must be technically dense and accurate.
- Explanations must be short and high-value.
"""


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
    for ex in examples:
        options_str = "\n".join(f"- {opt}" for opt in ex.options)
        formatted_parts.append(
            f"""Q: {ex.question}
Options:
{options_str}
A: {ex.answer}
E: {ex.explanation}
"""
        )
    return "\n".join(formatted_parts)
