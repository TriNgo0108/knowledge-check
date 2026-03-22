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
    "langchain",
    "interview",
    "csharp",
    "dotnet",
    "dapper",
    "entityframework",
    "terraform",
    "pulumi",
    "frontend",
]

# Topic display names for search queries
TOPIC_SEARCH_QUERIES = {
    "grammar": "English grammar basic fundamentals syntax advanced nuances punctuation rules and best practices for clear writing",
    "pronunciation": "English phonetics basic sounds IPA advanced intonation stress patterns connected speech and clear communication best practices",
    "pandas": "Python pandas basic data structures DataFrames advanced vectorized operations performance optimization memory management and data analysis best practices",
    "sql": "SQL basic queries joins grouping advanced window functions CTEs query optimization execution plans indexing strategies and database performance best practices",
    "postgres": "PostgreSQL basic setup querying advanced internals architecture performance tuning MVCC replication JSONB and relational database management best practices",
    "aws": "AWS basic cloud services EC2 S3 advanced solution architecture deep dive serverless infrastructure security cost optimization and cloud deployment best practices",
    "python": "Python basic syntax OOP functional programming advanced concepts garbage collection GIL asyncio metaclasses and PEP8 idiomatic coding best practices",
    "javascript": "JavaScript basic DOM manipulation ES6 advanced event loop closures prototypal inheritance microtasks memory management and frontend performance best practices",
    "typescript": "TypeScript basic types interfaces advanced type gymnastics generics conditional mapped types type inference and strict static typing best practices",
    "react": "React basic components hooks state advanced internals reconciliation fiber concurrency patterns Server Components performance optimization and UI best practices",
    "systemdesign": "System design basic principles scaling advanced real world architectures microservices load balancing caching distributed systems and high availability best practices",
    "designpatterns": "Software design patterns basic OOP SOLID advanced enterprise architecture examples creational structural behavioral patterns and code maintainability best practices",
    "algorithms": "Algorithms data structures basic Big O advanced dynamic programming graph algorithms competitive programming optimization and efficient coding best practices",
    "aiagents": "AI agents basic concepts LLM prompts advanced autonomous cognitive architectures multi-agent systems memory reasoning tool use and AI deployment best practices",
    "financial": "Financial basic literacy investing concepts advanced portfolio management risk assessment market analysis trading strategies and wealth planning best practices",
    "aiengineer": "AI engineering basic models APIs advanced MLOps model deployment inference optimization production ML systems RAG evaluation and AI system lifecycle best practices",
    "langchain": "LangChain basic structure components advanced framework patterns LLM agents chains memory document loaders Retrieval Augmented Generation and AI workflow best practices",
    "interview": "Technical interview basic preparation common algorithms advanced system design coding challenges behavioral strategies communication and problem solving best practices",
    "csharp": "C# basic syntax OOP types advanced features async await LINQ pattern matching delegates memory management garbage collection and enterprise .NET coding best practices",
    "dotnet": "dotNET Core basic setup architecture advanced ASP.NET minimal APIs middleware dependency injection performance profiling and robust web application best practices",
    "dapper": "Dapper basic object mapping SQL execution advanced micro ORM patterns multi-mapping stored procedures performance optimization and data access best practices",
    "entityframework": "Entity Framework EF core basic setup querying advanced migrations DbContext fluent API change tracking query performance tuning and ORM best practices",
    "terraform": "Terraform basic resource provisioning advanced Infrastructure as Code patterns modules state management providers drift detection and cloud automation best practices",
    "pulumi": "Pulumi basic setup declarative IaC advanced TypeScript Python patterns state management crossguard policies custom providers and infrastructure engineering best practices",
    "frontend": "Frontend basic HTML CSS JS advanced architecture hydration virtual DOM diffing web performance code splitting accessibility SEO and modern web UI best practices",
}

# Question generation settings
QUESTIONS_PER_TOPIC = 100
DIFFICULTY_DISTRIBUTION = {
    "Beginner": 35,
    "Intermediate": 35,
    "Advanced": 30,
}
