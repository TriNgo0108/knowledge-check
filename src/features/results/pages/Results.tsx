import { Link, Navigate, useRouterState } from "@tanstack/react-router";
import {
  Trophy,
  Star,
  PartyPopper,
  ThumbsUp,
  BookOpen,
  Brain,
  Check,
  X,
  ChevronsRight,
  RefreshCw,
  Home as HomeIcon,
} from "lucide-react";
import ThemeToggle from "@components/ThemeToggle";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { topicNames } from "@features/topics/constants/topics";

function PercentageRing({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percentage / 100) * circumference;

  let color = "var(--color-wrong)";
  if (percentage >= 80) {
    color = "var(--color-correct)";
  } else if (percentage >= 50) {
    color = "var(--color-accent)";
  }

  return (
    <div className="relative w-44 h-44 mx-auto mb-8">
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-30"
        style={{ background: color }}
      />

      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          style={{ stroke: "var(--color-border)" }}
        />
        {/* Progress circle with gradient */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            stroke: color,
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold" style={{ color }}>
          {percentage}%
        </span>
        <span
          className="text-sm font-medium"
          style={{ color: "var(--color-text-muted)" }}
        >
          Score
        </span>
      </div>
    </div>
  );
}

export default function Results() {
  const state = useRouterState({ select: (s) => s.location.state });

  if (
    !state ||
    Object.keys(state).length === 0 ||
    !state.topic ||
    state.score === undefined ||
    state.total === undefined
  ) {
    return <Navigate to="/" />;
  }

  const { score, total, topic, skipped = 0 } = state;
  const percentage = Math.round((score / total) * 100);
  const topicName = topicNames[topic] || topic;
  const wrong = total - score - skipped;

  const RESULT_TIERS = [
    { min: 100, msg: "Perfect Score!", Icon: Trophy },
    { min: 90, msg: "Outstanding!", Icon: Star },
    { min: 80, msg: "Excellent!", Icon: PartyPopper },
    { min: 70, msg: "Great job!", Icon: ThumbsUp },
    { min: 50, msg: "Good effort!", Icon: BookOpen },
    { min: 0, msg: "Keep practicing!", Icon: Brain },
  ];

  const tier =
    RESULT_TIERS.find((t) => percentage >= t.min) ||
    RESULT_TIERS[RESULT_TIERS.length - 1];
  const message = tier.msg;
  const ResultIcon = tier.Icon;

  return (
    <div
      className="min-h-screen fade-in"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Header */}
      <header
        className="border-b"
        style={{
          background: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold"
            style={{ color: "var(--color-brand)" }}
          >
            <BookOpen className="w-6 h-6" />
            Knowledge Check
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-lg">
        <Card className="text-center animate-scaleIn border-border bg-card/80 backdrop-blur-xl shadow-lg">
          <CardContent className="pt-8 sm:pt-10">
            {/* Topic Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Check className="w-4 h-4 text-[var(--color-correct)]" />
              <span
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Quiz Complete
              </span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {topicName}
              </span>
            </div>

            {/* Percentage Ring */}
            <PercentageRing percentage={percentage} />

            {/* Score Display */}
            <div className="mb-8">
              <div className="text-5xl font-bold mb-3">
                <span style={{ color: "var(--color-correct)" }}>{score}</span>
                <span
                  className="mx-2"
                  style={{ color: "var(--color-text-muted)", opacity: 0.5 }}
                >
                  /
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {total}
                </span>
              </div>
              <p className="text-2xl font-semibold flex items-center justify-center gap-3">
                <span className="animate-bounceIn">
                  <ResultIcon className="w-8 h-8" />
                </span>
                <span style={{ color: "var(--color-text)" }}>{message}</span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {/* Correct */}
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "var(--color-correct-bg)",
                  border: "1px solid var(--color-correct)",
                }}
              >
                <div className="flex justify-center mb-2">
                  <Check className="w-5 h-5 text-[var(--color-correct)]" />
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-correct)" }}
                >
                  {score}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Correct
                </div>
              </div>

              {/* Wrong */}
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "var(--color-wrong-bg)",
                  border: "1px solid var(--color-wrong)",
                }}
              >
                <div className="flex justify-center mb-2">
                  <X className="w-5 h-5 text-[var(--color-wrong)]" />
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-wrong)" }}
                >
                  {wrong}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Wrong
                </div>
              </div>

              {/* Skipped */}
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex justify-center mb-2">
                  <ChevronsRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {skipped}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Skipped
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link
                  to="/quiz/$topicId/$testId"
                  params={{ topicId: topic, testId: "original" }}
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Retry Quiz
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/">
                  <HomeIcon className="w-5 h-5 mr-2" />
                  Choose Another Topic
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
