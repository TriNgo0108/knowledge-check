"""Configuration management for content generator."""

import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# API Keys
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

# Gemini settings
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-3-flash-preview")

# Output settings
PROJECT_ROOT = Path(__file__).parent.parent.parent
OUTPUT_DIR = PROJECT_ROOT / os.getenv("OUTPUT_DIR", "public/data/generated")

# Topic configuration
TOPICS = [
    "grammar",
    "pronunciation",
    "pandas",
    "sql",
    "postgres",
    "aws",
    "python",
    "javascript",
    "typescript",
    "react",
    "systemdesign",
    "designpatterns",
    "algorithms",
    "aiagents",
]

# Topic display names for search queries
TOPIC_SEARCH_QUERIES = {
    "grammar": "English grammar rules and common mistakes",
    "pronunciation": "English pronunciation IPA phonetics",
    "pandas": "Python pandas dataframe data analysis",
    "sql": "SQL database queries best practices",
    "postgres": "PostgreSQL database advanced features",
    "aws": "AWS cloud services architecture",
    "python": "Python programming best practices",
    "javascript": "JavaScript ES6+ modern development",
    "typescript": "TypeScript type system patterns",
    "react": "React.js hooks components patterns",
    "systemdesign": "system design architecture scalability",
    "designpatterns": "software design patterns SOLID principles",
    "algorithms": "algorithms data structures complexity",
    "aiagents": "AI agents LLM autonomous systems",
}

# Question generation settings
QUESTIONS_PER_TOPIC = 100
DIFFICULTY_DISTRIBUTION = {
    "Beginner": 35,
    "Intermediate": 35,
    "Advanced": 30,
}
