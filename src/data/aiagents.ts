import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is an AI agent?",
    options: ["AI assistant", "Autonomous system that perceives environment and takes actions", "Chatbot only", "Machine learning model"],
    answer: "Autonomous system that perceives environment and takes actions",
    explanation: "AI agents sense their environment and act to achieve goals."
  },
  {
    id: 2,
    question: "What are the main components of an AI agent?",
    options: ["CPU and RAM", "Perception, reasoning, action, memory", "Input and output", "Data and model"],
    answer: "Perception, reasoning, action, memory",
    explanation: "Agents perceive, reason about what to do, act, and remember."
  },
  {
    id: 3,
    question: "What is the difference between an AI model and an AI agent?",
    options: ["Same thing", "Model predicts; agent takes actions in environment", "Agent is simpler", "Model is autonomous"],
    answer: "Model predicts; agent takes actions in environment",
    explanation: "Agents use models but add perception, memory, and action."
  },
  {
    id: 4,
    question: "What is a Large Language Model (LLM)?",
    options: ["Big dictionary", "Neural network trained on text to generate language", "Translation tool", "Database"],
    answer: "Neural network trained on text to generate language",
    explanation: "LLMs like GPT are the reasoning core of many AI agents."
  },
  {
    id: 5,
    question: "What is a prompt in the context of AI agents?",
    options: ["Quick action", "Instructions given to an LLM", "User interface", "Memory storage"],
    answer: "Instructions given to an LLM",
    explanation: "Prompts guide LLM behavior and reasoning."
  },
  {
    id: 6,
    question: "What is prompt engineering?",
    options: ["Building prompts", "Designing effective instructions for AI models", "Software engineering", "Data engineering"],
    answer: "Designing effective instructions for AI models",
    explanation: "Prompt engineering optimizes how we communicate with LLMs."
  },
  {
    id: 7,
    question: "What is a system prompt?",
    options: ["System message", "Hidden instructions defining agent's behavior and persona", "Error message", "User input"],
    answer: "Hidden instructions defining agent's behavior and persona",
    explanation: "System prompts set the agent's role, constraints, and guidelines."
  },
  {
    id: 8,
    question: "What is few-shot prompting?",
    options: ["Quick prompts", "Providing examples to guide model output", "Minimal prompts", "Short prompts"],
    answer: "Providing examples to guide model output",
    explanation: "Few-shot learning uses examples in the prompt to demonstrate format."
  },
  {
    id: 9,
    question: "What is chain-of-thought prompting?",
    options: ["Linked prompts", "Asking model to reason step by step", "Chained queries", "Sequential prompts"],
    answer: "Asking model to reason step by step",
    explanation: "Chain-of-thought improves reasoning by showing work."
  },
  {
    id: 10,
    question: "What is tool use in AI agents?",
    options: ["Hardware tools", "Agent calling external functions or APIs", "Development tools", "Testing tools"],
    answer: "Agent calling external functions or APIs",
    explanation: "Tools extend agent capabilities beyond text generation."
  },
  {
    id: 11,
    question: "What is function calling in LLMs?",
    options: ["Programming", "Model generates structured output to invoke functions", "API calls", "Method invocation"],
    answer: "Model generates structured output to invoke functions",
    explanation: "Function calling lets LLMs interact with external systems."
  },
  {
    id: 12,
    question: "What is RAG (Retrieval-Augmented Generation)?",
    options: ["Fabric", "Combining retrieval with generation for grounded responses", "Random generation", "Recursive generation"],
    answer: "Combining retrieval with generation for grounded responses",
    explanation: "RAG retrieves relevant documents to inform LLM responses."
  },
  {
    id: 13,
    question: "What is a vector database?",
    options: ["Math database", "Database storing embeddings for similarity search", "Vector graphics", "Array storage"],
    answer: "Database storing embeddings for similarity search",
    explanation: "Vector DBs enable semantic search for RAG systems."
  },
  {
    id: 14,
    question: "What is an embedding?",
    options: ["HTML embed", "Dense vector representation of text/data", "Insertion", "Attachment"],
    answer: "Dense vector representation of text/data",
    explanation: "Embeddings capture semantic meaning in numerical form."
  },
  {
    id: 15,
    question: "What is semantic search?",
    options: ["Meaning-based search vs keyword search", "Search engine", "Full-text search", "Indexed search"],
    answer: "Meaning-based search vs keyword search",
    explanation: "Semantic search finds similar meaning, not just matching words."
  },
  {
    id: 16,
    question: "What is context window?",
    options: ["UI window", "Maximum tokens an LLM can process at once", "Chat window", "Memory limit"],
    answer: "Maximum tokens an LLM can process at once",
    explanation: "Context window limits how much text the model sees."
  },
  {
    id: 17,
    question: "What is a token?",
    options: ["Authentication token", "Unit of text (word piece) LLM processes", "Game token", "Identifier"],
    answer: "Unit of text (word piece) LLM processes",
    explanation: "Tokens are how LLMs split and process text."
  },
  {
    id: 18,
    question: "What is temperature in LLM generation?",
    options: ["Heat level", "Randomness control in output generation", "Processing speed", "Model size"],
    answer: "Randomness control in output generation",
    explanation: "Higher temperature = more random; lower = more deterministic."
  },
  {
    id: 19,
    question: "What is hallucination in AI?",
    options: ["Visual AI", "Model generating false or fabricated information", "Dream state", "Imagination"],
    answer: "Model generating false or fabricated information",
    explanation: "Hallucinations are confident but incorrect outputs."
  },
  {
    id: 20,
    question: "How can you reduce hallucinations?",
    options: ["Can't reduce", "RAG, grounding, fact-checking, lower temperature", "More training", "Bigger model"],
    answer: "RAG, grounding, fact-checking, lower temperature",
    explanation: "Grounding responses in facts reduces hallucinations."
  },
  {
    id: 21,
    question: "What is an agent loop?",
    options: ["Infinite loop", "Cycle of observe-think-act until goal reached", "While loop", "Main loop"],
    answer: "Cycle of observe-think-act until goal reached",
    explanation: "Agents iterate through perception, reasoning, and action."
  },
  {
    id: 22,
    question: "What is ReAct framework?",
    options: ["React library", "Reasoning + Acting - interleaving thought and action", "Response framework", "Reactive programming"],
    answer: "Reasoning + Acting - interleaving thought and action",
    explanation: "ReAct combines reasoning traces with tool actions."
  },
  {
    id: 23,
    question: "What is an autonomous agent?",
    options: ["Self-driving car", "Agent operating independently with minimal human input", "Remote agent", "Automatic agent"],
    answer: "Agent operating independently with minimal human input",
    explanation: "Autonomous agents make decisions and take actions on their own."
  },
  {
    id: 24,
    question: "What is human-in-the-loop?",
    options: ["Human worker", "Human oversight and approval in agent workflow", "User interface", "Manual control"],
    answer: "Human oversight and approval in agent workflow",
    explanation: "Human-in-the-loop adds checkpoints for critical decisions."
  },
  {
    id: 25,
    question: "What is agent memory?",
    options: ["RAM", "Storage of past interactions and learned information", "Cache", "Database"],
    answer: "Storage of past interactions and learned information",
    explanation: "Memory enables agents to learn and maintain context."
  },
  {
    id: 26,
    question: "What is short-term vs long-term memory in agents?",
    options: ["Same thing", "Short: conversation context; Long: persistent knowledge", "Short is faster", "Long is bigger"],
    answer: "Short: conversation context; Long: persistent knowledge",
    explanation: "Short-term is current session; long-term persists across sessions."
  },
  {
    id: 27,
    question: "What is LangChain?",
    options: ["Blockchain", "Framework for building LLM applications and agents", "Language chain", "Translation tool"],
    answer: "Framework for building LLM applications and agents",
    explanation: "LangChain provides components for building AI applications."
  },
  {
    id: 28,
    question: "What is LlamaIndex?",
    options: ["Animal index", "Framework for connecting LLMs to data sources", "Model index", "Data index"],
    answer: "Framework for connecting LLMs to data sources",
    explanation: "LlamaIndex (GPT Index) specializes in data ingestion for LLMs."
  },
  {
    id: 29,
    question: "What is AutoGPT?",
    options: ["Automatic car", "Autonomous agent that chains GPT calls for complex tasks", "Auto-complete", "GPT wrapper"],
    answer: "Autonomous agent that chains GPT calls for complex tasks",
    explanation: "AutoGPT was an early example of autonomous AI agents."
  },
  {
    id: 30,
    question: "What is a multi-agent system?",
    options: ["Multiple AI", "Multiple agents working together or competing", "Parallel processing", "Distributed AI"],
    answer: "Multiple agents working together or competing",
    explanation: "Multi-agent systems coordinate specialized agents."
  },
  {
    id: 31,
    question: "What is agent orchestration?",
    options: ["Music", "Coordinating multiple agents and tools", "Scheduling", "Pipeline management"],
    answer: "Coordinating multiple agents and tools",
    explanation: "Orchestration manages agent workflows and interactions."
  },
  {
    id: 32,
    question: "What is a workflow in AI agents?",
    options: ["Work process", "Sequence of steps/tasks agent follows", "Data flow", "Control flow"],
    answer: "Sequence of steps/tasks agent follows",
    explanation: "Workflows define the order and logic of agent actions."
  },
  {
    id: 33,
    question: "What is streaming in LLM responses?",
    options: ["Video streaming", "Receiving response tokens as they're generated", "Data streaming", "Live updates"],
    answer: "Receiving response tokens as they're generated",
    explanation: "Streaming improves perceived latency for users."
  },
  {
    id: 34,
    question: "What is fine-tuning?",
    options: ["Tuning music", "Training model on specific dataset to specialize it", "Optimization", "Configuration"],
    answer: "Training model on specific dataset to specialize it",
    explanation: "Fine-tuning adapts pre-trained models to specific tasks."
  },
  {
    id: 35,
    question: "What is the difference between fine-tuning and prompting?",
    options: ["Same thing", "Fine-tuning changes model weights; prompting uses context", "Prompting is permanent", "Fine-tuning is temporary"],
    answer: "Fine-tuning changes model weights; prompting uses context",
    explanation: "Fine-tuning modifies the model; prompting guides behavior."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is agentic RAG?",
    options: ["Aggressive RAG", "RAG with reasoning about what to retrieve", "Agent retrieval", "Active RAG"],
    answer: "RAG with reasoning about what to retrieve",
    explanation: "Agentic RAG decides when and what to retrieve dynamically."
  },
  {
    id: 37,
    question: "What is query decomposition?",
    options: ["Query breakdown", "Breaking complex query into simpler sub-queries", "Query analysis", "Query parsing"],
    answer: "Breaking complex query into simpler sub-queries",
    explanation: "Decomposition helps retrieve more relevant information."
  },
  {
    id: 38,
    question: "What is HyDE (Hypothetical Document Embeddings)?",
    options: ["Hidden embedding", "Generate hypothetical answer to improve retrieval", "Hybrid embedding", "High-density embedding"],
    answer: "Generate hypothetical answer to improve retrieval",
    explanation: "HyDE creates hypothetical documents to match against."
  },
  {
    id: 39,
    question: "What is chunking in RAG?",
    options: ["Breaking into pieces", "Splitting documents into smaller pieces for embedding", "Data chunking", "Memory allocation"],
    answer: "Splitting documents into smaller pieces for embedding",
    explanation: "Chunking strategies affect retrieval quality."
  },
  {
    id: 40,
    question: "What is the optimal chunk size?",
    options: ["Always 512", "Depends on use case - typically 256-1024 tokens", "Bigger is better", "Smaller is better"],
    answer: "Depends on use case - typically 256-1024 tokens",
    explanation: "Chunk size balances context and retrieval precision."
  },
  {
    id: 41,
    question: "What is re-ranking in RAG?",
    options: ["Sorting again", "Using model to re-order retrieved results by relevance", "Priority ranking", "Score ranking"],
    answer: "Using model to re-order retrieved results by relevance",
    explanation: "Re-rankers improve precision of initial retrieval."
  },
  {
    id: 42,
    question: "What is self-reflection in agents?",
    options: ["Mirror", "Agent evaluating and improving its own outputs", "Self-analysis", "introspection"],
    answer: "Agent evaluating and improving its own outputs",
    explanation: "Self-reflection enables agents to catch and fix errors."
  },
  {
    id: 43,
    question: "What is Reflexion framework?",
    options: ["Mirror framework", "Agent learning from trial and error with verbal feedback", "Reflection API", "Feedback loop"],
    answer: "Agent learning from trial and error with verbal feedback",
    explanation: "Reflexion uses self-reflection to improve performance."
  },
  {
    id: 44,
    question: "What is tree-of-thought prompting?",
    options: ["Family tree", "Exploring multiple reasoning paths in parallel", "Decision tree", "Thought mapping"],
    answer: "Exploring multiple reasoning paths in parallel",
    explanation: "Tree-of-thought explores and evaluates multiple approaches."
  },
  {
    id: 45,
    question: "What is planning in AI agents?",
    options: ["Scheduling", "Creating sequence of actions to achieve goal", "Project planning", "Route planning"],
    answer: "Creating sequence of actions to achieve goal",
    explanation: "Planning decomposes goals into actionable steps."
  },
  {
    id: 46,
    question: "What is task decomposition?",
    options: ["Breaking tasks", "Breaking complex task into manageable subtasks", "Task analysis", "Task parsing"],
    answer: "Breaking complex task into manageable subtasks",
    explanation: "Decomposition enables handling complex multi-step tasks."
  },
  {
    id: 47,
    question: "What is a supervisor agent?",
    options: ["Manager", "Agent that coordinates and delegates to other agents", "Admin agent", "Control agent"],
    answer: "Agent that coordinates and delegates to other agents",
    explanation: "Supervisors orchestrate specialized worker agents."
  },
  {
    id: 48,
    question: "What is a worker agent?",
    options: ["Labor agent", "Specialized agent handling specific tasks", "Task agent", "Service agent"],
    answer: "Specialized agent handling specific tasks",
    explanation: "Workers focus on specific capabilities like coding or search."
  },
  {
    id: 49,
    question: "What is tool selection?",
    options: ["Picking tools", "Agent choosing appropriate tool for current task", "Tool filtering", "Tool matching"],
    answer: "Agent choosing appropriate tool for current task",
    explanation: "Effective tool selection is crucial for agent success."
  },
  {
    id: 50,
    question: "What is error handling in agents?",
    options: ["Try-catch", "Detecting, recovering from, and learning from failures", "Bug fixing", "Exception handling"],
    answer: "Detecting, recovering from, and learning from failures",
    explanation: "Robust error handling prevents agent failure cascades."
  },
  {
    id: 51,
    question: "What is an agent's action space?",
    options: ["Physical space", "Set of all possible actions agent can take", "Memory space", "Working area"],
    answer: "Set of all possible actions agent can take",
    explanation: "Action space defines what the agent can do."
  },
  {
    id: 52,
    question: "What is grounding in AI agents?",
    options: ["Electrical grounding", "Connecting agent outputs to real-world facts", "Base knowledge", "Core training"],
    answer: "Connecting agent outputs to real-world facts",
    explanation: "Grounding ensures agent responses are factually accurate."
  },
  {
    id: 53,
    question: "What is the MCP (Model Context Protocol)?",
    options: ["Media protocol", "Standard for connecting LLMs to data and tools", "Memory protocol", "Message protocol"],
    answer: "Standard for connecting LLMs to data and tools",
    explanation: "MCP standardizes how agents access external resources."
  },
  {
    id: 54,
    question: "What is structured output?",
    options: ["Formatted text", "LLM output in defined format like JSON", "Organized data", "Template output"],
    answer: "LLM output in defined format like JSON",
    explanation: "Structured output enables reliable parsing and tool use."
  },
  {
    id: 55,
    question: "What is guardrails in AI agents?",
    options: ["Safety rails", "Constraints ensuring agent behaves safely and correctly", "Boundaries", "Limits"],
    answer: "Constraints ensuring agent behaves safely and correctly",
    explanation: "Guardrails prevent harmful or off-topic behavior."
  },
  {
    id: 56,
    question: "What is red teaming for AI agents?",
    options: ["Team color", "Adversarial testing to find vulnerabilities", "Security team", "Debug team"],
    answer: "Adversarial testing to find vulnerabilities",
    explanation: "Red teaming probes agents for safety and security issues."
  },
  {
    id: 57,
    question: "What is prompt injection?",
    options: ["Code injection", "Malicious input tricking agent to ignore instructions", "Prompt hacking", "Input attack"],
    answer: "Malicious input tricking agent to ignore instructions",
    explanation: "Prompt injection can compromise agent behavior."
  },
  {
    id: 58,
    question: "How do you defend against prompt injection?",
    options: ["Can't defend", "Input validation, sandboxing, instruction hierarchies", "Encryption", "Firewall"],
    answer: "Input validation, sandboxing, instruction hierarchies",
    explanation: "Multiple layers of defense help prevent injection attacks."
  },
  {
    id: 59,
    question: "What is observability in AI agents?",
    options: ["Watching", "Monitoring and understanding agent behavior", "Visibility", "Tracking"],
    answer: "Monitoring and understanding agent behavior",
    explanation: "Observability includes logging, tracing, and metrics."
  },
  {
    id: 60,
    question: "What is LangSmith?",
    options: ["Language tool", "Platform for debugging and monitoring LLM apps", "Smith API", "LangChain IDE"],
    answer: "Platform for debugging and monitoring LLM apps",
    explanation: "LangSmith provides tracing and evaluation for LLM applications."
  },
  {
    id: 61,
    question: "What is evaluation in AI agents?",
    options: ["Grading", "Measuring agent performance against criteria", "Assessment", "Testing"],
    answer: "Measuring agent performance against criteria",
    explanation: "Evaluation tracks accuracy, efficiency, and safety."
  },
  {
    id: 62,
    question: "What is LLM-as-judge?",
    options: ["Court LLM", "Using LLM to evaluate outputs of another LLM", "Judge model", "Rating model"],
    answer: "Using LLM to evaluate outputs of another LLM",
    explanation: "LLM-as-judge enables scalable automated evaluation."
  },
  {
    id: 63,
    question: "What is semantic caching?",
    options: ["Cache meaning", "Caching based on query meaning, not exact match", "Smart caching", "AI caching"],
    answer: "Caching based on query meaning, not exact match",
    explanation: "Semantic cache returns similar query results to reduce costs."
  },
  {
    id: 64,
    question: "What is token optimization?",
    options: ["Token economics", "Reducing token usage to lower cost and latency", "Token compression", "Token management"],
    answer: "Reducing token usage to lower cost and latency",
    explanation: "Efficient token use reduces API costs significantly."
  },
  {
    id: 65,
    question: "What is Code Interpreter?",
    options: ["Compiler", "LLM executing code to solve problems", "Debugger", "Code runner"],
    answer: "LLM executing code to solve problems",
    explanation: "Code Interpreter lets agents write and run code."
  },
  {
    id: 66,
    question: "What is the sandbox in AI agents?",
    options: ["Playground", "Isolated environment for safe code execution", "Testing area", "Development env"],
    answer: "Isolated environment for safe code execution",
    explanation: "Sandboxes prevent agent code from causing harm."
  },
  {
    id: 67,
    question: "What is a knowledge graph?",
    options: ["Information chart", "Structured representation of entities and relationships", "Data graph", "Concept map"],
    answer: "Structured representation of entities and relationships",
    explanation: "Knowledge graphs enhance agent reasoning with structured knowledge."
  },
  {
    id: 68,
    question: "What is GraphRAG?",
    options: ["Graph database", "RAG using knowledge graphs for retrieval", "Graph search", "Network RAG"],
    answer: "RAG using knowledge graphs for retrieval",
    explanation: "GraphRAG combines graph structure with semantic retrieval."
  },
  {
    id: 69,
    question: "What is PEFT (Parameter-Efficient Fine-Tuning)?",
    options: ["Perfect tuning", "Fine-tuning small subset of model parameters", "Partial training", "Efficient training"],
    answer: "Fine-tuning small subset of model parameters",
    explanation: "PEFT methods like LoRA reduce fine-tuning costs."
  },
  {
    id: 70,
    question: "What is LoRA?",
    options: ["Radio standard", "Low-Rank Adaptation for efficient fine-tuning", "Layer optimization", "Learning rate adaptation"],
    answer: "Low-Rank Adaptation for efficient fine-tuning",
    explanation: "LoRA trains small adapter layers instead of full model."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is constitutional AI?",
    options: ["Legal AI", "AI trained to follow explicit principles", "Government AI", "Rule-based AI"],
    answer: "AI trained to follow explicit principles",
    explanation: "Constitutional AI uses principles for self-improvement."
  },
  {
    id: 72,
    question: "What is RLHF?",
    options: ["Robot learning", "Reinforcement Learning from Human Feedback", "Remote learning", "Research learning"],
    answer: "Reinforcement Learning from Human Feedback",
    explanation: "RLHF aligns models with human preferences."
  },
  {
    id: 73,
    question: "What is DPO (Direct Preference Optimization)?",
    options: ["Direct optimization", "Training on preference pairs without reward model", "Preference learning", "Direct training"],
    answer: "Training on preference pairs without reward model",
    explanation: "DPO simplifies RLHF by directly optimizing preferences."
  },
  {
    id: 74,
    question: "What is agent simulation?",
    options: ["Fake agent", "Creating virtual agents to test scenarios", "Agent modeling", "Synthetic agents"],
    answer: "Creating virtual agents to test scenarios",
    explanation: "Simulations test agent behavior at scale."
  },
  {
    id: 75,
    question: "What is emergent behavior in multi-agent systems?",
    options: ["Bug", "Unexpected behaviors arising from agent interactions", "New feature", "Side effect"],
    answer: "Unexpected behaviors arising from agent interactions",
    explanation: "Emergent behaviors can be beneficial or problematic."
  },
  {
    id: 76,
    question: "What is agent delegation?",
    options: ["Task assignment", "Agent assigning subtasks to other agents", "Responsibility transfer", "Work distribution"],
    answer: "Agent assigning subtasks to other agents",
    explanation: "Delegation enables complex task completion."
  },
  {
    id: 77,
    question: "What is hierarchical agent architecture?",
    options: ["Ranked agents", "Agents organized in levels with different responsibilities", "Tree agents", "Layered agents"],
    answer: "Agents organized in levels with different responsibilities",
    explanation: "Hierarchy provides structure for complex multi-agent systems."
  },
  {
    id: 78,
    question: "What is the critic agent pattern?",
    options: ["Negative agent", "Agent that reviews and improves other agent outputs", "Reviewer agent", "Feedback agent"],
    answer: "Agent that reviews and improves other agent outputs",
    explanation: "Critics provide quality control in agent workflows."
  },
  {
    id: 79,
    question: "What is agentic reasoning?",
    options: ["Agent logic", "Multi-step reasoning with tool use and iteration", "AI thinking", "Logical reasoning"],
    answer: "Multi-step reasoning with tool use and iteration",
    explanation: "Agentic reasoning combines thinking with actions."
  },
  {
    id: 80,
    question: "What is tool learning?",
    options: ["Learning tools", "Agent learning to use new tools effectively", "Tool training", "API learning"],
    answer: "Agent learning to use new tools effectively",
    explanation: "Tool learning enables agents to expand capabilities."
  },
  {
    id: 81,
    question: "What is the context stuffing problem?",
    options: ["Context overflow", "Context window filled with retrieved but irrelevant info", "Token waste", "Information overload"],
    answer: "Context window filled with retrieved but irrelevant info",
    explanation: "Too much context can hurt performance and increase cost."
  },
  {
    id: 82,
    question: "What is context compression?",
    options: ["Zip context", "Reducing context size while preserving key information", "Summarization", "Token reduction"],
    answer: "Reducing context size while preserving key information",
    explanation: "Compression fits more useful information in context window."
  },
  {
    id: 83,
    question: "What is agent benchmarking?",
    options: ["Speed test", "Standardized evaluation of agent capabilities", "Performance testing", "Agent grading"],
    answer: "Standardized evaluation of agent capabilities",
    explanation: "Benchmarks like GAIA test agent problem-solving."
  },
  {
    id: 84,
    question: "What is the GAIA benchmark?",
    options: ["Earth benchmark", "Benchmark testing real-world assistant capabilities", "AI test", "Agent evaluation"],
    answer: "Benchmark testing real-world assistant capabilities",
    explanation: "GAIA evaluates agents on practical multi-step tasks."
  },
  {
    id: 85,
    question: "What is SWE-bench?",
    options: ["Software bench", "Benchmark for evaluating code agents on real repos", "Developer test", "Coding benchmark"],
    answer: "Benchmark for evaluating code agents on real repos",
    explanation: "SWE-bench tests agents on actual GitHub issues."
  },
  {
    id: 86,
    question: "What is computer use agents?",
    options: ["PC usage", "Agents that control computer GUI like humans", "Desktop automation", "Screen agents"],
    answer: "Agents that control computer GUI like humans",
    explanation: "Computer use enables agents to operate any software."
  },
  {
    id: 87,
    question: "What is a browser agent?",
    options: ["Web browser", "Agent that navigates and interacts with websites", "Internet agent", "Web scraper"],
    answer: "Agent that navigates and interacts with websites",
    explanation: "Browser agents automate web tasks."
  },
  {
    id: 88,
    question: "What is agent persistence?",
    options: ["Stubbornness", "Maintaining agent state across sessions", "Long-running agent", "State management"],
    answer: "Maintaining agent state across sessions",
    explanation: "Persistence enables agents to continue work over time."
  },
  {
    id: 89,
    question: "What is model distillation?",
    options: ["Model purification", "Training smaller model to mimic larger model", "Model compression", "Knowledge transfer"],
    answer: "Training smaller model to mimic larger model",
    explanation: "Distillation creates efficient models for deployment."
  },
  {
    id: 90,
    question: "What is speculative decoding?",
    options: ["Guessing", "Using small model to draft, large model to verify", "Fast decoding", "Parallel generation"],
    answer: "Using small model to draft, large model to verify",
    explanation: "Speculative decoding accelerates inference."
  },
  {
    id: 91,
    question: "What is quantization in LLM deployment?",
    options: ["Math operation", "Reducing model precision to decrease size", "Compression", "Optimization"],
    answer: "Reducing model precision to decrease size",
    explanation: "Quantization (INT8, INT4) reduces memory and speeds inference."
  },
  {
    id: 92,
    question: "What is batching in LLM inference?",
    options: ["Grouping", "Processing multiple requests together for efficiency", "Queueing", "Parallel processing"],
    answer: "Processing multiple requests together for efficiency",
    explanation: "Batching improves GPU utilization and throughput."
  },
  {
    id: 93,
    question: "What is KV cache?",
    options: ["Key-value store", "Caching key-value pairs during generation", "Memory cache", "Token cache"],
    answer: "Caching key-value pairs during generation",
    explanation: "KV cache avoids recomputing attention for previous tokens."
  },
  {
    id: 94,
    question: "What is model serving?",
    options: ["Server model", "Deploying and hosting models for inference", "Model hosting", "API deployment"],
    answer: "Deploying and hosting models for inference",
    explanation: "Serving infrastructure handles model deployment at scale."
  },
  {
    id: 95,
    question: "What is vLLM?",
    options: ["Very large LLM", "High-throughput LLM serving library", "Virtual LLM", "Vector LLM"],
    answer: "High-throughput LLM serving library",
    explanation: "vLLM optimizes serving with PagedAttention."
  },
  {
    id: 96,
    question: "What is agent swarm?",
    options: ["Bug swarm", "Large number of agents working together", "Agent cluster", "Distributed agents"],
    answer: "Large number of agents working together",
    explanation: "Swarms coordinate many agents for complex tasks."
  },
  {
    id: 97,
    question: "What is mixture of agents (MoA)?",
    options: ["Agent mix", "Multiple agents contributing to final response", "Agent ensemble", "Combined agents"],
    answer: "Multiple agents contributing to final response",
    explanation: "MoA aggregates multiple agent responses for better quality."
  },
  {
    id: 98,
    question: "What is verifier agent?",
    options: ["Checker agent", "Agent that validates outputs of other agents", "Approval agent", "Quality agent"],
    answer: "Agent that validates outputs of other agents",
    explanation: "Verifiers ensure correctness before final output."
  },
  {
    id: 99,
    question: "What is agent memory consolidation?",
    options: ["Memory merge", "Processing and organizing agent memories over time", "Memory cleanup", "Knowledge synthesis"],
    answer: "Processing and organizing agent memories over time",
    explanation: "Consolidation extracts key insights from experiences."
  },
  {
    id: 100,
    question: "What is the future of AI agents?",
    options: ["Replacement of humans", "More autonomous, capable, and integrated into workflows", "Autonomous everything", "Unknown"],
    answer: "More autonomous, capable, and integrated into workflows",
    explanation: "AI agents will increasingly augment human capabilities."
  }
];

export default questions;
