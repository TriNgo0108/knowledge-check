import { useParams, Link } from "react-router-dom";
import {
  useTopics,
  useOriginalQuestions,
  useGeneratedTestsForTopic,
} from "@hooks";
import { useTestProgressStats } from "@store";
import ThemeToggle from "@components/ThemeToggle";
import TopicIcon from "@components/TopicIcon";
import { BookOpen, HelpCircle, Timer, ArrowLeft, Check, X } from "lucide-react";
import { Progress } from "@components/ui/progress";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";

interface TestCardProps {
  topicId: string;
  testId: string;
  displayName: string;
  questionCount: number;
  color: string;
  isOriginal?: boolean;
}

function TestCard({
  topicId,
  testId,
  displayName,
  questionCount,
  color,
  isOriginal,
}: TestCardProps) {
  const progressKey = `${topicId}_${testId}`;
  const stats = useTestProgressStats(progressKey, questionCount);

  // Use stats.answered directly - already computed in the hook
  const progressPercent =
    questionCount > 0 ? (stats.answered / questionCount) * 100 : 0;

  return (
    <Link
      to={`/quiz/${topicId}/${testId}`}
      className="block p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3
            className="font-semibold text-lg"
            style={{ color: "var(--color-text)" }}
          >
            {displayName}
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {questionCount} questions
          </p>
        </div>
        {isOriginal && (
          <span
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              color,
            }}
          >
            Original
          </span>
        )}
      </div>

      {/* Progress bar */}
      <Progress
        value={progressPercent}
        indicatorColor={color}
        className="h-2 mb-3 mt-1 bg-border"
      />

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm">
        <span
          className="flex items-center gap-1"
          style={{ color: "var(--color-correct)" }}
        >
          <Check
            className="w-4 h-4"
            style={{ color: "var(--color-correct)" }}
          />
          {stats.correct}
        </span>
        <span
          className="flex items-center gap-1"
          style={{ color: "var(--color-wrong)" }}
        >
          <X className="w-4 h-4" style={{ color: "var(--color-wrong)" }} />
          {stats.wrong}
        </span>
        <span style={{ color: "var(--color-text-muted)" }}>
          {stats.unanswered} remaining
        </span>
      </div>
    </Link>
  );
}

export default function TestSelection() {
  const { topicId } = useParams<{ topicId: string }>();

  // Fetch topic data and original questions
  const { data: topics = [] } = useTopics();
  const { data: originalQuestions = [], isLoading: loadingOriginal } =
    useOriginalQuestions(topicId || "");
  const { data: generatedTests = [] } = useGeneratedTestsForTopic(
    topicId || "",
  );

  const topic = topics.find((t) => t.id === topicId);
  const originalCount = originalQuestions.length;

  // Loading state
  if (loadingOriginal) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <Card className="w-full max-w-md border-border bg-card/60 backdrop-blur-xl animate-scaleIn">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-8">
            <div className="flex justify-center mb-4 text-primary animate-float">
              <BookOpen className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Loading Tests...</h2>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!topic && topics.length > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <Card className="w-full max-w-md border-border bg-card/60 backdrop-blur-xl animate-scaleIn">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-8">
            <div className="flex justify-center mb-4 text-muted-foreground opacity-50">
              <HelpCircle className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-6">Topic Not Found</h2>
            <Button asChild>
              <Link to="/">Go Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Use default values while loading topics
  const topicIconName = topic?.icon || "Book";
  const topicTitle = topic?.title || topicId || "Topic";
  const topicColor = topic?.color || "hsl(200, 70%, 50%)";

  return (
    <div
      className="min-h-screen fade-in"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
        style={{
          background: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" asChild className="gap-2">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Topic Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <TopicIcon name={topicIconName} className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: topicColor }}>
            {topicTitle}
          </h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            Select a test to begin
          </p>
        </div>

        {/* Tests List */}
        <div className="space-y-4">
          {/* Original Test */}
          <TestCard
            topicId={topicId || ""}
            testId="original"
            displayName="Original Test"
            questionCount={originalCount}
            color={topicColor}
            isOriginal
          />

          {/* Generated Tests */}
          {generatedTests.length > 0 && (
            <>
              <div className="flex items-center gap-3 mt-8 mb-4">
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--color-border)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Weekly Generated Tests
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--color-border)" }}
                />
              </div>

              {generatedTests.map((test) => (
                <TestCard
                  key={test.date}
                  topicId={topicId || ""}
                  testId={`week_${test.date.replace(/-/g, "_")}`}
                  displayName={test.displayName}
                  questionCount={100}
                  color={topicColor}
                />
              ))}
            </>
          )}

          {generatedTests.length === 0 && (
            <div
              className="text-center py-8 rounded-xl mt-6"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px dashed var(--color-border)",
              }}
            >
              <div className="flex justify-center mb-2 text-muted-foreground opacity-50">
                <Timer className="w-8 h-8" />
              </div>
              <p style={{ color: "var(--color-text-muted)" }}>
                Weekly generated tests coming soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
