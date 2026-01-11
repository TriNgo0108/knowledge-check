import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is system design?",
    options: ["UI design", "Process of defining architecture for large-scale systems", "Database design only", "API design"],
    answer: "Process of defining architecture for large-scale systems",
    explanation: "System design involves designing scalable, reliable distributed systems."
  },
  {
    id: 2,
    question: "What is scalability?",
    options: ["Code quality", "Ability to handle increased load", "Security feature", "Speed"],
    answer: "Ability to handle increased load",
    explanation: "Scalability means the system can grow to handle more users/data."
  },
  {
    id: 3,
    question: "What is vertical scaling?",
    options: ["Adding more machines", "Adding more resources to existing machine", "Geographic distribution", "Code optimization"],
    answer: "Adding more resources to existing machine",
    explanation: "Vertical scaling (scale up) means bigger/faster hardware."
  },
  {
    id: 4,
    question: "What is horizontal scaling?",
    options: ["Adding more machines", "Upgrading CPU", "Adding more RAM", "Replacing hardware"],
    answer: "Adding more machines",
    explanation: "Horizontal scaling (scale out) adds more servers to the pool."
  },
  {
    id: 5,
    question: "What is a load balancer?",
    options: ["Database tool", "Distributes traffic across multiple servers", "Backup system", "Monitoring tool"],
    answer: "Distributes traffic across multiple servers",
    explanation: "Load balancers spread requests to prevent any single server from being overwhelmed."
  },
  {
    id: 6,
    question: "What is latency?",
    options: ["Bandwidth", "Time delay between request and response", "Data size", "Error rate"],
    answer: "Time delay between request and response",
    explanation: "Latency is the time it takes for data to travel between points."
  },
  {
    id: 7,
    question: "What is throughput?",
    options: ["Speed of one request", "Amount of data processed in a time period", "Network speed", "Response time"],
    answer: "Amount of data processed in a time period",
    explanation: "Throughput measures how much work a system can handle."
  },
  {
    id: 8,
    question: "What is availability?",
    options: ["Speed", "Percentage of time system is operational", "Capacity", "Reliability"],
    answer: "Percentage of time system is operational",
    explanation: "Availability is uptime percentage, often expressed as 'nines' (99.9%)."
  },
  {
    id: 9,
    question: "What does '99.99% availability' mean?",
    options: ["Always up", "About 52 minutes downtime per year", "1% downtime", "No guarantees"],
    answer: "About 52 minutes downtime per year",
    explanation: "Four nines (99.99%) allows about 52 minutes of downtime annually."
  },
  {
    id: 10,
    question: "What is a CDN?",
    options: ["Database network", "Content Delivery Network - distributes content globally", "Code network", "Computing network"],
    answer: "Content Delivery Network - distributes content globally",
    explanation: "CDNs cache content at edge locations near users for faster delivery."
  },
  {
    id: 11,
    question: "What is caching?",
    options: ["Storing money", "Storing frequently accessed data in fast storage", "Compressing data", "Encrypting data"],
    answer: "Storing frequently accessed data in fast storage",
    explanation: "Caching speeds up access by keeping data close to where it's needed."
  },
  {
    id: 12,
    question: "What is Redis commonly used for?",
    options: ["Primary database", "In-memory caching and data store", "File storage", "Load balancing"],
    answer: "In-memory caching and data store",
    explanation: "Redis is a fast in-memory data structure store."
  },
  {
    id: 13,
    question: "What is a database index?",
    options: ["Primary key", "Data structure that improves query speed", "Table of contents", "Backup system"],
    answer: "Data structure that improves query speed",
    explanation: "Indexes speed up reads but slow down writes."
  },
  {
    id: 14,
    question: "What is sharding?",
    options: ["Breaking", "Splitting database across multiple servers", "Compressing data", "Replicating data"],
    answer: "Splitting database across multiple servers",
    explanation: "Sharding distributes data horizontally across multiple database instances."
  },
  {
    id: 15,
    question: "What is replication?",
    options: ["Copying code", "Copying data to multiple nodes for redundancy", "Backup creation", "Data compression"],
    answer: "Copying data to multiple nodes for redundancy",
    explanation: "Replication provides fault tolerance and can improve read performance."
  },
  {
    id: 16,
    question: "What is the difference between SQL and NoSQL?",
    options: ["Same thing", "SQL is relational/structured; NoSQL is flexible/document-based", "NoSQL is faster", "SQL is newer"],
    answer: "SQL is relational/structured; NoSQL is flexible/document-based",
    explanation: "SQL databases have schemas; NoSQL offers flexible data models."
  },
  {
    id: 17,
    question: "What is eventual consistency?",
    options: ["Always consistent", "Data becomes consistent over time, not immediately", "Never consistent", "Consistent on reads"],
    answer: "Data becomes consistent over time, not immediately",
    explanation: "Eventual consistency trades immediate consistency for availability."
  },
  {
    id: 18,
    question: "What is a message queue?",
    options: ["Email system", "Asynchronous communication between services", "Chat application", "Notification service"],
    answer: "Asynchronous communication between services",
    explanation: "Message queues decouple services and handle async processing."
  },
  {
    id: 19,
    question: "What is Kafka used for?",
    options: ["Caching", "Distributed event streaming platform", "Database", "Load balancing"],
    answer: "Distributed event streaming platform",
    explanation: "Kafka handles high-throughput real-time data streams."
  },
  {
    id: 20,
    question: "What is an API?",
    options: ["Application Programming Interface - contract for communication", "Database", "Server", "Protocol"],
    answer: "Application Programming Interface - contract for communication",
    explanation: "APIs define how software components interact."
  },
  {
    id: 21,
    question: "What is REST?",
    options: ["Sleep mode", "Architectural style using HTTP methods for APIs", "Database type", "Protocol"],
    answer: "Architectural style using HTTP methods for APIs",
    explanation: "REST uses HTTP verbs (GET, POST, PUT, DELETE) for CRUD operations."
  },
  {
    id: 22,
    question: "What is a microservice?",
    options: ["Small computer", "Small independent service doing one thing well", "Micro frontend", "Mini database"],
    answer: "Small independent service doing one thing well",
    explanation: "Microservices are independently deployable services."
  },
  {
    id: 23,
    question: "What is a monolith?",
    options: ["Stone structure", "Single unified codebase/application", "Old architecture", "Database type"],
    answer: "Single unified codebase/application",
    explanation: "Monoliths are single deployable units containing all functionality."
  },
  {
    id: 24,
    question: "What is a proxy server?",
    options: ["Main server", "Intermediary server between client and target", "Backup server", "Database server"],
    answer: "Intermediary server between client and target",
    explanation: "Proxies can provide caching, security, or load balancing."
  },
  {
    id: 25,
    question: "What is a reverse proxy?",
    options: ["Backward connection", "Proxy in front of servers accepting client requests", "VPN", "Firewall"],
    answer: "Proxy in front of servers accepting client requests",
    explanation: "Reverse proxies like Nginx sit in front of web servers."
  },
  {
    id: 26,
    question: "What is DNS?",
    options: ["Database Name System", "Domain Name System - translates domains to IPs", "Data Network System", "Direct Network Service"],
    answer: "Domain Name System - translates domains to IPs",
    explanation: "DNS resolves human-readable domains to IP addresses."
  },
  {
    id: 27,
    question: "What is a single point of failure?",
    options: ["One bug", "Component whose failure brings down the system", "Weak security", "Slow endpoint"],
    answer: "Component whose failure brings down the system",
    explanation: "SPOFs must be eliminated through redundancy."
  },
  {
    id: 28,
    question: "What is redundancy?",
    options: ["Duplication", "Having backup components to prevent failure", "Extra code", "Repetition"],
    answer: "Having backup components to prevent failure",
    explanation: "Redundancy ensures the system continues if a component fails."
  },
  {
    id: 29,
    question: "What is failover?",
    options: ["System crash", "Automatic switching to backup when primary fails", "Manual restart", "Error logging"],
    answer: "Automatic switching to backup when primary fails",
    explanation: "Failover provides continuity by switching to standby systems."
  },
  {
    id: 30,
    question: "What is a heartbeat in distributed systems?",
    options: ["Heart monitor", "Periodic signal showing a node is alive", "Error signal", "Sync message"],
    answer: "Periodic signal showing a node is alive",
    explanation: "Heartbeats detect node failures for failover."
  },
  {
    id: 31,
    question: "What is a stateless service?",
    options: ["Country-less", "Service that doesn't store client session state", "Stateless protocol", "Simple service"],
    answer: "Service that doesn't store client session state",
    explanation: "Stateless services can be scaled easily as any instance can handle any request."
  },
  {
    id: 32,
    question: "What is a stateful service?",
    options: ["State machine", "Service that maintains client session state", "Government service", "Complex service"],
    answer: "Service that maintains client session state",
    explanation: "Stateful services require session affinity or shared state."
  },
  {
    id: 33,
    question: "What is rate limiting?",
    options: ["Speed limit", "Controlling request frequency to protect services", "Data limiting", "User limiting"],
    answer: "Controlling request frequency to protect services",
    explanation: "Rate limiting prevents abuse and ensures fair usage."
  },
  {
    id: 34,
    question: "What is throttling?",
    options: ["Speeding up", "Slowing down or limiting service usage", "Acceleration", "Optimization"],
    answer: "Slowing down or limiting service usage",
    explanation: "Throttling gracefully degrades service under heavy load."
  },
  {
    id: 35,
    question: "What is a webhook?",
    options: ["Fish hook", "HTTP callback triggered by an event", "Web server", "Hook function"],
    answer: "HTTP callback triggered by an event",
    explanation: "Webhooks push notifications to URLs when events occur."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is the CAP theorem?",
    options: ["Hat theorem", "Consistency, Availability, Partition tolerance - pick two", "Computing theory", "Architecture pattern"],
    answer: "Consistency, Availability, Partition tolerance - pick two",
    explanation: "CAP theorem states distributed systems can only guarantee two of three properties."
  },
  {
    id: 37,
    question: "What does partition tolerance mean?",
    options: ["Data partitioning", "System works despite network failures between nodes", "Disk partitions", "Memory partitioning"],
    answer: "System works despite network failures between nodes",
    explanation: "Partition tolerance means handling network splits between nodes."
  },
  {
    id: 38,
    question: "What is a CP system?",
    options: ["Copy system", "Prioritizes Consistency and Partition tolerance over Availability", "Central processing", "Cloud platform"],
    answer: "Prioritizes Consistency and Partition tolerance over Availability",
    explanation: "CP systems may reject requests during partitions to stay consistent."
  },
  {
    id: 39,
    question: "What is an AP system?",
    options: ["Access point", "Prioritizes Availability and Partition tolerance over Consistency", "Application", "API system"],
    answer: "Prioritizes Availability and Partition tolerance over Consistency",
    explanation: "AP systems stay available during partitions but may return stale data."
  },
  {
    id: 40,
    question: "What is consistent hashing?",
    options: ["Same hash", "Algorithm for distributing data with minimal redistribution on changes", "Hash consistency", "Encryption"],
    answer: "Algorithm for distributing data with minimal redistribution on changes",
    explanation: "Consistent hashing minimizes data movement when nodes are added/removed."
  },
  {
    id: 41,
    question: "What is leader election?",
    options: ["Political election", "Process of choosing one node to coordinate actions", "User voting", "Load balancing"],
    answer: "Process of choosing one node to coordinate actions",
    explanation: "Leader election ensures one node handles coordination."
  },
  {
    id: 42,
    question: "What is a consensus algorithm?",
    options: ["Agreement method", "Algorithm for distributed nodes to agree on values", "Voting system", "Decision tree"],
    answer: "Algorithm for distributed nodes to agree on values",
    explanation: "Consensus algorithms like Raft and Paxos ensure agreement."
  },
  {
    id: 43,
    question: "What is Raft?",
    options: ["Boat", "Consensus algorithm for managing replicated log", "Protocol", "Framework"],
    answer: "Consensus algorithm for managing replicated log",
    explanation: "Raft is a more understandable alternative to Paxos."
  },
  {
    id: 44,
    question: "What is a circuit breaker pattern?",
    options: ["Electrical pattern", "Prevents cascading failures by stopping calls to failing services", "Security pattern", "Traffic pattern"],
    answer: "Prevents cascading failures by stopping calls to failing services",
    explanation: "Circuit breakers fail fast instead of waiting for timeouts."
  },
  {
    id: 45,
    question: "What is the bulkhead pattern?",
    options: ["Ship design", "Isolating components to contain failures", "Storage pattern", "Network pattern"],
    answer: "Isolating components to contain failures",
    explanation: "Like ship compartments, bulkheads prevent total system failure."
  },
  {
    id: 46,
    question: "What is database normalization?",
    options: ["Making normal", "Organizing tables to reduce redundancy", "Speed optimization", "Security measure"],
    answer: "Organizing tables to reduce redundancy",
    explanation: "Normalization reduces data duplication and improves integrity."
  },
  {
    id: 47,
    question: "What is denormalization?",
    options: ["Abnormal data", "Adding redundancy for read performance", "Data corruption", "Normalization reversal"],
    answer: "Adding redundancy for read performance",
    explanation: "Denormalization trades storage for faster reads by duplicating data."
  },
  {
    id: 48,
    question: "What is a write-ahead log (WAL)?",
    options: ["Writing ahead", "Log of changes before applying to database", "Transaction log", "Error log"],
    answer: "Log of changes before applying to database",
    explanation: "WAL ensures durability by logging before committing."
  },
  {
    id: 49,
    question: "What is ACID in databases?",
    options: ["Chemical", "Atomicity, Consistency, Isolation, Durability", "Database type", "Query language"],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation: "ACID properties ensure reliable database transactions."
  },
  {
    id: 50,
    question: "What is BASE in databases?",
    options: ["Foundation", "Basically Available, Soft state, Eventually consistent", "Database type", "Architecture"],
    answer: "Basically Available, Soft state, Eventually consistent",
    explanation: "BASE is an alternative to ACID for distributed systems."
  },
  {
    id: 51,
    question: "What is a read replica?",
    options: ["Copy for reading", "Database copy that handles read queries", "Backup database", "Test database"],
    answer: "Database copy that handles read queries",
    explanation: "Read replicas scale read capacity by distributing queries."
  },
  {
    id: 52,
    question: "What is master-slave replication?",
    options: ["Control pattern", "One primary database, multiple read-only replicas", "Security model", "Backup strategy"],
    answer: "One primary database, multiple read-only replicas",
    explanation: "Primary handles writes; replicas handle reads."
  },
  {
    id: 53,
    question: "What is multi-master replication?",
    options: ["Multiple primaries", "Multiple nodes can accept writes", "Redundant masters", "Load balancing"],
    answer: "Multiple nodes can accept writes",
    explanation: "Multi-master allows writes to any node but requires conflict resolution."
  },
  {
    id: 54,
    question: "What is a distributed lock?",
    options: ["Network lock", "Lock mechanism across multiple nodes", "File lock", "Database lock"],
    answer: "Lock mechanism across multiple nodes",
    explanation: "Distributed locks coordinate access in distributed systems."
  },
  {
    id: 55,
    question: "What is idempotency?",
    options: ["Same result", "Operation produces same result regardless of repetitions", "No side effects", "Stateless"],
    answer: "Operation produces same result regardless of repetitions",
    explanation: "Idempotent operations can be safely retried."
  },
  {
    id: 56,
    question: "Why is idempotency important?",
    options: ["Performance", "Enables safe retries in unreliable networks", "Security", "Simplicity"],
    answer: "Enables safe retries in unreliable networks",
    explanation: "Network failures may cause duplicate requests; idempotency handles them."
  },
  {
    id: 57,
    question: "What is a saga pattern?",
    options: ["Story pattern", "Managing distributed transactions with compensating actions", "Database pattern", "API pattern"],
    answer: "Managing distributed transactions with compensating actions",
    explanation: "Sagas handle long-running transactions across services."
  },
  {
    id: 58,
    question: "What is event sourcing?",
    options: ["Event logging", "Storing all changes as immutable events", "Event handling", "Messaging"],
    answer: "Storing all changes as immutable events",
    explanation: "Event sourcing stores events instead of current state."
  },
  {
    id: 59,
    question: "What is CQRS?",
    options: ["Query language", "Command Query Responsibility Segregation", "Database type", "API style"],
    answer: "Command Query Responsibility Segregation",
    explanation: "CQRS separates read and write operations into different models."
  },
  {
    id: 60,
    question: "What is a time-series database?",
    options: ["Date storage", "Database optimized for time-stamped data", "Temporal database", "History database"],
    answer: "Database optimized for time-stamped data",
    explanation: "Time-series DBs like InfluxDB handle metrics and events over time."
  },
  {
    id: 61,
    question: "What is a blob store?",
    options: ["Binary storage", "Storage for large unstructured binary objects", "Image storage", "File system"],
    answer: "Storage for large unstructured binary objects",
    explanation: "Blob stores like S3 handle files, images, videos, etc."
  },
  {
    id: 62,
    question: "What is object storage vs block storage?",
    options: ["Same thing", "Object is for files with metadata; block is for raw disk access", "Block is newer", "Object is faster"],
    answer: "Object is for files with metadata; block is for raw disk access",
    explanation: "Object storage (S3) is for files; block storage (EBS) is for volumes."
  },
  {
    id: 63,
    question: "What is a data lake?",
    options: ["Water storage", "Repository for raw data in any format", "Database", "Data warehouse"],
    answer: "Repository for raw data in any format",
    explanation: "Data lakes store raw, unprocessed data for later analysis."
  },
  {
    id: 64,
    question: "What is a data warehouse?",
    options: ["Storage building", "Structured repository for analytics", "Raw data storage", "Backup storage"],
    answer: "Structured repository for analytics",
    explanation: "Data warehouses store processed, structured data for reporting."
  },
  {
    id: 65,
    question: "What is ETL?",
    options: ["Protocol", "Extract, Transform, Load - data pipeline process", "Database", "API"],
    answer: "Extract, Transform, Load - data pipeline process",
    explanation: "ETL moves and transforms data between systems."
  },
  {
    id: 66,
    question: "What is GraphQL?",
    options: ["Graph database", "Query language for APIs with client-specified responses", "Graphing tool", "Protocol"],
    answer: "Query language for APIs with client-specified responses",
    explanation: "GraphQL lets clients request exactly the data they need."
  },
  {
    id: 67,
    question: "What is gRPC?",
    options: ["Game RPC", "High-performance RPC framework using Protocol Buffers", "Graph RPC", "Generic RPC"],
    answer: "High-performance RPC framework using Protocol Buffers",
    explanation: "gRPC is efficient for internal service communication."
  },
  {
    id: 68,
    question: "What is service discovery?",
    options: ["Finding bugs", "Automatically locating services in a network", "API documentation", "Service monitoring"],
    answer: "Automatically locating services in a network",
    explanation: "Service discovery helps services find each other dynamically."
  },
  {
    id: 69,
    question: "What is a service mesh?",
    options: ["Network mesh", "Infrastructure layer handling service-to-service communication", "API gateway", "Load balancer"],
    answer: "Infrastructure layer handling service-to-service communication",
    explanation: "Service meshes like Istio handle traffic, security, and observability."
  },
  {
    id: 70,
    question: "What is an API gateway?",
    options: ["API server", "Single entry point managing API traffic", "Load balancer", "Proxy"],
    answer: "Single entry point managing API traffic",
    explanation: "API gateways handle authentication, rate limiting, routing."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is the two-phase commit (2PC)?",
    options: ["Double commit", "Distributed transaction protocol with prepare and commit phases", "Backup protocol", "Sync protocol"],
    answer: "Distributed transaction protocol with prepare and commit phases",
    explanation: "2PC ensures all nodes commit or all abort a transaction."
  },
  {
    id: 72,
    question: "What are the problems with 2PC?",
    options: ["No problems", "Blocking, coordinator failure, performance", "Security issues", "Data loss"],
    answer: "Blocking, coordinator failure, performance",
    explanation: "2PC can block indefinitely and is slow for distributed systems."
  },
  {
    id: 73,
    question: "What is vector clock?",
    options: ["Time vector", "Algorithm for ordering events in distributed systems", "Clock sync", "Time stamp"],
    answer: "Algorithm for ordering events in distributed systems",
    explanation: "Vector clocks track causality between events across nodes."
  },
  {
    id: 74,
    question: "What is a Bloom filter?",
    options: ["Image filter", "Probabilistic data structure for set membership", "Data filter", "Query filter"],
    answer: "Probabilistic data structure for set membership",
    explanation: "Bloom filters tell you if something is definitely not in a set."
  },
  {
    id: 75,
    question: "What is gossip protocol?",
    options: ["Chat protocol", "Epidemic protocol for spreading information across nodes", "Message queue", "Pub/sub"],
    answer: "Epidemic protocol for spreading information across nodes",
    explanation: "Gossip protocols spread information like rumors in a social network."
  },
  {
    id: 76,
    question: "What is a quorum?",
    options: ["Meeting count", "Minimum nodes needed to agree on an operation", "Voting system", "Majority"],
    answer: "Minimum nodes needed to agree on an operation",
    explanation: "Quorums ensure consistency in replicated systems."
  },
  {
    id: 77,
    question: "What is the formula for read-write quorum?",
    options: ["R = W", "R + W > N (where N is total replicas)", "R = N", "W = N"],
    answer: "R + W > N (where N is total replicas)",
    explanation: "This ensures at least one node in common between reads and writes."
  },
  {
    id: 78,
    question: "What is CRDTs?",
    options: ["Data type", "Conflict-free Replicated Data Types", "Concurrent data", "Distributed cache"],
    answer: "Conflict-free Replicated Data Types",
    explanation: "CRDTs enable conflict-free concurrent updates across replicas."
  },
  {
    id: 79,
    question: "What is linearizability?",
    options: ["Line processing", "Operations appear to happen atomically at one instant", "Sequential processing", "Parallel processing"],
    answer: "Operations appear to happen atomically at one instant",
    explanation: "Linearizability is the strongest consistency guarantee."
  },
  {
    id: 80,
    question: "What is causal consistency?",
    options: ["Cause and effect", "Causally related operations are seen in order", "Random consistency", "Weak consistency"],
    answer: "Causally related operations are seen in order",
    explanation: "Causal consistency preserves happens-before relationships."
  },
  {
    id: 81,
    question: "What is the split-brain problem?",
    options: ["Mental issue", "Network partition causing multiple leaders", "Data split", "Database issue"],
    answer: "Network partition causing multiple leaders",
    explanation: "Split-brain can cause inconsistency when nodes can't communicate."
  },
  {
    id: 82,
    question: "How do you prevent split-brain?",
    options: ["Can't prevent", "Fencing, quorums, STONITH", "Better hardware", "More bandwidth"],
    answer: "Fencing, quorums, STONITH",
    explanation: "Fencing tokens and quorums ensure only one leader operates."
  },
  {
    id: 83,
    question: "What is back-pressure?",
    options: ["Physical pressure", "Mechanism to slow down producers when consumers are overwhelmed", "Compression", "Throttling"],
    answer: "Mechanism to slow down producers when consumers are overwhelmed",
    explanation: "Back-pressure prevents system overload by rate limiting upstream."
  },
  {
    id: 84,
    question: "What is hot spot in distributed systems?",
    options: ["Popular spot", "Node receiving disproportionate traffic", "Cache hit", "Peak load"],
    answer: "Node receiving disproportionate traffic",
    explanation: "Hot spots can cause performance issues and need rebalancing."
  },
  {
    id: 85,
    question: "What is tail latency?",
    options: ["End delay", "High latency at the 99th+ percentile", "Average latency", "Queue latency"],
    answer: "High latency at the 99th+ percentile",
    explanation: "Tail latency affects user experience of slow requests."
  },
  {
    id: 86,
    question: "What is hedged requests?",
    options: ["Betting", "Sending same request to multiple replicas, taking first response", "Backup requests", "Parallel requests"],
    answer: "Sending same request to multiple replicas, taking first response",
    explanation: "Hedged requests reduce tail latency by racing replicas."
  },
  {
    id: 87,
    question: "What is chaos engineering?",
    options: ["Creating chaos", "Deliberately injecting failures to test resilience", "Load testing", "Stress testing"],
    answer: "Deliberately injecting failures to test resilience",
    explanation: "Chaos engineering proactively finds weaknesses."
  },
  {
    id: 88,
    question: "What is observability?",
    options: ["Watching", "Ability to understand system state from external outputs", "Monitoring", "Logging"],
    answer: "Ability to understand system state from external outputs",
    explanation: "Observability = logs + metrics + traces."
  },
  {
    id: 89,
    question: "What are the three pillars of observability?",
    options: ["Speed, reliability, security", "Logs, metrics, traces", "CPU, memory, disk", "Latency, throughput, errors"],
    answer: "Logs, metrics, traces",
    explanation: "Logs, metrics, and distributed traces provide observability."
  },
  {
    id: 90,
    question: "What is distributed tracing?",
    options: ["Finding bugs", "Tracking requests across multiple services", "Log analysis", "Performance monitoring"],
    answer: "Tracking requests across multiple services",
    explanation: "Distributed tracing shows request flow through microservices."
  },
  {
    id: 91,
    question: "What is SLA, SLO, SLI?",
    options: ["Acronyms", "Service Level Agreement/Objective/Indicator", "Business terms", "Legal terms"],
    answer: "Service Level Agreement/Objective/Indicator",
    explanation: "SLI measures, SLO sets targets, SLA is the contract."
  },
  {
    id: 92,
    question: "What is blue-green deployment?",
    options: ["Color scheme", "Two identical environments for zero-downtime deploys", "Testing strategy", "Backup strategy"],
    answer: "Two identical environments for zero-downtime deploys",
    explanation: "Blue-green switches traffic between two identical environments."
  },
  {
    id: 93,
    question: "What is canary deployment?",
    options: ["Bird detection", "Rolling out changes to small subset first", "A/B testing", "Feature flagging"],
    answer: "Rolling out changes to small subset first",
    explanation: "Canary deploys test changes on small traffic percentage."
  },
  {
    id: 94,
    question: "What is feature flagging?",
    options: ["Feature marking", "Toggling features on/off without deployment", "Feature testing", "Feature branching"],
    answer: "Toggling features on/off without deployment",
    explanation: "Feature flags enable gradual rollouts and quick rollbacks."
  },
  {
    id: 95,
    question: "What is the strangler fig pattern?",
    options: ["Plant pattern", "Gradually replacing legacy system with new system", "Migration pattern", "Decomposition pattern"],
    answer: "Gradually replacing legacy system with new system",
    explanation: "Strangler pattern incrementally replaces monolith with microservices."
  },
  {
    id: 96,
    question: "What is the sidecar pattern?",
    options: ["Motorcycle attachment", "Helper container running alongside main container", "Monitoring pattern", "Proxy pattern"],
    answer: "Helper container running alongside main container",
    explanation: "Sidecars add functionality without changing the main application."
  },
  {
    id: 97,
    question: "What is the ambassador pattern?",
    options: ["Diplomat pattern", "Proxy handling connections on behalf of service", "Gateway pattern", "Mediator pattern"],
    answer: "Proxy handling connections on behalf of service",
    explanation: "Ambassador handles retries, circuit breaking, routing."
  },
  {
    id: 98,
    question: "What is cell-based architecture?",
    options: ["Biology", "Dividing system into isolated failure domains", "Microservices", "Modular architecture"],
    answer: "Dividing system into isolated failure domains",
    explanation: "Cells limit blast radius of failures to a subset of users."
  },
  {
    id: 99,
    question: "What is the thundering herd problem?",
    options: ["Animal stampede", "Many clients simultaneously overwhelming resource", "Cache problem", "Load issue"],
    answer: "Many clients simultaneously overwhelming resource",
    explanation: "Cache expiry causing many requests to hit backend simultaneously."
  },
  {
    id: 100,
    question: "How do you mitigate thundering herd?",
    options: ["Can't prevent", "Cache warming, jitter, request coalescing", "More servers", "Better caching"],
    answer: "Cache warming, jitter, request coalescing",
    explanation: "Add randomness to expiry, coalesce requests, pre-warm caches."
  }
];

export default questions;
