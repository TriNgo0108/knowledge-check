// No generated tests yet
// This file will be auto-updated when questions are generated

import { Question } from '@/data/types';

export interface GeneratedTest {
  topic: string;
  date: string;
  displayName: string;
  questions: Question[];
}

export const generatedTests: GeneratedTest[] = [];

export function getTestsForTopic(topic: string): GeneratedTest[] {
  return generatedTests.filter(t => t.topic === topic);
}
