import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What is the primary data structure for tabular data in Pandas?",
    options: ["Array", "List", "DataFrame", "Dictionary"],
    answer: "DataFrame",
    explanation: "DataFrame is the primary 2D data structure in Pandas for storing tabular data with labeled axes."
  },
  {
    id: 2,
    question: "How do you import Pandas with the standard alias?",
    options: ["import pandas", "import pandas as pd", "from pandas import *", "import pd"],
    answer: "import pandas as pd",
    explanation: "The convention is to import pandas as 'pd' for brevity."
  },
  {
    id: 3,
    question: "Which function reads a CSV file into a DataFrame?",
    options: ["pd.read_csv()", "pd.import_csv()", "pd.load_csv()", "pd.csv()"],
    answer: "pd.read_csv()",
    explanation: "pd.read_csv() is the standard function to load CSV data into a DataFrame."
  },
  {
    id: 4,
    question: "How do you select the column 'age' from a DataFrame `df`?",
    options: ["df.select('age')", "df['age']", "df.get('age')", "df.age()"],
    answer: "df['age']",
    explanation: "Bracket notation df['column_name'] is the primary way to select a column as a Series."
  },
  {
    id: 5,
    question: "What does `df.head()` return by default?",
    options: ["First row", "First 5 rows", "First 10 rows", "Column names"],
    answer: "First 5 rows",
    explanation: "head() returns the first 5 rows by default. You can specify a different number with head(n)."
  },
  {
    id: 6,
    question: "What is a Series in Pandas?",
    options: ["A 2D array", "A 1D labeled array", "A dictionary", "A list of DataFrames"],
    answer: "A 1D labeled array",
    explanation: "A Series is a one-dimensional labeled array capable of holding any data type."
  },
  {
    id: 7,
    question: "How do you get the shape of a DataFrame?",
    options: ["df.size()", "df.shape", "df.dimensions()", "df.len()"],
    answer: "df.shape",
    explanation: "df.shape returns a tuple of (rows, columns)."
  },
  {
    id: 8,
    question: "Which method shows basic statistics of numerical columns?",
    options: ["df.info()", "df.describe()", "df.stats()", "df.summary()"],
    answer: "df.describe()",
    explanation: "describe() generates descriptive statistics including count, mean, std, min, max, and quartiles."
  },
  {
    id: 9,
    question: "How do you check for missing values in a DataFrame?",
    options: ["df.missing()", "df.isnull()", "df.empty()", "df.check_na()"],
    answer: "df.isnull()",
    explanation: "isnull() or isna() returns a DataFrame of booleans indicating missing values."
  },
  {
    id: 10,
    question: "What does `df.tail(3)` return?",
    options: ["First 3 rows", "Last 3 rows", "3 random rows", "Every 3rd row"],
    answer: "Last 3 rows",
    explanation: "tail(n) returns the last n rows of the DataFrame."
  },
  {
    id: 11,
    question: "How do you get column names of a DataFrame?",
    options: ["df.names", "df.columns", "df.headers", "df.col_names"],
    answer: "df.columns",
    explanation: "df.columns returns an Index object containing all column names."
  },
  {
    id: 12,
    question: "Which method removes duplicate rows?",
    options: ["df.unique()", "df.drop_duplicates()", "df.distinct()", "df.remove_dups()"],
    answer: "df.drop_duplicates()",
    explanation: "drop_duplicates() removes duplicate rows based on all or specified columns."
  },
  {
    id: 13,
    question: "How do you save a DataFrame to a CSV file?",
    options: ["df.save_csv()", "df.to_csv()", "df.export_csv()", "df.write_csv()"],
    answer: "df.to_csv()",
    explanation: "to_csv() writes the DataFrame to a CSV file."
  },
  {
    id: 14,
    question: "What does `df.dtypes` return?",
    options: ["Row count", "Data types of each column", "Memory usage", "Column names"],
    answer: "Data types of each column",
    explanation: "dtypes returns the data type of each column in the DataFrame."
  },
  {
    id: 15,
    question: "How do you select multiple columns from a DataFrame?",
    options: ["df['col1', 'col2']", "df[['col1', 'col2']]", "df.select('col1', 'col2')", "df.cols(['col1', 'col2'])"],
    answer: "df[['col1', 'col2']]",
    explanation: "Use double brackets with a list of column names to select multiple columns."
  },
  {
    id: 16,
    question: "Which method fills missing values?",
    options: ["df.fill()", "df.fillna()", "df.replace_na()", "df.complete()"],
    answer: "df.fillna()",
    explanation: "fillna() fills NA/NaN values with a specified value or method."
  },
  {
    id: 17,
    question: "How do you filter rows where 'age' > 30?",
    options: ["df.filter(age > 30)", "df[df['age'] > 30]", "df.where(age > 30)", "df.query('age' > 30)"],
    answer: "df[df['age'] > 30]",
    explanation: "Boolean indexing with df[condition] filters rows matching the condition."
  },
  {
    id: 18,
    question: "What does `df.info()` display?",
    options: ["Statistical summary", "Column types and non-null counts", "First 5 rows", "Shape only"],
    answer: "Column types and non-null counts",
    explanation: "info() prints a concise summary including dtypes, non-null counts, and memory usage."
  },
  {
    id: 19,
    question: "How do you rename a column 'old_name' to 'new_name'?",
    options: ["df.rename(columns={'old_name': 'new_name'})", "df.columns['old_name'] = 'new_name'", "df.change_name('old_name', 'new_name')", "df.set_column('new_name')"],
    answer: "df.rename(columns={'old_name': 'new_name'})",
    explanation: "rename() with a columns dictionary maps old names to new names."
  },
  {
    id: 20,
    question: "Which method drops rows with missing values?",
    options: ["df.drop_null()", "df.dropna()", "df.remove_missing()", "df.clean()"],
    answer: "df.dropna()",
    explanation: "dropna() removes rows (or columns) containing missing values."
  },
  {
    id: 21,
    question: "How do you sort a DataFrame by column 'price'?",
    options: ["df.order_by('price')", "df.sort_values('price')", "df.sort('price')", "df.arrange('price')"],
    answer: "df.sort_values('price')",
    explanation: "sort_values() sorts by the values of specified column(s)."
  },
  {
    id: 22,
    question: "What does `len(df)` return?",
    options: ["Number of columns", "Number of rows", "Total cells", "Memory size"],
    answer: "Number of rows",
    explanation: "len() on a DataFrame returns the number of rows."
  },
  {
    id: 23,
    question: "How do you add a new column 'total' with value 0?",
    options: ["df.add_column('total', 0)", "df['total'] = 0", "df.insert('total', 0)", "df.new_col('total', 0)"],
    answer: "df['total'] = 0",
    explanation: "Assigning to a new column name creates that column with the specified value."
  },
  {
    id: 24,
    question: "Which method returns unique values of a column?",
    options: ["df['col'].distinct()", "df['col'].unique()", "df['col'].values()", "df['col'].different()"],
    answer: "df['col'].unique()",
    explanation: "unique() returns an array of unique values in a Series."
  },
  {
    id: 25,
    question: "How do you count unique values in a column?",
    options: ["df['col'].count_unique()", "df['col'].nunique()", "df['col'].unique().count()", "df['col'].distinct_count()"],
    answer: "df['col'].nunique()",
    explanation: "nunique() returns the number of unique values in a Series."
  },
  {
    id: 26,
    question: "What does `df.drop('col', axis=1)` do?",
    options: ["Drops rows named 'col'", "Drops column 'col'", "Drops first column", "Drops null values in 'col'"],
    answer: "Drops column 'col'",
    explanation: "axis=1 specifies columns (axis=0 is rows). drop() removes the specified column."
  },
  {
    id: 27,
    question: "How do you reset the index of a DataFrame?",
    options: ["df.reset_index()", "df.reindex()", "df.new_index()", "df.clear_index()"],
    answer: "df.reset_index()",
    explanation: "reset_index() resets the index to default integers, optionally keeping old index as a column."
  },
  {
    id: 28,
    question: "Which method counts occurrences of each value?",
    options: ["df['col'].count()", "df['col'].value_counts()", "df['col'].frequency()", "df['col'].tally()"],
    answer: "df['col'].value_counts()",
    explanation: "value_counts() returns a Series with counts of unique values."
  },
  {
    id: 29,
    question: "How do you set a column as the index?",
    options: ["df.index = 'col'", "df.set_index('col')", "df.use_index('col')", "df.make_index('col')"],
    answer: "df.set_index('col')",
    explanation: "set_index() sets the specified column as the DataFrame index."
  },
  {
    id: 30,
    question: "What does `df.copy()` do?",
    options: ["Prints the DataFrame", "Creates a deep copy", "Copies to clipboard", "Duplicates rows"],
    answer: "Creates a deep copy",
    explanation: "copy() creates a deep copy of the DataFrame to avoid modifying the original."
  },
  {
    id: 31,
    question: "How do you read an Excel file?",
    options: ["pd.read_excel()", "pd.load_excel()", "pd.import_excel()", "pd.excel()"],
    answer: "pd.read_excel()",
    explanation: "read_excel() reads Excel files into a DataFrame."
  },
  {
    id: 32,
    question: "Which method returns the maximum value of a column?",
    options: ["df['col'].maximum()", "df['col'].max()", "df['col'].top()", "df['col'].highest()"],
    answer: "df['col'].max()",
    explanation: "max() returns the maximum value in a Series."
  },
  {
    id: 33,
    question: "How do you calculate the mean of a column?",
    options: ["df['col'].avg()", "df['col'].mean()", "df['col'].average()", "df['col'].mid()"],
    answer: "df['col'].mean()",
    explanation: "mean() calculates the arithmetic mean of values."
  },
  {
    id: 34,
    question: "What does `df.sample(5)` return?",
    options: ["First 5 rows", "Last 5 rows", "5 random rows", "Every 5th row"],
    answer: "5 random rows",
    explanation: "sample(n) returns n randomly selected rows from the DataFrame."
  },
  {
    id: 35,
    question: "How do you concatenate two DataFrames vertically?",
    options: ["df1.append(df2)", "pd.concat([df1, df2])", "df1.merge(df2)", "df1 + df2"],
    answer: "pd.concat([df1, df2])",
    explanation: "pd.concat() with default axis=0 stacks DataFrames vertically."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "How do you group data by column 'category' and get the mean?",
    options: ["df.group('category').mean()", "df.groupby('category').mean()", "df.aggregate('category', 'mean')", "df.by('category').mean()"],
    answer: "df.groupby('category').mean()",
    explanation: "groupby() splits data into groups, then mean() calculates average for each group."
  },
  {
    id: 37,
    question: "What is the difference between `loc` and `iloc`?",
    options: ["loc is faster", "loc uses labels, iloc uses positions", "iloc uses labels, loc uses positions", "No difference"],
    answer: "loc uses labels, iloc uses positions",
    explanation: "loc selects by label/boolean, iloc selects by integer position."
  },
  {
    id: 38,
    question: "How do you merge two DataFrames on column 'id'?",
    options: ["df1.join(df2, on='id')", "pd.merge(df1, df2, on='id')", "df1.concat(df2, on='id')", "df1.combine(df2, on='id')"],
    answer: "pd.merge(df1, df2, on='id')",
    explanation: "pd.merge() performs SQL-style joins on specified columns."
  },
  {
    id: 39,
    question: "What does `df.pivot_table()` do?",
    options: ["Rotates the DataFrame", "Creates a spreadsheet-style pivot table", "Transposes rows and columns", "Sorts the data"],
    answer: "Creates a spreadsheet-style pivot table",
    explanation: "pivot_table() creates a pivot table with aggregation for duplicate values."
  },
  {
    id: 40,
    question: "How do you apply a function to each element in a column?",
    options: ["df['col'].map(func)", "df['col'].apply(func)", "df['col'].transform(func)", "All of the above"],
    answer: "All of the above",
    explanation: "map(), apply(), and transform() can all apply functions element-wise, with subtle differences."
  },
  {
    id: 41,
    question: "What does `df.melt()` do?",
    options: ["Removes columns", "Unpivots wide to long format", "Melts duplicate rows", "Combines columns"],
    answer: "Unpivots wide to long format",
    explanation: "melt() transforms wide-format data to long-format by unpivoting columns."
  },
  {
    id: 42,
    question: "How do you handle multiple aggregations in groupby?",
    options: ["df.groupby('col').agg(['sum', 'mean'])", "df.groupby('col').multi(['sum', 'mean'])", "df.groupby('col').aggregate_all()", "df.groupby('col').apply(['sum', 'mean'])"],
    answer: "df.groupby('col').agg(['sum', 'mean'])",
    explanation: "agg() accepts a list or dict of aggregation functions to apply."
  },
  {
    id: 43,
    question: "What is the purpose of `df.query()`?",
    options: ["SQL queries on DataFrame", "Filter rows using string expression", "Database connection", "Query metadata"],
    answer: "Filter rows using string expression",
    explanation: "query() filters rows using a boolean expression in string format."
  },
  {
    id: 44,
    question: "How do you change a column's data type to integer?",
    options: ["df['col'].to_int()", "df['col'].astype(int)", "df['col'].convert(int)", "df['col'].cast(int)"],
    answer: "df['col'].astype(int)",
    explanation: "astype() converts the Series to the specified data type."
  },
  {
    id: 45,
    question: "What does `df.stack()` do?",
    options: ["Adds rows", "Pivots columns to rows (multi-level index)", "Stacks DataFrames", "Creates a copy"],
    answer: "Pivots columns to rows (multi-level index)",
    explanation: "stack() pivots the innermost column level to become the innermost row level."
  },
  {
    id: 46,
    question: "How do you perform a left join?",
    options: ["pd.merge(df1, df2, how='left')", "df1.join(df2, type='left')", "pd.concat([df1, df2], join='left')", "df1.left_merge(df2)"],
    answer: "pd.merge(df1, df2, how='left')",
    explanation: "The 'how' parameter in merge() specifies the join type: left, right, inner, outer."
  },
  {
    id: 47,
    question: "What is `pd.cut()` used for?",
    options: ["Removing rows", "Binning continuous values into intervals", "Cutting strings", "Slicing DataFrames"],
    answer: "Binning continuous values into intervals",
    explanation: "cut() segments and sorts data into bins/intervals (discretization)."
  },
  {
    id: 48,
    question: "How do you create a datetime column from strings?",
    options: ["df['date'].to_date()", "pd.to_datetime(df['date'])", "df['date'].as_datetime()", "pd.parse_date(df['date'])"],
    answer: "pd.to_datetime(df['date'])",
    explanation: "pd.to_datetime() converts strings or numbers to datetime objects."
  },
  {
    id: 49,
    question: "What does `df.rolling(window=3).mean()` do?",
    options: ["Calculates 3-period rolling average", "Groups every 3 rows", "Rounds to 3 decimals", "Samples 3 rows"],
    answer: "Calculates 3-period rolling average",
    explanation: "rolling() creates a rolling window for calculations like moving averages."
  },
  {
    id: 50,
    question: "How do you replace values in a DataFrame?",
    options: ["df.change()", "df.replace()", "df.swap()", "df.update()"],
    answer: "df.replace()",
    explanation: "replace() replaces specified values with other values."
  },
  {
    id: 51,
    question: "What does `df.explode('col')` do?",
    options: ["Deletes the column", "Transforms list-like elements to rows", "Expands column width", "Raises an error"],
    answer: "Transforms list-like elements to rows",
    explanation: "explode() transforms each element of a list-like to a separate row."
  },
  {
    id: 52,
    question: "How do you perform string operations on a column?",
    options: ["df['col'].string.method()", "df['col'].str.method()", "df['col'].text.method()", "df['col'].s.method()"],
    answer: "df['col'].str.method()",
    explanation: "The .str accessor provides vectorized string operations."
  },
  {
    id: 53,
    question: "What does `df.assign()` do?",
    options: ["Assigns values to existing columns only", "Creates new columns using keyword arguments", "Assigns index values", "Copies the DataFrame"],
    answer: "Creates new columns using keyword arguments",
    explanation: "assign() returns a new DataFrame with new/modified columns specified as kwargs."
  },
  {
    id: 54,
    question: "How do you extract the year from a datetime column?",
    options: ["df['date'].year", "df['date'].dt.year", "df['date'].get_year()", "df['date'].extract('year')"],
    answer: "df['date'].dt.year",
    explanation: "The .dt accessor provides datetime properties like year, month, day."
  },
  {
    id: 55,
    question: "What is the purpose of `df.resample()`?",
    options: ["Random sampling", "Resampling time-series data", "Reordering rows", "Creating bootstrap samples"],
    answer: "Resampling time-series data",
    explanation: "resample() is for frequency conversion and resampling of time series."
  },
  {
    id: 56,
    question: "How do you create a cross-tabulation?",
    options: ["pd.crosstab()", "df.cross()", "pd.cross_table()", "df.tabulate()"],
    answer: "pd.crosstab()",
    explanation: "crosstab() computes a cross-tabulation of two or more factors."
  },
  {
    id: 57,
    question: "What does `df.rank()` do?",
    options: ["Sorts the DataFrame", "Assigns rank to values", "Filters top values", "Orders by index"],
    answer: "Assigns rank to values",
    explanation: "rank() computes numerical data ranks along an axis."
  },
  {
    id: 58,
    question: "How do you calculate cumulative sum?",
    options: ["df['col'].cumsum()", "df['col'].running_sum()", "df['col'].total()", "df['col'].sum_cumulative()"],
    answer: "df['col'].cumsum()",
    explanation: "cumsum() returns cumulative sum over the axis."
  },
  {
    id: 59,
    question: "What is `pd.get_dummies()` used for?",
    options: ["Creating placeholder data", "One-hot encoding categorical variables", "Generating random data", "Filling missing values"],
    answer: "One-hot encoding categorical variables",
    explanation: "get_dummies() converts categorical variables to dummy/indicator columns."
  },
  {
    id: 60,
    question: "How do you shift values down by 1 row?",
    options: ["df['col'].move(1)", "df['col'].shift(1)", "df['col'].lag(1)", "df['col'].offset(1)"],
    answer: "df['col'].shift(1)",
    explanation: "shift() moves data by a specified number of periods."
  },
  {
    id: 61,
    question: "What does `df.nlargest(5, 'col')` return?",
    options: ["5 smallest values", "5 largest values in 'col'", "Top 5 rows", "5 random values"],
    answer: "5 largest values in 'col'",
    explanation: "nlargest() returns the n rows with the largest values in specified column."
  },
  {
    id: 62,
    question: "How do you calculate percentage change?",
    options: ["df['col'].pct_change()", "df['col'].percent()", "df['col'].change()", "df['col'].delta()"],
    answer: "df['col'].pct_change()",
    explanation: "pct_change() calculates percentage change between current and prior element."
  },
  {
    id: 63,
    question: "What is the purpose of `df.iterrows()`?",
    options: ["Parallel iteration", "Iterate over rows as (index, Series) pairs", "Faster row access", "Iterator for columns"],
    answer: "Iterate over rows as (index, Series) pairs",
    explanation: "iterrows() yields (index, row) pairs for iteration, though vectorized operations are preferred."
  },
  {
    id: 64,
    question: "How do you clip values to a range?",
    options: ["df['col'].limit(0, 100)", "df['col'].clip(0, 100)", "df['col'].bound(0, 100)", "df['col'].range(0, 100)"],
    answer: "df['col'].clip(0, 100)",
    explanation: "clip() trims values at specified minimum and/or maximum thresholds."
  },
  {
    id: 65,
    question: "What does `df.between_time()` do?",
    options: ["Filters by date range", "Selects rows between times of day", "Calculates time difference", "Creates time intervals"],
    answer: "Selects rows between times of day",
    explanation: "between_time() selects rows with index times falling between start and end times."
  },
  {
    id: 66,
    question: "How do you forward-fill missing values?",
    options: ["df.fillna('ffill')", "df.ffill()", "df.fillna(method='ffill')", "Both B and C"],
    answer: "Both B and C",
    explanation: "ffill() and fillna(method='ffill') both propagate last valid observation forward."
  },
  {
    id: 67,
    question: "What does `df.idxmax()` return?",
    options: ["Maximum value", "Index of maximum value", "Row with maximum", "Count of maximum"],
    answer: "Index of maximum value",
    explanation: "idxmax() returns the index label of the maximum value."
  },
  {
    id: 68,
    question: "How do you calculate correlation between columns?",
    options: ["df.correlate()", "df.corr()", "df.correlation()", "df.r_value()"],
    answer: "df.corr()",
    explanation: "corr() computes pairwise correlation of columns."
  },
  {
    id: 69,
    question: "What is the purpose of `df.pipe()`?",
    options: ["Data streaming", "Method chaining with functions", "Connecting to databases", "Creating pipelines"],
    answer: "Method chaining with functions",
    explanation: "pipe() enables method chaining by passing DataFrame to a function."
  },
  {
    id: 70,
    question: "How do you find rows where any column is null?",
    options: ["df[df.isnull()]", "df[df.isnull().any(axis=1)]", "df.any_null()", "df.has_null()"],
    answer: "df[df.isnull().any(axis=1)]",
    explanation: "isnull().any(axis=1) returns True for rows with any null value."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is the advantage of using `pd.Categorical` for a column?",
    options: ["Faster string operations", "Memory efficiency and performance for repeated values", "Better null handling", "Automatic sorting"],
    answer: "Memory efficiency and performance for repeated values",
    explanation: "Categorical dtype uses integer codes internally, reducing memory for columns with repeated values."
  },
  {
    id: 72,
    question: "How do you create a MultiIndex DataFrame?",
    options: ["pd.DataFrame(data, index=['a', 'b'])", "pd.DataFrame(data, index=pd.MultiIndex.from_tuples(...))", "df.set_multi_index()", "df.add_index_level()"],
    answer: "pd.DataFrame(data, index=pd.MultiIndex.from_tuples(...))",
    explanation: "MultiIndex can be created using from_tuples, from_arrays, or from_product methods."
  },
  {
    id: 73,
    question: "What does `df.eval()` provide over regular operations?",
    options: ["Type safety", "Memory efficiency for large DataFrames", "Better error messages", "Automatic parallelization"],
    answer: "Memory efficiency for large DataFrames",
    explanation: "eval() uses numexpr for memory-efficient operations on large DataFrames."
  },
  {
    id: 74,
    question: "How do you perform a merge with indicator for debugging?",
    options: ["pd.merge(..., debug=True)", "pd.merge(..., indicator=True)", "pd.merge(..., trace=True)", "pd.merge(..., log=True)"],
    answer: "pd.merge(..., indicator=True)",
    explanation: "indicator=True adds a '_merge' column showing the source of each row."
  },
  {
    id: 75,
    question: "What is the purpose of `df.swaplevel()`?",
    options: ["Swaps values", "Swaps MultiIndex levels", "Swaps columns and rows", "Swaps dtypes"],
    answer: "Swaps MultiIndex levels",
    explanation: "swaplevel() swaps levels in a MultiIndex."
  },
  {
    id: 76,
    question: "How do you use `transform()` vs `apply()` in groupby?",
    options: ["They're identical", "transform returns same shape, apply can change shape", "apply returns same shape, transform can change shape", "transform is for strings only"],
    answer: "transform returns same shape, apply can change shape",
    explanation: "transform() must return a result that's broadcastable to the input shape."
  },
  {
    id: 77,
    question: "What does `df.memory_usage(deep=True)` return?",
    options: ["CPU usage", "Accurate memory consumption per column", "Disk usage", "Cache size"],
    answer: "Accurate memory consumption per column",
    explanation: "deep=True introspects object dtypes for actual memory usage."
  },
  {
    id: 78,
    question: "How do you efficiently iterate over groups?",
    options: ["for group in df.groups()", "for name, group in df.groupby('col')", "df.iter_groups()", "df.each_group()"],
    answer: "for name, group in df.groupby('col')",
    explanation: "Groupby objects are iterable, yielding (name, group_df) tuples."
  },
  {
    id: 79,
    question: "What is `pd.NamedAgg` used for?",
    options: ["Naming DataFrames", "Named aggregations in groupby.agg()", "Creating named indexes", "Labeling null values"],
    answer: "Named aggregations in groupby.agg()",
    explanation: "NamedAgg allows naming the output columns in aggregations."
  },
  {
    id: 80,
    question: "How do you use `xs()` for cross-section selection?",
    options: ["df.xs('key', level='level_name')", "df.cross_section('key')", "df.select_xs('key')", "df.level_select('key')"],
    answer: "df.xs('key', level='level_name')",
    explanation: "xs() returns a cross-section from a MultiIndex DataFrame."
  },
  {
    id: 81,
    question: "What does `df.sparse` accessor provide?",
    options: ["Sparse matrix operations", "Memory-efficient storage for mostly-null data", "Compression", "Distributed computing"],
    answer: "Memory-efficient storage for mostly-null data",
    explanation: "Sparse dtypes store only non-null values, saving memory for sparse data."
  },
  {
    id: 82,
    question: "How do you perform a window operation with custom function?",
    options: ["df.rolling(3).custom(func)", "df.rolling(3).apply(func)", "df.rolling(3).map(func)", "df.window(3, func)"],
    answer: "df.rolling(3).apply(func)",
    explanation: "apply() on rolling objects allows custom aggregation functions."
  },
  {
    id: 83,
    question: "What is the purpose of `df.convert_dtypes()`?",
    options: ["Converts to strings", "Converts to best possible nullable dtypes", "Converts to numpy arrays", "Converts to Python types"],
    answer: "Converts to best possible nullable dtypes",
    explanation: "convert_dtypes() converts columns to best possible pandas dtypes supporting NA."
  },
  {
    id: 84,
    question: "How do you handle chained indexing warning?",
    options: ["Ignore it", "Use .loc for assignment", "Use .iloc for assignment", "Use copy() before assignment"],
    answer: "Use .loc for assignment",
    explanation: "Chained indexing may fail silently. Use .loc for reliable assignment."
  },
  {
    id: 85,
    question: "What does `df.infer_objects()` do?",
    options: ["Creates object columns", "Infers better dtypes for object columns", "Detects null objects", "Converts to objects"],
    answer: "Infers better dtypes for object columns",
    explanation: "infer_objects() attempts to infer better dtypes for object-dtype columns."
  },
  {
    id: 86,
    question: "How do you set multiple values using `where()`?",
    options: ["df.where(cond, other)", "df.set_where(cond, value)", "df.conditional_set()", "df.mask_set()"],
    answer: "df.where(cond, other)",
    explanation: "where() replaces values where condition is False with 'other'."
  },
  {
    id: 87,
    question: "What is the difference between `df.applymap()` and `df.apply()`?",
    options: ["No difference", "applymap is element-wise, apply is column/row-wise", "apply is element-wise, applymap is column-wise", "applymap is deprecated"],
    answer: "applymap is element-wise, apply is column/row-wise",
    explanation: "applymap applies function to each element, apply to each column/row."
  },
  {
    id: 88,
    question: "How do you use `pd.Grouper` for time-based grouping?",
    options: ["df.groupby(pd.Grouper(key='date', freq='M'))", "df.time_group('M')", "df.groupby_time('date', 'M')", "df.resample('M').group()"],
    answer: "df.groupby(pd.Grouper(key='date', freq='M'))",
    explanation: "Grouper allows specification of groupby instructions for a target object."
  },
  {
    id: 89,
    question: "What does `df.squeeze()` do?",
    options: ["Compresses data", "Removes single-dimensional entries", "Reduces memory", "Flattens to Series"],
    answer: "Removes single-dimensional entries",
    explanation: "squeeze() squeezes 1-dimensional axis objects into scalars or Series."
  },
  {
    id: 90,
    question: "How do you handle timezone-aware datetime?",
    options: ["df['date'].tz_convert('UTC')", "df['date'].set_tz('UTC')", "df['date'].timezone('UTC')", "df['date'].as_utc()"],
    answer: "df['date'].tz_convert('UTC')",
    explanation: "tz_convert() converts tz-aware datetime to another timezone."
  },
  {
    id: 91,
    question: "What is the purpose of `df.flags`?",
    options: ["Feature flags", "Properties that affect behavior", "Null flags", "Index flags"],
    answer: "Properties that affect behavior",
    explanation: "flags attribute contains properties affecting DataFrame behavior."
  },
  {
    id: 92,
    question: "How do you use `pd.testing.assert_frame_equal()`?",
    options: ["Compares DataFrames in tests", "Creates test DataFrames", "Validates DataFrame schema", "Runs performance tests"],
    answer: "Compares DataFrames in tests",
    explanation: "assert_frame_equal() checks if two DataFrames are equal for testing."
  },
  {
    id: 93,
    question: "What does `df.attrs` provide?",
    options: ["Column attributes", "Dictionary for custom metadata", "Index attributes", "Data types"],
    answer: "Dictionary for custom metadata",
    explanation: "attrs is a dictionary for storing custom metadata about the DataFrame."
  },
  {
    id: 94,
    question: "How do you use `df.__array__()` or `.to_numpy()`?",
    options: ["Creates lists", "Converts DataFrame to NumPy array", "Creates generators", "Converts to sparse array"],
    answer: "Converts DataFrame to NumPy array",
    explanation: "to_numpy() is the preferred method to get the NumPy representation."
  },
  {
    id: 95,
    question: "What is `pd.api.types.is_numeric_dtype()` used for?",
    options: ["Converting types", "Checking if dtype is numeric", "Creating numeric columns", "Validating data"],
    answer: "Checking if dtype is numeric",
    explanation: "is_numeric_dtype() checks whether the dtype is numeric."
  },
  {
    id: 96,
    question: "How do you perform out-of-core computation with Pandas?",
    options: ["df.out_of_core()", "Use chunked reading with read_csv(chunksize=...)", "df.distributed()", "pandas.parallel()"],
    answer: "Use chunked reading with read_csv(chunksize=...)",
    explanation: "chunksize parameter enables reading large files in chunks."
  },
  {
    id: 97,
    question: "What does `pd.option_context()` provide?",
    options: ["Permanent options", "Temporary options in a context", "Option validation", "Option history"],
    answer: "Temporary options in a context",
    explanation: "option_context() sets options temporarily within a with block."
  },
  {
    id: 98,
    question: "How do you extend Pandas with custom accessors?",
    options: ["@pd.register_accessor('name')", "@pd.api.extensions.register_dataframe_accessor('name')", "pd.add_accessor('name')", "df.register('name')"],
    answer: "@pd.api.extensions.register_dataframe_accessor('name')",
    explanation: "register_dataframe_accessor decorator registers custom accessors."
  },
  {
    id: 99,
    question: "What is the purpose of `pd.ArrowDtype`?",
    options: ["Arrow visualization", "PyArrow-backed extension types", "Arrow key mapping", "Sorting direction"],
    answer: "PyArrow-backed extension types",
    explanation: "ArrowDtype allows using PyArrow types as Pandas extension types."
  },
  {
    id: 100,
    question: "How do you use `numba` with Pandas for performance?",
    options: ["df.numba()", "df.apply(func, engine='numba')", "pd.set_option('use_numba', True)", "import numba; df.compute()"],
    answer: "df.apply(func, engine='numba')",
    explanation: "engine='numba' enables JIT compilation for custom apply functions."
  }
];

export default questions;
