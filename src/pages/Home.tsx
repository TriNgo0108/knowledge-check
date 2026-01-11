import { Link } from 'react-router-dom';
import { Topic } from '@/data/types';
import { useState, useEffect } from 'react';
import { getAllTopicsProgress } from '@/hooks/useQuizProgress';
import ThemeToggle from '@/components/ThemeToggle';

interface TopicCategory {
  name: string;
  icon: string;
  topics: Topic[];
}

const allTopics: Topic[] = [
  { id: 'pronunciation', title: 'Pronunciation', icon: '🗣️', color: 'hsl(280, 70%, 60%)' },
  { id: 'grammar', title: 'Grammar', icon: '📝', color: 'hsl(160, 70%, 45%)' },
  { id: 'pandas', title: 'Pandas', icon: '🐼', color: 'hsl(200, 70%, 50%)' },
  { id: 'sql', title: 'SQL', icon: '🗄️', color: 'hsl(30, 80%, 60%)' },
  { id: 'postgres', title: 'PostgreSQL', icon: '🐘', color: 'hsl(220, 70%, 60%)' },
  { id: 'aws', title: 'AWS', icon: '☁️', color: 'hsl(35, 100%, 50%)' },
  { id: 'python', title: 'Python', icon: '🐍', color: 'hsl(55, 70%, 50%)' },
  { id: 'javascript', title: 'JavaScript', icon: '⚡', color: 'hsl(50, 90%, 55%)' },
  { id: 'typescript', title: 'TypeScript', icon: '🔷', color: 'hsl(210, 80%, 55%)' },
  { id: 'react', title: 'React', icon: '⚛️', color: 'hsl(190, 90%, 55%)' },
  { id: 'systemdesign', title: 'System Design', icon: '🏗️', color: 'hsl(340, 70%, 55%)' },
  { id: 'designpatterns', title: 'Design Patterns', icon: '🧩', color: 'hsl(270, 60%, 55%)' },
  { id: 'algorithms', title: 'Algorithms', icon: '🔢', color: 'hsl(140, 60%, 45%)' },
  { id: 'aiagents', title: 'AI Agents', icon: '🤖', color: 'hsl(180, 70%, 45%)' },
];

const categories: TopicCategory[] = [
  {
    name: 'Programming Languages',
    icon: '💻',
    topics: allTopics.filter(t => ['python', 'javascript', 'typescript'].includes(t.id))
  },
  {
    name: 'Frameworks & Libraries',
    icon: '⚛️',
    topics: allTopics.filter(t => ['react', 'pandas'].includes(t.id))
  },
  {
    name: 'Databases',
    icon: '🗄️',
    topics: allTopics.filter(t => ['sql', 'postgres'].includes(t.id))
  },
  {
    name: 'Architecture & Patterns',
    icon: '🏗️',
    topics: allTopics.filter(t => ['systemdesign', 'designpatterns', 'algorithms'].includes(t.id))
  },
  {
    name: 'Cloud & AI',
    icon: '☁️',
    topics: allTopics.filter(t => ['aws', 'aiagents'].includes(t.id))
  },
  {
    name: 'English Skills',
    icon: '📚',
    topics: allTopics.filter(t => ['pronunciation', 'grammar'].includes(t.id))
  },
];

function TopicCard({ topic, progress }: { topic: Topic; progress?: { correct: number; wrong: number; skipped: number; total: number } }) {
  const hasProgress = progress && progress.total > 0;
  const answered = hasProgress ? progress.correct + progress.wrong + progress.skipped : 0;
  const progressPercent = hasProgress ? (answered / 100) * 100 : 0;
  
  return (
    <Link 
      to={`/topic/${topic.id}`} 
      className="topic-card group"
      style={{ '--glow-color': topic.color } as React.CSSProperties}
    >
      {/* Topic Icon */}
      <div className="text-4xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:animate-float">
        {topic.icon}
      </div>
      
      {/* Topic Title */}
      <h3 
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{ color: topic.color }}
      >
        {topic.title}
      </h3>
      
      {hasProgress ? (
        <div className="w-full mt-1">
          {/* Progress bar */}
          <div className="w-full h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'var(--color-border)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${progressPercent}%`,
                background: `linear-gradient(90deg, ${topic.color}, ${topic.color}99)`
              }}
            />
          </div>
          {/* Stats */}
          <div className="flex justify-center gap-3 text-xs font-medium">
            <span className="text-correct flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {progress.correct}
            </span>
            <span className="text-wrong flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {progress.wrong}
            </span>
            <span className="text-text-muted">{100 - answered} left</span>
          </div>
        </div>
      ) : (
        <span 
          className="text-xs font-medium px-3 py-1 rounded-full transition-colors"
          style={{ 
            background: 'var(--color-bg-elevated)', 
            color: 'var(--color-text-muted)',
            border: '1px solid var(--color-border)'
          }}
        >
          100 questions
        </span>
      )}
    </Link>
  );
}

interface ProgressData {
  [topicId: string]: { correct: number; wrong: number; skipped: number; total: number };
}

function CategorySection({ category, progressData }: { category: TopicCategory; progressData: ProgressData }) {
  return (
    <section className="mb-10">
      {/* Category Header */}
      <div className="category-header">
        <span className="text-2xl">{category.icon}</span>
        <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
          {category.name}
        </h2>
        <span className="category-badge">
          {category.topics.length} topics
        </span>
      </div>
      
      {/* Topic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.topics.map((topic, idx) => (
          <div 
            key={topic.id} 
            className="animate-fadeIn"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <TopicCard topic={topic} progress={progressData[topic.id]} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [progressData, setProgressData] = useState<ProgressData>({});

  // Load progress on mount and when window gains focus (returning from quiz)
  useEffect(() => {
    const loadProgress = () => {
      const allProgress = getAllTopicsProgress();
      const data: ProgressData = {};
      
      Object.entries(allProgress).forEach(([topicId, progress]) => {
        const questions = Object.values(progress.questions);
        data[topicId] = {
          correct: questions.filter(q => q.status === 'correct').length,
          wrong: questions.filter(q => q.status === 'wrong').length,
          skipped: questions.filter(q => q.status === 'skipped').length,
          total: questions.length
        };
      });
      
      setProgressData(data);
    };

    loadProgress();
    window.addEventListener('focus', loadProgress);
    return () => window.removeEventListener('focus', loadProgress);
  }, []);
  
  const filteredCategories = searchQuery.trim() 
    ? categories.map(cat => ({
        ...cat,
        topics: cat.topics.filter(t => 
          t.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.topics.length > 0)
    : categories;

  const totalQuestions = allTopics.length * 100;

  return (
    <div className="min-h-screen fade-in">
      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ 
        background: 'var(--color-bg-card)',
        borderColor: 'var(--color-border)'
      }}>
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                   style={{ background: 'var(--color-brand-glow)' }}>
                📚
              </div>
              <h1 className="text-xl font-bold hidden sm:block" style={{ color: 'var(--color-brand)' }}>
                Knowledge Check
              </h1>
            </div>
            
            {/* Search + Theme Toggle */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input w-48 sm:w-64"
                />
                <svg 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" 
                  style={{ color: 'var(--color-text-muted)' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, var(--color-brand) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)'
              }}>
            Master Your Skills
          </h1>
          <p className="text-lg mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            Challenge yourself with {allTopics.length} topics and {totalQuestions.toLocaleString()} questions
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Track your progress • Learn at your pace • Achieve mastery
          </p>
        </div>

        {/* Categories */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <CategorySection key={category.name} category={category} progressData={progressData} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              No topics found for "{searchQuery}"
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-brand hover:underline font-medium"
              style={{ color: 'var(--color-brand)' }}
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-8" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Built with ❤️ for continuous learning
          </p>
        </div>
      </footer>
    </div>
  );
}
