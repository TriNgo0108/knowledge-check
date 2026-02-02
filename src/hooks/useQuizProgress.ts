import { useState, useCallback, useEffect, useMemo } from 'react';
import { QuestionStatus } from '@/data/types';
import { useQuizProgressStore } from '@/store/quizProgressStore';

export function useQuizProgress(progressKey: string, totalQuestions: number) {
  // Use selective subscriptions to prevent unnecessary re-renders
  const progressByKey = useQuizProgressStore((state) => state.progressByKey);
  const saveQuestionResultAction = useQuizProgressStore((state) => state.saveQuestionResult);
  const setLastQuestionIndexAction = useQuizProgressStore((state) => state.setLastQuestionIndex);
  const markCompleteAction = useQuizProgressStore((state) => state.markComplete);
  const resetProgressAction = useQuizProgressStore((state) => state.resetProgress);
  
  // Get stored progress for this key
  const storedProgress = progressByKey[progressKey] || null;
  const [currentIndex, setCurrentIndex] = useState(storedProgress?.lastQuestionIndex || 0);

  // Sync currentIndex when progressKey changes
  useEffect(() => {
    const progress = progressByKey[progressKey];
    setCurrentIndex(progress?.lastQuestionIndex || 0);
  }, [progressKey, progressByKey]);

  const saveQuestionResult = useCallback((
    questionId: number,
    status: QuestionStatus,
    selectedAnswer?: string
  ) => {
    saveQuestionResultAction(progressKey, questionId, status, selectedAnswer);
  }, [progressKey, saveQuestionResultAction]);

  const jumpToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
      setLastQuestionIndexAction(progressKey, index);
    }
  }, [totalQuestions, progressKey, setLastQuestionIndexAction]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      jumpToQuestion(currentIndex + 1);
      return true;
    }
    return false;
  }, [currentIndex, totalQuestions, jumpToQuestion]);

  const getQuestionStatus = useCallback((questionId: number): QuestionStatus => {
    const progress = progressByKey[progressKey];
    return progress?.questions[questionId]?.status || 'unanswered';
  }, [progressKey, progressByKey]);

  const markComplete = useCallback(() => {
    markCompleteAction(progressKey);
  }, [progressKey, markCompleteAction]);

  const resetProgress = useCallback(() => {
    resetProgressAction(progressKey);
    setCurrentIndex(0);
  }, [progressKey, resetProgressAction]);

  // Calculate stats - memoized to prevent recalculation
  const stats = useMemo(() => {
    const progress = progressByKey[progressKey];
    if (!progress) {
      return {
        total: totalQuestions,
        answered: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
        unanswered: totalQuestions,
      };
    }
    
    const questions = Object.values(progress.questions);
    const correct = questions.filter((q) => q.status === 'correct').length;
    const wrong = questions.filter((q) => q.status === 'wrong').length;
    const skipped = questions.filter((q) => q.status === 'skipped').length;
    const answered = correct + wrong + skipped;
    
    return {
      total: totalQuestions,
      answered,
      correct,
      wrong,
      skipped,
      unanswered: totalQuestions - answered,
    };
  }, [progressByKey, progressKey, totalQuestions]);

  return {
    progress: storedProgress,
    currentIndex,
    stats,
    saveQuestionResult,
    jumpToQuestion,
    nextQuestion,
    getQuestionStatus,
    markComplete,
    resetProgress
  };
}


// Utility to get all topics progress for display (e.g., on Home page)
export function getAllTopicsProgress(): Record<string, { questions: Record<number, { status: string }> }> {
  return useQuizProgressStore.getState().progressByKey;
}
