import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';

const OnlineClassHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <section
        className="text-white py-20"
        style={{
          backgroundImage: "url('/successimages/Blue And White 3d Modern School Admission Linkedin Banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl">
            Online Class Help
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Personalized support for virtual nursing educationtime management, concept mastery, and interactive learning.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white rounded-xl p-3"><GraduationCap className="h-6 w-6" /></div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">The Virtual Learning Revolution in Nursing Education</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Virtual learning offers flexibility and accessibility for nursing students and professionals. Yet, without in-person interaction, clarifying doubts and staying on schedule can be challenging—especially when grasping complex concepts through a screen. Our service bridges that gap.
            </p>
          </div>

          {/* Why Our Service */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-white rounded-xl p-3"><Users className="h-6 w-6" /></div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Why Nursing Exams Pros Online Class Help</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">Personalized Support</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Tailored guidance for your goals—fundamentals or advanced topics—with step‑by‑step help every week.</p>
              </div>
              <div className="card">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">Expert Tutors</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Seasoned professionals simplify complex nursing concepts so you can understand and apply them effectively.</p>
              </div>
              <div className="card">
                <div className="flex items-center space-x-2 mb-2"><Clock className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Effective Time Management</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Scheduling strategies, study plans, and productivity techniques keep you on track throughout the course.</p>
              </div>
              <div className="card">
                <div className="flex items-center space-x-2 mb-2"><MessageSquare className="h-5 w-5 text-primary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Interactive Learning</h4></div>
                <p className="text-gray-600 text-sm leading-relaxed">Real‑time doubt clearing, discussions, and engaging sessions that emulate the classroom experience.</p>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3"><BookOpen className="h-5 w-5 text-secondary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Comprehensive Study Materials</h4></div>
              <p className="text-gray-600 leading-relaxed">Access curated resources—presentations, notes, quizzes, and practice exams—for a well‑rounded learning journey.</p>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3"><CheckCircle className="h-5 w-5 text-secondary" /><h4 className="font-heading font-semibold text-lg text-gray-800">Continuous Assessment</h4></div>
              <p className="text-gray-600 leading-relaxed">Frequent check‑ins, quizzes, and feedback loops ensure steady progress and confidence.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">How Online Class Help Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Initial Consultation: Understand your course load, goals, and challenges.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Tailored Support: Personalized plan—targeted sessions or ongoing term‑long support.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Interactive Sessions: Engaging, discussion‑driven meetings to deepen understanding.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Regular Assessments: Quizzes, assignments, and mock exams to track progress.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Feedback & Growth: Actionable feedback with strategies for improvement.</span></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-800 mb-3">Your Virtual Learning Success Begins Here</h3>
            <p className="text-gray-700 leading-relaxed mb-6">Partner with Nursing Exams Pros for a guided, engaging, and successful online class experience.</p>
            <button className="btn-primary">Request This Service</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineClassHelp;


