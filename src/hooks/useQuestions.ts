/**
 * React Query hooks for fetching question data
 */

import { useQuery } from '@tanstack/react-query';
import {
  fetchTopics,
  fetchOriginalQuestions,
  fetchGeneratedTestsIndex,
  fetchQuestions,
  type Topic,
  type Question,
  type GeneratedTestMeta,
} from '@/lib/api';

// Query keys
export const queryKeys = {
  topics: ['topics'] as const,
  originalQuestions: (topicId: string) => ['questions', 'original', topicId] as const,
  generatedIndex: ['generated', 'index'] as const,
  questions: (topicId: string, testId: string) => ['questions', topicId, testId] as const,
  generatedForTopic: (topicId: string) => ['generated', 'topic', topicId] as const,
};

// Hook to fetch all topics
export function useTopics() {
  return useQuery<Topic[]>({
    queryKey: queryKeys.topics,
    queryFn: fetchTopics,
    staleTime: Infinity, // Topics don't change
  });
}

// Hook to fetch original questions for a topic
export function useOriginalQuestions(topicId: string) {
  return useQuery<Question[]>({
    queryKey: queryKeys.originalQuestions(topicId),
    queryFn: () => fetchOriginalQuestions(topicId),
    enabled: !!topicId,
    staleTime: Infinity, // Original questions don't change
  });
}

// Hook to fetch generated tests index
export function useGeneratedTestsIndex() {
  return useQuery<GeneratedTestMeta[]>({
    queryKey: queryKeys.generatedIndex,
    queryFn: fetchGeneratedTestsIndex,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook to get generated tests for a specific topic
export function useGeneratedTestsForTopic(topicId: string) {
  const { data: allTests, ...rest } = useGeneratedTestsIndex();
  
  const testsForTopic = allTests?.filter(t => t.topic === topicId) || [];
  
  return {
    ...rest,
    data: testsForTopic,
  };
}

// Hook to fetch questions (original or generated)
export function useQuestions(topicId: string, testId: string) {
  return useQuery<Question[]>({
    queryKey: queryKeys.questions(topicId, testId),
    queryFn: () => fetchQuestions(topicId, testId),
    enabled: !!topicId && !!testId,
    staleTime: testId === 'original' ? Infinity : 5 * 60 * 1000,
  });
}
