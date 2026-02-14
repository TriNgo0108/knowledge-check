"""Prompt templates and few-shot examples for question generation.

This module implements advanced prompt engineering patterns:
- Role-based system prompts with expert persona (Certification Exam Creator)
- Few-shot examples organized by difficulty level with concise explanations
- Chain-of-Thought reasoning guidance
- Strict output validation constraints
- Self-verification step for answer correctness
"""

from dataclasses import dataclass
import json


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
            "To compile Python code to machine code",
        ],
        answer="To prevent multiple threads from executing Python bytecodes at once",
        explanation="The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing bytecodes simultaneously. This simplifies CPython but limits CPU-bound parallelism.",
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
        explanation="useEffect is specifically designed for side effects (data fetching, subscriptions, manual DOM manipulations). useState handles state, useContext handles context, useReducer handles complex state logic.",
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
        explanation="INNER JOIN selects records with matching values in both tables. LEFT JOIN returns all records from the left table and matched records from the right, with NULL for non-matches.",
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
        explanation="Generator functions use `yield` to produce values lazily. Each `next()` call resumes execution where it left off, retaining local variable state. Standard functions start fresh each call.",
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
        explanation="The thundering herd occurs when many processes waiting for an event (lock release, cache expiry) all wake simultaneously, causing a massive resource contention spike.",
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
        explanation="PostgreSQL MVCC creates a new tuple with the current transaction ID (xmin) and marks the old version with xmax, allowing concurrent reads via snapshot isolation.",
        difficulty="Advanced",
    ),
]


# ============================================================================
# SYSTEM PROMPT
# ============================================================================

SYSTEM_PROMPT = """\
You are a Senior Technical Examiner creating high-stakes certification questions.
Your goal is to test *precise technical knowledge* and *conceptual understanding*.

## Persona
- **Role**: Senior Technical Content Developer for Professional Certifications.
- **Tone**: Professional, precise, concise, and technically rigorous.
- **Style**: No filler. Direct facts only.

## Question Guidelines
1. **Focus**: Each question must test a specific, non-trivial technical concept.
2. **Options**:
   - EXACTLY 4 options per question.
   - 1 Correct Answer: Objectively verifiable and technically precise.
   - 3 Distractors: Plausible misconceptions or related but incorrect terms.
   - NO "All of the above", "None of the above", or "A and B".
3. **Explanation**: Max 2-3 sentences. Explain WHY the answer is correct.

## CRITICAL: Answer Format Rules
- The "answer" field MUST be the EXACT FULL TEXT of the correct option.
- The "answer" value MUST be character-for-character identical to one of the "options" strings.
- NEVER use a letter label like "A", "B", "C", or "D" as the answer.

### ❌ WRONG — Do NOT output this:
```
"options": ["Memory allocation", "Thread synchronization", "Garbage collection", "JIT compilation"],
"answer": "B"
```

### ✅ CORRECT — Always output this:
```
"options": ["Memory allocation", "Thread synchronization", "Garbage collection", "JIT compilation"],
"answer": "Thread synchronization"
```

## Output Format
Output ONLY a raw JSON array. No markdown fences, no commentary, no extra text.

[
  {
    "id": 1,
    "question": "What mechanism does CPython use to ensure thread safety for object access?",
    "options": [
      "Read-write locks on each object",
      "The Global Interpreter Lock (GIL)",
      "Software transactional memory",
      "Lock-free concurrent data structures"
    ],
    "answer": "The Global Interpreter Lock (GIL)",
    "explanation": "The GIL is a mutex preventing multiple threads from executing Python bytecodes simultaneously. Read-write locks and STM are alternative concurrency models not used by CPython."
  }
]

## Self-Verification
Before outputting, verify each question:
1. Does the "answer" field contain the FULL TEXT of the correct option? (Not a letter)
2. Is the "answer" string an exact copy-paste from the "options" array?
3. Are there exactly 4 unique options?
If any check fails, fix it before outputting.
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
    examples_json = _format_examples_as_json(examples)

    return f"""\
Target Topic: {topic}
Difficulty: {difficulty}
Quantity: {count} questions
Starting ID: {start_id}

# TASK
Generate {count} high-quality {difficulty}-level multiple-choice questions \
about **{topic}**.
Use the context below for topic inspiration, but rely on your expert knowledge \
for technical accuracy.

# REFERENCE CONTEXT
---
{content[:max_content_chars]}
---

# FEW-SHOT EXAMPLES
Follow this exact JSON structure and style of rigour:
{examples_json}

# CONSTRAINTS (Strictly follow ALL)
1. Output ONLY a valid JSON array — no markdown, no commentary.
2. Each "answer" must be the FULL TEXT of the correct option, NEVER a letter.
3. Each question must be technically dense and accurate for {difficulty} level.
4. Explanations must be concise (2-3 sentences max) and high-value.
5. All 4 options must be unique and plausible.
6. IDs must start at {start_id} and increment sequentially.

# FINAL CHECK
Before outputting, re-read each question and confirm:
- "answer" is the exact full text (not "A", "B", "C", or "D")
- "answer" appears verbatim in "options"
- There are exactly 4 unique options
"""


def _get_examples_for_difficulty(difficulty: str) -> list[QuestionExample]:
    """Get few-shot examples for the specified difficulty."""
    examples_map = {
        "Beginner": BEGINNER_EXAMPLES,
        "Intermediate": INTERMEDIATE_EXAMPLES,
        "Advanced": ADVANCED_EXAMPLES,
    }
    return examples_map.get(difficulty, BEGINNER_EXAMPLES)


def _format_examples_as_json(examples: list[QuestionExample]) -> str:
    """Format examples as JSON to match the exact output format expected.

    Showing examples in the same JSON structure as the expected output
    is more effective than prose descriptions (Show Don't Tell pattern).
    """

    example_dicts = [
        {
            "id": i + 1,
            "question": ex.question,
            "options": ex.options,
            "answer": ex.answer,
            "explanation": ex.explanation,
        }
        for i, ex in enumerate(examples)
    ]
    return json.dumps(example_dicts, indent=2, ensure_ascii=False)
