import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is a design pattern?",
    options: ["UI design", "Reusable solution to common software design problems", "Architecture style", "Coding style"],
    answer: "Reusable solution to common software design problems",
    explanation: "Design patterns are proven templates for solving recurring design challenges."
  },
  {
    id: 2,
    question: "Who wrote the famous 'Gang of Four' book on design patterns?",
    options: ["Martin Fowler", "Gamma, Helm, Johnson, Vlissides", "Robert Martin", "Kent Beck"],
    answer: "Gamma, Helm, Johnson, Vlissides",
    explanation: "The GoF book 'Design Patterns' introduced 23 classic patterns."
  },
  {
    id: 3,
    question: "What are the three categories of GoF patterns?",
    options: ["Simple, Medium, Complex", "Creational, Structural, Behavioral", "Object, Function, Class", "Basic, Advanced, Expert"],
    answer: "Creational, Structural, Behavioral",
    explanation: "These categories describe how objects are created, composed, and interact."
  },
  {
    id: 4,
    question: "What is the Singleton pattern?",
    options: ["One method class", "Ensures only one instance of a class exists", "Single responsibility", "One-to-one mapping"],
    answer: "Ensures only one instance of a class exists",
    explanation: "Singleton provides global access to a single instance."
  },
  {
    id: 5,
    question: "What is a disadvantage of Singleton?",
    options: ["Too fast", "Hard to test, global state, tight coupling", "Too simple", "Memory efficient"],
    answer: "Hard to test, global state, tight coupling",
    explanation: "Singletons introduce hidden dependencies and testing challenges."
  },
  {
    id: 6,
    question: "What is the Factory pattern?",
    options: ["Manufacturing", "Creates objects without specifying exact class", "Class factory", "Object pool"],
    answer: "Creates objects without specifying exact class",
    explanation: "Factory encapsulates object creation logic."
  },
  {
    id: 7,
    question: "What is the difference between Factory Method and Abstract Factory?",
    options: ["Same thing", "Factory Method creates one product; Abstract Factory creates families", "Abstract is simpler", "Factory Method is deprecated"],
    answer: "Factory Method creates one product; Abstract Factory creates families",
    explanation: "Abstract Factory creates related objects; Factory Method creates one type."
  },
  {
    id: 8,
    question: "What is the Builder pattern?",
    options: ["Construction tool", "Constructs complex objects step by step", "Build automation", "Object cloning"],
    answer: "Constructs complex objects step by step",
    explanation: "Builder separates construction from representation."
  },
  {
    id: 9,
    question: "When should you use the Builder pattern?",
    options: ["Simple objects", "Objects with many optional parameters", "Single property objects", "Immutable objects only"],
    answer: "Objects with many optional parameters",
    explanation: "Builder avoids telescoping constructors with many parameters."
  },
  {
    id: 10,
    question: "What is the Prototype pattern?",
    options: ["First version", "Creates objects by cloning existing objects", "Base class", "Interface pattern"],
    answer: "Creates objects by cloning existing objects",
    explanation: "Prototype copies an existing object instead of creating new ones."
  },
  {
    id: 11,
    question: "What is the Adapter pattern?",
    options: ["Power adapter", "Converts interface of one class to another", "Data adapter", "Connection adapter"],
    answer: "Converts interface of one class to another",
    explanation: "Adapter allows incompatible interfaces to work together."
  },
  {
    id: 12,
    question: "What is the Decorator pattern?",
    options: ["UI decoration", "Adds behavior to objects dynamically", "Styling pattern", "Wrapper pattern"],
    answer: "Adds behavior to objects dynamically",
    explanation: "Decorator wraps objects to add functionality without subclassing."
  },
  {
    id: 13,
    question: "What is the difference between Decorator and Inheritance?",
    options: ["Same thing", "Decorator adds behavior at runtime; inheritance at compile time", "Inheritance is dynamic", "Decorator is static"],
    answer: "Decorator adds behavior at runtime; inheritance at compile time",
    explanation: "Decorator is more flexible as it works at runtime."
  },
  {
    id: 14,
    question: "What is the Facade pattern?",
    options: ["Building front", "Provides simplified interface to complex subsystem", "API pattern", "Wrapper pattern"],
    answer: "Provides simplified interface to complex subsystem",
    explanation: "Facade hides complexity behind a simple interface."
  },
  {
    id: 15,
    question: "What is the Proxy pattern?",
    options: ["Network proxy", "Provides surrogate or placeholder for another object", "API proxy", "Virtual proxy"],
    answer: "Provides surrogate or placeholder for another object",
    explanation: "Proxy controls access to the real object."
  },
  {
    id: 16,
    question: "What types of Proxy exist?",
    options: ["One type", "Virtual, Remote, Protection, Smart", "Network only", "Security only"],
    answer: "Virtual, Remote, Protection, Smart",
    explanation: "Different proxies serve different purposes: lazy loading, remote access, security."
  },
  {
    id: 17,
    question: "What is the Composite pattern?",
    options: ["Combining materials", "Treats individual objects and compositions uniformly", "Group pattern", "Container pattern"],
    answer: "Treats individual objects and compositions uniformly",
    explanation: "Composite creates tree structures of objects."
  },
  {
    id: 18,
    question: "What is the Bridge pattern?",
    options: ["Physical bridge", "Separates abstraction from implementation", "Connection pattern", "Link pattern"],
    answer: "Separates abstraction from implementation",
    explanation: "Bridge allows abstraction and implementation to vary independently."
  },
  {
    id: 19,
    question: "What is the Flyweight pattern?",
    options: ["Boxing weight", "Shares common state to reduce memory usage", "Lightweight pattern", "Caching pattern"],
    answer: "Shares common state to reduce memory usage",
    explanation: "Flyweight minimizes memory by sharing intrinsic state."
  },
  {
    id: 20,
    question: "What is intrinsic vs extrinsic state in Flyweight?",
    options: ["Same thing", "Intrinsic is shared; extrinsic is unique per object", "Extrinsic is shared", "Both are unique"],
    answer: "Intrinsic is shared; extrinsic is unique per object",
    explanation: "Flyweight stores intrinsic state; extrinsic is passed in."
  },
  {
    id: 21,
    question: "What is the Observer pattern?",
    options: ["Watching pattern", "One-to-many dependency between objects", "Listener pattern", "Event pattern"],
    answer: "One-to-many dependency between objects",
    explanation: "Observer notifies dependents when state changes."
  },
  {
    id: 22,
    question: "What is the Strategy pattern?",
    options: ["Game strategy", "Defines family of algorithms and makes them interchangeable", "Decision pattern", "Choice pattern"],
    answer: "Defines family of algorithms and makes them interchangeable",
    explanation: "Strategy encapsulates algorithms in separate classes."
  },
  {
    id: 23,
    question: "What is the Command pattern?",
    options: ["Terminal command", "Encapsulates request as an object", "Action pattern", "Instruction pattern"],
    answer: "Encapsulates request as an object",
    explanation: "Command turns requests into objects for queuing, logging, undo."
  },
  {
    id: 24,
    question: "What is the State pattern?",
    options: ["Country state", "Allows object to alter behavior when state changes", "Status pattern", "Mode pattern"],
    answer: "Allows object to alter behavior when state changes",
    explanation: "State encapsulates state-specific behavior in separate classes."
  },
  {
    id: 25,
    question: "What is the difference between State and Strategy?",
    options: ["Same pattern", "State changes behavior based on internal state; Strategy is selected externally", "Strategy has states", "State has strategies"],
    answer: "State changes behavior based on internal state; Strategy is selected externally",
    explanation: "State transitions internally; Strategy is chosen by client."
  },
  {
    id: 26,
    question: "What is the Template Method pattern?",
    options: ["Code template", "Defines skeleton of algorithm in base class", "Boilerplate pattern", "Framework pattern"],
    answer: "Defines skeleton of algorithm in base class",
    explanation: "Template Method lets subclasses override specific steps."
  },
  {
    id: 27,
    question: "What is the Iterator pattern?",
    options: ["Loop pattern", "Provides way to access elements sequentially", "Cursor pattern", "Collection pattern"],
    answer: "Provides way to access elements sequentially",
    explanation: "Iterator encapsulates how a collection is traversed."
  },
  {
    id: 28,
    question: "What is the Mediator pattern?",
    options: ["Middle man", "Defines object that encapsulates how objects interact", "Broker pattern", "Hub pattern"],
    answer: "Defines object that encapsulates how objects interact",
    explanation: "Mediator reduces coupling by centralizing communication."
  },
  {
    id: 29,
    question: "What is the Chain of Responsibility pattern?",
    options: ["Management chain", "Passes request along chain of handlers", "Responsibility pattern", "Handler pattern"],
    answer: "Passes request along chain of handlers",
    explanation: "Chain of Responsibility decouples sender from receivers."
  },
  {
    id: 30,
    question: "What is the Memento pattern?",
    options: ["Memory pattern", "Captures and restores object's internal state", "Snapshot pattern", "Backup pattern"],
    answer: "Captures and restores object's internal state",
    explanation: "Memento enables undo functionality without exposing internals."
  },
  {
    id: 31,
    question: "What is the Visitor pattern?",
    options: ["Guest pattern", "Performs operations on elements without changing their classes", "Tour pattern", "Traversal pattern"],
    answer: "Performs operations on elements without changing their classes",
    explanation: "Visitor separates algorithms from the objects they operate on."
  },
  {
    id: 32,
    question: "What is the Interpreter pattern?",
    options: ["Language pattern", "Defines grammar representation and interpreter for it", "Parser pattern", "Compiler pattern"],
    answer: "Defines grammar representation and interpreter for it",
    explanation: "Interpreter evaluates language expressions."
  },
  {
    id: 33,
    question: "What is dependency injection?",
    options: ["Bug injection", "Providing dependencies externally rather than creating them", "Module injection", "Code injection"],
    answer: "Providing dependencies externally rather than creating them",
    explanation: "DI inverts control of dependency creation."
  },
  {
    id: 34,
    question: "What are the types of dependency injection?",
    options: ["One type", "Constructor, Setter, Interface injection", "Only constructor", "Only setter"],
    answer: "Constructor, Setter, Interface injection",
    explanation: "Dependencies can be injected through constructors, setters, or interfaces."
  },
  {
    id: 35,
    question: "What is Inversion of Control (IoC)?",
    options: ["Control reversal", "Framework calls your code instead of you calling framework", "Remote control", "Access control"],
    answer: "Framework calls your code instead of you calling framework",
    explanation: "IoC is the principle behind DI and frameworks."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is the Repository pattern?",
    options: ["Git repository", "Abstracts data access with collection-like interface", "Storage pattern", "Database pattern"],
    answer: "Abstracts data access with collection-like interface",
    explanation: "Repository mediates between domain and data mapping layers."
  },
  {
    id: 37,
    question: "What is the Unit of Work pattern?",
    options: ["Work unit", "Maintains list of affected objects and coordinates changes", "Transaction pattern", "Batch pattern"],
    answer: "Maintains list of affected objects and coordinates changes",
    explanation: "Unit of Work tracks changes and commits them atomically."
  },
  {
    id: 38,
    question: "What is the Data Mapper pattern?",
    options: ["Map data", "Transfers data between objects and database", "ORM pattern", "Mapping pattern"],
    answer: "Transfers data between objects and database",
    explanation: "Data Mapper keeps domain objects unaware of database."
  },
  {
    id: 39,
    question: "What is Active Record pattern?",
    options: ["Music record", "Domain object handles its own persistence", "Record pattern", "CRUD pattern"],
    answer: "Domain object handles its own persistence",
    explanation: "Active Record combines domain logic with persistence."
  },
  {
    id: 40,
    question: "What is the difference between Active Record and Data Mapper?",
    options: ["Same thing", "Active Record knows DB; Data Mapper separates domain from DB", "Data Mapper is simpler", "Active Record is better"],
    answer: "Active Record knows DB; Data Mapper separates domain from DB",
    explanation: "Data Mapper provides better separation of concerns."
  },
  {
    id: 41,
    question: "What is the Service Layer pattern?",
    options: ["Network layer", "Defines boundary between application and domain logic", "API layer", "Business layer"],
    answer: "Defines boundary between application and domain logic",
    explanation: "Service layer coordinates operations and transactions."
  },
  {
    id: 42,
    question: "What is the Null Object pattern?",
    options: ["Empty pattern", "Provides default behavior instead of null checks", "Zero pattern", "Void pattern"],
    answer: "Provides default behavior instead of null checks",
    explanation: "Null Object eliminates null checking with default implementation."
  },
  {
    id: 43,
    question: "What is the Lazy Loading pattern?",
    options: ["Slow loading", "Defers object initialization until needed", "Loading pattern", "Delay pattern"],
    answer: "Defers object initialization until needed",
    explanation: "Lazy loading improves performance by loading on demand."
  },
  {
    id: 44,
    question: "What is the Object Pool pattern?",
    options: ["Swimming pool", "Reuses objects from a pool instead of creating new ones", "Cache pattern", "Collection pattern"],
    answer: "Reuses objects from a pool instead of creating new ones",
    explanation: "Object Pool manages expensive-to-create objects."
  },
  {
    id: 45,
    question: "What is the Specification pattern?",
    options: ["Requirements", "Encapsulates business rules as reusable predicates", "Rule pattern", "Condition pattern"],
    answer: "Encapsulates business rules as reusable predicates",
    explanation: "Specification allows combining and reusing business rules."
  },
  {
    id: 46,
    question: "What is the Event Sourcing pattern?",
    options: ["Event handling", "Stores all changes as sequence of events", "Logging pattern", "History pattern"],
    answer: "Stores all changes as sequence of events",
    explanation: "Event Sourcing reconstructs state from event history."
  },
  {
    id: 47,
    question: "What is CQRS pattern?",
    options: ["Query language", "Separates read and write operations into different models", "Database pattern", "API pattern"],
    answer: "Separates read and write operations into different models",
    explanation: "CQRS optimizes reads and writes independently."
  },
  {
    id: 48,
    question: "What is the Domain Event pattern?",
    options: ["Website event", "Captures something significant that happened in the domain", "User event", "System event"],
    answer: "Captures something significant that happened in the domain",
    explanation: "Domain events communicate changes within and across bounded contexts."
  },
  {
    id: 49,
    question: "What is the Aggregate pattern?",
    options: ["Sum pattern", "Cluster of objects treated as single unit", "Group pattern", "Collection pattern"],
    answer: "Cluster of objects treated as single unit",
    explanation: "Aggregates define consistency boundaries in DDD."
  },
  {
    id: 50,
    question: "What is a Bounded Context?",
    options: ["Limited scope", "Explicit boundary within which domain model applies", "Namespace", "Module boundary"],
    answer: "Explicit boundary within which domain model applies",
    explanation: "Bounded Contexts separate different domain models."
  },
  {
    id: 51,
    question: "What is the Anti-Corruption Layer pattern?",
    options: ["Security layer", "Translates between different system models", "Firewall pattern", "Isolation pattern"],
    answer: "Translates between different system models",
    explanation: "ACL prevents external models from corrupting domain model."
  },
  {
    id: 52,
    question: "What is the Saga pattern?",
    options: ["Story pattern", "Manages distributed transactions with compensating actions", "Flow pattern", "Workflow pattern"],
    answer: "Manages distributed transactions with compensating actions",
    explanation: "Sagas coordinate long-running business processes."
  },
  {
    id: 53,
    question: "What is the Circuit Breaker pattern?",
    options: ["Electrical pattern", "Prevents cascading failures with fail-fast mechanism", "Safety pattern", "Protection pattern"],
    answer: "Prevents cascading failures with fail-fast mechanism",
    explanation: "Circuit Breaker stops calling failing services."
  },
  {
    id: 54,
    question: "What are the states of a Circuit Breaker?",
    options: ["On/Off", "Closed, Open, Half-Open", "Active/Inactive", "Enabled/Disabled"],
    answer: "Closed, Open, Half-Open",
    explanation: "Closed: normal, Open: blocking, Half-Open: testing recovery."
  },
  {
    id: 55,
    question: "What is the Retry pattern?",
    options: ["Try again", "Automatically retries failed operations", "Loop pattern", "Recovery pattern"],
    answer: "Automatically retries failed operations",
    explanation: "Retry handles transient failures with backoff strategies."
  },
  {
    id: 56,
    question: "What is exponential backoff?",
    options: ["System shutdown", "Increasing delay between retry attempts", "Backup strategy", "Growth pattern"],
    answer: "Increasing delay between retry attempts",
    explanation: "Exponential backoff reduces load on failing systems."
  },
  {
    id: 57,
    question: "What is the Bulkhead pattern?",
    options: ["Ship part", "Isolates components to contain failures", "Wall pattern", "Barrier pattern"],
    answer: "Isolates components to contain failures",
    explanation: "Bulkhead prevents one failure from affecting entire system."
  },
  {
    id: 58,
    question: "What is the Strangler Fig pattern?",
    options: ["Plant pattern", "Gradually replaces legacy system", "Migration pattern", "Transition pattern"],
    answer: "Gradually replaces legacy system",
    explanation: "Strangler Fig incrementally replaces old system."
  },
  {
    id: 59,
    question: "What is the Backend for Frontend (BFF) pattern?",
    options: ["Backend buddy", "Creates backends specific to each frontend", "API pattern", "Gateway pattern"],
    answer: "Creates backends specific to each frontend",
    explanation: "BFF optimizes API for specific client needs."
  },
  {
    id: 60,
    question: "What is the Gateway pattern?",
    options: ["Entry point", "Single entry point for microservices", "Router pattern", "Proxy pattern"],
    answer: "Single entry point for microservices",
    explanation: "Gateway handles routing, authentication, rate limiting."
  },
  {
    id: 61,
    question: "What is the Sidecar pattern?",
    options: ["Motorcycle part", "Helper process alongside main application", "Companion pattern", "Assistant pattern"],
    answer: "Helper process alongside main application",
    explanation: "Sidecar adds supporting functionality to containers."
  },
  {
    id: 62,
    question: "What is the Ambassador pattern?",
    options: ["Diplomat pattern", "Proxy for outgoing connections", "Gateway pattern", "Agent pattern"],
    answer: "Proxy for outgoing connections",
    explanation: "Ambassador handles retries, monitoring for external calls."
  },
  {
    id: 63,
    question: "What is Event-Driven Architecture?",
    options: ["Calendar system", "Architecture where components communicate via events", "Reactive pattern", "Async pattern"],
    answer: "Architecture where components communicate via events",
    explanation: "EDA enables loose coupling through asynchronous events."
  },
  {
    id: 64,
    question: "What is Pub/Sub pattern?",
    options: ["Bar pattern", "Publishers send messages to topics; subscribers receive", "Messaging pattern", "Queue pattern"],
    answer: "Publishers send messages to topics; subscribers receive",
    explanation: "Pub/Sub decouples message producers from consumers."
  },
  {
    id: 65,
    question: "What is the difference between Queue and Topic?",
    options: ["Same thing", "Queue: one consumer; Topic: multiple subscribers", "Topic is faster", "Queue is newer"],
    answer: "Queue: one consumer; Topic: multiple subscribers",
    explanation: "Queues are point-to-point; Topics are publish-subscribe."
  },
  {
    id: 66,
    question: "What is the Outbox pattern?",
    options: ["Email outbox", "Stores events in DB before publishing", "Message pattern", "Transaction pattern"],
    answer: "Stores events in DB before publishing",
    explanation: "Outbox ensures reliable event publishing with transactions."
  },
  {
    id: 67,
    question: "What is idempotency in pattern design?",
    options: ["Same power", "Operation produces same result if repeated", "Efficiency", "Consistency"],
    answer: "Operation produces same result if repeated",
    explanation: "Idempotent operations are safe to retry."
  },
  {
    id: 68,
    question: "What is the Registry pattern?",
    options: ["Windows registry", "Well-known object for finding other objects", "Lookup pattern", "Directory pattern"],
    answer: "Well-known object for finding other objects",
    explanation: "Registry provides global access to services."
  },
  {
    id: 69,
    question: "What is the Plugin pattern?",
    options: ["Extension", "Allows adding functionality without modifying core", "Module pattern", "Extension pattern"],
    answer: "Allows adding functionality without modifying core",
    explanation: "Plugins extend applications through defined interfaces."
  },
  {
    id: 70,
    question: "What is the Feature Toggle pattern?",
    options: ["Feature switch", "Enables/disables features at runtime", "Flag pattern", "Switch pattern"],
    answer: "Enables/disables features at runtime",
    explanation: "Feature toggles enable gradual rollouts and testing."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is the Double Dispatch pattern?",
    options: ["Two dispatches", "Selecting method based on two objects' types", "Multi-method", "Dual selection"],
    answer: "Selecting method based on two objects' types",
    explanation: "Double dispatch determines behavior from both caller and argument types."
  },
  {
    id: 72,
    question: "What is the Multiton pattern?",
    options: ["Multiple tons", "Named instances of a class", "Extended Singleton", "Instance map"],
    answer: "Named instances of a class",
    explanation: "Multiton manages named singleton instances."
  },
  {
    id: 73,
    question: "What is the Type Object pattern?",
    options: ["Type checking", "Configures objects through type objects", "Class pattern", "Meta pattern"],
    answer: "Configures objects through type objects",
    explanation: "Type Object allows creating new 'types' without new classes."
  },
  {
    id: 74,
    question: "What is the Extension Object pattern?",
    options: ["Add-on", "Adds functionality to objects through extensions", "Plugin pattern", "Decorator variant"],
    answer: "Adds functionality to objects through extensions",
    explanation: "Extension Objects allow adding behavior without inheritance."
  },
  {
    id: 75,
    question: "What is the Object Mother pattern?",
    options: ["Parent pattern", "Factory for creating test objects", "Test fixture", "Builder variant"],
    answer: "Factory for creating test objects",
    explanation: "Object Mother simplifies test data creation."
  },
  {
    id: 76,
    question: "What is the Money pattern?",
    options: ["Currency", "Value object for monetary calculations", "Financial pattern", "Decimal pattern"],
    answer: "Value object for monetary calculations",
    explanation: "Money encapsulates amount and currency with operations."
  },
  {
    id: 77,
    question: "What is the Special Case pattern?",
    options: ["Edge case", "Returns special object for exceptional conditions", "Null Object variant", "Exception pattern"],
    answer: "Returns special object for exceptional conditions",
    explanation: "Special Case handles unusual situations with objects."
  },
  {
    id: 78,
    question: "What is the Policy pattern?",
    options: ["Rules", "Encapsulates algorithm selection criteria", "Strategy variant", "Rule pattern"],
    answer: "Encapsulates algorithm selection criteria",
    explanation: "Policy separates how algorithms are selected from algorithms."
  },
  {
    id: 79,
    question: "What is the Blackboard pattern?",
    options: ["Classroom tool", "Shared workspace for multiple specialists", "Knowledge pattern", "Collaboration pattern"],
    answer: "Shared workspace for multiple specialists",
    explanation: "Blackboard allows multiple specialists to contribute to solution."
  },
  {
    id: 80,
    question: "What is the Service Locator pattern?",
    options: ["GPS locator", "Registry that provides service instances", "Lookup pattern", "DI alternative"],
    answer: "Registry that provides service instances",
    explanation: "Service Locator provides centralized service lookup."
  },
  {
    id: 81,
    question: "Why is Service Locator considered an anti-pattern by some?",
    options: ["Too slow", "Hides dependencies, harder to test", "Too complex", "Deprecated"],
    answer: "Hides dependencies, harder to test",
    explanation: "Service Locator obscures dependencies compared to DI."
  },
  {
    id: 82,
    question: "What is the Entity pattern in DDD?",
    options: ["HTML entity", "Object with identity that persists over time", "Object pattern", "Model pattern"],
    answer: "Object with identity that persists over time",
    explanation: "Entities are defined by their identity, not attributes."
  },
  {
    id: 83,
    question: "What is the Value Object pattern?",
    options: ["Price object", "Immutable object defined by its attributes", "Data object", "Simple object"],
    answer: "Immutable object defined by its attributes",
    explanation: "Value Objects are equal if their values are equal."
  },
  {
    id: 84,
    question: "What is the difference between Entity and Value Object?",
    options: ["Same thing", "Entity has identity; Value Object is defined by values", "Value Object has ID", "Entity is immutable"],
    answer: "Entity has identity; Value Object is defined by values",
    explanation: "Entities are tracked by ID; Value Objects by content."
  },
  {
    id: 85,
    question: "What is the Domain Service pattern?",
    options: ["Web service", "Stateless operation that doesn't belong to any entity", "Business service", "Application service"],
    answer: "Stateless operation that doesn't belong to any entity",
    explanation: "Domain Services contain domain logic not fitting in entities."
  },
  {
    id: 86,
    question: "What is the Factory pattern in DDD?",
    options: ["GoF Factory", "Creates complex aggregates or entities", "Builder pattern", "Object creation"],
    answer: "Creates complex aggregates or entities",
    explanation: "DDD Factory handles complex aggregate creation."
  },
  {
    id: 87,
    question: "What is the Module pattern in DDD?",
    options: ["ES Module", "Groups related domain concepts", "Package pattern", "Namespace pattern"],
    answer: "Groups related domain concepts",
    explanation: "DDD Modules organize domain model into cohesive parts."
  },
  {
    id: 88,
    question: "What is the Shared Kernel pattern?",
    options: ["Core library", "Shared subset between bounded contexts", "Common module", "Base library"],
    answer: "Shared subset between bounded contexts",
    explanation: "Shared Kernel is jointly maintained code between teams."
  },
  {
    id: 89,
    question: "What is the Context Map pattern?",
    options: ["Navigation", "Documents relationships between bounded contexts", "Architecture diagram", "Integration map"],
    answer: "Documents relationships between bounded contexts",
    explanation: "Context Map shows how bounded contexts integrate."
  },
  {
    id: 90,
    question: "What is the Conformist pattern?",
    options: ["Following rules", "Downstream conforms to upstream model", "Compliance pattern", "Adapter pattern"],
    answer: "Downstream conforms to upstream model",
    explanation: "Conformist accepts upstream's model without translation."
  },
  {
    id: 91,
    question: "What is the Customer/Supplier pattern?",
    options: ["Business relationship", "Upstream team plans for downstream needs", "Service pattern", "Provider pattern"],
    answer: "Upstream team plans for downstream needs",
    explanation: "Customer/Supplier defines collaboration between contexts."
  },
  {
    id: 92,
    question: "What is the Open Host Service pattern?",
    options: ["Open API", "Exposes well-defined protocol for integration", "Public API", "Service pattern"],
    answer: "Exposes well-defined protocol for integration",
    explanation: "Open Host Service provides stable integration interface."
  },
  {
    id: 93,
    question: "What is the Published Language pattern?",
    options: ["Documentation", "Well-documented model for integration", "Schema pattern", "Contract pattern"],
    answer: "Well-documented model for integration",
    explanation: "Published Language is a documented data exchange format."
  },
  {
    id: 94,
    question: "What is the Separate Ways pattern?",
    options: ["Breaking up", "Bounded contexts with no integration", "Isolation pattern", "Independence pattern"],
    answer: "Bounded contexts with no integration",
    explanation: "Separate Ways means no integration between contexts."
  },
  {
    id: 95,
    question: "What is the Big Ball of Mud pattern?",
    options: ["Dirty code", "Unstructured system with no clear architecture", "Anti-pattern", "Legacy system"],
    answer: "Unstructured system with no clear architecture",
    explanation: "Big Ball of Mud is the anti-pattern of ad-hoc structure."
  },
  {
    id: 96,
    question: "What is the God Object anti-pattern?",
    options: ["Divine object", "Object that knows or does too much", "Controller object", "Manager object"],
    answer: "Object that knows or does too much",
    explanation: "God Objects violate single responsibility principle."
  },
  {
    id: 97,
    question: "What is the Anemic Domain Model anti-pattern?",
    options: ["Weak model", "Domain objects with only getters/setters, no behavior", "Empty model", "Data model"],
    answer: "Domain objects with only getters/setters, no behavior",
    explanation: "Anemic models have business logic in services, not entities."
  },
  {
    id: 98,
    question: "What is the Hexagonal Architecture?",
    options: ["Six-sided", "Ports and adapters separating core from infrastructure", "Clean Architecture", "Layered Architecture"],
    answer: "Ports and adapters separating core from infrastructure",
    explanation: "Hexagonal Architecture isolates domain from external concerns."
  },
  {
    id: 99,
    question: "What is Clean Architecture?",
    options: ["Tidy code", "Concentric layers with dependencies pointing inward", "SOLID Architecture", "Onion Architecture"],
    answer: "Concentric layers with dependencies pointing inward",
    explanation: "Clean Architecture keeps business logic independent of frameworks."
  },
  {
    id: 100,
    question: "What is the Dependency Rule in Clean Architecture?",
    options: ["DI rule", "Dependencies must point inward toward higher-level policies", "Import rule", "Module rule"],
    answer: "Dependencies must point inward toward higher-level policies",
    explanation: "Outer layers depend on inner; inner never knows outer."
  }
];

export default questions;
