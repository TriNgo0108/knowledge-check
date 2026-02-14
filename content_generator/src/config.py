"""Configuration management for content generator."""

import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# API Keys
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY", "")
ZAI_API_KEY = os.getenv("ZAI_API_KEY")

# GLM settings
GLM_MODEL = os.getenv("GLM_MODEL", "glm-4.7")
ZAI_BASE_URL = os.getenv("ZAI_BASE_URL", "https://api.z.ai/api/coding/paas/v4")

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
    "financial",
    "aiengineer",
    "interview",
    "csharp",
    "dotnet",
    "dapper",
    "entityframework",
]

# Topic display names for search queries
TOPIC_SEARCH_QUERIES = {
    "grammar": "advanced English grammar rules syntax nuances",
    "pronunciation": "English phonetics IPA intonation rules patterns",
    "pandas": "python pandas advanced patterns performance optimization",
    "sql": "advanced sql query optimization window functions strategies",
    "postgres": "postgresql internals architecture performance tuning features",
    "aws": "aws solution architect professional deep dive services",
    "python": "python advanced concepts garbage collection gil internals",
    "javascript": "javascript engine internals event loop v8 optimization",
    "typescript": "typescript utility types advanced patterns type gymnastics",
    "react": "react internals reconciliation fiber concurrency patterns",
    "systemdesign": "system design real world architectures scalability deep dive",
    "designpatterns": "software design patterns enterprise architecture examples",
    "algorithms": "advanced algorithms data structures competitive programming optimization",
    "aiagents": "autonomous agents architecture cognitive architectures llm patterns",
    "financial": "financial literacy investing portfolio management risk assessment market analysis",
    "aiengineer": "ai engineering mlops model deployment inference optimization production ml systems",
    "interview": "technical interview coding challenges system design behavioral questions strategies",
    "csharp": "c# advanced features async await linq pattern matching generics",
    "dotnet": "dotnet core aspnet minimal apis middleware dependency injection performance",
    "dapper": "dapper micro orm query mapping multi-mapping stored procedures performance",
    "entityframework": "entity framework core ef migrations dbcontext fluent api change tracking",
}

# Question generation settings
QUESTIONS_PER_TOPIC = 100
DIFFICULTY_DISTRIBUTION = {
    "Beginner": 35,
    "Intermediate": 35,
    "Advanced": 30,
}
