import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TopicProgress, QuestionProgress, QuestionStatus } from '@/data/types';

const STORAGE_KEY = 'quiz-progress';

interface ProgressStats {
  total: number;
  answered: number;
  correct: number;
  wrong: number;
  skipped: number;
  unanswered: number;
}

interface QuizProgressState {
  // State: Map of progressKey -> TopicProgress
  progressByKey: Record<string, TopicProgress>;
  
  // Actions
  getProgress: (progressKey: string) => TopicProgress | null;
  saveQuestionResult: (
    progressKey: string,
    questionId: number,
    status: QuestionStatus,
    selectedAnswer?: string
  ) => void;
  setLastQuestionIndex: (progressKey: string, index: number) => void;
  markComplete: (progressKey: string) => void;
  resetProgress: (progressKey: string) => void;
  
  // Computed
  getProgressStats: (progressKey: string, totalQuestions: number) => ProgressStats;
}

export const useQuizProgressStore = create<QuizProgressState>()(
  persist(
    (set, get) => ({
      progressByKey: {},
      
      getProgress: (progressKey: string) => {
        return get().progressByKey[progressKey] || null;
      },
      
      saveQuestionResult: (
        progressKey: string,
        questionId: number,
        status: QuestionStatus,
        selectedAnswer?: string
      ) => {
        set((state) => {
          const currentProgress = state.progressByKey[progressKey] || {
            topicId: progressKey.split('_')[0],
            questions: {},
            lastQuestionIndex: 0,
            completedAt: undefined,
          };
          
          return {
            progressByKey: {
              ...state.progressByKey,
              [progressKey]: {
                ...currentProgress,
                questions: {
                  ...currentProgress.questions,
                  [questionId]: { questionId, status, selectedAnswer } as QuestionProgress,
                },
              },
            },
          };
        });
      },
      
      setLastQuestionIndex: (progressKey: string, index: number) => {
        set((state) => {
          const currentProgress = state.progressByKey[progressKey] || {
            topicId: progressKey.split('_')[0],
            questions: {},
            lastQuestionIndex: 0,
            completedAt: undefined,
          };
          
          return {
            progressByKey: {
              ...state.progressByKey,
              [progressKey]: {
                ...currentProgress,
                lastQuestionIndex: index,
              },
            },
          };
        });
      },
      
      markComplete: (progressKey: string) => {
        set((state) => {
          const currentProgress = state.progressByKey[progressKey];
          if (!currentProgress) return state;
          
          return {
            progressByKey: {
              ...state.progressByKey,
              [progressKey]: {
                ...currentProgress,
                completedAt: Date.now(),
              },
            },
          };
        });
      },
      
      resetProgress: (progressKey: string) => {
        set((state) => {
          const { [progressKey]: _, ...rest } = state.progressByKey;
          return { progressByKey: rest };
        });
      },
      
      getProgressStats: (progressKey: string, totalQuestions: number): ProgressStats => {
        const progress = get().progressByKey[progressKey];
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
      },
    }),
    {
      name: STORAGE_KEY,
    }
  )
);

// Selector hooks for optimized re-renders
export const useTestProgress = (progressKey: string) => {
  return useQuizProgressStore((state) => state.progressByKey[progressKey] || null);
};

export const useTestProgressStats = (progressKey: string, totalQuestions: number) => {
  // Subscribe only to the raw progress data (stable reference)
  const progress = useQuizProgressStore((state) => state.progressByKey[progressKey]);
  
  // Compute stats with useMemo to avoid creating new objects on every render
  return useMemo(() => {
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
  }, [progress, totalQuestions]);
};
