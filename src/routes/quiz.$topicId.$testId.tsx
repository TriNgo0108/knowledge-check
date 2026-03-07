import { createFileRoute } from "@tanstack/react-router";
import Quiz from "@features/quiz/pages/Quiz";

export const Route = createFileRoute("/quiz/$topicId/$testId")({
  component: Quiz,
});
