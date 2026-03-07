/// <reference types="vite/client" />
import "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface HistoryState {
    score?: number;
    total?: number;
    topic?: string;
    skipped?: number;
  }
}
