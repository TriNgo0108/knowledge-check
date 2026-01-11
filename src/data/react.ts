import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is React?",
    options: ["A full framework", "A UI library for building user interfaces", "A backend framework", "A database"],
    answer: "A UI library for building user interfaces",
    explanation: "React is a JavaScript library for building user interfaces, primarily for single-page applications."
  },
  {
    id: 2,
    question: "What is JSX?",
    options: ["JavaScript XML - syntax extension for JS", "A new programming language", "JSON extension", "Java syntax extension"],
    answer: "JavaScript XML - syntax extension for JS",
    explanation: "JSX allows writing HTML-like syntax in JavaScript that compiles to React.createElement calls."
  },
  {
    id: 3,
    question: "How do you create a functional component?",
    options: ["class MyComponent extends React.Component", "function MyComponent() { return <div /> }", "new Component()", "React.createComponent()"],
    answer: "function MyComponent() { return <div /> }",
    explanation: "Functional components are JavaScript functions that return JSX."
  },
  {
    id: 4,
    question: "What is the correct way to pass props to a component?",
    options: ["<Component props={value}>", "<Component name={value}>", "<Component.props = value>", "Component(props)"],
    answer: "<Component name={value}>",
    explanation: "Props are passed as attributes: <Component propName={value} />."
  },
  {
    id: 5,
    question: "How do you access props in a functional component?",
    options: ["this.props", "props parameter", "getProps()", "React.props"],
    answer: "props parameter",
    explanation: "Functional components receive props as their first parameter."
  },
  {
    id: 6,
    question: "What hook is used for state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
    explanation: "useState returns a state variable and a setter function."
  },
  {
    id: 7,
    question: "What is the correct useState syntax?",
    options: ["const state = useState(0)", "const [count, setCount] = useState(0)", "const {count} = useState(0)", "useState(count, 0)"],
    answer: "const [count, setCount] = useState(0)",
    explanation: "useState returns an array: [stateValue, setterFunction]."
  },
  {
    id: 8,
    question: "How do you handle events in React?",
    options: ["onclick='handler()'", "onClick={handler}", "on-click={handler}", "@click='handler'"],
    answer: "onClick={handler}",
    explanation: "React uses camelCase event names and passes function references."
  },
  {
    id: 9,
    question: "What is the purpose of the key prop in lists?",
    options: ["Styling", "Helps React identify which items changed", "Sorting", "Filtering"],
    answer: "Helps React identify which items changed",
    explanation: "Keys help React efficiently update the DOM by identifying elements."
  },
  {
    id: 10,
    question: "How do you conditionally render content?",
    options: ["if statements only", "{condition && <Component />}", "v-if directive", "Both A and B"],
    answer: "Both A and B",
    explanation: "You can use if statements or logical && / ternary operators in JSX."
  },
  {
    id: 11,
    question: "What is the virtual DOM?",
    options: ["Real DOM", "In-memory representation of the real DOM", "Shadow DOM", "HTML DOM"],
    answer: "In-memory representation of the real DOM",
    explanation: "Virtual DOM is a lightweight copy used for diffing before updating real DOM."
  },
  {
    id: 12,
    question: "How do you render a list of items?",
    options: ["for loop in JSX", "items.map(item => <li>{item}</li>)", "forEach in JSX", "while loop"],
    answer: "items.map(item => <li>{item}</li>)",
    explanation: "Use map() to transform array items into JSX elements."
  },
  {
    id: 13,
    question: "What is a controlled component?",
    options: ["Component with state", "Form element whose value is controlled by React state", "Styled component", "Class component"],
    answer: "Form element whose value is controlled by React state",
    explanation: "Controlled inputs have their value tied to state and update via onChange."
  },
  {
    id: 14,
    question: "How do you prevent default form submission?",
    options: ["return false", "e.preventDefault()", "stopSubmit()", "cancel()"],
    answer: "e.preventDefault()",
    explanation: "Call preventDefault() on the event object to stop default behavior."
  },
  {
    id: 15,
    question: "What is props.children?",
    options: ["Child components array", "Content passed between component tags", "Component state", "Nested props"],
    answer: "Content passed between component tags",
    explanation: "<Parent>content</Parent> - 'content' is accessible via props.children."
  },
  {
    id: 16,
    question: "How do you import a component?",
    options: ["require('Component')", "import Component from './Component'", "#include Component", "using Component"],
    answer: "import Component from './Component'",
    explanation: "ES6 import syntax is used for importing components."
  },
  {
    id: 17,
    question: "What file extension is commonly used for React components?",
    options: [".js only", ".jsx or .tsx", ".react", ".component"],
    answer: ".jsx or .tsx",
    explanation: ".jsx for JavaScript, .tsx for TypeScript React components."
  },
  {
    id: 18,
    question: "What is the root element typically rendered to?",
    options: ["<root>", "<div id='root'>", "<app>", "<react>"],
    answer: "<div id='root'>",
    explanation: "React apps typically mount to a div with id='root' in index.html."
  },
  {
    id: 19,
    question: "How do you apply inline styles?",
    options: ["style='color: red'", "style={{color: 'red'}}", "styles={color: red}", "css={{color: red}}"],
    answer: "style={{color: 'red'}}",
    explanation: "Inline styles use double braces with camelCase properties."
  },
  {
    id: 20,
    question: "What is the className prop for?",
    options: ["Component name", "CSS class name", "Instance name", "Type name"],
    answer: "CSS class name",
    explanation: "className is used instead of class for CSS in JSX."
  },
  {
    id: 21,
    question: "How do you pass a function as a prop?",
    options: ["<Child onClick={handleClick} />", "<Child onClick='handleClick()'>", "<Child onClick={handleClick()}>", "Both A and C"],
    answer: "<Child onClick={handleClick} />",
    explanation: "Pass the function reference, not the call result (no parentheses)."
  },
  {
    id: 22,
    question: "What is fragment in React?",
    options: ["Broken component", "<> </> - groups elements without extra DOM node", "Partial render", "Component piece"],
    answer: "<> </> - groups elements without extra DOM node",
    explanation: "Fragments let you group elements without adding extra DOM elements."
  },
  {
    id: 23,
    question: "How do you create a React app?",
    options: ["npm create react-app", "npx create-react-app my-app", "react new my-app", "npm init react"],
    answer: "npx create-react-app my-app",
    explanation: "create-react-app is the official tool, now Vite is also popular."
  },
  {
    id: 24,
    question: "What is the purpose of StrictMode?",
    options: ["Strict typing", "Highlights potential problems in development", "Production mode", "Error handling"],
    answer: "Highlights potential problems in development",
    explanation: "StrictMode runs extra checks and warnings during development."
  },
  {
    id: 25,
    question: "How do you update state based on previous state?",
    options: ["setCount(count + 1)", "setCount(prev => prev + 1)", "count++", "Both A and B, but B is safer"],
    answer: "Both A and B, but B is safer",
    explanation: "Updater function ensures you're using the latest state value."
  },
  {
    id: 26,
    question: "What happens when you call setState?",
    options: ["Immediate update", "Triggers re-render with new state", "Updates DOM directly", "Nothing"],
    answer: "Triggers re-render with new state",
    explanation: "setState schedules a re-render with the updated state."
  },
  {
    id: 27,
    question: "Why shouldn't you mutate state directly?",
    options: ["Syntax error", "React won't detect changes and re-render", "Performance issues", "Security risk"],
    answer: "React won't detect changes and re-render",
    explanation: "React uses reference comparison; mutating doesn't create new reference."
  },
  {
    id: 28,
    question: "What is the spread operator used for in React?",
    options: ["Spreading styles", "Copying/merging objects and arrays immutably", "Spreading events", "Component spreading"],
    answer: "Copying/merging objects and arrays immutably",
    explanation: "Spread creates new objects/arrays for immutable state updates."
  },
  {
    id: 29,
    question: "How do you set default prop values?",
    options: ["defaultProps", "props = {default}", "Both A and default parameters", "PropTypes.default"],
    answer: "Both A and default parameters",
    explanation: "Use defaultProps or ES6 default parameters in function signature."
  },
  {
    id: 30,
    question: "What is PropTypes used for?",
    options: ["Type conversion", "Runtime type checking of props", "Compile-time types", "Prop storage"],
    answer: "Runtime type checking of props",
    explanation: "PropTypes validates props at runtime in development mode."
  },
  {
    id: 31,
    question: "How do you comment in JSX?",
    options: ["// comment", "<!-- comment -->", "{/* comment */}", "# comment"],
    answer: "{/* comment */}",
    explanation: "JSX comments use JavaScript comment syntax inside curly braces."
  },
  {
    id: 32,
    question: "What is the difference between state and props?",
    options: ["Same thing", "Props are external, state is internal", "State is external", "Props are mutable"],
    answer: "Props are external, state is internal",
    explanation: "Props come from parent; state is managed within the component."
  },
  {
    id: 33,
    question: "How do you bind 'this' in class components?",
    options: ["Automatic", "this.handler = this.handler.bind(this) in constructor", "No binding needed", "React handles it"],
    answer: "this.handler = this.handler.bind(this) in constructor",
    explanation: "Class methods need binding, or use arrow functions."
  },
  {
    id: 34,
    question: "What's the difference between class and functional components?",
    options: ["No difference", "Class uses this.state, functional uses hooks", "Functional can't have state", "Class is faster"],
    answer: "Class uses this.state, functional uses hooks",
    explanation: "Functional components with hooks are now preferred over classes."
  },
  {
    id: 35,
    question: "What does npm start do in a React project?",
    options: ["Builds for production", "Starts development server", "Runs tests", "Installs dependencies"],
    answer: "Starts development server",
    explanation: "npm start launches the development server with hot reloading."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is useEffect used for?",
    options: ["Visual effects", "Side effects like data fetching, subscriptions", "State effects", "CSS effects"],
    answer: "Side effects like data fetching, subscriptions",
    explanation: "useEffect handles side effects in functional components."
  },
  {
    id: 37,
    question: "When does useEffect run by default?",
    options: ["Only on mount", "After every render", "Only on unmount", "Before render"],
    answer: "After every render",
    explanation: "Without dependency array, useEffect runs after every render."
  },
  {
    id: 38,
    question: "How do you run useEffect only once on mount?",
    options: ["useEffect(fn)", "useEffect(fn, [])", "useEffect(fn, null)", "useOnce(fn)"],
    answer: "useEffect(fn, [])",
    explanation: "Empty dependency array means run only once when component mounts."
  },
  {
    id: 39,
    question: "What is the cleanup function in useEffect?",
    options: ["Memory cleaner", "Function returned that runs before next effect or unmount", "Error handler", "Performance optimizer"],
    answer: "Function returned that runs before next effect or unmount",
    explanation: "Return a cleanup function to unsubscribe, cancel requests, etc."
  },
  {
    id: 40,
    question: "What is useContext used for?",
    options: ["Creating context", "Consuming context without prop drilling", "Component context", "Function context"],
    answer: "Consuming context without prop drilling",
    explanation: "useContext reads context value directly in functional components."
  },
  {
    id: 41,
    question: "How do you create a context?",
    options: ["new Context()", "createContext(defaultValue)", "useContext.create()", "Context.new()"],
    answer: "createContext(defaultValue)",
    explanation: "React.createContext creates a context with optional default value."
  },
  {
    id: 42,
    question: "What is useReducer used for?",
    options: ["Reducing bundle size", "Complex state logic with actions", "Reducing renders", "Array reduce"],
    answer: "Complex state logic with actions",
    explanation: "useReducer handles complex state with reducer pattern like Redux."
  },
  {
    id: 43,
    question: "What is useRef used for?",
    options: ["References only", "Mutable ref that persists across renders, DOM access", "State reference", "Prop reference"],
    answer: "Mutable ref that persists across renders, DOM access",
    explanation: "useRef creates a mutable object that doesn't cause re-renders."
  },
  {
    id: 44,
    question: "How do you access a DOM element with useRef?",
    options: ["ref.element", "ref.current", "ref.dom", "ref.node"],
    answer: "ref.current",
    explanation: "The .current property holds the DOM element or value."
  },
  {
    id: 45,
    question: "What is useMemo used for?",
    options: ["Memorizing", "Memoizing expensive calculations", "Memory management", "Memo components"],
    answer: "Memoizing expensive calculations",
    explanation: "useMemo caches computed values to avoid recalculation."
  },
  {
    id: 46,
    question: "What is useCallback used for?",
    options: ["Callbacks", "Memoizing function references", "Call optimization", "Event callbacks"],
    answer: "Memoizing function references",
    explanation: "useCallback returns memoized callback to prevent re-creation."
  },
  {
    id: 47,
    question: "What is React.memo?",
    options: ["Memory component", "Higher-order component that memoizes render", "Memo hook", "Memory management"],
    answer: "Higher-order component that memoizes render",
    explanation: "React.memo skips re-render if props haven't changed."
  },
  {
    id: 48,
    question: "What is prop drilling?",
    options: ["Drilling animation", "Passing props through many intermediate components", "Prop validation", "Deep props"],
    answer: "Passing props through many intermediate components",
    explanation: "Prop drilling is when props pass through layers that don't use them."
  },
  {
    id: 49,
    question: "How does Context help with prop drilling?",
    options: ["Doesn't help", "Provides values to any descendant without passing through each level", "Removes props", "Compresses props"],
    answer: "Provides values to any descendant without passing through each level",
    explanation: "Context allows consuming values anywhere in the tree."
  },
  {
    id: 50,
    question: "What is a custom hook?",
    options: ["Third-party hook", "A function starting with 'use' that uses other hooks", "Customized useState", "Hook plugin"],
    answer: "A function starting with 'use' that uses other hooks",
    explanation: "Custom hooks extract and reuse stateful logic."
  },
  {
    id: 51,
    question: "What are the rules of hooks?",
    options: ["No rules", "Only call at top level, only in React functions", "Can call anywhere", "Only in classes"],
    answer: "Only call at top level, only in React functions",
    explanation: "Don't call hooks inside loops, conditions, or nested functions."
  },
  {
    id: 52,
    question: "What is React Router used for?",
    options: ["Internet routing", "Client-side routing in React apps", "API routing", "Server routing"],
    answer: "Client-side routing in React apps",
    explanation: "React Router handles navigation without page reloads."
  },
  {
    id: 53,
    question: "What is the useNavigate hook?",
    options: ["Navigator API", "Programmatic navigation in React Router", "GPS navigation", "Route navigation"],
    answer: "Programmatic navigation in React Router",
    explanation: "useNavigate returns a function to navigate programmatically."
  },
  {
    id: 54,
    question: "What is the useParams hook?",
    options: ["URL parameters", "Access dynamic URL parameters", "Query params", "Route params"],
    answer: "Access dynamic URL parameters",
    explanation: "useParams extracts parameters from the URL path."
  },
  {
    id: 55,
    question: "What is lazy loading in React?",
    options: ["Slow loading", "Loading components on demand with React.lazy", "Delayed render", "Background loading"],
    answer: "Loading components on demand with React.lazy",
    explanation: "React.lazy enables code splitting for better performance."
  },
  {
    id: 56,
    question: "What is Suspense used for?",
    options: ["Drama effect", "Displaying fallback while lazy components load", "Error handling", "Animation"],
    answer: "Displaying fallback while lazy components load",
    explanation: "Suspense shows loading UI while waiting for lazy components."
  },
  {
    id: 57,
    question: "What is the useLayoutEffect hook?",
    options: ["Layout styling", "Like useEffect but fires synchronously after DOM mutations", "CSS layout", "Grid effect"],
    answer: "Like useEffect but fires synchronously after DOM mutations",
    explanation: "useLayoutEffect runs before browser paints, useful for measurements."
  },
  {
    id: 58,
    question: "What is a portal in React?",
    options: ["Game portal", "Renders children into different DOM node", "Component portal", "State portal"],
    answer: "Renders children into different DOM node",
    explanation: "createPortal renders children outside the parent DOM hierarchy."
  },
  {
    id: 59,
    question: "What is an error boundary?",
    options: ["Error limit", "Component that catches JavaScript errors in children", "Try-catch block", "Error handler"],
    answer: "Component that catches JavaScript errors in children",
    explanation: "Error boundaries prevent entire app crashes from component errors."
  },
  {
    id: 60,
    question: "How do you create an error boundary?",
    options: ["useError hook", "Class component with static getDerivedStateFromError", "ErrorBoundary component", "try-catch in render"],
    answer: "Class component with static getDerivedStateFromError",
    explanation: "Error boundaries must be class components with specific lifecycle methods."
  },
  {
    id: 61,
    question: "What is the useId hook?",
    options: ["User ID", "Generates unique IDs for accessibility", "Component ID", "State ID"],
    answer: "Generates unique IDs for accessibility",
    explanation: "useId creates stable unique IDs for form labels and ARIA attributes."
  },
  {
    id: 62,
    question: "What is useTransition?",
    options: ["CSS transitions", "Marks state updates as non-urgent", "Page transitions", "Animation hook"],
    answer: "Marks state updates as non-urgent",
    explanation: "useTransition helps keep UI responsive during expensive updates."
  },
  {
    id: 63,
    question: "What is useDeferredValue?",
    options: ["Delayed value", "Defers re-rendering for a value", "Default value", "Async value"],
    answer: "Defers re-rendering for a value",
    explanation: "useDeferredValue lets less urgent parts of UI lag behind."
  },
  {
    id: 64,
    question: "What is the difference between controlled and uncontrolled inputs?",
    options: ["Same thing", "Controlled: React manages value; Uncontrolled: DOM manages", "Uncontrolled uses state", "Controlled is faster"],
    answer: "Controlled: React manages value; Uncontrolled: DOM manages",
    explanation: "Controlled inputs have value in state; uncontrolled use refs."
  },
  {
    id: 65,
    question: "What is forwardRef used for?",
    options: ["Forward navigation", "Passing refs through components to child DOM nodes", "Forward props", "Ref forwarding"],
    answer: "Passing refs through components to child DOM nodes",
    explanation: "forwardRef allows parent to get ref to child's DOM element."
  },
  {
    id: 66,
    question: "What is useImperativeHandle?",
    options: ["Imperative programming", "Customizes ref value exposed to parent", "Handle events", "Instance handle"],
    answer: "Customizes ref value exposed to parent",
    explanation: "useImperativeHandle controls what parent sees through ref."
  },
  {
    id: 67,
    question: "What is the useDebugValue hook?",
    options: ["Debugging", "Displays label in React DevTools for custom hooks", "Debug mode", "Value debugging"],
    answer: "Displays label in React DevTools for custom hooks",
    explanation: "useDebugValue labels custom hooks in DevTools."
  },
  {
    id: 68,
    question: "What causes unnecessary re-renders?",
    options: ["Nothing", "New object/array references, context changes", "State changes only", "Prop changes only"],
    answer: "New object/array references, context changes",
    explanation: "Creating new references or broad context updates trigger re-renders."
  },
  {
    id: 69,
    question: "How do you prevent re-renders from new object references?",
    options: ["Can't prevent", "useMemo for objects, useCallback for functions", "useRef", "useState"],
    answer: "useMemo for objects, useCallback for functions",
    explanation: "Memoization keeps the same reference between renders."
  },
  {
    id: 70,
    question: "What is React DevTools?",
    options: ["IDE extension", "Browser extension for inspecting React components", "Build tools", "Testing tools"],
    answer: "Browser extension for inspecting React components",
    explanation: "DevTools lets you inspect component tree, props, state, and performance."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What are React Server Components?",
    options: ["SSR components", "Components that run only on server, send HTML, no JS", "API components", "Backend components"],
    answer: "Components that run only on server, send HTML, no JS",
    explanation: "RSC run on server, reducing client bundle size."
  },
  {
    id: 72,
    question: "What is the difference between SSR and RSC?",
    options: ["Same thing", "SSR hydrates on client; RSC never ships JS to client", "RSC is faster", "SSR is newer"],
    answer: "SSR hydrates on client; RSC never ships JS to client",
    explanation: "RSC components stay on server; SSR components hydrate on client."
  },
  {
    id: 73,
    question: "What is hydration?",
    options: ["Adding water", "Attaching event handlers to server-rendered HTML", "Loading state", "DOM creation"],
    answer: "Attaching event handlers to server-rendered HTML",
    explanation: "Hydration makes server-rendered HTML interactive on client."
  },
  {
    id: 74,
    question: "What is concurrent rendering?",
    options: ["Parallel components", "React can work on multiple state updates simultaneously", "Multi-threading", "Async rendering"],
    answer: "React can work on multiple state updates simultaneously",
    explanation: "Concurrent features let React interrupt rendering for urgent updates."
  },
  {
    id: 75,
    question: "What is automatic batching in React 18?",
    options: ["Batch imports", "Groups multiple state updates into one re-render", "Batch processing", "Batch requests"],
    answer: "Groups multiple state updates into one re-render",
    explanation: "React 18 batches all state updates, even in async handlers."
  },
  {
    id: 76,
    question: "What is the Profiler component?",
    options: ["User profiling", "Measures rendering performance of subtree", "Code profiler", "Memory profiler"],
    answer: "Measures rendering performance of subtree",
    explanation: "Profiler collects timing information for components."
  },
  {
    id: 77,
    question: "What is render props pattern?",
    options: ["Prop rendering", "Passing a function as prop that returns JSX", "Render method", "JSX props"],
    answer: "Passing a function as prop that returns JSX",
    explanation: "Render props share logic by calling a function prop with data."
  },
  {
    id: 78,
    question: "What is the compound component pattern?",
    options: ["Combined components", "Components that work together sharing implicit state", "Multi-component", "Nested components"],
    answer: "Components that work together sharing implicit state",
    explanation: "Like <Select><Option/></Select> - parent and children share context."
  },
  {
    id: 79,
    question: "What is the higher-order component (HOC) pattern?",
    options: ["Superior component", "Function that takes component and returns enhanced component", "Parent component", "Wrapper function"],
    answer: "Function that takes component and returns enhanced component",
    explanation: "HOCs add functionality to existing components."
  },
  {
    id: 80,
    question: "When should you use HOC vs hooks?",
    options: ["Always HOC", "Prefer hooks; HOC for class components or cross-cutting concerns", "Always hooks", "Never use either"],
    answer: "Prefer hooks; HOC for class components or cross-cutting concerns",
    explanation: "Hooks are cleaner; HOCs still useful for compatibility."
  },
  {
    id: 81,
    question: "What is state colocation?",
    options: ["State location", "Keeping state close to where it's used", "Centralized state", "Global state"],
    answer: "Keeping state close to where it's used",
    explanation: "Colocate state in the nearest common ancestor that needs it."
  },
  {
    id: 82,
    question: "What is state lifting?",
    options: ["Moving state up to parent", "Moving state to common ancestor for sharing", "State elevation", "Prop transfer"],
    answer: "Moving state to common ancestor for sharing",
    explanation: "Lift state when siblings need to share state."
  },
  {
    id: 83,
    question: "What is React Query/TanStack Query for?",
    options: ["SQL queries", "Server state management and caching", "DOM queries", "GraphQL only"],
    answer: "Server state management and caching",
    explanation: "React Query handles fetching, caching, and syncing server state."
  },
  {
    id: 84,
    question: "What is optimistic updates?",
    options: ["Positive UI", "Updating UI before server confirms success", "Better updates", "Fast updates"],
    answer: "Updating UI before server confirms success",
    explanation: "Optimistic updates assume success, rollback on failure."
  },
  {
    id: 85,
    question: "What is the key prop anti-pattern with index?",
    options: ["No issue", "Using array index as key can cause bugs with reordering", "Always use index", "Index is preferred"],
    answer: "Using array index as key can cause bugs with reordering",
    explanation: "Index keys cause issues when list items are added, removed, or reordered."
  },
  {
    id: 86,
    question: "What is the stale closure problem?",
    options: ["Old closures", "Callbacks capturing outdated state/props values", "Closure leak", "Memory issue"],
    answer: "Callbacks capturing outdated state/props values",
    explanation: "Functions may close over old values; use useCallback with dependencies."
  },
  {
    id: 87,
    question: "How do you handle forms in React?",
    options: ["HTML forms only", "Controlled components, form libraries, or useFormStatus", "Uncontrolled only", "No form support"],
    answer: "Controlled components, form libraries, or useFormStatus",
    explanation: "Multiple approaches: controlled, react-hook-form, formik, etc."
  },
  {
    id: 88,
    question: "What is useOptimistic in React 19?",
    options: ["Positive state", "Shows optimistic state while async action is pending", "Better useState", "Async state"],
    answer: "Shows optimistic state while async action is pending",
    explanation: "useOptimistic shows temporary state during async operations."
  },
  {
    id: 89,
    question: "What is useActionState in React 19?",
    options: ["Action handler", "Manages state for form actions", "Redux action", "State action"],
    answer: "Manages state for form actions",
    explanation: "useActionState handles form submission state and actions."
  },
  {
    id: 90,
    question: "What is the 'use' hook?",
    options: ["Generic use", "Reads value from Promise or context", "Use statement", "Import hook"],
    answer: "Reads value from Promise or context",
    explanation: "use() can read promises (with Suspense) and context in render."
  },
  {
    id: 91,
    question: "What is React Compiler (React Forget)?",
    options: ["Code compiler", "Auto-memoization compiler eliminating useMemo/useCallback", "Build tool", "Memory manager"],
    answer: "Auto-memoization compiler eliminating useMemo/useCallback",
    explanation: "React Compiler automatically optimizes without manual memoization."
  },
  {
    id: 92,
    question: "What is the double render in StrictMode?",
    options: ["Bug", "Intentional double invocation to detect side effects", "Performance issue", "Error"],
    answer: "Intentional double invocation to detect side effects",
    explanation: "StrictMode renders twice to help find impure renders and effects."
  },
  {
    id: 93,
    question: "What is code splitting?",
    options: ["Code formatting", "Breaking code into chunks loaded on demand", "Code separation", "File splitting"],
    answer: "Breaking code into chunks loaded on demand",
    explanation: "Code splitting reduces initial bundle size with lazy loading."
  },
  {
    id: 94,
    question: "What is tree shaking?",
    options: ["Animation", "Removing unused code during bundling", "DOM manipulation", "Optimization"],
    answer: "Removing unused code during bundling",
    explanation: "Tree shaking eliminates dead code for smaller bundles."
  },
  {
    id: 95,
    question: "What causes hydration mismatches?",
    options: ["Network issues", "Different content between server and client renders", "Slow loading", "Cache issues"],
    answer: "Different content between server and client renders",
    explanation: "Server and client must render identical initial HTML."
  },
  {
    id: 96,
    question: "How do you handle hydration mismatches?",
    options: ["Ignore them", "suppressHydrationWarning, useClient, or consistent rendering", "Disable SSR", "Client-only render"],
    answer: "suppressHydrationWarning, useClient, or consistent rendering",
    explanation: "Ensure consistent output or mark dynamic parts appropriately."
  },
  {
    id: 97,
    question: "What is the difference between useEffect and useLayoutEffect?",
    options: ["Same timing", "useLayoutEffect fires synchronously before paint", "useEffect is sync", "No difference"],
    answer: "useLayoutEffect fires synchronously before paint",
    explanation: "useLayoutEffect blocks paint; use for DOM measurements."
  },
  {
    id: 98,
    question: "What is React Fiber?",
    options: ["Fiber optics", "React's reconciliation algorithm enabling concurrent features", "Component fiber", "State fiber"],
    answer: "React's reconciliation algorithm enabling concurrent features",
    explanation: "Fiber is the internal engine enabling incremental rendering."
  },
  {
    id: 99,
    question: "What is the reconciliation process?",
    options: ["Fixing conflicts", "Diffing virtual DOM to determine DOM updates", "State merging", "Prop matching"],
    answer: "Diffing virtual DOM to determine DOM updates",
    explanation: "Reconciliation compares trees to find minimum DOM changes."
  },
  {
    id: 100,
    question: "What is a synthetic event?",
    options: ["Fake event", "Cross-browser wrapper around native events", "Generated event", "Virtual event"],
    answer: "Cross-browser wrapper around native events",
    explanation: "React's SyntheticEvent provides consistent behavior across browsers."
  }
];

export default questions;
