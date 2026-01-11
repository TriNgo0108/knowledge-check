/**
 * API client for fetching question data
 */

import axios from 'axios';

// Base URL for data files (relative to public folder or absolute URL)
const BASE_URL = import.meta.env.BASE_URL || '/';

const api = axios.create({
  baseURL: BASE_URL,
});

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface GeneratedTestMeta {
  topic: string;
  date: string;
  displayName: string;
  file: string;
}

// Fetch all topics
export async function fetchTopics(): Promise<Topic[]> {
  const { data } = await api.get<Topic[]>('/data/topics.json');
  return data;
}

// Fetch original questions for a topic
export async function fetchOriginalQuestions(topicId: string): Promise<Question[]> {
  const { data } = await api.get<Question[]>(`/data/original/${topicId}.json`);
  return data;
}

// Fetch generated tests index
export async function fetchGeneratedTestsIndex(): Promise<GeneratedTestMeta[]> {
  const { data } = await api.get<GeneratedTestMeta[]>('/data/generated/index.json');
  return data;
}

// Fetch generated test questions
export async function fetchGeneratedQuestions(filename: string): Promise<Question[]> {
  const { data } = await api.get<Question[]>(`/data/generated/${filename}`);
  return data;
}

// Fetch questions based on testId (original or generated)
export async function fetchQuestions(topicId: string, testId: string): Promise<Question[]> {
  if (testId === 'original') {
    return fetchOriginalQuestions(topicId);
  }
  
  // For generated tests, testId format is "week_2026_01_12"
  const filename = `${topicId}_${testId}.json`;
  return fetchGeneratedQuestions(filename);
}

export default api;
