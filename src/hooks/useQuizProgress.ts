import { useState, useCallback, useEffect } from 'react';
import { TopicProgress, QuestionProgress, QuestionStatus, TopicId } from '@/data/types';

const STORAGE_KEY = 'quiz-progress';

function getAllProgress(): Record<string, TopicProgress> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveAllProgress(progress: Record<string, TopicProgress>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useQuizProgress(topicId: string, totalQuestions: number) {
  const [progress, setProgress] = useState<TopicProgress>(() => {
    const all = getAllProgress();
    return all[topicId] || {
      topicId: topicId as TopicId,
      questions: {},
      lastQuestionIndex: 0,
      completedAt: undefined
    };
  });

  const [currentIndex, setCurrentIndex] = useState(progress.lastQuestionIndex);

  // Sync progress to localStorage whenever it changes
  useEffect(() => {
    const all = getAllProgress();
    all[topicId] = progress;
    saveAllProgress(all);
  }, [topicId, progress]);

  const saveQuestionResult = useCallback((
    questionId: number,
    status: QuestionStatus,
    selectedAnswer?: string
  ) => {
    setProgress(prev => ({
      ...prev,
      questions: {
        ...prev.questions,
        [questionId]: { questionId, status, selectedAnswer }
      }
    }));
  }, []);

  const jumpToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
      setProgress(prev => ({ ...prev, lastQuestionIndex: index }));
    }
  }, [totalQuestions]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      jumpToQuestion(currentIndex + 1);
      return true;
    }
    return false;
  }, [currentIndex, totalQuestions, jumpToQuestion]);

  const getQuestionStatus = useCallback((questionId: number): QuestionStatus => {
    return progress.questions[questionId]?.status || 'unanswered';
  }, [progress.questions]);

  const markComplete = useCallback(() => {
    setProgress(prev => ({ ...prev, completedAt: Date.now() }));
  }, []);

  const resetProgress = useCallback(() => {
    const freshProgress: TopicProgress = {
      topicId: topicId as TopicId,
      questions: {},
      lastQuestionIndex: 0,
      completedAt: undefined
    };
    setProgress(freshProgress);
    setCurrentIndex(0);
  }, [topicId]);

  // Calculate stats
  const stats = {
    total: totalQuestions,
    answered: Object.keys(progress.questions).length,
    correct: Object.values(progress.questions).filter(q => q.status === 'correct').length,
    wrong: Object.values(progress.questions).filter(q => q.status === 'wrong').length,
    skipped: Object.values(progress.questions).filter(q => q.status === 'skipped').length,
    unanswered: totalQuestions - Object.keys(progress.questions).length
  };

  return {
    progress,
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

// Utility to get progress for display on Home page
export function getTopicProgress(topicId: string): TopicProgress | null {
  const all = getAllProgress();
  return all[topicId] || null;
}

export function getAllTopicsProgress(): Record<string, TopicProgress> {
  return getAllProgress();
}
