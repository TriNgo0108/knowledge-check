import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "How do you declare a variable in modern JavaScript?",
    options: ["var x", "let x", "const x", "Both let and const"],
    answer: "Both let and const",
    explanation: "let for mutable variables, const for immutable bindings. var is legacy."
  },
  {
    id: 2,
    question: "What is the difference between let and const?",
    options: ["No difference", "let can be reassigned, const cannot", "const can be reassigned", "let is faster"],
    answer: "let can be reassigned, const cannot",
    explanation: "const creates a constant binding; the value can't be reassigned."
  },
  {
    id: 3,
    question: "How do you print to the console?",
    options: ["print()", "console.log()", "echo()", "System.out.println()"],
    answer: "console.log()",
    explanation: "console.log() outputs to the browser or Node.js console."
  },
  {
    id: 4,
    question: "What is the correct syntax for an if statement?",
    options: ["if x == 5:", "if (x === 5) {}", "if x === 5 then", "if (x === 5):"],
    answer: "if (x === 5) {}",
    explanation: "JavaScript uses parentheses for condition and braces for body."
  },
  {
    id: 5,
    question: "What is the difference between == and ===?",
    options: ["Same thing", "=== checks type and value, == only value", "=== is deprecated", "== is stricter"],
    answer: "=== checks type and value, == only value",
    explanation: "=== is strict equality; == uses type coercion."
  },
  {
    id: 6,
    question: "How do you create an array?",
    options: ["array = (1, 2, 3)", "array = [1, 2, 3]", "array = {1, 2, 3}", "Array(1, 2, 3)"],
    answer: "array = [1, 2, 3]",
    explanation: "Arrays use square brackets in JavaScript."
  },
  {
    id: 7,
    question: "How do you access the first element of an array?",
    options: ["arr[1]", "arr[0]", "arr.first()", "arr.get(0)"],
    answer: "arr[0]",
    explanation: "JavaScript uses 0-based indexing."
  },
  {
    id: 8,
    question: "How do you define a function?",
    options: ["def myFunc():", "function myFunc() {}", "func myFunc() {}", "define myFunc() {}"],
    answer: "function myFunc() {}",
    explanation: "function keyword declares a function."
  },
  {
    id: 9,
    question: "What is an arrow function?",
    options: ["Drawing function", "(x) => x * 2", "function(x) => x * 2", "arrow(x) x * 2"],
    answer: "(x) => x * 2",
    explanation: "Arrow functions provide concise syntax: (params) => expression."
  },
  {
    id: 10,
    question: "How do you create an object?",
    options: ["obj = (key: value)", "obj = [key: value]", "obj = {key: value}", "obj = <key: value>"],
    answer: "obj = {key: value}",
    explanation: "Objects use curly braces with key-value pairs."
  },
  {
    id: 11,
    question: "What are primitive data types in JavaScript?",
    options: ["Only numbers", "string, number, boolean, null, undefined, symbol, bigint", "array, object", "int, float, char"],
    answer: "string, number, boolean, null, undefined, symbol, bigint",
    explanation: "JavaScript has 7 primitive types; everything else is an object."
  },
  {
    id: 12,
    question: "What is typeof used for?",
    options: ["Creating types", "Checking the type of a value", "Type conversion", "Type casting"],
    answer: "Checking the type of a value",
    explanation: "typeof returns a string indicating the type: typeof 5 === 'number'."
  },
  {
    id: 13,
    question: "What is NaN?",
    options: ["Not a Name", "Not a Number", "Null and None", "Negative Number"],
    answer: "Not a Number",
    explanation: "NaN represents an invalid number result."
  },
  {
    id: 14,
    question: "How do you write a for loop?",
    options: ["for i in range(5)", "for (let i = 0; i < 5; i++) {}", "for i = 0 to 5", "loop(5)"],
    answer: "for (let i = 0; i < 5; i++) {}",
    explanation: "JavaScript uses C-style for loops."
  },
  {
    id: 15,
    question: "What does .push() do to an array?",
    options: ["Removes first element", "Adds element to end", "Adds element to beginning", "Sorts array"],
    answer: "Adds element to end",
    explanation: "push() appends elements to the end of an array."
  },
  {
    id: 16,
    question: "What does .pop() do to an array?",
    options: ["Adds element", "Removes and returns last element", "Removes first element", "Clears array"],
    answer: "Removes and returns last element",
    explanation: "pop() removes the last element and returns it."
  },
  {
    id: 17,
    question: "How do you get the length of a string?",
    options: ["str.length()", "str.length", "len(str)", "str.size()"],
    answer: "str.length",
    explanation: "length is a property, not a method, for strings and arrays."
  },
  {
    id: 18,
    question: "What is template literal syntax?",
    options: ["'Hello {name}'", "\"Hello ${name}\"", "`Hello ${name}`", "f\"Hello {name}\""],
    answer: "`Hello ${name}`",
    explanation: "Template literals use backticks and ${} for interpolation."
  },
  {
    id: 19,
    question: "What is undefined in JavaScript?",
    options: ["Error", "Variable declared but not assigned", "Null value", "Empty string"],
    answer: "Variable declared but not assigned",
    explanation: "undefined is the default value of uninitialized variables."
  },
  {
    id: 20,
    question: "What is null in JavaScript?",
    options: ["Same as undefined", "Intentional absence of value", "Error", "Zero"],
    answer: "Intentional absence of value",
    explanation: "null represents an intentional non-value, while undefined means not assigned."
  },
  {
    id: 21,
    question: "How do you convert a string to a number?",
    options: ["(int)str", "parseInt(str) or Number(str)", "str.toNumber()", "convert(str)"],
    answer: "parseInt(str) or Number(str)",
    explanation: "parseInt, parseFloat, or Number() convert strings to numbers."
  },
  {
    id: 22,
    question: "What does .map() do?",
    options: ["Creates a map object", "Transforms each element and returns new array", "Maps keys to values", "Geographic map"],
    answer: "Transforms each element and returns new array",
    explanation: "map() applies a function to each element, returning a new array."
  },
  {
    id: 23,
    question: "What does .filter() do?",
    options: ["Removes all elements", "Keeps elements that pass a test", "Sorts elements", "Groups elements"],
    answer: "Keeps elements that pass a test",
    explanation: "filter() returns a new array with elements passing the test."
  },
  {
    id: 24,
    question: "What does .reduce() do?",
    options: ["Makes array smaller", "Reduces to single value by accumulation", "Removes duplicates", "Filters values"],
    answer: "Reduces to single value by accumulation",
    explanation: "reduce() accumulates array into a single value: arr.reduce((acc, val) => acc + val)."
  },
  {
    id: 25,
    question: "How do you check if a value is in an array?",
    options: ["value in array", "array.contains(value)", "array.includes(value)", "array.has(value)"],
    answer: "array.includes(value)",
    explanation: "includes() returns true if array contains the value."
  },
  {
    id: 26,
    question: "What is JSON?",
    options: ["JavaScript function", "JavaScript Object Notation", "Java Script ON", "JSON Object Native"],
    answer: "JavaScript Object Notation",
    explanation: "JSON is a text format for data interchange based on JavaScript syntax."
  },
  {
    id: 27,
    question: "How do you parse a JSON string?",
    options: ["JSON.decode()", "JSON.parse()", "parseJSON()", "JSON.read()"],
    answer: "JSON.parse()",
    explanation: "JSON.parse() converts a JSON string to a JavaScript object."
  },
  {
    id: 28,
    question: "How do you convert an object to JSON string?",
    options: ["JSON.encode()", "JSON.stringify()", "toString()", "JSON.write()"],
    answer: "JSON.stringify()",
    explanation: "JSON.stringify() converts an object to a JSON string."
  },
  {
    id: 29,
    question: "What is the spread operator?",
    options: ["**", "...", "++", "--"],
    answer: "...",
    explanation: "... spreads array/object elements: [...arr, 4, 5] or {...obj, key: val}."
  },
  {
    id: 30,
    question: "What is destructuring?",
    options: ["Destroying objects", "Extracting values from arrays/objects", "Combining objects", "Cloning objects"],
    answer: "Extracting values from arrays/objects",
    explanation: "const {name, age} = person; extracts properties into variables."
  },
  {
    id: 31,
    question: "What is the ternary operator?",
    options: ["? :", "&&", "||", "??"],
    answer: "? :",
    explanation: "condition ? valueIfTrue : valueIfFalse is the ternary operator."
  },
  {
    id: 32,
    question: "How do you add an event listener?",
    options: ["element.on('click', fn)", "element.addEventListener('click', fn)", "element.click(fn)", "addEvent(element, 'click', fn)"],
    answer: "element.addEventListener('click', fn)",
    explanation: "addEventListener attaches event handlers to DOM elements."
  },
  {
    id: 33,
    question: "What is the DOM?",
    options: ["JavaScript library", "Document Object Model", "Data Object Map", "Dynamic Object Manager"],
    answer: "Document Object Model",
    explanation: "DOM is the programming interface for HTML/XML documents."
  },
  {
    id: 34,
    question: "How do you select an element by ID?",
    options: ["$(\"#id\")", "document.getElementById('id')", "document.querySelector('#id')", "Both B and C"],
    answer: "Both B and C",
    explanation: "getElementById or querySelector('#id') both work for ID selection."
  },
  {
    id: 35,
    question: "What is a callback function?",
    options: ["Phone callback", "Function passed as argument to another function", "Recursive function", "Return function"],
    answer: "Function passed as argument to another function",
    explanation: "Callbacks are functions passed to other functions to be executed later."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is a Promise?",
    options: ["Marriage promise", "Object representing eventual completion of async operation", "Function promise", "Thread object"],
    answer: "Object representing eventual completion of async operation",
    explanation: "Promises wrap async operations, providing .then() and .catch() methods."
  },
  {
    id: 37,
    question: "What are the three states of a Promise?",
    options: ["start, middle, end", "pending, fulfilled, rejected", "ready, running, complete", "open, closed, error"],
    answer: "pending, fulfilled, rejected",
    explanation: "Promises start pending, then become fulfilled or rejected."
  },
  {
    id: 38,
    question: "What is async/await?",
    options: ["Async library", "Syntax for working with Promises more easily", "Parallel processing", "Web API"],
    answer: "Syntax for working with Promises more easily",
    explanation: "async/await makes async code look synchronous."
  },
  {
    id: 39,
    question: "What does await do?",
    options: ["Pauses execution until Promise resolves", "Creates a Promise", "Runs in parallel", "Cancels Promise"],
    answer: "Pauses execution until Promise resolves",
    explanation: "await pauses async function until the Promise settles."
  },
  {
    id: 40,
    question: "What is closure?",
    options: ["Closing a function", "Function having access to outer scope variables", "Ending execution", "Garbage collection"],
    answer: "Function having access to outer scope variables",
    explanation: "Closures remember the environment where they were created."
  },
  {
    id: 41,
    question: "What is hoisting?",
    options: ["Lifting weights", "Moving declarations to top of scope", "Error handling", "Optimization"],
    answer: "Moving declarations to top of scope",
    explanation: "JavaScript hoists var and function declarations to the top of their scope."
  },
  {
    id: 42,
    question: "What is the difference between var, let, and const?",
    options: ["No difference", "var is function-scoped; let/const are block-scoped", "let is function-scoped", "const is global"],
    answer: "var is function-scoped; let/const are block-scoped",
    explanation: "let and const have block scope; var has function scope and is hoisted."
  },
  {
    id: 43,
    question: "What is 'this' keyword?",
    options: ["Current file", "Reference to current execution context", "Global object always", "Parent function"],
    answer: "Reference to current execution context",
    explanation: "'this' refers to the object calling the function or the execution context."
  },
  {
    id: 44,
    question: "What methods change 'this' binding?",
    options: ["bind(), call(), apply()", "this(), that(), self()", "set(), get(), bind()", "change(), modify()"],
    answer: "bind(), call(), apply()",
    explanation: "bind returns new function; call/apply invoke with specified 'this'."
  },
  {
    id: 45,
    question: "What is the event loop?",
    options: ["Loop event", "Mechanism handling async callbacks", "For loop for events", "Event handler"],
    answer: "Mechanism handling async callbacks",
    explanation: "Event loop processes callbacks from the task queue when call stack is empty."
  },
  {
    id: 46,
    question: "What is the callback queue?",
    options: ["Array of callbacks", "Queue holding async callbacks for event loop", "Priority queue", "LIFO stack"],
    answer: "Queue holding async callbacks for event loop",
    explanation: "Callbacks wait in the queue until the call stack is empty."
  },
  {
    id: 47,
    question: "What is the difference between microtasks and macrotasks?",
    options: ["Same thing", "Microtasks run before macrotasks in each event loop tick", "Macrotasks are smaller", "Microtasks are slower"],
    answer: "Microtasks run before macrotasks in each event loop tick",
    explanation: "Promise callbacks (microtasks) run before setTimeout callbacks (macrotasks)."
  },
  {
    id: 48,
    question: "What does fetch() return?",
    options: ["Data directly", "Promise that resolves to Response", "JSON object", "String"],
    answer: "Promise that resolves to Response",
    explanation: "fetch() returns a Promise; use .json() to parse the body."
  },
  {
    id: 49,
    question: "What is optional chaining?",
    options: ["Chain of options", "?. to safely access nested properties", "Optional parameters", "Chain pattern"],
    answer: "?. to safely access nested properties",
    explanation: "obj?.prop?.nested returns undefined instead of error if null/undefined."
  },
  {
    id: 50,
    question: "What is nullish coalescing?",
    options: ["Null checking", "?? operator returning right side if left is null/undefined", "Combining nulls", "Null assignment"],
    answer: "?? operator returning right side if left is null/undefined",
    explanation: "x ?? default returns default only if x is null or undefined."
  },
  {
    id: 51,
    question: "What is a class in JavaScript?",
    options: ["CSS class", "Syntactic sugar for constructor functions", "Abstract type", "Module type"],
    answer: "Syntactic sugar for constructor functions",
    explanation: "Classes are syntactic sugar over prototype-based inheritance."
  },
  {
    id: 52,
    question: "What is 'extends' used for?",
    options: ["Extending strings", "Class inheritance", "Extending arrays", "Adding methods"],
    answer: "Class inheritance",
    explanation: "class Child extends Parent creates inheritance relationship."
  },
  {
    id: 53,
    question: "What is super() used for?",
    options: ["Super power", "Calling parent class constructor", "Super class creation", "Superior method"],
    answer: "Calling parent class constructor",
    explanation: "super() calls the parent constructor; super.method() calls parent methods."
  },
  {
    id: 54,
    question: "What is a getter and setter?",
    options: ["Get/Set functions", "Methods to access/modify properties", "API calls", "Variable types"],
    answer: "Methods to access/modify properties",
    explanation: "get prop() and set prop(val) define computed properties."
  },
  {
    id: 55,
    question: "What is a static method?",
    options: ["Slow method", "Method on class itself, not instances", "Cached method", "Immutable method"],
    answer: "Method on class itself, not instances",
    explanation: "Static methods are called on the class: Class.staticMethod()."
  },
  {
    id: 56,
    question: "What are private class fields?",
    options: ["Hidden methods", "Fields prefixed with # that are truly private", "Protected fields", "Internal methods"],
    answer: "Fields prefixed with # that are truly private",
    explanation: "#privateField can only be accessed within the class."
  },
  {
    id: 57,
    question: "What is a module in JavaScript?",
    options: ["Script tag", "File with its own scope using import/export", "Function", "Object"],
    answer: "File with its own scope using import/export",
    explanation: "ES Modules use import/export for code organization."
  },
  {
    id: 58,
    question: "What is the difference between named and default exports?",
    options: ["No difference", "Named exports are imported by name; default can have any name", "Default is faster", "Named is deprecated"],
    answer: "Named exports are imported by name; default can have any name",
    explanation: "import {named} vs import anyName from 'module'."
  },
  {
    id: 59,
    question: "What is the prototype chain?",
    options: ["Array chain", "Inheritance chain through prototypes", "Chain of functions", "Event chain"],
    answer: "Inheritance chain through prototypes",
    explanation: "Objects inherit from their prototype, which may inherit from another."
  },
  {
    id: 60,
    question: "What is Object.keys() used for?",
    options: ["Creating keys", "Returns array of object's enumerable property names", "Key encryption", "Locking object"],
    answer: "Returns array of object's enumerable property names",
    explanation: "Object.keys({a: 1, b: 2}) returns ['a', 'b']."
  },
  {
    id: 61,
    question: "What does Object.assign() do?",
    options: ["Assigns variables", "Copies properties from sources to target", "Creates assignment", "Checks equality"],
    answer: "Copies properties from sources to target",
    explanation: "Object.assign(target, source) copies properties to target."
  },
  {
    id: 62,
    question: "What is Object.freeze()?",
    options: ["Pauses object", "Makes object immutable", "Caches object", "Serializes object"],
    answer: "Makes object immutable",
    explanation: "freeze() prevents modifications to an object."
  },
  {
    id: 63,
    question: "What is a Set?",
    options: ["Array type", "Collection of unique values", "Object type", "Method set"],
    answer: "Collection of unique values",
    explanation: "Set stores unique values of any type."
  },
  {
    id: 64,
    question: "What is a Map?",
    options: ["Geographic map", "Key-value collection with any key type", "Array map method", "Object type"],
    answer: "Key-value collection with any key type",
    explanation: "Map allows any value (including objects) as keys."
  },
  {
    id: 65,
    question: "What is a WeakMap?",
    options: ["Slow map", "Map with weak references to keys", "Small map", "Old map"],
    answer: "Map with weak references to keys",
    explanation: "WeakMap keys are weakly held, allowing garbage collection."
  },
  {
    id: 66,
    question: "What is the difference between for...in and for...of?",
    options: ["Same thing", "for...in iterates keys, for...of iterates values", "for...of is deprecated", "for...in is faster"],
    answer: "for...in iterates keys, for...of iterates values",
    explanation: "for...in is for object properties; for...of is for iterable values."
  },
  {
    id: 67,
    question: "What is a Symbol?",
    options: ["Icon", "Unique and immutable primitive value", "String constant", "Object key"],
    answer: "Unique and immutable primitive value",
    explanation: "Symbols create unique keys that don't collide with other properties."
  },
  {
    id: 68,
    question: "What is localStorage?",
    options: ["Local variable", "Web storage API for persistent key-value storage", "Local function", "Session data"],
    answer: "Web storage API for persistent key-value storage",
    explanation: "localStorage stores data with no expiration date."
  },
  {
    id: 69,
    question: "What is the difference between localStorage and sessionStorage?",
    options: ["Same thing", "localStorage persists; sessionStorage clears on tab close", "sessionStorage is larger", "localStorage is faster"],
    answer: "localStorage persists; sessionStorage clears on tab close",
    explanation: "sessionStorage is cleared when the browser tab is closed."
  },
  {
    id: 70,
    question: "What is event bubbling?",
    options: ["Animation effect", "Event propagating up through parent elements", "Event creation", "Bubble chart event"],
    answer: "Event propagating up through parent elements",
    explanation: "When an event fires, it bubbles up through the DOM tree."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is event capturing?",
    options: ["Recording events", "Event propagating down from ancestors to target", "Event logging", "Event filtering"],
    answer: "Event propagating down from ancestors to target",
    explanation: "Capturing phase runs before bubbling; set useCapture: true for it."
  },
  {
    id: 72,
    question: "What is event delegation?",
    options: ["Delegating tasks", "Handling events on parent for child elements", "Event forwarding", "Event copying"],
    answer: "Handling events on parent for child elements",
    explanation: "Delegate to parent to handle events on dynamically added children."
  },
  {
    id: 73,
    question: "What is debouncing?",
    options: ["Removing bounce", "Delaying function execution until pause in calls", "Error prevention", "Animation smoothing"],
    answer: "Delaying function execution until pause in calls",
    explanation: "Debounce waits for calls to stop before executing."
  },
  {
    id: 74,
    question: "What is throttling?",
    options: ["Speed limit", "Limiting function execution to once per time period", "Slowing down", "Rate limiting API"],
    answer: "Limiting function execution to once per time period",
    explanation: "Throttle ensures function runs at most once per interval."
  },
  {
    id: 75,
    question: "What is a Proxy in JavaScript?",
    options: ["Server proxy", "Object wrapping another to intercept operations", "API proxy", "Network proxy"],
    answer: "Object wrapping another to intercept operations",
    explanation: "Proxy traps operations like get, set, and apply on objects."
  },
  {
    id: 76,
    question: "What is Reflect API?",
    options: ["Mirror API", "Object with methods for interceptable operations", "Reflection pattern", "Debug API"],
    answer: "Object with methods for interceptable operations",
    explanation: "Reflect provides methods matching Proxy traps."
  },
  {
    id: 77,
    question: "What is a generator function?",
    options: ["Code generator", "Function that can be paused and resumed with yield", "Random generator", "Factory function"],
    answer: "Function that can be paused and resumed with yield",
    explanation: "function* with yield creates an iterator that pauses at each yield."
  },
  {
    id: 78,
    question: "What is an iterator?",
    options: ["Loop counter", "Object with next() method returning {value, done}", "Array method", "Cursor"],
    answer: "Object with next() method returning {value, done}",
    explanation: "Iterators provide sequential access via the iterator protocol."
  },
  {
    id: 79,
    question: "What is Symbol.iterator?",
    options: ["Iterator name", "Well-known symbol making object iterable", "Iterator function", "Loop symbol"],
    answer: "Well-known symbol making object iterable",
    explanation: "Implementing [Symbol.iterator] makes objects work with for...of."
  },
  {
    id: 80,
    question: "What is Promise.all()?",
    options: ["Resolves all promises", "Waits for all promises, fails if any reject", "Creates all promises", "Runs all in sequence"],
    answer: "Waits for all promises, fails if any reject",
    explanation: "Promise.all resolves when all resolve, rejects if any reject."
  },
  {
    id: 81,
    question: "What is Promise.race()?",
    options: ["Fastest promise wins", "Settles with first promise to settle", "Parallel promises", "Sequential promises"],
    answer: "Settles with first promise to settle",
    explanation: "Promise.race resolves/rejects with the first promise to complete."
  },
  {
    id: 82,
    question: "What is Promise.allSettled()?",
    options: ["All must resolve", "Waits for all promises regardless of result", "Settled promises only", "All rejected"],
    answer: "Waits for all promises regardless of result",
    explanation: "allSettled waits for all to complete, never short-circuits."
  },
  {
    id: 83,
    question: "What is the Temporal Dead Zone (TDZ)?",
    options: ["Time zone", "Period where let/const exist but can't be accessed", "Memory zone", "Dead code"],
    answer: "Period where let/const exist but can't be accessed",
    explanation: "TDZ is from scope entry until variable declaration is reached."
  },
  {
    id: 84,
    question: "What is IIFE?",
    options: ["Internet standard", "Immediately Invoked Function Expression", "Interface definition", "Import format"],
    answer: "Immediately Invoked Function Expression",
    explanation: "(function(){})() executes immediately, creating a private scope."
  },
  {
    id: 85,
    question: "What is currying?",
    options: ["Food preparation", "Transforming multi-arg function to series of single-arg", "Curry pattern", "Optimization"],
    answer: "Transforming multi-arg function to series of single-arg",
    explanation: "Currying: f(a,b,c) becomes f(a)(b)(c)."
  },
  {
    id: 86,
    question: "What is memoization?",
    options: ["Memory allocation", "Caching function results for same inputs", "Memorizing code", "Creating memos"],
    answer: "Caching function results for same inputs",
    explanation: "Memoization stores results to avoid recalculating."
  },
  {
    id: 87,
    question: "What is the difference between shallow and deep copy?",
    options: ["Same thing", "Shallow copies references; deep copies all nested values", "Deep is faster", "Shallow goes deeper"],
    answer: "Shallow copies references; deep copies all nested values",
    explanation: "Shallow copy: {...obj}. Deep copy: structuredClone(obj) or JSON methods."
  },
  {
    id: 88,
    question: "What is structuredClone()?",
    options: ["DOM cloning", "Deep cloning objects including complex types", "Template cloning", "Shallow copy"],
    answer: "Deep cloning objects including complex types",
    explanation: "structuredClone() creates true deep copies, handling many types."
  },
  {
    id: 89,
    question: "What are Web Workers?",
    options: ["Website workers", "Background threads for heavy computation", "Service providers", "API workers"],
    answer: "Background threads for heavy computation",
    explanation: "Web Workers run scripts in background threads."
  },
  {
    id: 90,
    question: "What is a Service Worker?",
    options: ["Customer service", "Script acting as proxy for network requests", "Background service", "Worker thread"],
    answer: "Script acting as proxy for network requests",
    explanation: "Service Workers enable offline functionality and caching."
  },
  {
    id: 91,
    question: "What is the Intersection Observer API?",
    options: ["Collision detection", "Observing element visibility in viewport", "Array intersection", "Event intersection"],
    answer: "Observing element visibility in viewport",
    explanation: "Intersection Observer detects when elements enter/exit viewport."
  },
  {
    id: 92,
    question: "What is a MutationObserver?",
    options: ["Gene observer", "Watching for DOM changes", "Variable mutation", "State observer"],
    answer: "Watching for DOM changes",
    explanation: "MutationObserver monitors DOM modifications."
  },
  {
    id: 93,
    question: "What is requestAnimationFrame?",
    options: ["Animation request", "Scheduling callback before next repaint", "Frame request API", "Animation loop"],
    answer: "Scheduling callback before next repaint",
    explanation: "requestAnimationFrame syncs with display refresh for smooth animations."
  },
  {
    id: 94,
    question: "What is the module pattern?",
    options: ["Import syntax", "Pattern for encapsulation using closures", "Export pattern", "File pattern"],
    answer: "Pattern for encapsulation using closures",
    explanation: "Module pattern uses IIFEs and closures for private state."
  },
  {
    id: 95,
    question: "What is Object.getOwnPropertyDescriptor()?",
    options: ["Property description", "Returns property's configuration object", "Defines properties", "Lists properties"],
    answer: "Returns property's configuration object",
    explanation: "Returns {value, writable, enumerable, configurable} for a property."
  },
  {
    id: 96,
    question: "What are property descriptors?",
    options: ["Property names", "Objects defining property characteristics", "Property types", "Property docs"],
    answer: "Objects defining property characteristics",
    explanation: "Descriptors define value, writable, enumerable, configurable."
  },
  {
    id: 97,
    question: "What is Object.defineProperty()?",
    options: ["Creates objects", "Defines new or modifies existing property", "Deletes property", "Copies property"],
    answer: "Defines new or modifies existing property",
    explanation: "defineProperty allows fine-grained control over property behavior."
  },
  {
    id: 98,
    question: "What is tail call optimization?",
    options: ["Animal optimization", "Optimization for recursive calls in tail position", "Array optimization", "Loop optimization"],
    answer: "Optimization for recursive calls in tail position",
    explanation: "TCO reuses stack frame for tail-position function calls."
  },
  {
    id: 99,
    question: "What is the AbortController?",
    options: ["Error handler", "API to abort fetch and other async operations", "Process killer", "Event stopper"],
    answer: "API to abort fetch and other async operations",
    explanation: "AbortController provides a signal to cancel fetch requests."
  },
  {
    id: 100,
    question: "What is the difference between call stack and heap?",
    options: ["Same thing", "Stack for function calls (LIFO); heap for object storage", "Heap is faster", "Stack stores objects"],
    answer: "Stack for function calls (LIFO); heap for object storage",
    explanation: "Call stack tracks execution; heap stores objects and closures."
  }
];

export default questions;
