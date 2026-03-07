import { createFileRoute } from "@tanstack/react-router";
import Home from "@features/topics/pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
});
