import { createFileRoute } from "@tanstack/react-router";
import Results from "@features/results/pages/Results";

export const Route = createFileRoute("/results")({
  component: Results,
});
