import { createFileRoute } from "@tanstack/react-router";
import TestSelection from "@features/topics/pages/TestSelection";

export const Route = createFileRoute("/topic/$topicId")({
  component: TestSelection,
});
