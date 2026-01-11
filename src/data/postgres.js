export default [
  {
    id: 1,
    question: "Which data type is specific to PostgreSQL for JSON data?",
    options: ["TEXT", "JSONB", "BLOB", "VARCHAR"],
    answer: "JSONB",
    explanation: "JSONB (Binary JSON) is a decomposed binary format that is faster to process than plain JSON."
  },
  {
    id: 2,
    question: "How do you perform a case-insensitive search using LIKE?",
    options: ["ILIKE", "LIKE_CI", "SEARCH_CI", "MATCH"],
    answer: "ILIKE",
    explanation: "ILIKE is a PostgreSQL-specific extension for case-insensitive matching."
  },
  {
    id: 3,
    question: "What is the default port for PostgreSQL?",
    options: ["3306", "5432", "8080", "27017"],
    answer: "5432",
    explanation: "5432 is the standard default port."
  },
  {
    id: 4,
    question: "Which feature allows creating a strict subset of data?",
    options: ["Views", "Partitions", "Schemas", "Materialized Views"],
    answer: "Views",
    explanation: "While all are valid, Partitions are physically splitting, but Views create a virtual subset."
  },
  {
    id: 5,
    question: "What is the command to list all databases in psql shell?",
    options: ["\\l", "\\d", "\\dt", "\\db"],
    answer: "\\l",
    explanation: "\\l list all databases."
  }
];
