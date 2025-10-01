import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Subjects = lazy(() => import('./pages/Subjects'));
const RequestService = lazy(() => import('./pages/RequestService'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const OnlineExamsHelp = lazy(() => import('./pages/services/OnlineExamsHelp'));
const HomeworkAssignmentHelp = lazy(() => import('./pages/services/HomeworkAssignmentHelp'));
const EssayResearchWriting = lazy(() => import('./pages/services/EssayResearchWriting'));
const OnlineClassHelp = lazy(() => import('./pages/services/OnlineClassHelp'));
const OnlineQuizzes = lazy(() => import('./pages/services/OnlineQuizzes'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
    <div className="text-center">
      <h1 className="font-heading font-bold text-6xl text-primary mb-4">404</h1>
      <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow" id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/online-exams-help" element={<OnlineExamsHelp />} />
                <Route path="/services/homework-assignment-help" element={<HomeworkAssignmentHelp />} />
                <Route path="/services/essay-research-writing" element={<EssayResearchWriting />} />
                <Route path="/services/online-class-help" element={<OnlineClassHelp />} />
                <Route path="/services/online-quizzes" element={<OnlineQuizzes />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/request-service" element={<RequestService />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
