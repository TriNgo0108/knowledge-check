export default [
  {
    id: 1,
    question: "How do you select the column 'age' from a DataFrame `df`?",
    options: ["df.select('age')", "df['age']", "df.get('age')", "df.age()"],
    answer: "df['age']",
    explanation: "Indexing with [] is the primary way to select columns as a Series."
  },
  {
    id: 2,
    question: "Which method is used to drop missing values?",
    options: ["df.drop_nan()", "df.dropna()", "df.remove_na()", "df.clean()"],
    answer: "df.dropna()",
    explanation: "`dropna()` removes missing values."
  },
  {
    id: 3,
    question: "How do you group data by column 'Category'?",
    options: ["df.group('Category')", "df.groupby('Category')", "df.sort('Category')", "df.aggregate('Category')"],
    answer: "df.groupby('Category')",
    explanation: "`groupby()` is used for splitting the data into groups."
  },
  {
    id: 4,
    question: "Which function reads a CSV file?",
    options: ["pd.read_csv()", "pd.import_csv()", "pd.csv()", "pd.load_csv()"],
    answer: "pd.read_csv()",
    explanation: "`read_csv()` is the standard function to load CSV data."
  },
  {
    id: 5,
    question: "What does `df.head()` do?",
    options: ["Returns the first 5 rows", "Returns the headers", "Returns the column names", "Returns the first row"],
    answer: "Returns the first 5 rows",
    explanation: "By default, `head()` returns the first 5 rows."
  }
];
