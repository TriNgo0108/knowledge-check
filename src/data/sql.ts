import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"],
    answer: "Structured Query Language",
    explanation: "SQL stands for Structured Query Language, used for managing relational databases."
  },
  {
    id: 2,
    question: "Which statement is used to retrieve data from a database?",
    options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
    answer: "SELECT",
    explanation: "SELECT is the primary statement for querying data from tables."
  },
  {
    id: 3,
    question: "Which clause is used to filter records?",
    options: ["FILTER", "WHERE", "HAVING", "SEARCH"],
    answer: "WHERE",
    explanation: "WHERE filters rows based on specified conditions."
  },
  {
    id: 4,
    question: "How do you select all columns from a table 'users'?",
    options: ["SELECT ALL FROM users", "SELECT * FROM users", "SELECT users", "GET ALL FROM users"],
    answer: "SELECT * FROM users",
    explanation: "The asterisk (*) is a wildcard that selects all columns."
  },
  {
    id: 5,
    question: "Which statement is used to insert new data?",
    options: ["ADD", "INSERT INTO", "CREATE", "PUT"],
    answer: "INSERT INTO",
    explanation: "INSERT INTO adds new rows to a table."
  },
  {
    id: 6,
    question: "Which statement updates existing data?",
    options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
    answer: "UPDATE",
    explanation: "UPDATE modifies existing records in a table."
  },
  {
    id: 7,
    question: "Which statement deletes records from a table?",
    options: ["REMOVE", "DELETE", "DROP", "ERASE"],
    answer: "DELETE",
    explanation: "DELETE removes rows from a table based on conditions."
  },
  {
    id: 8,
    question: "How do you sort results in ascending order by 'name'?",
    options: ["SORT BY name", "ORDER BY name ASC", "ARRANGE BY name", "GROUP BY name"],
    answer: "ORDER BY name ASC",
    explanation: "ORDER BY sorts results. ASC (ascending) is the default."
  },
  {
    id: 9,
    question: "Which keyword removes duplicate rows from results?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
    answer: "DISTINCT",
    explanation: "DISTINCT returns only unique values in the result set."
  },
  {
    id: 10,
    question: "How do you limit results to 10 rows?",
    options: ["TOP 10", "LIMIT 10", "FIRST 10", "ROWNUM 10"],
    answer: "LIMIT 10",
    explanation: "LIMIT restricts the number of rows returned (standard SQL)."
  },
  {
    id: 11,
    question: "Which operator checks for NULL values?",
    options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"],
    answer: "IS NULL",
    explanation: "IS NULL is used because NULL cannot be compared with = operator."
  },
  {
    id: 12,
    question: "How do you create a new table?",
    options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
    answer: "CREATE TABLE",
    explanation: "CREATE TABLE defines a new table with its columns and data types."
  },
  {
    id: 13,
    question: "Which keyword is used for pattern matching?",
    options: ["MATCH", "LIKE", "PATTERN", "SIMILAR"],
    answer: "LIKE",
    explanation: "LIKE is used with wildcards (% and _) for pattern matching."
  },
  {
    id: 14,
    question: "What does '%' represent in a LIKE clause?",
    options: ["Single character", "Zero or more characters", "Numeric only", "Exact match"],
    answer: "Zero or more characters",
    explanation: "% matches any sequence of characters (including none)."
  },
  {
    id: 15,
    question: "How do you select values within a range?",
    options: ["RANGE", "BETWEEN", "IN RANGE", "WITHIN"],
    answer: "BETWEEN",
    explanation: "BETWEEN selects values within an inclusive range."
  },
  {
    id: 16,
    question: "Which function counts the number of rows?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUM()"],
    answer: "COUNT()",
    explanation: "COUNT() returns the number of rows matching criteria."
  },
  {
    id: 17,
    question: "How do you calculate the average of a column?",
    options: ["MEAN()", "AVG()", "AVERAGE()", "MID()"],
    answer: "AVG()",
    explanation: "AVG() calculates the arithmetic mean of values."
  },
  {
    id: 18,
    question: "Which clause groups rows with the same values?",
    options: ["COMBINE BY", "GROUP BY", "CLUSTER BY", "COLLECT BY"],
    answer: "GROUP BY",
    explanation: "GROUP BY groups rows sharing common values for aggregation."
  },
  {
    id: 19,
    question: "How do you add a condition to grouped data?",
    options: ["WHERE", "HAVING", "WHEN", "IF"],
    answer: "HAVING",
    explanation: "HAVING filters groups after GROUP BY (WHERE filters before grouping)."
  },
  {
    id: 20,
    question: "Which statement deletes an entire table?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"],
    answer: "DROP TABLE",
    explanation: "DROP TABLE removes the table structure and all its data."
  },
  {
    id: 21,
    question: "How do you add a new column to an existing table?",
    options: ["ADD COLUMN", "ALTER TABLE ADD", "INSERT COLUMN", "CREATE COLUMN"],
    answer: "ALTER TABLE ADD",
    explanation: "ALTER TABLE with ADD clause adds columns to existing tables."
  },
  {
    id: 22,
    question: "Which operator combines results from multiple SELECT statements?",
    options: ["COMBINE", "MERGE", "UNION", "JOIN"],
    answer: "UNION",
    explanation: "UNION combines result sets, removing duplicates by default."
  },
  {
    id: 23,
    question: "What is a primary key?",
    options: ["First column", "Unique identifier for each row", "Foreign reference", "Index column"],
    answer: "Unique identifier for each row",
    explanation: "Primary key uniquely identifies each record and cannot be NULL."
  },
  {
    id: 24,
    question: "Which operator checks if a value is in a list?",
    options: ["EXISTS", "CONTAINS", "IN", "INCLUDES"],
    answer: "IN",
    explanation: "IN checks if a value matches any value in a list or subquery."
  },
  {
    id: 25,
    question: "How do you rename a column in the output?",
    options: ["RENAME", "AS", "ALIAS", "NAME"],
    answer: "AS",
    explanation: "AS creates an alias for columns or tables in query results."
  },
  {
    id: 26,
    question: "Which function returns the maximum value?",
    options: ["GREATEST()", "MAX()", "TOP()", "HIGHEST()"],
    answer: "MAX()",
    explanation: "MAX() returns the largest value in a column."
  },
  {
    id: 27,
    question: "How do you combine AND with OR conditions?",
    options: ["Use commas", "Use parentheses", "Use semicolons", "Not possible"],
    answer: "Use parentheses",
    explanation: "Parentheses group conditions to control evaluation order."
  },
  {
    id: 28,
    question: "What is a foreign key?",
    options: ["Primary key in same table", "Reference to primary key in another table", "Unique constraint", "Default value"],
    answer: "Reference to primary key in another table",
    explanation: "Foreign key creates a link between two tables by referencing the primary key."
  },
  {
    id: 29,
    question: "Which function returns the minimum value?",
    options: ["LEAST()", "MIN()", "BOTTOM()", "LOWEST()"],
    answer: "MIN()",
    explanation: "MIN() returns the smallest value in a column."
  },
  {
    id: 30,
    question: "How do you sort in descending order?",
    options: ["ORDER BY col DOWN", "ORDER BY col DESC", "ORDER BY col REVERSE", "SORT BY col DESC"],
    answer: "ORDER BY col DESC",
    explanation: "DESC keyword specifies descending order (Z to A, 9 to 0)."
  },
  {
    id: 31,
    question: "Which function calculates the sum of values?",
    options: ["ADD()", "TOTAL()", "SUM()", "PLUS()"],
    answer: "SUM()",
    explanation: "SUM() adds up all values in a numeric column."
  },
  {
    id: 32,
    question: "What does TRUNCATE TABLE do?",
    options: ["Deletes table structure", "Removes all rows quickly", "Renames table", "Backs up table"],
    answer: "Removes all rows quickly",
    explanation: "TRUNCATE removes all rows efficiently without logging individual deletions."
  },
  {
    id: 33,
    question: "How do you comment in SQL?",
    options: ["// comment", "-- comment", "# comment", "/* comment */"],
    answer: "-- comment",
    explanation: "-- for single-line comments (/* */ for multi-line in most databases)."
  },
  {
    id: 34,
    question: "Which constraint ensures unique values in a column?",
    options: ["DISTINCT", "UNIQUE", "DIFFERENT", "SINGULAR"],
    answer: "UNIQUE",
    explanation: "UNIQUE constraint ensures all values in a column are different."
  },
  {
    id: 35,
    question: "What is the default NULL behavior in SQL?",
    options: ["NULL = 0", "NULL = empty string", "NULL = NULL returns TRUE", "NULL = NULL returns NULL"],
    answer: "NULL = NULL returns NULL",
    explanation: "NULL comparisons with = return NULL (unknown), not TRUE or FALSE."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is an INNER JOIN?",
    options: ["Returns all rows from both tables", "Returns matching rows only", "Returns left table rows only", "Returns right table rows only"],
    answer: "Returns matching rows only",
    explanation: "INNER JOIN returns only rows where there's a match in both tables."
  },
  {
    id: 37,
    question: "What does a LEFT JOIN return?",
    options: ["All left table rows, matching right table rows", "Only matching rows", "All right table rows", "Cartesian product"],
    answer: "All left table rows, matching right table rows",
    explanation: "LEFT JOIN returns all rows from left table with matched rows from right (NULL if no match)."
  },
  {
    id: 38,
    question: "What is a subquery?",
    options: ["Stored procedure", "Query within another query", "Temporary table", "View definition"],
    answer: "Query within another query",
    explanation: "A subquery is a nested SELECT statement used within another SQL statement."
  },
  {
    id: 39,
    question: "Which clause is used with subqueries returning multiple rows?",
    options: ["= ANY", "IN", "EXISTS", "All of the above"],
    answer: "All of the above",
    explanation: "IN, ANY, ALL, and EXISTS can all work with multi-row subqueries."
  },
  {
    id: 40,
    question: "What is the difference between UNION and UNION ALL?",
    options: ["No difference", "UNION removes duplicates", "UNION ALL removes duplicates", "UNION is faster"],
    answer: "UNION removes duplicates",
    explanation: "UNION removes duplicates, UNION ALL keeps all rows (faster)."
  },
  {
    id: 41,
    question: "What does COALESCE() do?",
    options: ["Combines strings", "Returns first non-NULL value", "Counts nulls", "Creates NULL values"],
    answer: "Returns first non-NULL value",
    explanation: "COALESCE returns the first non-NULL argument from its list."
  },
  {
    id: 42,
    question: "How do you create an index?",
    options: ["ADD INDEX", "CREATE INDEX", "MAKE INDEX", "SET INDEX"],
    answer: "CREATE INDEX",
    explanation: "CREATE INDEX creates an index on specified columns for faster queries."
  },
  {
    id: 43,
    question: "What is a correlated subquery?",
    options: ["Independent subquery", "Subquery referencing outer query", "Subquery with JOIN", "Cached subquery"],
    answer: "Subquery referencing outer query",
    explanation: "A correlated subquery references columns from the outer query and executes for each outer row."
  },
  {
    id: 44,
    question: "What does EXISTS operator check?",
    options: ["Column exists", "Table exists", "Subquery returns any rows", "Value is not NULL"],
    answer: "Subquery returns any rows",
    explanation: "EXISTS returns TRUE if the subquery returns at least one row."
  },
  {
    id: 45,
    question: "What is a CROSS JOIN?",
    options: ["Join on matching keys", "Cartesian product of tables", "Left outer join", "Self join"],
    answer: "Cartesian product of tables",
    explanation: "CROSS JOIN returns all possible combinations of rows from both tables."
  },
  {
    id: 46,
    question: "How do you use CASE expression?",
    options: ["SWITCH column WHEN", "IF column THEN", "CASE WHEN condition THEN result END", "SELECT CASE column"],
    answer: "CASE WHEN condition THEN result END",
    explanation: "CASE provides conditional logic in SQL: CASE WHEN cond THEN result ELSE default END."
  },
  {
    id: 47,
    question: "What is a self-join?",
    options: ["Joining table with same columns", "Joining table with itself", "Automatic join", "Recursive join"],
    answer: "Joining table with itself",
    explanation: "A self-join joins a table to itself, typically using aliases."
  },
  {
    id: 48,
    question: "What does NULLIF() return?",
    options: ["NULL if both args equal", "NULL if first arg is NULL", "First non-NULL value", "Count of NULLs"],
    answer: "NULL if both args equal",
    explanation: "NULLIF(a, b) returns NULL if a equals b, otherwise returns a."
  },
  {
    id: 49,
    question: "How do you offset results for pagination?",
    options: ["SKIP 10", "OFFSET 10", "START 10", "BEGIN 10"],
    answer: "OFFSET 10",
    explanation: "OFFSET skips a specified number of rows before returning results."
  },
  {
    id: 50,
    question: "What is a view in SQL?",
    options: ["Physical table copy", "Virtual table from a query", "Index type", "Stored procedure"],
    answer: "Virtual table from a query",
    explanation: "A view is a saved query that acts as a virtual table."
  },
  {
    id: 51,
    question: "What does CONCAT() do?",
    options: ["Adds numbers", "Joins strings together", "Combines tables", "Groups rows"],
    answer: "Joins strings together",
    explanation: "CONCAT concatenates two or more strings into one."
  },
  {
    id: 52,
    question: "How do you handle NULL in calculations?",
    options: ["NULL becomes 0", "Result is NULL", "Error is thrown", "NULL is ignored"],
    answer: "Result is NULL",
    explanation: "Any arithmetic operation with NULL results in NULL."
  },
  {
    id: 53,
    question: "What is the purpose of GROUP BY with ROLLUP?",
    options: ["Removes groups", "Creates subtotals and grand total", "Rolls back transaction", "Groups sequentially"],
    answer: "Creates subtotals and grand total",
    explanation: "ROLLUP generates subtotal rows for hierarchical grouping."
  },
  {
    id: 54,
    question: "What does FULL OUTER JOIN return?",
    options: ["Matching rows only", "All rows from both tables", "Left table rows only", "Right table rows only"],
    answer: "All rows from both tables",
    explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs where no match."
  },
  {
    id: 55,
    question: "How do you extract year from a date?",
    options: ["YEAR(date)", "EXTRACT(YEAR FROM date)", "DATE_YEAR(date)", "Both A and B"],
    answer: "Both A and B",
    explanation: "Both YEAR() and EXTRACT() work depending on the database system."
  },
  {
    id: 56,
    question: "What is an alias in SQL?",
    options: ["Backup name", "Temporary name for table/column", "Foreign key", "Index name"],
    answer: "Temporary name for table/column",
    explanation: "Aliases give tables or columns temporary names for the query duration."
  },
  {
    id: 57,
    question: "What does CAST() do?",
    options: ["Creates tables", "Converts data type", "Joins tables", "Filters results"],
    answer: "Converts data type",
    explanation: "CAST converts a value from one data type to another."
  },
  {
    id: 58,
    question: "How do you add multiple rows in one INSERT?",
    options: ["Multiple INSERT statements", "INSERT INTO ... VALUES (), (), ()", "INSERT MULTIPLE", "BATCH INSERT"],
    answer: "INSERT INTO ... VALUES (), (), ()",
    explanation: "Multiple value sets can be inserted in a single INSERT statement."
  },
  {
    id: 59,
    question: "What is a stored procedure?",
    options: ["Saved query", "Saved SQL program with logic", "Automatic backup", "Index type"],
    answer: "Saved SQL program with logic",
    explanation: "Stored procedures are saved SQL code that can include logic, loops, and variables."
  },
  {
    id: 60,
    question: "What does IFNULL() or NVL() do?",
    options: ["Checks if value exists", "Returns alternate if NULL", "Creates NULL", "Deletes NULL rows"],
    answer: "Returns alternate if NULL",
    explanation: "IFNULL (MySQL) / NVL (Oracle) returns a replacement value if the first argument is NULL."
  },
  {
    id: 61,
    question: "What is a natural join?",
    options: ["Join on all matching column names", "Default join type", "Join without ON clause only", "Optimized join"],
    answer: "Join on all matching column names",
    explanation: "NATURAL JOIN automatically joins on columns with the same names in both tables."
  },
  {
    id: 62,
    question: "How do you find the second highest salary?",
    options: ["MAX() with WHERE", "LIMIT 1 OFFSET 1", "Subquery with MAX", "All can work"],
    answer: "All can work",
    explanation: "Various approaches work: subquery, OFFSET, or window functions."
  },
  {
    id: 63,
    question: "What is the difference between DELETE and TRUNCATE?",
    options: ["DELETE is faster", "TRUNCATE can have WHERE", "DELETE can be rolled back", "No difference"],
    answer: "DELETE can be rolled back",
    explanation: "DELETE is logged and can be rolled back; TRUNCATE is faster but typically not rollback-able."
  },
  {
    id: 64,
    question: "What does USING clause do in a JOIN?",
    options: ["Specifies database", "Shorthand for equal join columns", "Creates temporary table", "Sets collation"],
    answer: "Shorthand for equal join columns",
    explanation: "USING(column) is shorthand when join columns have the same name in both tables."
  },
  {
    id: 65,
    question: "What is a composite key?",
    options: ["Encrypted key", "Primary key with multiple columns", "Foreign key reference", "Auto-increment key"],
    answer: "Primary key with multiple columns",
    explanation: "A composite key uses multiple columns together to uniquely identify rows."
  },
  {
    id: 66,
    question: "How do you update based on another table?",
    options: ["UPDATE with subquery", "UPDATE with JOIN", "Both are valid", "Not possible"],
    answer: "Both are valid",
    explanation: "Both UPDATE with subquery and UPDATE with JOIN (syntax varies by database) work."
  },
  {
    id: 67,
    question: "What does INTERSECT operator return?",
    options: ["All rows from both queries", "Common rows from both queries", "Different rows", "First query rows only"],
    answer: "Common rows from both queries",
    explanation: "INTERSECT returns only rows that appear in both query results."
  },
  {
    id: 68,
    question: "What is a trigger?",
    options: ["Manual procedure", "Automatic action on data changes", "Index type", "Constraint type"],
    answer: "Automatic action on data changes",
    explanation: "Triggers automatically execute in response to INSERT, UPDATE, or DELETE events."
  },
  {
    id: 69,
    question: "What does EXCEPT/MINUS operator return?",
    options: ["Sum of values", "Rows in first query not in second", "Common rows", "All rows"],
    answer: "Rows in first query not in second",
    explanation: "EXCEPT (or MINUS in Oracle) returns rows from first query not in second."
  },
  {
    id: 70,
    question: "How do you check for duplicates?",
    options: ["GROUP BY and HAVING COUNT > 1", "DISTINCT check", "DUPLICATE function", "SAME operator"],
    answer: "GROUP BY and HAVING COUNT > 1",
    explanation: "GROUP BY columns with HAVING COUNT(*) > 1 finds duplicates."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is a window function?",
    options: ["GUI function", "Function operating on a set of rows", "Stored procedure type", "Index function"],
    answer: "Function operating on a set of rows",
    explanation: "Window functions perform calculations across a set of rows related to the current row."
  },
  {
    id: 72,
    question: "What does ROW_NUMBER() do?",
    options: ["Counts total rows", "Assigns sequential number to rows", "Returns row ID", "Numbers columns"],
    answer: "Assigns sequential number to rows",
    explanation: "ROW_NUMBER() assigns a unique sequential number to each row in a partition."
  },
  {
    id: 73,
    question: "What is the difference between RANK() and DENSE_RANK()?",
    options: ["No difference", "RANK skips numbers after ties", "DENSE_RANK skips numbers", "RANK is faster"],
    answer: "RANK skips numbers after ties",
    explanation: "RANK leaves gaps after ties (1,1,3), DENSE_RANK doesn't (1,1,2)."
  },
  {
    id: 74,
    question: "What is a CTE (Common Table Expression)?",
    options: ["Permanent table", "Temporary named result set", "Index type", "Constraint type"],
    answer: "Temporary named result set",
    explanation: "CTE is a temporary result set defined within WITH clause, improving readability."
  },
  {
    id: 75,
    question: "How do you write a recursive CTE?",
    options: ["WITH RECURSIVE name AS (base UNION ALL recursive)", "LOOP AS name", "RECURSE name", "FOR EACH name"],
    answer: "WITH RECURSIVE name AS (base UNION ALL recursive)",
    explanation: "Recursive CTEs have a base case and recursive part connected by UNION ALL."
  },
  {
    id: 76,
    question: "What does PARTITION BY do in window functions?",
    options: ["Divides table physically", "Divides rows into groups for window calculation", "Creates partitions", "Splits indexes"],
    answer: "Divides rows into groups for window calculation",
    explanation: "PARTITION BY divides result set into partitions for independent window function calculations."
  },
  {
    id: 77,
    question: "What does LAG() function do?",
    options: ["Creates delay", "Accesses previous row value", "Slows query", "Logs activity"],
    answer: "Accesses previous row value",
    explanation: "LAG() returns value from a previous row within the partition."
  },
  {
    id: 78,
    question: "What is LEAD() function used for?",
    options: ["Primary key access", "Accesses next row value", "Leader election", "Index lookup"],
    answer: "Accesses next row value",
    explanation: "LEAD() returns value from a following row within the partition."
  },
  {
    id: 79,
    question: "How does NTILE() work?",
    options: ["Creates tiles UI", "Divides rows into N equal groups", "Numbers tiles", "Counts groups"],
    answer: "Divides rows into N equal groups",
    explanation: "NTILE(n) distributes rows into n groups of approximately equal size."
  },
  {
    id: 80,
    question: "What is a materialized view?",
    options: ["Standard view", "Physically stored query results", "Temporary view", "Virtual table"],
    answer: "Physically stored query results",
    explanation: "Materialized views store query results physically for faster repeated access."
  },
  {
    id: 81,
    question: "What does EXPLAIN/EXPLAIN ANALYZE do?",
    options: ["Describes table", "Shows query execution plan", "Documents code", "Lists constraints"],
    answer: "Shows query execution plan",
    explanation: "EXPLAIN shows how the database will execute a query for optimization purposes."
  },
  {
    id: 82,
    question: "What is a covering index?",
    options: ["Index on all columns", "Index containing all columns needed by query", "Primary index", "Unique index"],
    answer: "Index containing all columns needed by query",
    explanation: "A covering index includes all columns the query needs, avoiding table lookup."
  },
  {
    id: 83,
    question: "What is query plan caching?",
    options: ["Saving query results", "Storing compiled query plans for reuse", "Caching tables", "Index caching"],
    answer: "Storing compiled query plans for reuse",
    explanation: "Database stores compiled execution plans to avoid recompilation overhead."
  },
  {
    id: 84,
    question: "What is an execution plan's 'cost'?",
    options: ["Money cost", "Estimated resource usage", "Time in seconds", "Memory bytes"],
    answer: "Estimated resource usage",
    explanation: "Cost is a relative estimate of resources needed to execute a query operation."
  },
  {
    id: 85,
    question: "What does FIRST_VALUE() return?",
    options: ["First column value", "First value in window partition", "Minimum value", "First row"],
    answer: "First value in window partition",
    explanation: "FIRST_VALUE returns the first value in an ordered partition."
  },
  {
    id: 86,
    question: "What is table normalization?",
    options: ["Flattening tables", "Organizing to reduce redundancy", "Creating indexes", "Optimizing queries"],
    answer: "Organizing to reduce redundancy",
    explanation: "Normalization organizes tables to minimize data redundancy and dependency."
  },
  {
    id: 87,
    question: "What is denormalization?",
    options: ["Removing normal forms", "Adding redundancy for read performance", "Deleting indexes", "Splitting tables"],
    answer: "Adding redundancy for read performance",
    explanation: "Denormalization intentionally adds redundancy to optimize read performance."
  },
  {
    id: 88,
    question: "What is a clustered index?",
    options: ["Index on multiple columns", "Index determining physical row order", "Grouped index", "Distributed index"],
    answer: "Index determining physical row order",
    explanation: "A clustered index determines the physical storage order of table data."
  },
  {
    id: 89,
    question: "What does OVER() clause do?",
    options: ["Completes query", "Defines window for window functions", "Overrides values", "Loops over rows"],
    answer: "Defines window for window functions",
    explanation: "OVER() defines the window specification for window function calculations."
  },
  {
    id: 90,
    question: "What is a deadlock?",
    options: ["Slow query", "Two transactions waiting for each other", "Locked table", "Connection timeout"],
    answer: "Two transactions waiting for each other",
    explanation: "Deadlock occurs when two or more transactions block each other indefinitely."
  },
  {
    id: 91,
    question: "What is transaction isolation level?",
    options: ["Security level", "Degree of visibility between concurrent transactions", "Backup level", "Permission level"],
    answer: "Degree of visibility between concurrent transactions",
    explanation: "Isolation level defines how changes by one transaction are visible to others."
  },
  {
    id: 92,
    question: "What is READ COMMITTED isolation?",
    options: ["No isolation", "See only committed data from other transactions", "See all changes", "Serialized access"],
    answer: "See only committed data from other transactions",
    explanation: "READ COMMITTED allows reading only data committed by other transactions."
  },
  {
    id: 93,
    question: "What does SERIALIZABLE isolation provide?",
    options: ["Fastest access", "Highest isolation, transactions appear sequential", "No locking", "Parallel execution"],
    answer: "Highest isolation, transactions appear sequential",
    explanation: "SERIALIZABLE provides the highest isolation, as if transactions ran one at a time."
  },
  {
    id: 94,
    question: "What is an index scan vs index seek?",
    options: ["Same thing", "Scan reads all, seek finds specific rows", "Seek reads all, scan finds specific", "Different databases"],
    answer: "Scan reads all, seek finds specific rows",
    explanation: "Index seek efficiently finds specific rows; index scan reads through all index entries."
  },
  {
    id: 95,
    question: "What does GROUPING SETS provide?",
    options: ["Multiple GROUP BY in one query", "Set theory operations", "Grouping validation", "Index grouping"],
    answer: "Multiple GROUP BY in one query",
    explanation: "GROUPING SETS allows specifying multiple grouping configurations in a single query."
  },
  {
    id: 96,
    question: "What is a lateral join?",
    options: ["Horizontal join", "Subquery that references outer query in FROM", "Side join", "Parallel join"],
    answer: "Subquery that references outer query in FROM",
    explanation: "LATERAL allows subqueries in FROM clause to reference preceding table expressions."
  },
  {
    id: 97,
    question: "What are prepared statements used for?",
    options: ["Documentation", "Precompiled SQL for security and performance", "Data backup", "Schema migration"],
    answer: "Precompiled SQL for security and performance",
    explanation: "Prepared statements are precompiled, preventing SQL injection and improving performance."
  },
  {
    id: 98,
    question: "What is MVCC (Multi-Version Concurrency Control)?",
    options: ["Version control system", "Concurrency without locking using snapshots", "Multiple databases", "Cluster version"],
    answer: "Concurrency without locking using snapshots",
    explanation: "MVCC maintains multiple versions of data to allow concurrent access without locking."
  },
  {
    id: 99,
    question: "What is query optimization hint?",
    options: ["Comment for developers", "Directive to query optimizer", "Documentation", "Error message"],
    answer: "Directive to query optimizer",
    explanation: "Hints suggest to the optimizer how to execute a query, overriding default behavior."
  },
  {
    id: 100,
    question: "What is a bitmap index best suited for?",
    options: ["High cardinality columns", "Low cardinality columns with many reads", "Primary keys", "Text search"],
    answer: "Low cardinality columns with many reads",
    explanation: "Bitmap indexes excel for columns with few distinct values and read-heavy workloads."
  }
];

export default questions;
