import { useMemo } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { saveAs } from "file-saver";
import { z } from "zod";
import {
  TopicProgress,
  QuestionProgress,
  QuestionStatus,
  ExportData,
} from "@/data/types";

/* ── Global type for File System Access API ────────────────────────── */
declare global {
  interface Window {
    showSaveFilePicker?: (options?: {
      suggestedName?: string;
      types?: { description: string; accept: Record<string, string[]> }[];
    }) => Promise<FileSystemFileHandle>;
  }
}

const STORAGE_KEY = "quiz-progress";

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
    selectedAnswer?: string,
  ) => void;
  setLastQuestionIndex: (progressKey: string, index: number) => void;
  markComplete: (progressKey: string) => void;
  resetProgress: (progressKey: string) => void;
  exportProgress: () => Promise<{ saved: boolean }>;
  importProgress: (jsonString: string) => { success: boolean; message: string };

  // Computed
  getProgressStats: (
    progressKey: string,
    totalQuestions: number,
  ) => ProgressStats;
}

/* ── Zod schema for deep validation of imported data ───────────────── */
const QuestionProgressSchema = z.object({
  questionId: z.number(),
  status: z.enum(["correct", "wrong", "skipped", "unanswered"]),
  selectedAnswer: z.string().optional(),
});

const TopicProgressSchema = z.object({
  topicId: z.string(),
  questions: z.record(z.coerce.number(), QuestionProgressSchema),
  lastQuestionIndex: z.number(),
  completedAt: z.number().optional(),
});

const ExportDataSchema = z.object({
  version: z.literal(1),
  exportedAt: z.string(),
  progressByKey: z.record(TopicProgressSchema),
});

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
        selectedAnswer?: string,
      ) => {
        set((state) => {
          const currentProgress = state.progressByKey[progressKey] || {
            topicId: progressKey.split("_")[0],
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
                  [questionId]: {
                    questionId,
                    status,
                    selectedAnswer,
                  } as QuestionProgress,
                },
              },
            },
          };
        });
      },

      setLastQuestionIndex: (progressKey: string, index: number) => {
        set((state) => {
          const currentProgress = state.progressByKey[progressKey] || {
            topicId: progressKey.split("_")[0],
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

      exportProgress: async (): Promise<{ saved: boolean }> => {
        const state = get();
        const exportData: ExportData = {
          version: 1,
          exportedAt: new Date().toISOString(),
          progressByKey: state.progressByKey,
        };

        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const date = new Date().toISOString().slice(0, 10);
        const fileName = `knowledge-check-progress-${date}.json`;

        // Use File System Access API for "Save As" dialog when available
        if (window.showSaveFilePicker) {
          try {
            const handle = await window.showSaveFilePicker({
              suggestedName: fileName,
              types: [
                {
                  description: "JSON File",
                  accept: { "application/json": [".json"] },
                },
              ],
            });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
            return { saved: true };
          } catch (err: unknown) {
            // User cancelled the dialog
            if (err instanceof Error && err.name === "AbortError") {
              return { saved: false };
            }
          }
        }

        // Fallback: auto-download via file-saver (ensures .json)
        saveAs(blob, fileName);
        return { saved: true };
      },

      importProgress: (
        jsonString: string,
      ): { success: boolean; message: string } => {
        try {
          const raw = JSON.parse(jsonString);
          const parsed = ExportDataSchema.parse(raw);

          const validatedProgress =
            parsed.progressByKey as ExportData["progressByKey"];

          set((state) => ({
            progressByKey: {
              ...state.progressByKey,
              ...validatedProgress,
            },
          }));

          const importedCount = Object.keys(parsed.progressByKey).length;
          return {
            success: true,
            message: `Successfully imported progress for ${importedCount} test(s).`,
          };
        } catch (err) {
          if (err instanceof z.ZodError) {
            return {
              success: false,
              message:
                "Invalid file format. Please use a file exported from Knowledge Check.",
            };
          }
          return {
            success: false,
            message:
              "Could not parse the file. Please ensure it is valid JSON.",
          };
        }
      },

      getProgressStats: (
        progressKey: string,
        totalQuestions: number,
      ): ProgressStats => {
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
        const correct = questions.filter((q) => q.status === "correct").length;
        const wrong = questions.filter((q) => q.status === "wrong").length;
        const skipped = questions.filter((q) => q.status === "skipped").length;
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
    },
  ),
);

// Selector hooks for optimized re-renders
export const useTestProgress = (progressKey: string) => {
  return useQuizProgressStore(
    (state) => state.progressByKey[progressKey] || null,
  );
};

export const useTestProgressStats = (
  progressKey: string,
  totalQuestions: number,
) => {
  // Subscribe only to the raw progress data (stable reference)
  const progress = useQuizProgressStore(
    (state) => state.progressByKey[progressKey],
  );

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
    const correct = questions.filter((q) => q.status === "correct").length;
    const wrong = questions.filter((q) => q.status === "wrong").length;
    const skipped = questions.filter((q) => q.status === "skipped").length;
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
