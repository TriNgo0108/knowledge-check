import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/useTheme';
import Home from '@/pages/Home';
import TestSelection from '@/pages/TestSelection';
import Quiz from '@/pages/Quiz';
import Results from '@/pages/Results';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TestSelection />} />
          <Route path="/quiz/:topicId/:testId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

