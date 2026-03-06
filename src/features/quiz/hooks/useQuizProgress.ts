import { useCallback } from "react";
import { QuestionStatus } from "@/data/types";
import {
  useQuizProgressStore,
  useTestProgress,
  useTestProgressStats,
} from "@features/quiz/store/quizProgressStore";

export function useQuizProgress(progressKey: string, totalQuestions: number) {
  // Use selective subscriptions to prevent unnecessary re-renders
  const saveQuestionResultAction = useQuizProgressStore(
    (state) => state.saveQuestionResult,
  );
  const setLastQuestionIndexAction = useQuizProgressStore(
    (state) => state.setLastQuestionIndex,
  );
  const markCompleteAction = useQuizProgressStore(
    (state) => state.markComplete,
  );
  const resetProgressAction = useQuizProgressStore(
    (state) => state.resetProgress,
  );

  // Get stored progress for this key
  const storedProgress = useTestProgress(progressKey);
  const stats = useTestProgressStats(progressKey, totalQuestions);

  const currentIndex = storedProgress?.lastQuestionIndex || 0;

  const saveQuestionResult = useCallback(
    (questionId: number, status: QuestionStatus, selectedAnswer?: string) => {
      saveQuestionResultAction(progressKey, questionId, status, selectedAnswer);
    },
    [progressKey, saveQuestionResultAction],
  );

  const jumpToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalQuestions) {
        setLastQuestionIndexAction(progressKey, index);
      }
    },
    [totalQuestions, progressKey, setLastQuestionIndexAction],
  );

  const nextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      jumpToQuestion(currentIndex + 1);
      return true;
    }
    return false;
  }, [currentIndex, totalQuestions, jumpToQuestion]);

  const getQuestionStatus = useCallback(
    (questionId: number): QuestionStatus => {
      return storedProgress?.questions[questionId]?.status || "unanswered";
    },
    [storedProgress],
  );

  const markComplete = useCallback(() => {
    markCompleteAction(progressKey);
  }, [progressKey, markCompleteAction]);

  const resetProgress = useCallback(() => {
    resetProgressAction(progressKey);
  }, [progressKey, resetProgressAction]);

  return {
    progress: storedProgress,
    currentIndex,
    stats,
    saveQuestionResult,
    jumpToQuestion,
    nextQuestion,
    getQuestionStatus,
    markComplete,
    resetProgress,
  };
}

// Utility to get all topics progress for display (e.g., on Home page)
export function getAllTopicsProgress(): Record<
  string,
  { questions: Record<number, { status: string }> }
> {
  return useQuizProgressStore.getState().progressByKey;
}
