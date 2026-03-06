import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@hooks/useTheme";
import loadable from "@loadable/component";
import LoadingFallback from "@components/LoadingFallback";

const Home = loadable(() => import("@features/topics/pages/Home"), {
  fallback: <LoadingFallback />,
});
const TestSelection = loadable(
  () => import("@features/topics/pages/TestSelection"),
  {
    fallback: <LoadingFallback />,
  },
);
const Quiz = loadable(() => import("@features/quiz/pages/Quiz"), {
  fallback: <LoadingFallback />,
});
const Results = loadable(() => import("@features/results/pages/Results"), {
  fallback: <LoadingFallback />,
});

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
