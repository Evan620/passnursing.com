import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, CheckCircle, ClipboardList, Quote, Award } from 'lucide-react';

const EssayResearchWriting = () => {
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
            Essay & Research Paper Writing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Hone your academic writing skills with specialized guidance tailored for healthcare education.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Significance */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white rounded-xl p-3">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Understanding the Significance of Essay & Research Paper Writing</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Essay and research paper writing go beyond classroom assignments. They are mediums to communicate ideas, insights, and perspectives effectively. In healthcare, clear communication is paramount—your written work can impact patient care, research dissemination, and collaboration with peers and professionals.
            </p>
          </div>

          {/* Our Service */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-white rounded-xl p-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Nursing Exams Pros: Your Trusted Partner</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2"><Award className="h-5 w-5" /></div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Expert Guidance</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experienced writers and healthcare professionals translate complex concepts into clear, coherent, and engaging narratives.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2"><CheckCircle className="h-5 w-5" /></div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Customized Support</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized assistance aligned to your topic, guidelines, and level—reflective essays, proposals, or comprehensive research papers.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2"><BookOpen className="h-5 w-5" /></div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Thorough Research</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In-depth research from reputable sources ensures your paper is accurate, current, and relevant to healthcare.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2"><ClipboardList className="h-5 w-5" /></div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Effective Structuring</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Logical organization from introduction to conclusion to create compelling, easy‑to‑follow arguments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">Clarity and Precision</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We ensure precise, concise writing that eliminates ambiguity and improves readability.</p>
              </div>
              <div className="card">
                <h4 className="font-heading font-semibold text-lg text-gray-800 mb-2">Citation Mastery</h4>
                <p className="text-gray-600 text-sm leading-relaxed">APA, MLA, Chicago—proper citations and referencing handled meticulously.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">Why Choose Nursing Exams Pros</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Healthcare Expertise: Writing proficiency paired with deep nursing knowledge.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Time Management: Focus on practical learning while we handle the writing.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Quality Assurance: Editorial review to ensure standards and requirements are met.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Confidentiality: Your information and work are kept private and secure.</span></li>
            </ul>
          </div>

          {/* How We Help */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <h3 className="font-heading font-bold text-2xl text-gray-800">How We Help You Excel</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Topic Selection based on current healthcare trends and research gaps.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Thorough Research with credible, up-to-date sources.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Writing Assistance for entire papers or targeted sections.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Editing & Proofreading for grammar, clarity, and coherence.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-secondary mt-0.5" /><span className="text-gray-700">Feedback & Improvement with constructive suggestions.</span></li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white rounded-xl p-2"><Quote className="h-5 w-5" /></div>
              <h3 className="font-heading font-bold text-2xl text-gray-800">Elevate Your Writing, Elevate Your Healthcare Career</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              With Nursing Exams Pros’ Essay & Research Paper Writing service, you enhance your impact in patient care, research dissemination, and collaboration. Whether you’re an aspiring nurse or advancing professional, we equip you to convey insights with clarity, precision, and professionalism.
            </p>
            <div className="text-center pt-2">
              <button className="btn-primary">Request This Service</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EssayResearchWriting;


