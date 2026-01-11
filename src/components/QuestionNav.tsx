import { QuestionStatus } from '@/data/types';

interface QuestionNavProps {
  totalQuestions: number;
  currentIndex: number;
  getQuestionStatus: (questionId: number) => QuestionStatus;
  onJump: (index: number) => void;
}

export default function QuestionNav({
  totalQuestions,
  currentIndex,
  getQuestionStatus,
  onJump
}: QuestionNavProps) {
  return (
    <div 
      className="backdrop-blur-xl rounded-2xl p-4"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>
          Questions
        </h3>
        <span 
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{ 
            background: 'var(--color-bg-elevated)',
            color: 'var(--color-text-muted)'
          }}
        >
          {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded" style={{ background: 'var(--color-correct)' }} />
          Correct
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded" style={{ background: 'var(--color-wrong)' }} />
          Wrong
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded" style={{ background: 'var(--color-accent)' }} />
          Skip
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-5 gap-1.5 max-h-[400px] overflow-y-auto pr-1">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const status = getQuestionStatus(i + 1);
          const isCurrent = i === currentIndex;
          
          let bgColor = 'var(--color-bg-elevated)';
          let textColor = 'var(--color-text-muted)';
          let borderColor = 'transparent';
          
          if (status === 'correct') {
            bgColor = 'var(--color-correct)';
            textColor = 'white';
          } else if (status === 'wrong') {
            bgColor = 'var(--color-wrong)';
            textColor = 'white';
          } else if (status === 'skipped') {
            bgColor = 'var(--color-accent)';
            textColor = 'white';
          }

          if (isCurrent) {
            borderColor = 'var(--color-brand)';
          }
          
          return (
            <button
              key={i}
              onClick={() => onJump(i)}
              className={`
                w-8 h-8 rounded-lg text-xs font-semibold transition-all duration-200
                hover:scale-105 cursor-pointer
                ${isCurrent ? 'ring-2 ring-offset-2 scale-110' : ''}
              `}
              style={{
                background: bgColor,
                color: textColor,
                boxShadow: isCurrent ? '0 0 0 2px var(--color-brand)' : undefined
              }}
              title={`Question ${i + 1} - ${status}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
