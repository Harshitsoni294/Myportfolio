import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FeedbackPage } from './pages/FeedbackPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { TerminalLoader } from './components/TerminalLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <TerminalLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
      </Route>
    </Routes>
  );
}

export default App;