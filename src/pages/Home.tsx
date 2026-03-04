import { Link } from "react-router-dom";
import { BookOpen, SearchX, Search, X } from "lucide-react";
import { Topic, TopicCategory } from "@data/types";
import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { getAllTopicsProgress } from "@hooks/useQuizProgress";
import ThemeToggle from "@components/ThemeToggle";
import TopicIcon from "@components/TopicIcon";
import {
  ImportExportSidebar,
  ImportExportButton,
} from "@components/import-export";
import { Badge } from "@components/ui/badge";
import { Input } from "@components/ui/input";
import { allTopics, categories } from "@constants/topics";

const TopicCard = memo(function TopicCard({
  topic,
  progress,
}: {
  topic: Topic;
  progress?: { correct: number; wrong: number; skipped: number; total: number };
}) {
  return (
    <Link
      to={`/topic/${topic.id}`}
      className="topic-card group"
      style={{ "--glow-color": topic.color } as React.CSSProperties}
    >
      {/* Topic Icon */}
      <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:animate-float">
        <TopicIcon name={topic.icon} className="w-10 h-10" />
      </div>

      {/* Topic Title */}
      <h3
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{ color: topic.color }}
      >
        {topic.title}
      </h3>
    </Link>
  );
});

interface ProgressData {
  [topicId: string]: {
    correct: number;
    wrong: number;
    skipped: number;
    total: number;
  };
}

const CategorySection = memo(function CategorySection({
  category,
  progressData,
}: {
  category: TopicCategory;
  progressData: ProgressData;
}) {
  return (
    <section className="mb-10">
      {/* Category Header */}
      <div className="category-header">
        <TopicIcon
          name={category.icon}
          className="w-6 h-6"
          style={{ color: "var(--color-brand)" }}
        />
        <h2
          className="text-xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          {category.name}
        </h2>
        <Badge
          variant="secondary"
          className="rounded-full text-xs text-muted-foreground bg-secondary/20 hover:bg-secondary/30 border-none px-3 font-normal"
        >
          {category.topics.length} topics
        </Badge>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.topics.map((topic, idx) => (
          <div
            key={topic.id}
            className="animate-fadeIn"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <TopicCard topic={topic} progress={progressData[topic.id]} />
          </div>
        ))}
      </div>
    </section>
  );
});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [progressData, setProgressData] = useState<ProgressData>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  // Load progress on mount and when window gains focus (returning from quiz)
  useEffect(() => {
    const loadProgress = () => {
      const allProgress = getAllTopicsProgress();
      const data: ProgressData = {};

      Object.entries(allProgress).forEach(([topicId, progress]) => {
        const questions = Object.values(progress.questions);
        data[topicId] = {
          correct: questions.filter((q) => q.status === "correct").length,
          wrong: questions.filter((q) => q.status === "wrong").length,
          skipped: questions.filter((q) => q.status === "skipped").length,
          total: questions.length,
        };
      });

      setProgressData(data);
    };

    loadProgress();
    window.addEventListener("focus", loadProgress);
    return () => window.removeEventListener("focus", loadProgress);
  }, []);

  const filteredCategories = useMemo(() => {
    return searchQuery.trim()
      ? categories
          .map((cat) => ({
            ...cat,
            topics: cat.topics.filter((t) =>
              t.title.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          }))
          .filter((cat) => cat.topics.length > 0)
      : categories;
  }, [searchQuery]);

  const totalQuestions = allTopics.length * 100;

  return (
    <div className="min-h-screen fade-in">
      {/* Floating Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
        style={{
          background: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--color-brand-glow)" }}
              >
                <BookOpen
                  className="w-5 h-5"
                  style={{ color: "var(--color-brand)" }}
                />
              </div>
              <h1
                className="text-xl font-bold hidden sm:block"
                style={{ color: "var(--color-brand)" }}
              >
                Knowledge Check
              </h1>
            </div>

            {/* Search + Theme Toggle */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 sm:w-64 pl-10 pr-10 h-10 bg-card border-border shadow-sm rounded-xl focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Import/Export */}
              <ImportExportButton onClick={openSidebar} />

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-brand) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)",
            }}
          >
            Master Your Skills
          </h1>
          <p
            className="text-lg mb-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Challenge yourself with {allTopics.length} topics and{" "}
            {totalQuestions.toLocaleString()} questions
          </p>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Track your progress • Learn at your pace • Achieve mastery
          </p>
        </div>

        {/* Categories */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategorySection
              key={category.name}
              category={category}
              progressData={progressData}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4 text-muted-foreground opacity-50">
              <SearchX className="w-12 h-12" />
            </div>
            <p
              className="text-xl mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              No topics found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary hover:underline font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      {/* Import/Export Sidebar */}
      <ImportExportSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Footer */}
      <footer
        className="border-t py-6 mt-8"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Built with ❤️ for continuous learning
          </p>
        </div>
      </footer>
    </div>
  );
}
