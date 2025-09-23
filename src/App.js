import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Services from './pages/Services';
import Subjects from './pages/Subjects';
import RequestService from './pages/RequestService';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import OnlineExamsHelp from './pages/services/OnlineExamsHelp';
import HomeworkAssignmentHelp from './pages/services/HomeworkAssignmentHelp';
import EssayResearchWriting from './pages/services/EssayResearchWriting';
import OnlineClassHelp from './pages/services/OnlineClassHelp';
import OnlineQuizzes from './pages/services/OnlineQuizzes';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
