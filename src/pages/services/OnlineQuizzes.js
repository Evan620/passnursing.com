import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Timer, BookOpen, CheckCircle, Cpu, Target } from 'lucide-react';

const OnlineQuizzes = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${require('../../assets/images/banner-4-1.jpg2_-1.jpg')})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Online Quizzes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Master modern assessment formats with strategic preparation, real-world scenarios, and expert feedback.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Evolution */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-white rounded-xl p-3"><ClipboardCheck className="h-6 w-6" /></div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">The Evolution of Nursing Education: The Rise of Online Quizzes</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Online quizzes are vital in modern nursing education—flexible, accessible ways to gauge understanding, retention, and critical thinking. Learn and test your knowledge at your pace while balancing responsibilities.
            </p>
          </div>

          {/* Role */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <h2 className="font-heading font-bold text-2xl text-gray-800">The Role of Online Quizzes in Nursing Education</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond memorization, quizzes develop application, analysis, and decision‑making—skills indispensable to nursing professionals working in real healthcare settings.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <h2 className="font-heading font-bold text-2xl text-gray-800">Nursing Exams Pros: Your Partner in Online Quiz Mastery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-3"><Target className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Customized Learning Pathways</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Personalized plans aligned to your strengths, gaps, and learning style for targeted, effective preparation.</p>
              </div>
              <div className="card">
                <div className="flex items-center space-x-3 mb-3"><BookOpen className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Comprehensive Study Materials</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Curated resources—from e‑books to interactive modules—cover the breadth of topics you’ll see in quizzes.</p>
              </div>
              <div className="card">
                <div className="flex items-center space-x-3 mb-3"><Cpu className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Real‑World Application</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Scenario‑based practice mirrors clinical realities, sharpening critical thinking and decision‑making.</p>
              </div>
              <div className="card">
                <div className="flex items-center space-x-3 mb-3"><Timer className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Timed Practice</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Simulated time constraints build efficiency and accuracy under pressure—just like in real exams.</p>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3"><CheckCircle className="h-5 w-5 text-secondary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Expert Feedback and Analysis</h4></div>
              <p className="text-gray-600 leading-relaxed">Immediate feedback with insightful analysis highlights areas to improve and reinforces strengths.</p>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3"><Cpu className="h-5 w-5 text-secondary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Embracing Technological Proficiency</h4></div>
              <p className="text-gray-600 leading-relaxed">Become comfortable with quiz interfaces and tools so you can focus on answering—not the platform.</p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">Confidence Beyond Quizzes: Preparing for Nursing Excellence</h3>
            <p className="text-gray-700 leading-relaxed">Our holistic approach builds knowledge, skills, and confidence across foundational and core nursing topics—preparing you for quizzes, clinicals, and leadership roles.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-3">Empowering Your Nursing Journey</h3>
            <p className="text-gray-700 leading-relaxed mb-6">Master online quizzes with strategic guidance, tailored resources, and real‑world practice.</p>
            <button className="btn-primary">Request This Service</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineQuizzes;


