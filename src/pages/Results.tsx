import { Link, useLocation, Navigate } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

interface LocationState {
  score: number;
  total: number;
  topic: string;
  skipped?: number;
}

const topicNames: Record<string, string> = {
  grammar: 'Grammar',
  pronunciation: 'Pronunciation',
  pandas: 'Pandas',
  sql: 'SQL',
  postgres: 'PostgreSQL',
  aws: 'AWS',
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  systemdesign: 'System Design',
  designpatterns: 'Design Patterns',
  algorithms: 'Algorithms',
  aiagents: 'AI Agents'
};

function PercentageRing({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percentage / 100) * circumference;
  
  let color = 'var(--color-wrong)';
  let bgColor = 'var(--color-wrong-bg)';
  if (percentage >= 80) {
    color = 'var(--color-correct)';
    bgColor = 'var(--color-correct-bg)';
  } else if (percentage >= 50) {
    color = 'var(--color-accent)';
    bgColor = 'hsla(35, 100%, 50%, 0.15)';
  }
  
  return (
    <div className="relative w-44 h-44 mx-auto mb-8">
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-30"
        style={{ background: color }}
      />
      
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          style={{ stroke: 'var(--color-border)' }}
        />
        {/* Progress circle with gradient */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ 
            stroke: color,
            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className="text-5xl font-bold"
          style={{ color }}
        >
          {percentage}%
        </span>
        <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
          Score
        </span>
      </div>
    </div>
  );
}

export default function Results() {
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state) {
    return <Navigate to="/" />;
  }

  const { score, total, topic, skipped = 0 } = state;
  const percentage = Math.round((score / total) * 100);
  const topicName = topicNames[topic] || topic;
  const wrong = total - score - skipped;
  
  let message = "Keep practicing!";
  let emoji = "💪";
  if (percentage === 100) { message = "Perfect Score!"; emoji = "🏆"; }
  else if (percentage >= 90) { message = "Outstanding!"; emoji = "🌟"; }
  else if (percentage >= 80) { message = "Excellent!"; emoji = "🎉"; }
  else if (percentage >= 70) { message = "Great job!"; emoji = "👍"; }
  else if (percentage >= 50) { message = "Good effort!"; emoji = "📚"; }

  return (
    <div className="min-h-screen fade-in" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header className="border-b" style={{ 
        background: 'var(--color-bg-card)',
        borderColor: 'var(--color-border)'
      }}>
        <div className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-brand)' }}>
            <span className="text-xl">📚</span>
            Knowledge Check
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-lg">
        <div className="card text-center animate-scaleIn">
          {/* Topic Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)'
            }}
          >
            <svg className="w-4 h-4" style={{ color: 'var(--color-correct)' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Quiz Complete</span>
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{topicName}</span>
          </div>
          
          {/* Percentage Ring */}
          <PercentageRing percentage={percentage} />
          
          {/* Score Display */}
          <div className="mb-8">
            <div className="text-5xl font-bold mb-3">
              <span style={{ color: 'var(--color-correct)' }}>{score}</span>
              <span className="mx-2" style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>/</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{total}</span>
            </div>
            <p className="text-2xl font-semibold flex items-center justify-center gap-3">
              <span className="text-3xl animate-bounceIn">{emoji}</span>
              <span style={{ color: 'var(--color-text)' }}>{message}</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {/* Correct */}
            <div 
              className="p-4 rounded-xl text-center"
              style={{ 
                background: 'var(--color-correct-bg)',
                border: '1px solid var(--color-correct)'
              }}
            >
              <div className="flex justify-center mb-2">
                <svg className="w-5 h-5" style={{ color: 'var(--color-correct)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold" style={{ color: 'var(--color-correct)' }}>{score}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>Correct</div>
            </div>
            
            {/* Wrong */}
            <div 
              className="p-4 rounded-xl text-center"
              style={{ 
                background: 'var(--color-wrong-bg)',
                border: '1px solid var(--color-wrong)'
              }}
            >
              <div className="flex justify-center mb-2">
                <svg className="w-5 h-5" style={{ color: 'var(--color-wrong)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold" style={{ color: 'var(--color-wrong)' }}>{wrong}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>Wrong</div>
            </div>
            
            {/* Skipped */}
            <div 
              className="p-4 rounded-xl text-center"
              style={{ 
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="flex justify-center mb-2">
                <svg className="w-5 h-5" style={{ color: 'var(--color-text-muted)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold" style={{ color: 'var(--color-text-muted)' }}>{skipped}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>Skipped</div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="space-y-3">
            <Link to={`/quiz/${topic}`} className="btn w-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry Quiz
            </Link>
            <Link to="/" className="btn-outline w-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Choose Another Topic
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
