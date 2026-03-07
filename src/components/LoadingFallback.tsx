import { Brain } from "lucide-react";
import { cn } from "../lib/utils";

export default function LoadingFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full h-screen items-center justify-center bg-background/50 backdrop-blur-sm",
        className,
      )}
    >
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="relative flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <div className="absolute w-32 h-32 rounded-full border-[3px] border-dashed border-primary opacity-20 animate-[spin_5s_linear_infinite]" />

          {/* Middle rotating geometric ring */}
          <div className="absolute w-24 h-24 rounded-full border-[3px] border-transparent border-t-primary border-r-primary border-b-primary opacity-60 animate-[spin_2.5s_cubic-bezier(0.4,0,0.2,1)_infinite_reverse]" />

          {/* Inner pulsing ring */}
          <div className="absolute w-16 h-16 rounded-full bg-primary opacity-10 animate-ping" />

          {/* Center icon container with glow */}
          <div className="relative w-16 h-16 flex items-center justify-center bg-background rounded-full border border-primary/30 shadow-[0_0_20px_var(--color-brand-glow)] animate-pulse">
            <Brain className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Loading text with animated dots */}
        <div className="flex items-center text-sm font-semibold text-primary/80 tracking-[0.2em] uppercase">
          <span>Loading</span>
          <span className="flex w-6 ml-1 justify-start">
            <span className="animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.32s]">
              .
            </span>
            <span className="animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.16s]">
              .
            </span>
            <span className="animate-[bounce_1.4s_infinite_ease-in-out_both]">
              .
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
