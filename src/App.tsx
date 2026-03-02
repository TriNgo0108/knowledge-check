import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@hooks/useTheme";
import Home from "@pages/Home";
import TestSelection from "@pages/TestSelection";
import Quiz from "@pages/Quiz";
import Results from "@pages/Results";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:topicId" element={<TestSelection />} />
            <Route path="/quiz/:topicId/:testId" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </HashRouter>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-body)",
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
