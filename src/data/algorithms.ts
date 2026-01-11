import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is an algorithm?",
    options: ["Programming language", "Step-by-step procedure to solve a problem", "Data structure", "Software application"],
    answer: "Step-by-step procedure to solve a problem",
    explanation: "An algorithm is a finite sequence of well-defined instructions."
  },
  {
    id: 2,
    question: "What is Big O notation?",
    options: ["Large number", "Describes algorithm's time/space complexity upper bound", "Programming syntax", "Math operator"],
    answer: "Describes algorithm's time/space complexity upper bound",
    explanation: "Big O measures worst-case performance as input grows."
  },
  {
    id: 3,
    question: "What is O(1) complexity?",
    options: ["One operation", "Constant time - doesn't depend on input size", "One loop", "One element"],
    answer: "Constant time - doesn't depend on input size",
    explanation: "O(1) means the operation takes the same time regardless of size."
  },
  {
    id: 4,
    question: "What is O(n) complexity?",
    options: ["Natural complexity", "Linear time - grows proportionally to input", "Normal complexity", "Nested loops"],
    answer: "Linear time - grows proportionally to input",
    explanation: "O(n) means time increases linearly with input size."
  },
  {
    id: 5,
    question: "What is O(n²) complexity?",
    options: ["Normal squared", "Quadratic time - often from nested loops", "Squared input", "Double loops"],
    answer: "Quadratic time - often from nested loops",
    explanation: "O(n²) often results from nested iterations over input."
  },
  {
    id: 6,
    question: "What is O(log n) complexity?",
    options: ["Logarithmic - divides problem in half each step", "Log file operations", "Slow algorithms", "List operations"],
    answer: "Logarithmic - divides problem in half each step",
    explanation: "O(log n) algorithms like binary search halve the search space."
  },
  {
    id: 7,
    question: "What is an array?",
    options: ["Collection of items in a row", "Contiguous memory storing elements of same type", "Linked elements", "Tree structure"],
    answer: "Contiguous memory storing elements of same type",
    explanation: "Arrays store elements in consecutive memory locations."
  },
  {
    id: 8,
    question: "What is the time complexity of array access by index?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    answer: "O(1)",
    explanation: "Array indexing is constant time due to direct memory access."
  },
  {
    id: 9,
    question: "What is a linked list?",
    options: ["Internet links", "Nodes where each points to the next", "Array of links", "Web page list"],
    answer: "Nodes where each points to the next",
    explanation: "Linked lists use pointers to connect non-contiguous nodes."
  },
  {
    id: 10,
    question: "What is the time complexity of linked list access by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: "O(n)",
    explanation: "Must traverse from head to reach an arbitrary index."
  },
  {
    id: 11,
    question: "What is a stack?",
    options: ["Pile of items", "LIFO data structure - last in, first out", "FIFO structure", "Random access"],
    answer: "LIFO data structure - last in, first out",
    explanation: "Stack operations: push (add), pop (remove from top)."
  },
  {
    id: 12,
    question: "What is a queue?",
    options: ["Line of people", "FIFO data structure - first in, first out", "LIFO structure", "Random access"],
    answer: "FIFO data structure - first in, first out",
    explanation: "Queue operations: enqueue (add), dequeue (remove from front)."
  },
  {
    id: 13,
    question: "What is a hash table?",
    options: ["Cryptographic table", "Key-value store with O(1) average access", "Sorted table", "Database table"],
    answer: "Key-value store with O(1) average access",
    explanation: "Hash tables use hash functions to map keys to indices."
  },
  {
    id: 14,
    question: "What is a collision in hash tables?",
    options: ["Car accident", "Two keys mapping to same index", "Table crash", "Memory error"],
    answer: "Two keys mapping to same index",
    explanation: "Collisions are handled with chaining or open addressing."
  },
  {
    id: 15,
    question: "What is a binary tree?",
    options: ["Two trees", "Tree where each node has at most two children", "Binary search", "Bit tree"],
    answer: "Tree where each node has at most two children",
    explanation: "Binary trees have left and right children."
  },
  {
    id: 16,
    question: "What is a binary search tree (BST)?",
    options: ["Search tree", "Binary tree with left < root < right", "Balanced tree", "B-tree"],
    answer: "Binary tree with left < root < right",
    explanation: "BST maintains sorted order for efficient searching."
  },
  {
    id: 17,
    question: "What is the time complexity of BST search (average case)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: "O(log n)",
    explanation: "Balanced BST halves search space at each step."
  },
  {
    id: 18,
    question: "What is a graph?",
    options: ["Chart", "Nodes (vertices) connected by edges", "Tree structure", "Network diagram"],
    answer: "Nodes (vertices) connected by edges",
    explanation: "Graphs model relationships between entities."
  },
  {
    id: 19,
    question: "What is the difference between directed and undirected graphs?",
    options: ["Same thing", "Directed edges have direction; undirected don't", "Undirected is faster", "Directed is simpler"],
    answer: "Directed edges have direction; undirected don't",
    explanation: "Directed graphs have one-way edges; undirected are bidirectional."
  },
  {
    id: 20,
    question: "What is linear search?",
    options: ["Line search", "Checking each element sequentially", "Sorted search", "Fast search"],
    answer: "Checking each element sequentially",
    explanation: "Linear search is O(n) and works on unsorted data."
  },
  {
    id: 21,
    question: "What is binary search?",
    options: ["Two searches", "Divide and conquer on sorted array", "Bit search", "Tree search"],
    answer: "Divide and conquer on sorted array",
    explanation: "Binary search is O(log n) but requires sorted input."
  },
  {
    id: 22,
    question: "What is bubble sort?",
    options: ["Bubble game", "Repeatedly swaps adjacent elements", "Fast sort", "Efficient sort"],
    answer: "Repeatedly swaps adjacent elements",
    explanation: "Bubble sort is O(n²) and rarely used in practice."
  },
  {
    id: 23,
    question: "What is selection sort?",
    options: ["Select and sort", "Finds minimum and places at beginning", "Quick selection", "Efficient sort"],
    answer: "Finds minimum and places at beginning",
    explanation: "Selection sort is O(n²), selects minimum each iteration."
  },
  {
    id: 24,
    question: "What is insertion sort?",
    options: ["Insert and sort", "Builds sorted array one element at a time", "Quick insert", "Database insert"],
    answer: "Builds sorted array one element at a time",
    explanation: "Insertion sort is O(n²) but efficient for small or nearly sorted data."
  },
  {
    id: 25,
    question: "What is merge sort?",
    options: ["Merging arrays", "Divide, sort halves, merge", "Combined sort", "Parallel sort"],
    answer: "Divide, sort halves, merge",
    explanation: "Merge sort is O(n log n) and stable."
  },
  {
    id: 26,
    question: "What is quick sort?",
    options: ["Fast sort", "Pick pivot, partition, sort partitions", "Immediate sort", "Simple sort"],
    answer: "Pick pivot, partition, sort partitions",
    explanation: "Quick sort is O(n log n) average, O(n²) worst case."
  },
  {
    id: 27,
    question: "What is a heap?",
    options: ["Pile", "Complete binary tree with heap property", "Stack variant", "Memory heap"],
    answer: "Complete binary tree with heap property",
    explanation: "Max-heap: parent ≥ children. Min-heap: parent ≤ children."
  },
  {
    id: 28,
    question: "What is recursion?",
    options: ["Repetition", "Function calling itself with smaller input", "Loop type", "Iteration"],
    answer: "Function calling itself with smaller input",
    explanation: "Recursion solves problems by breaking into subproblems."
  },
  {
    id: 29,
    question: "What is a base case in recursion?",
    options: ["Starting point", "Condition that stops recursion", "Base class", "First call"],
    answer: "Condition that stops recursion",
    explanation: "Without a base case, recursion would be infinite."
  },
  {
    id: 30,
    question: "What is space complexity?",
    options: ["Disk space", "Memory used by algorithm relative to input", "Code size", "Variable count"],
    answer: "Memory used by algorithm relative to input",
    explanation: "Space complexity measures additional memory needed."
  },
  {
    id: 31,
    question: "What is the two-pointer technique?",
    options: ["Double pointers", "Using two pointers to traverse from different positions", "Cursor technique", "Iterator pattern"],
    answer: "Using two pointers to traverse from different positions",
    explanation: "Two pointers often reduce O(n²) to O(n)."
  },
  {
    id: 32,
    question: "What is the sliding window technique?",
    options: ["GUI windows", "Maintains window of elements moving through array", "Animation", "Database window"],
    answer: "Maintains window of elements moving through array",
    explanation: "Sliding window efficiently processes subarrays."
  },
  {
    id: 33,
    question: "What is a prefix sum?",
    options: ["First sum", "Cumulative sum array for range queries", "Starting sum", "Initial total"],
    answer: "Cumulative sum array for range queries",
    explanation: "Prefix sums enable O(1) range sum queries."
  },
  {
    id: 34,
    question: "What is depth-first search (DFS)?",
    options: ["Deep search", "Explores as far as possible before backtracking", "Level search", "Broad search"],
    answer: "Explores as far as possible before backtracking",
    explanation: "DFS uses stack (recursion) to traverse graphs/trees."
  },
  {
    id: 35,
    question: "What is breadth-first search (BFS)?",
    options: ["Wide search", "Explores all neighbors before going deeper", "Depth search", "Fast search"],
    answer: "Explores all neighbors before going deeper",
    explanation: "BFS uses queue to traverse level by level."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is the time complexity of BFS/DFS on a graph?",
    options: ["O(n)", "O(V + E)", "O(log n)", "O(n²)"],
    answer: "O(V + E)",
    explanation: "V is vertices, E is edges. Must visit all."
  },
  {
    id: 37,
    question: "What is dynamic programming?",
    options: ["Real-time programming", "Solving problems by combining subproblem solutions", "Variable programming", "Active coding"],
    answer: "Solving problems by combining subproblem solutions",
    explanation: "DP stores subproblem results to avoid recomputation."
  },
  {
    id: 38,
    question: "What is memoization?",
    options: ["Memorizing", "Caching results of expensive function calls", "Memory allocation", "Recording"],
    answer: "Caching results of expensive function calls",
    explanation: "Memoization is top-down DP with caching."
  },
  {
    id: 39,
    question: "What is tabulation in DP?",
    options: ["Creating tables", "Bottom-up DP filling table iteratively", "Spreadsheet", "Data tabulation"],
    answer: "Bottom-up DP filling table iteratively",
    explanation: "Tabulation builds solution from smallest subproblems."
  },
  {
    id: 40,
    question: "What are overlapping subproblems?",
    options: ["Duplicate code", "Same subproblems solved multiple times", "Code overlap", "Memory overlap"],
    answer: "Same subproblems solved multiple times",
    explanation: "DP is useful when subproblems recur."
  },
  {
    id: 41,
    question: "What is optimal substructure?",
    options: ["Best structure", "Optimal solution contains optimal subproblem solutions", "Efficient code", "Clean architecture"],
    answer: "Optimal solution contains optimal subproblem solutions",
    explanation: "Problems with optimal substructure can use DP/greedy."
  },
  {
    id: 42,
    question: "What is a greedy algorithm?",
    options: ["Hungry algorithm", "Makes locally optimal choice at each step", "Slow algorithm", "Exhaustive search"],
    answer: "Makes locally optimal choice at each step",
    explanation: "Greedy doesn't reconsider choices, hoping for global optimal."
  },
  {
    id: 43,
    question: "When does greedy work?",
    options: ["Always", "When greedy choice property and optimal substructure exist", "Never", "Only for sorting"],
    answer: "When greedy choice property and optimal substructure exist",
    explanation: "Greedy works when local optimal leads to global optimal."
  },
  {
    id: 44,
    question: "What is Dijkstra's algorithm?",
    options: ["Shortest path in weighted graph (non-negative)", "Sorting algorithm", "Search algorithm", "Compression algorithm"],
    answer: "Shortest path in weighted graph (non-negative)",
    explanation: "Dijkstra finds shortest paths from source to all vertices."
  },
  {
    id: 45,
    question: "What is the time complexity of Dijkstra with min-heap?",
    options: ["O(V²)", "O((V + E) log V)", "O(n)", "O(n log n)"],
    answer: "O((V + E) log V)",
    explanation: "Min-heap operations are O(log V), done for each edge."
  },
  {
    id: 46,
    question: "What is Bellman-Ford algorithm?",
    options: ["Shortest path handling negative weights", "Fast sorting", "Graph coloring", "Tree traversal"],
    answer: "Shortest path handling negative weights",
    explanation: "Bellman-Ford works with negative edges, detects negative cycles."
  },
  {
    id: 47,
    question: "What is topological sort?",
    options: ["Alphabetical sort", "Linear ordering of DAG vertices", "Graph sorting", "Priority ordering"],
    answer: "Linear ordering of DAG vertices",
    explanation: "Topological sort orders vertices so edges go forward."
  },
  {
    id: 48,
    question: "What graph must topological sort work on?",
    options: ["Any graph", "Directed Acyclic Graph (DAG)", "Undirected graph", "Cyclic graph"],
    answer: "Directed Acyclic Graph (DAG)",
    explanation: "Cycles make topological ordering impossible."
  },
  {
    id: 49,
    question: "What is a minimum spanning tree?",
    options: ["Smallest tree", "Tree connecting all vertices with minimum weight", "Short tree", "Balanced tree"],
    answer: "Tree connecting all vertices with minimum weight",
    explanation: "MST has V-1 edges with minimum total weight."
  },
  {
    id: 50,
    question: "What algorithms find minimum spanning tree?",
    options: ["DFS/BFS", "Kruskal's and Prim's", "Dijkstra", "Bellman-Ford"],
    answer: "Kruskal's and Prim's",
    explanation: "Kruskal's sorts edges; Prim's grows from a vertex."
  },
  {
    id: 51,
    question: "What is Union-Find (Disjoint Set)?",
    options: ["Search algorithm", "Tracks elements partitioned into disjoint sets", "Set union", "Find operation"],
    answer: "Tracks elements partitioned into disjoint sets",
    explanation: "Union-Find supports union and find operations efficiently."
  },
  {
    id: 52,
    question: "What is path compression in Union-Find?",
    options: ["Zip files", "Flattening tree by pointing nodes directly to root", "Compression algorithm", "Path shortening"],
    answer: "Flattening tree by pointing nodes directly to root",
    explanation: "Path compression makes future finds faster."
  },
  {
    id: 53,
    question: "What is a trie (prefix tree)?",
    options: ["Trial run", "Tree for storing strings with common prefixes", "Triple tree", "Try structure"],
    answer: "Tree for storing strings with common prefixes",
    explanation: "Tries enable fast prefix matching and autocomplete."
  },
  {
    id: 54,
    question: "What is the time complexity of trie search?",
    options: ["O(n)", "O(m) where m is key length", "O(log n)", "O(1)"],
    answer: "O(m) where m is key length",
    explanation: "Trie search depends on key length, not number of keys."
  },
  {
    id: 55,
    question: "What is backtracking?",
    options: ["Going backward", "Exploring all paths, abandoning invalid ones", "Recursion type", "Undo operation"],
    answer: "Exploring all paths, abandoning invalid ones",
    explanation: "Backtracking prunes search space by rejecting partial solutions."
  },
  {
    id: 56,
    question: "What problems use backtracking?",
    options: ["Sorting", "N-Queens, Sudoku, permutations, subsets", "Searching", "Hashing"],
    answer: "N-Queens, Sudoku, permutations, subsets",
    explanation: "Backtracking systematically explores combinations."
  },
  {
    id: 57,
    question: "What is the 0/1 Knapsack problem?",
    options: ["Bag packing", "Maximize value with weight constraint, items taken or not", "Weight problem", "Optimization puzzle"],
    answer: "Maximize value with weight constraint, items taken or not",
    explanation: "0/1 Knapsack is classic DP problem: take item or skip."
  },
  {
    id: 58,
    question: "What is the longest common subsequence (LCS)?",
    options: ["Longest string", "Longest sequence present in both strings", "Common prefix", "Substring match"],
    answer: "Longest sequence present in both strings",
    explanation: "LCS is DP problem comparing two sequences."
  },
  {
    id: 59,
    question: "What is the difference between subsequence and substring?",
    options: ["Same thing", "Substring is contiguous; subsequence is not", "Subsequence is shorter", "Substring is ordered"],
    answer: "Substring is contiguous; subsequence is not",
    explanation: "Subsequence can skip characters; substring cannot."
  },
  {
    id: 60,
    question: "What is a balanced binary tree?",
    options: ["Equal nodes", "Height difference between subtrees is limited", "Full tree", "Perfect tree"],
    answer: "Height difference between subtrees is limited",
    explanation: "Balanced trees maintain O(log n) operations."
  },
  {
    id: 61,
    question: "What is an AVL tree?",
    options: ["Airport tree", "Self-balancing BST with height difference ≤ 1", "Aviation tree", "Balanced BST"],
    answer: "Self-balancing BST with height difference ≤ 1",
    explanation: "AVL trees rotate to maintain balance after operations."
  },
  {
    id: 62,
    question: "What is a Red-Black tree?",
    options: ["Colored tree", "Self-balancing BST with color-based rules", "RB tree", "Painted tree"],
    answer: "Self-balancing BST with color-based rules",
    explanation: "Red-Black trees ensure O(log n) through coloring rules."
  },
  {
    id: 63,
    question: "What is a B-tree?",
    options: ["Binary tree", "Self-balancing tree with multiple keys per node", "Balanced tree", "B+ tree"],
    answer: "Self-balancing tree with multiple keys per node",
    explanation: "B-trees are used in databases and file systems."
  },
  {
    id: 64,
    question: "What is a segment tree?",
    options: ["Line tree", "Tree for range queries and updates", "Interval tree", "Partition tree"],
    answer: "Tree for range queries and updates",
    explanation: "Segment trees answer range queries in O(log n)."
  },
  {
    id: 65,
    question: "What is a Fenwick tree (Binary Indexed Tree)?",
    options: ["BIT tree", "Efficient structure for prefix sums and updates", "Binary tree", "Index tree"],
    answer: "Efficient structure for prefix sums and updates",
    explanation: "BIT supports O(log n) updates and prefix queries."
  },
  {
    id: 66,
    question: "What is the Floyd-Warshall algorithm?",
    options: ["Shortest paths between all pairs of vertices", "Single source shortest path", "Graph coloring", "Cycle detection"],
    answer: "Shortest paths between all pairs of vertices",
    explanation: "Floyd-Warshall is O(V³) for all-pairs shortest paths."
  },
  {
    id: 67,
    question: "What is cycle detection in a graph?",
    options: ["Finding loops in graph", "Using DFS or Union-Find", "Both A and B", "Neither"],
    answer: "Both A and B",
    explanation: "Cycles can be detected with DFS (back edges) or Union-Find."
  },
  {
    id: 68,
    question: "What is a strongly connected component?",
    options: ["Connected graph", "Maximal set where every vertex reaches every other", "Strong graph", "Complete subgraph"],
    answer: "Maximal set where every vertex reaches every other",
    explanation: "SCCs are found using Kosaraju's or Tarjan's algorithm."
  },
  {
    id: 69,
    question: "What is bit manipulation?",
    options: ["Binary operations", "Using bitwise operators for efficient operations", "Bit flipping", "Binary math"],
    answer: "Using bitwise operators for efficient operations",
    explanation: "Bit manipulation uses AND, OR, XOR, shifts for optimization."
  },
  {
    id: 70,
    question: "How do you check if a number is power of 2?",
    options: ["Divide by 2", "n & (n-1) == 0", "n % 2 == 0", "log2(n) is integer"],
    answer: "n & (n-1) == 0",
    explanation: "Powers of 2 have exactly one bit set."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is the Master Theorem?",
    options: ["Main theorem", "Solves recurrences of form T(n) = aT(n/b) + f(n)", "Primary theorem", "Basic theorem"],
    answer: "Solves recurrences of form T(n) = aT(n/b) + f(n)",
    explanation: "Master Theorem quickly determines divide-and-conquer complexity."
  },
  {
    id: 72,
    question: "What is amortized analysis?",
    options: ["Loan analysis", "Average time per operation over sequence", "Worst case", "Best case"],
    answer: "Average time per operation over sequence",
    explanation: "Amortized analysis considers total cost over operations."
  },
  {
    id: 73,
    question: "What is the time complexity of dynamic array append (amortized)?",
    options: ["O(n)", "O(1) amortized", "O(log n)", "O(n²)"],
    answer: "O(1) amortized",
    explanation: "Rare resizing is offset by many O(1) appends."
  },
  {
    id: 74,
    question: "What is a monotonic stack?",
    options: ["Single-tone stack", "Stack maintaining increasing or decreasing order", "Special stack", "Ordered stack"],
    answer: "Stack maintaining increasing or decreasing order",
    explanation: "Monotonic stacks solve next greater/smaller element problems."
  },
  {
    id: 75,
    question: "What is the KMP algorithm?",
    options: ["Knowledge Management", "String matching with preprocessing", "Key Management", "Pattern matching O(n+m)"],
    answer: "Pattern matching O(n+m)",
    explanation: "KMP avoids redundant comparisons using failure function."
  },
  {
    id: 76,
    question: "What is the Rabin-Karp algorithm?",
    options: ["Hashing-based string matching", "Sorting algorithm", "Graph algorithm", "Compression"],
    answer: "Hashing-based string matching",
    explanation: "Rabin-Karp uses rolling hash for pattern matching."
  },
  {
    id: 77,
    question: "What is a suffix array?",
    options: ["Ending array", "Sorted array of all suffixes of a string", "Suffix tree", "String array"],
    answer: "Sorted array of all suffixes of a string",
    explanation: "Suffix arrays enable efficient string operations."
  },
  {
    id: 78,
    question: "What is the Longest Increasing Subsequence (LIS)?",
    options: ["Longest sorted sequence", "Longest subsequence in increasing order", "Sorted array", "Increasing array"],
    answer: "Longest subsequence in increasing order",
    explanation: "LIS can be solved in O(n log n) with binary search."
  },
  {
    id: 79,
    question: "What is the time complexity of LIS with binary search?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(n³)"],
    answer: "O(n log n)",
    explanation: "Patience sorting / binary search optimization achieves O(n log n)."
  },
  {
    id: 80,
    question: "What is the edit distance problem?",
    options: ["Text editing", "Minimum operations to transform one string to another", "String difference", "Character count"],
    answer: "Minimum operations to transform one string to another",
    explanation: "Edit distance (Levenshtein) uses DP for insertions, deletions, substitutions."
  },
  {
    id: 81,
    question: "What is the coin change problem?",
    options: ["Currency exchange", "Minimum coins to make amount", "Coin sorting", "Money counting"],
    answer: "Minimum coins to make amount",
    explanation: "Coin change is classic DP/BFS problem."
  },
  {
    id: 82,
    question: "What is the difference between counting and optimization DP?",
    options: ["Same thing", "Counting: how many ways; Optimization: best way", "Counting is faster", "Optimization is simpler"],
    answer: "Counting: how many ways; Optimization: best way",
    explanation: "DP can count combinations or find optimal solution."
  },
  {
    id: 83,
    question: "What is matrix chain multiplication?",
    options: ["Matrix math", "Optimal parenthesization to minimize multiplications", "Chain rule", "Array multiplication"],
    answer: "Optimal parenthesization to minimize multiplications",
    explanation: "Matrix chain uses interval DP to minimize operations."
  },
  {
    id: 84,
    question: "What is interval DP?",
    options: ["Time intervals", "DP on intervals/substrings", "Range DP", "Segment DP"],
    answer: "DP on intervals/substrings",
    explanation: "Interval DP processes ranges, building from smaller to larger."
  },
  {
    id: 85,
    question: "What is bitmask DP?",
    options: ["Bit manipulation", "Using bitmask to represent subset state", "Binary DP", "Mask algorithm"],
    answer: "Using bitmask to represent subset state",
    explanation: "Bitmask DP encodes subset of elements as integer."
  },
  {
    id: 86,
    question: "What is the Traveling Salesman Problem (TSP)?",
    options: ["Salesman tracking", "Shortest route visiting all cities exactly once", "Path finding", "Delivery optimization"],
    answer: "Shortest route visiting all cities exactly once",
    explanation: "TSP is NP-hard, solved with bitmask DP for small n."
  },
  {
    id: 87,
    question: "What is NP-complete?",
    options: ["Not possible", "Problems verifiable in polynomial time, no known poly solution", "Negative polynomial", "Nearly polynomial"],
    answer: "Problems verifiable in polynomial time, no known poly solution",
    explanation: "NP-complete problems are reducible to each other."
  },
  {
    id: 88,
    question: "What is a graph coloring problem?",
    options: ["Painting graphs", "Assigning colors so adjacent nodes differ", "Visualization", "Styling"],
    answer: "Assigning colors so adjacent nodes differ",
    explanation: "Graph coloring is used in scheduling, register allocation."
  },
  {
    id: 89,
    question: "What is the maximum flow problem?",
    options: ["Water flow", "Maximum flow from source to sink in network", "Traffic flow", "Data flow"],
    answer: "Maximum flow from source to sink in network",
    explanation: "Max flow uses Ford-Fulkerson or Edmonds-Karp algorithms."
  },
  {
    id: 90,
    question: "What is the Ford-Fulkerson method?",
    options: ["Car method", "Find augmenting paths until none exist", "Flow optimization", "Path finding"],
    answer: "Find augmenting paths until none exist",
    explanation: "Ford-Fulkerson iteratively increases flow via augmenting paths."
  },
  {
    id: 91,
    question: "What is the Max-Flow Min-Cut theorem?",
    options: ["Flow theorem", "Maximum flow equals minimum cut capacity", "Cut theorem", "Network theorem"],
    answer: "Maximum flow equals minimum cut capacity",
    explanation: "The theorem relates max flow to the min cut of the network."
  },
  {
    id: 92,
    question: "What is bipartite matching?",
    options: ["Pair matching", "Maximum matching between two disjoint sets", "Graph matching", "Set matching"],
    answer: "Maximum matching between two disjoint sets",
    explanation: "Bipartite matching uses augmenting paths or flow."
  },
  {
    id: 93,
    question: "What is the Hungarian algorithm?",
    options: ["Country algorithm", "Optimal assignment in weighted bipartite graph", "Matching algorithm", "Assignment algorithm"],
    answer: "Optimal assignment in weighted bipartite graph",
    explanation: "Hungarian algorithm finds minimum cost perfect matching."
  },
  {
    id: 94,
    question: "What is A* algorithm?",
    options: ["Star search", "Best-first search with heuristic", "Priority search", "Optimal pathfinding"],
    answer: "Best-first search with heuristic",
    explanation: "A* uses f(n) = g(n) + h(n) for informed search."
  },
  {
    id: 95,
    question: "What makes a good A* heuristic?",
    options: ["Fast computation", "Admissible (never overestimates) and consistent", "Simple formula", "Exact distance"],
    answer: "Admissible (never overestimates) and consistent",
    explanation: "Good heuristics guide search without overestimating cost."
  },
  {
    id: 96,
    question: "What is meet in the middle?",
    options: ["Halfway point", "Split problem, solve halves, combine results", "Average solution", "Middle element"],
    answer: "Split problem, solve halves, combine results",
    explanation: "Meet in the middle reduces 2^n to 2^(n/2)."
  },
  {
    id: 97,
    question: "What is coordinate compression?",
    options: ["GPS compression", "Map large values to smaller range", "Data compression", "Space optimization"],
    answer: "Map large values to smaller range",
    explanation: "Compression allows using array indices for sparse data."
  },
  {
    id: 98,
    question: "What is a sparse table?",
    options: ["Empty table", "Precomputed table for O(1) range queries", "Light table", "Minimal table"],
    answer: "Precomputed table for O(1) range queries",
    explanation: "Sparse tables answer RMQ/idempotent queries in O(1)."
  },
  {
    id: 99,
    question: "What is the difference between online and offline algorithms?",
    options: ["Internet vs local", "Online processes immediately; offline has all input upfront", "Real-time vs batch", "Connected vs disconnected"],
    answer: "Online processes immediately; offline has all input upfront",
    explanation: "Online algorithms don't know future input."
  },
  {
    id: 100,
    question: "What is randomized algorithm?",
    options: ["Random code", "Uses random numbers to make decisions", "Unpredictable algorithm", "Chaotic algorithm"],
    answer: "Uses random numbers to make decisions",
    explanation: "Randomized algorithms like quicksort use randomness for performance."
  }
];

export default questions;
