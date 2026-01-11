import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Topic } from '@/data/types';
import { getTestsForTopic, GeneratedTest } from '@/data/generated';
import ThemeToggle from '@/components/ThemeToggle';

// Import original question counts
import grammar from '@/data/grammar';
import pronunciation from '@/data/pronunciation';
import pandas from '@/data/pandas';
import sql from '@/data/sql';
import postgres from '@/data/postgres';
import aws from '@/data/aws';
import python from '@/data/python';
import javascript from '@/data/javascript';
import typescript from '@/data/typescript';
import react from '@/data/react';
import systemdesign from '@/data/systemdesign';
import designpatterns from '@/data/designpatterns';
import algorithms from '@/data/algorithms';
import aiagents from '@/data/aiagents';

const originalQuestions: Record<string, number> = {
  grammar: grammar.length,
  pronunciation: pronunciation.length,
  pandas: pandas.length,
  sql: sql.length,
  postgres: postgres.length,
  aws: aws.length,
  python: python.length,
  javascript: javascript.length,
  typescript: typescript.length,
  react: react.length,
  systemdesign: systemdesign.length,
  designpatterns: designpatterns.length,
  algorithms: algorithms.length,
  aiagents: aiagents.length,
};

const topicMeta: Record<string, Topic> = {
  grammar: { id: 'grammar', title: 'Grammar', icon: '📝', color: 'hsl(160, 70%, 45%)' },
  pronunciation: { id: 'pronunciation', title: 'Pronunciation', icon: '🗣️', color: 'hsl(280, 70%, 60%)' },
  pandas: { id: 'pandas', title: 'Pandas', icon: '🐼', color: 'hsl(200, 70%, 50%)' },
  sql: { id: 'sql', title: 'SQL', icon: '🗄️', color: 'hsl(30, 80%, 60%)' },
  postgres: { id: 'postgres', title: 'PostgreSQL', icon: '🐘', color: 'hsl(220, 70%, 60%)' },
  aws: { id: 'aws', title: 'AWS', icon: '☁️', color: 'hsl(35, 100%, 50%)' },
  python: { id: 'python', title: 'Python', icon: '🐍', color: 'hsl(55, 70%, 50%)' },
  javascript: { id: 'javascript', title: 'JavaScript', icon: '⚡', color: 'hsl(50, 90%, 55%)' },
  typescript: { id: 'typescript', title: 'TypeScript', icon: '🔷', color: 'hsl(210, 80%, 55%)' },
  react: { id: 'react', title: 'React', icon: '⚛️', color: 'hsl(190, 90%, 55%)' },
  systemdesign: { id: 'systemdesign', title: 'System Design', icon: '🏗️', color: 'hsl(340, 70%, 55%)' },
  designpatterns: { id: 'designpatterns', title: 'Design Patterns', icon: '🧩', color: 'hsl(270, 60%, 55%)' },
  algorithms: { id: 'algorithms', title: 'Algorithms', icon: '🔢', color: 'hsl(140, 60%, 45%)' },
  aiagents: { id: 'aiagents', title: 'AI Agents', icon: '🤖', color: 'hsl(180, 70%, 45%)' },
};

interface TestProgress {
  correct: number;
  wrong: number;
  skipped: number;
  total: number;
}

function getTestProgress(topicId: string, testId: string): TestProgress {
  const key = `quiz_progress_${topicId}_${testId}`;
  const stored = localStorage.getItem(key);
  
  if (!stored) {
    return { correct: 0, wrong: 0, skipped: 0, total: 0 };
  }
  
  try {
    const data = JSON.parse(stored);
    const questions = Object.values(data.questions || {}) as Array<{ status: string }>;
    return {
      correct: questions.filter(q => q.status === 'correct').length,
      wrong: questions.filter(q => q.status === 'wrong').length,
      skipped: questions.filter(q => q.status === 'skipped').length,
      total: questions.length,
    };
  } catch {
    return { correct: 0, wrong: 0, skipped: 0, total: 0 };
  }
}

interface TestCardProps {
  topicId: string;
  testId: string;
  displayName: string;
  questionCount: number;
  color: string;
  isOriginal?: boolean;
}

function TestCard({ topicId, testId, displayName, questionCount, color, isOriginal }: TestCardProps) {
  const progress = getTestProgress(topicId, testId);
  const answered = progress.correct + progress.wrong + progress.skipped;
  const progressPercent = questionCount > 0 ? (answered / questionCount) * 100 : 0;
  
  return (
    <Link
      to={`/quiz/${topicId}/${testId}`}
      className="block p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg" style={{ color: 'var(--color-text)' }}>
            {displayName}
          </h3>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {questionCount} questions
          </p>
        </div>
        {isOriginal && (
          <span
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{ background: color + '20', color }}
          >
            Original
          </span>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 rounded-full overflow-hidden mb-2" style={{ background: 'var(--color-border)' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progressPercent}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
      
      {/* Stats */}
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1" style={{ color: 'var(--color-correct)' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {progress.correct}
        </span>
        <span className="flex items-center gap-1" style={{ color: 'var(--color-wrong)' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {progress.wrong}
        </span>
        <span style={{ color: 'var(--color-text-muted)' }}>
          {questionCount - answered} remaining
        </span>
      </div>
    </Link>
  );
}

export default function TestSelection() {
  const { topicId } = useParams<{ topicId: string }>();
  const [generatedTests, setGeneratedTests] = useState<GeneratedTest[]>([]);
  
  const topic = topicMeta[topicId || ''];
  const originalCount = originalQuestions[topicId || ''] || 100;
  
  useEffect(() => {
    if (topicId) {
      const tests = getTestsForTopic(topicId);
      setGeneratedTests(tests);
    }
  }, [topicId]);
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <div className="card text-center max-w-md">
          <div className="text-5xl mb-4">🤔</div>
          <h2 className="text-2xl font-bold mb-4">Topic Not Found</h2>
          <Link to="/" className="btn">Go Home</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen fade-in" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
        style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
      >
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="btn-outline py-2 px-4 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Topic Header */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">{topic.icon}</div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: topic.color }}
          >
            {topic.title}
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Select a test to begin
          </p>
        </div>
        
        {/* Tests List */}
        <div className="space-y-4">
          {/* Original Test */}
          <TestCard
            topicId={topicId || ''}
            testId="original"
            displayName="Original Test"
            questionCount={originalCount}
            color={topic.color}
            isOriginal
          />
          
          {/* Generated Tests */}
          {generatedTests.length > 0 && (
            <>
              <div className="flex items-center gap-3 mt-8 mb-4">
                <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  Weekly Generated Tests
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
              </div>
              
              {generatedTests.map(test => (
                <TestCard
                  key={test.date}
                  topicId={topicId || ''}
                  testId={`week_${test.date.replace(/-/g, '_')}`}
                  displayName={test.displayName}
                  questionCount={test.questions.length}
                  color={topic.color}
                />
              ))}
            </>
          )}
          
          {generatedTests.length === 0 && (
            <div
              className="text-center py-8 rounded-xl mt-6"
              style={{ background: 'var(--color-bg-elevated)', border: '1px dashed var(--color-border)' }}
            >
              <div className="text-3xl mb-2">🔜</div>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Weekly generated tests coming soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
