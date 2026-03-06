import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuizProgress } from "@features/quiz/hooks/useQuizProgress";
import { useQuestions } from "@features/quiz/hooks/useQuestions";
import QuestionNav from "@features/quiz/components/QuestionNav";
import ThemeToggle from "@components/ThemeToggle";
import {
  BookOpen,
  HelpCircle,
  Home as HomeIcon,
  ChevronLeft,
} from "lucide-react";
import { Progress } from "@components/ui/progress";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { topicNames } from "@features/topics/constants/topics";

export default function Quiz() {
  const { topicId, testId } = useParams<{ topicId: string; testId: string }>();
  const navigate = useNavigate();

  const safeTopicId = topicId as string;
  const safeTestId = testId as string;

  // Load questions using React Query
  const {
    data: questions = [],
    isLoading,
    error,
  } = useQuestions(safeTopicId, safeTestId);

  const topicName = topicNames[safeTopicId] || safeTopicId;
  const progressKey = `${safeTopicId}_${safeTestId}`;

  // Progress tracking hook - using combined key for per-test progress
  const {
    currentIndex,
    stats,
    saveQuestionResult,
    jumpToQuestion,
    nextQuestion,
    getQuestionStatus,
    markComplete,
  } = useQuizProgress(progressKey, questions.length);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset UI state when question changes
  useEffect(() => {
    const status = getQuestionStatus(questions[currentIndex]?.id);
    if (status !== "unanswered") {
      // Question was previously answered - show the result
      setIsAnswered(true);
      setShowExplanation(true);
      // Find what option was selected before (if any)
      const prevProgress = status;
      if (prevProgress === "correct") {
        setSelectedOption(questions[currentIndex]?.answer);
      }
    } else {
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  }, [currentIndex, getQuestionStatus, questions]);

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionClick = useCallback(
    (option: string) => {
      if (isAnswered) return;

      setSelectedOption(option);
      setIsAnswered(true);
      setShowExplanation(true);

      const isCorrect = option === currentQuestion?.answer;
      saveQuestionResult(
        currentQuestion.id,
        isCorrect ? "correct" : "wrong",
        option,
      );
    },
    [isAnswered, currentQuestion, saveQuestionResult],
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      nextQuestion();
    } else {
      finishQuiz();
    }
  }, [currentIndex, questions.length, nextQuestion]);

  const handleSkip = useCallback(() => {
    if (isAnswered) return;
    saveQuestionResult(currentQuestion.id, "skipped");
    handleNext();
  }, [isAnswered, currentQuestion, saveQuestionResult, handleNext]);

  const handleJump = useCallback(
    (index: number) => {
      jumpToQuestion(index);
    },
    [jumpToQuestion],
  );

  const finishQuiz = () => {
    markComplete();
    navigate("/results", {
      state: {
        score: stats.correct,
        total: questions.length,
        topic: safeTopicId,
        skipped: stats.skipped,
      },
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentQuestion) return;

      // Number keys to select options
      if (!isAnswered && ["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (index < currentQuestion.options.length) {
          handleOptionClick(currentQuestion.options[index]);
        }
      }

      // Enter or Space to continue
      if (isAnswered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleNext();
      }

      // S to skip
      if (!isAnswered && e.key.toLowerCase() === "s") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion, isAnswered, handleOptionClick, handleNext, handleSkip]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <Card className="w-full max-w-md border-border bg-card/60 backdrop-blur-xl animate-scaleIn">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-8">
            <div className="flex justify-center mb-4 text-primary animate-float">
              <BookOpen className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Loading Questions...</h2>
            <p className="mb-2 text-muted-foreground">
              Preparing your quiz experience
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <Card className="w-full max-w-md border-border bg-card/60 backdrop-blur-xl animate-scaleIn">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-8">
            <div className="flex justify-center mb-4 text-muted-foreground opacity-50">
              <HelpCircle className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Topic Not Found</h2>
            <p className="mb-6 text-muted-foreground text-center">
              We couldn't find any questions for this topic.
            </p>
            <Button asChild>
              <Link to="/">
                <HomeIcon className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getOptionClass = (option: string) => {
    const baseClass =
      "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
    if (!isAnswered) {
      if (selectedOption === option) {
        return `${baseClass} border-primary bg-primary/10`;
      }
      return `${baseClass} bg-card hover:bg-muted border-border hover:border-primary hover:-translate-y-0.5 hover:shadow-md`;
    }
    if (option === currentQuestion.answer) {
      return `${baseClass} bg-[var(--color-correct-bg)] border-[var(--color-correct)]`;
    }
    if (option === selectedOption) {
      return `${baseClass} bg-[var(--color-wrong-bg)] border-[var(--color-wrong)]`;
    }
    return `${baseClass} bg-card border-border opacity-50`;
  };

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
        <div className="container mx-auto px-4 py-3 max-w-5xl">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <Button variant="outline" size="sm" asChild className="gap-2">
              <Link to="/">
                <ChevronLeft className="w-4 h-4" />
                Exit
              </Link>
            </Button>

            {/* Topic & Stats */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-sm font-medium text-muted-foreground">
                {topicName}
              </span>

              {/* Stats Badge */}
              <Badge
                variant="outline"
                className="px-3 py-1 gap-1 text-sm bg-card hidden sm:flex"
              >
                <span
                  key={stats.correct}
                  className="font-bold animate-countUp text-[var(--color-correct)]"
                >
                  {stats.correct}
                </span>
                <span className="text-muted-foreground text-xs">/</span>
                <span className="text-muted-foreground">{stats.answered}</span>
              </Badge>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex gap-6">
          {/* Question Area */}
          <div className="flex-1 max-w-2xl">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2 text-muted-foreground">
                <span className="font-medium">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="font-medium">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <Progress
                value={progressPercent}
                className="h-2 bg-border [&>div]:animate-pulse-glow"
              />
            </div>

            {/* Question Card */}
            <Card className="animate-scaleIn border-border bg-card/80 backdrop-blur-xl shadow-lg">
              <CardContent className="p-6 sm:p-8">
                {/* Question Number Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ background: "var(--color-brand)" }}
                  >
                    Q{currentIndex + 1}
                  </span>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--color-bg-elevated)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {currentQuestion.difficulty || "Standard"}
                  </span>
                </div>

                {/* Question Text */}
                <h2 className="text-xl sm:text-2xl font-bold mb-6 leading-relaxed animate-slideUp">
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={option}
                      disabled={isAnswered}
                      className={`${getOptionClass(option)} animate-slideUp stagger-${idx + 1}
                      ${isAnswered && option === currentQuestion.answer ? "animate-correctPop" : ""}
                      ${isAnswered && option === selectedOption && option !== currentQuestion.answer ? "animate-wrongShake" : ""}
                    `}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg 
                        text-sm font-bold transition-all duration-300
                        ${
                          isAnswered && option === currentQuestion.answer
                            ? "bg-correct text-white scale-110"
                            : isAnswered &&
                                option === selectedOption &&
                                option !== currentQuestion.answer
                              ? "bg-wrong text-white"
                              : "bg-white/10"
                        }
                      `}
                          style={
                            !isAnswered
                              ? {
                                  background: "var(--color-bg-hover)",
                                  color: "var(--color-text-secondary)",
                                }
                              : {}
                          }
                        >
                          {idx + 1}
                        </span>
                        <span className="font-medium pt-1">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Skip Button */}
                {!isAnswered && (
                  <button
                    onClick={handleSkip}
                    className="w-full mt-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-white/5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Skip this question <kbd>S</kbd>
                  </button>
                )}

                {/* Explanation Panel */}
                {showExplanation && (
                  <div
                    className="mt-6 p-5 rounded-xl animate-slideUp"
                    style={{
                      background:
                        selectedOption === currentQuestion.answer
                          ? "var(--color-correct-bg)"
                          : "var(--color-wrong-bg)",
                      borderLeft: `4px solid ${
                        selectedOption === currentQuestion.answer
                          ? "var(--color-correct)"
                          : "var(--color-wrong)"
                      }`,
                    }}
                  >
                    {/* Result Header */}
                    <div className="font-bold text-lg mb-3 flex items-center gap-2">
                      {selectedOption === currentQuestion.answer ? (
                        <span
                          className="flex items-center gap-2"
                          style={{ color: "var(--color-correct)" }}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Correct!
                        </span>
                      ) : (
                        <span
                          className="flex items-center gap-2"
                          style={{ color: "var(--color-wrong)" }}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Incorrect
                        </span>
                      )}
                    </div>

                    {/* Explanation Text */}
                    <p
                      className="leading-relaxed mb-5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {currentQuestion.explanation}
                    </p>

                    {/* Next Button */}
                    <Button
                      className="w-full mt-4"
                      size="lg"
                      onClick={handleNext}
                    >
                      {currentIndex === questions.length - 1
                        ? "See Results"
                        : "Next Question"}
                      <kbd className="ml-2 px-1.5 py-0.5 text-[0.6rem] bg-background/20 rounded border border-background/20">
                        Enter
                      </kbd>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Keyboard Hints */}
            <div
              className="mt-5 text-center hidden sm:block"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span className="text-xs">
                Press <kbd>1-4</kbd> to select • <kbd>S</kbd> to skip •{" "}
                <kbd>Enter</kbd> to continue
              </span>
            </div>
          </div>

          {/* Question Navigator Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <QuestionNav
                totalQuestions={questions.length}
                currentIndex={currentIndex}
                getQuestionStatus={(qId) => getQuestionStatus(qId)}
                onJump={handleJump}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
