import { useParams, Link } from 'react-router-dom';
import { useTopics, useOriginalQuestions, useGeneratedTestsForTopic } from '@hooks';
import { useTestProgressStats } from '@store';
import ThemeToggle from '@/components/ThemeToggle';
import TopicIcon from '@/components/TopicIcon';

interface TestCardProps {
  topicId: string;
  testId: string;
  displayName: string;
  questionCount: number;
  color: string;
  isOriginal?: boolean;
}

function TestCard({ topicId, testId, displayName, questionCount, color, isOriginal }: TestCardProps) {
  const progressKey = `${topicId}_${testId}`;
  const stats = useTestProgressStats(progressKey, questionCount);
  
  // Use stats.answered directly - already computed in the hook
  const progressPercent = questionCount > 0 ? (stats.answered / questionCount) * 100 : 0;

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
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              color 
            }}
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
            background: color,
          }}
        />
      </div>
      
      {/* Stats */}
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1" style={{ color: 'var(--color-correct)' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {stats.correct}
        </span>
        <span className="flex items-center gap-1" style={{ color: 'var(--color-wrong)' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {stats.wrong}
        </span>
        <span style={{ color: 'var(--color-text-muted)' }}>
          {stats.unanswered} remaining
        </span>
      </div>
    </Link>
  );
}

export default function TestSelection() {
  const { topicId } = useParams<{ topicId: string }>();
  
  // Fetch topic data and original questions
  const { data: topics = [] } = useTopics();
  const { data: originalQuestions = [], isLoading: loadingOriginal } = useOriginalQuestions(topicId || '');
  const { data: generatedTests = [] } = useGeneratedTestsForTopic(topicId || '');
  
  const topic = topics.find(t => t.id === topicId);
  const originalCount = originalQuestions.length;
  
  // Loading state
  if (loadingOriginal) {
    return (
      <div className="min-h-screen flex items-center justify-center fade-in">
        <div className="card text-center max-w-md">
          <div className="text-5xl mb-4 animate-float">📚</div>
          <h2 className="text-2xl font-bold mb-4">Loading Tests...</h2>
        </div>
      </div>
    );
  }
  
  if (!topic && topics.length > 0) {
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
  
  // Use default values while loading topics
  const topicIconName = topic?.icon || 'Book';
  const topicTitle = topic?.title || topicId || 'Topic';
  const topicColor = topic?.color || 'hsl(200, 70%, 50%)';
  
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
          <div className="flex justify-center mb-4">
            <TopicIcon name={topicIconName} className="w-16 h-16" />
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: topicColor }}
          >
            {topicTitle}
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
            color={topicColor}
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
                  questionCount={100}
                  color={topicColor}
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
