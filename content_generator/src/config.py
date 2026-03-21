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
    "grammar": "advanced English grammar rules syntax nuances",
    "pronunciation": "English phonetics IPA intonation rules patterns",
    "pandas": "python pandas advanced patterns performance optimization",
    "sql": "advanced sql query optimization window functions strategies, window functions, CTEs, subqueries, joins, indexes, query tuning, query optimization, query performance, query efficiency, query speed, query execution, query plan, query analysis, query debugging, query testing, query documentation, query best practices, query idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "postgres": "postgresql internals architecture performance tuning features, window functions, CTEs, subqueries, joins, indexes, query tuning, query optimization, query performance, query efficiency, query speed, query execution, query plan, query analysis, query debugging, query testing, query documentation, query best practices, query idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "aws": "aws solution architect professional deep dive services, load balancing, caching, database sharding, replication, consistency models, distributed transactions, message queues, microservices, service discovery, circuit breakers, rate limiting, monitoring, logging, security, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "python": "python advanced concepts garbage collection gil functools, collections, asyncio, contextlib, descriptors, metaclasses, decorators, generators, iterators, coroutines, async/await, threading, multiprocessing, concurrency, parallelism, memory management, performance optimization, profiling, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "javascript": "javascript event loop, closures, prototypes, prototypal inheritance, event delegation, microtasks, macrotasks, call stack, memory management, garbage collection, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "typescript": "typescript advanced patterns type gymnastics, generics, conditional types, mapped types, template literal types, recursive types, type inference, type guards, type narrowing, type widening, type compatibility, type coercion, type checking, type safety, type system, type system design, type system architecture, type system internals, type system design, type system architecture, type system internals",
    "react": "react internals reconciliation fiber concurrency patterns, hooks, context api, error boundaries, portals, refs, forward refs, lazy loading, code splitting, suspense, concurrent features, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "systemdesign": "system design real world architectures scalability deep dive, load balancing, caching, database sharding, replication, consistency models, distributed transactions, message queues, microservices, service discovery, circuit breakers, rate limiting, monitoring, logging, security, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "designpatterns": "software design patterns enterprise architecture examples, singleton, factory, abstract factory, builder, prototype, adapter, bridge, composite, decorator, facade, flyweight, proxy, chain of responsibility, command, interpreter, iterator, mediator, memento, observer, state, strategy, template method, visitor, dependency injection, dependency inversion, open/closed, liskov substitution, interface segregation, single responsibility, separation of concerns, loose coupling, high cohesion, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "algorithms": "advanced algorithms data structures competitive programming optimization, dynamic programming, greedy algorithms, divide and conquer, backtracking, branch and bound, graph algorithms, tree algorithms, sorting algorithms, searching algorithms, string algorithms, computational geometry, numerical algorithms, randomized algorithms, approximation algorithms, online algorithms, streaming algorithms, parallel algorithms, distributed algorithms, algorithm design, algorithm analysis, algorithm optimization, algorithm selection, algorithm implementation, algorithm testing, algorithm debugging, algorithm documentation, algorithm best practices, algorithm idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "aiagents": "autonomous agents architecture cognitive architectures llm patterns, multi-agent systems, agent communication, agent coordination, agent collaboration, agent cooperation, agent negotiation, agent reasoning, agent planning, agent learning, agent memory, agent perception, agent action, agent control, agent architecture, agent design, agent development, agent deployment, agent management, agent monitoring, agent security, agent performance, agent optimization, agent testing, agent debugging, agent documentation, agent best practices, agent idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "financial": "financial literacy investing portfolio management risk assessment market analysis fund stock ",
    "aiengineer": "ai engineering mlops model deployment inference optimization production ml systems",
    "langchain": "langchain framework llm agents chains memory document loaders retrieval augmented generation",
    "interview": "technical interview coding challenges system design behavioral questions strategies",
    "csharp": "c# advanced features async await linq pattern matching generics, delegates, events, lambda expressions, anonymous methods, extension methods, partial classes, partial methods, operator overloading, type constraints, variance, covariance, contravariance, nullable types, value types, reference types, stack, heap, garbage collection, memory management, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "dotnet": "dotnet core aspnet minimal apis middleware dependency injection performance, delegates, events, lambda expressions, anonymous methods, extension methods, partial classes, partial methods, operator overloading, type constraints, variance, covariance, contravariance, nullable types, value types, reference types, stack, heap, garbage collection, memory management, performance optimization, debugging, testing, packaging, deployment, security best practices, design patterns, best practices, idioms, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches, advanced patterns, advanced concepts, advanced features, advanced techniques, advanced strategies, advanced methods, advanced approaches",
    "dapper": "dapper micro orm query mapping multi-mapping stored procedures performance",
    "entityframework": "entity framework core ef migrations dbcontext fluent api change tracking",
    "terraform": "terraform advanced patterns modules state management providers",
    "pulumi": "pulumi infrastructure as code typescript python patterns state",
    "frontend": "frontend architecture, hydration, virtual dom diffing, event loop, web performance code splitting, state management, csrf, xxs, web workers, service workers, pwa, cdn, caching, compression, accessibility, seo, performance optimization, security best practices, layout thrashing, rendering pipeline, browser internals, E-tag and cach-control, web-rtc, canvas",
}

# Question generation settings
QUESTIONS_PER_TOPIC = 100
DIFFICULTY_DISTRIBUTION = {
    "Beginner": 35,
    "Intermediate": 35,
    "Advanced": 30,
}
