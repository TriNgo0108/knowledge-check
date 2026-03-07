import { useEffect } from "react";
import { Question } from "@data/types";

interface UseKeyboardNavigationProps {
  currentQuestion: Question | undefined;
  isAnswered: boolean;
  handleOptionClick: (option: string) => void;
  handleNext: () => void;
  handleSkip: () => void;
}

export function useKeyboardNavigation({
  currentQuestion,
  isAnswered,
  handleOptionClick,
  handleNext,
  handleSkip,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentQuestion) return;

      // Number keys to select options
      if (!isAnswered && ["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (index < currentQuestion.options.length) {
          handleOptionClick(currentQuestion.options[index]);
        }
      }

      // Enter or Space to continue
      if (isAnswered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleNext();
      }

      // S to skip
      if (!isAnswered && e.key.toLowerCase() === "s") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion, isAnswered, handleOptionClick, handleNext, handleSkip]);
}
