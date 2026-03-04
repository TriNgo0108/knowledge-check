import { Topic, TopicCategory } from "@data/types";

export const allTopics: Topic[] = [
  {
    id: "pronunciation",
    title: "Pronunciation",
    icon: "Mic",
    color: "oklch(60.6% 0.25 292.717)", // violet-500
  },
  {
    id: "grammar",
    title: "Grammar",
    icon: "PenTool",
    color: "oklch(59.6% 0.145 163.225)", // emerald-600
  },
  {
    id: "pandas",
    title: "Pandas",
    icon: "Table",
    color: "oklch(68.5% 0.169 237.323)",
  }, // sky-500
  {
    id: "sql",
    title: "SQL",
    icon: "Database",
    color: "oklch(75% 0.183 55.934)",
  }, // orange-400
  {
    id: "postgres",
    title: "PostgreSQL",
    icon: "DatabaseBackup",
    color: "oklch(62.3% 0.214 259.815)", // blue-500
  },
  { id: "aws", title: "AWS", icon: "Cloud", color: "oklch(76.9% 0.188 70.08)" }, // amber-500
  {
    id: "python",
    title: "Python",
    icon: "Code",
    color: "oklch(79.5% 0.184 86.047)",
  }, // yellow-500
  {
    id: "javascript",
    title: "JavaScript",
    icon: "Zap",
    color: "oklch(85.2% 0.199 91.936)", // yellow-400
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "FileCode",
    color: "oklch(62.3% 0.214 259.815)", // blue-500
  },
  {
    id: "react",
    title: "React",
    icon: "Atom",
    color: "oklch(78.9% 0.154 211.53)",
  }, // cyan-400
  {
    id: "systemdesign",
    title: "System Design",
    icon: "Network",
    color: "oklch(64.5% 0.246 16.439)", // rose-500
  },
  {
    id: "designpatterns",
    title: "Design Patterns",
    icon: "Box",
    color: "oklch(60.6% 0.25 292.717)", // violet-500
  },
  {
    id: "algorithms",
    title: "Algorithms",
    icon: "Binary",
    color: "oklch(62.7% 0.194 149.214)", // green-600
  },
  {
    id: "aiagents",
    title: "AI Agents",
    icon: "BrainCircuit",
    color: "oklch(70.4% 0.14 182.503)", // teal-500
  },
  {
    id: "langchain",
    title: "LangChain",
    icon: "Link",
    color: "oklch(69.6% 0.17 162.48)", // emerald-500
  },
  {
    id: "financial",
    title: "Financial Literacy",
    icon: "CircleDollarSign",
    color: "oklch(62.7% 0.194 149.214)", // green-600
  },
  {
    id: "aiengineer",
    title: "AI Engineer",
    icon: "Bot",
    color: "oklch(58.5% 0.233 277.117)", // indigo-500
  },
  {
    id: "interview",
    title: "Tech Interview",
    icon: "Users",
    color: "oklch(63.7% 0.237 25.331)", // red-500
  },
  {
    id: "csharp",
    title: "C#",
    icon: "Hash",
    color: "oklch(54.1% 0.281 293.009)",
  }, // violet-600
  {
    id: "dotnet",
    title: ".NET",
    icon: "Server",
    color: "oklch(55.8% 0.288 302.321)",
  }, // purple-600
  {
    id: "dapper",
    title: "Dapper",
    icon: "Layers",
    color: "oklch(70.5% 0.213 47.604)",
  }, // orange-500
  {
    id: "entityframework",
    title: "Entity Framework",
    icon: "Blocks",
    color: "oklch(59.1% 0.293 322.896)", // fuchsia-600
  },
  {
    id: "terraform",
    title: "Terraform",
    icon: "ServerCog",
    color: "oklch(62.7% 0.265 303.9)", // purple-500
  },
  {
    id: "pulumi",
    title: "Pulumi",
    icon: "CloudLightning",
    color: "oklch(66.7% 0.295 322.15)", // fuchsia-500
  },
];

export const categories: TopicCategory[] = [
  {
    name: "Programming Languages",
    icon: "Terminal",
    topics: allTopics.filter((t) =>
      ["python", "javascript", "typescript", "csharp"].includes(t.id),
    ),
  },
  {
    name: "Frameworks & Libraries",
    icon: "Component",
    topics: allTopics.filter((t) =>
      ["react", "pandas", "dotnet", "dapper", "entityframework"].includes(t.id),
    ),
  },
  {
    name: "Databases",
    icon: "Database",
    topics: allTopics.filter((t) => ["sql", "postgres"].includes(t.id)),
  },
  {
    name: "Architecture & Patterns",
    icon: "Network",
    topics: allTopics.filter((t) =>
      ["systemdesign", "designpatterns", "algorithms"].includes(t.id),
    ),
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    topics: allTopics.filter((t) =>
      ["aws", "terraform", "pulumi"].includes(t.id),
    ),
  },
  {
    name: "Career & Growth",
    icon: "Rocket",
    topics: allTopics.filter((t) => ["financial", "interview"].includes(t.id)),
  },
  {
    name: "AI Engineering",
    icon: "Bot",
    topics: allTopics.filter((t) =>
      ["aiagents", "aiengineer", "langchain"].includes(t.id),
    ),
  },
  {
    name: "English Skills",
    icon: "BookOpen",
    topics: allTopics.filter((t) =>
      ["pronunciation", "grammar"].includes(t.id),
    ),
  },
];

/** Lookup map: topic id → display name, derived from `allTopics`. */
export const topicNames: Record<string, string> = Object.fromEntries(
  allTopics.map((t) => [t.id, t.title]),
);
