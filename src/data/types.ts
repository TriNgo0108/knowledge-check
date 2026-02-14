export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export type TopicId = 'pronunciation' | 'grammar' | 'pandas' | 'sql' | 'postgres' | 'aws' | 'python' | 'javascript' | 'typescript' | 'react' | 'systemdesign' | 'designpatterns' | 'algorithms' | 'aiagents' | 'financial' | 'aiengineer' | 'interview' | 'csharp' | 'dotnet' | 'dapper' | 'entityframework';

export interface Topic {
  id: TopicId;
  title: string;
  icon: string;
  color: string; // HSL color string
}

export interface TopicCategory {
  name: string;
  icon: string;
  topics: Topic[];
}

// Progress tracking types
export type QuestionStatus = 'correct' | 'wrong' | 'skipped' | 'unanswered';

export interface QuestionProgress {
  questionId: number;
  status: QuestionStatus;
  selectedAnswer?: string;
}

export interface TopicProgress {
  topicId: TopicId;
  questions: Record<number, QuestionProgress>;
  lastQuestionIndex: number;
  completedAt?: number;
}
