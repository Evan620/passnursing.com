import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, BookOpen, Clock, Award, PenTool } from 'lucide-react';

const HomeworkAssignmentHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
          >
            Homework & Assignment Help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-xl text-green-100 max-w-3xl mx-auto"
          >
            In the realm of nursing education, the journey is marked by numerous challenges. We're here to alleviate the burden of assignments and elevate your academic experience.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-white rounded-xl p-3">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Understanding the Challenge</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nursing education is rigorous and multifaceted. From mastering intricate medical concepts to honing clinical skills, students face diverse learning experiences. Amidst this, assignments and homework can become a stumbling block. The demands of crafting well-researched papers, adhering to formatting guidelines, and meeting strict deadlines can take a toll on even the most dedicated students.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-white rounded-xl p-3">
                <PenTool className="h-6 w-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Our Homework & Assignment Help: A Holistic Approach</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our service is designed with one goal in mind – to provide a comprehensive support system that enhances your academic journey. Here’s how we approach this service:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Diverse Subjects Covered</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our team spans a wide array of nursing subjects—from fundamentals to specialized healthcare topics—ready to handle assignments across the spectrum.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Personalized Assistance</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every assignment is unique. We tailor guidance to your specific requirements—research papers, case studies, essays, and more.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Research Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We delve into credible, current sources so your assignments are well-supported, accurate, and academically sound.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary text-white rounded-lg p-2">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Formatting Precision</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  APA, MLA, Chicago—our experts ensure every requirement is met so your work is as polished as it is insightful.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-secondary text-white rounded-lg p-2">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-gray-800">Meeting Deadlines</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Time management is crucial in nursing education. We work diligently to deliver on time—relieving you of last‑minute stress.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">Why Choose Our Homework & Assignment Help</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-700">Expertise: Assignments crafted by professionals with extensive nursing experience.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-700">Comprehensive Support: Deep understanding of medical concepts reflected in your work.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-700">Quality Assurance: Rigorous review to meet the highest academic standards.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-700">Time Management: Reclaim hours for studying, clinicals, and personal commitments.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-700">Stress Reduction: Let assignments be opportunities for growth—not sources of anxiety.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-4">
            <h3 className="font-heading font-bold text-2xl text-gray-800">Embracing Success with Homework & Assignment Help</h3>
            <p className="text-gray-700 leading-relaxed">
              Nursing education is a transformative journey. Our service aligns with this path, ensuring you navigate assignments with confidence and excel in every facet of your education. With Nursing Exams Pros as your academic partner, you gain a supportive ally dedicated to your success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Welcome to a world where assignments cease to be a source of stress and become opportunities for growth. Welcome to Homework & Assignment Help—where excellence is a reality waiting to be embraced.
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

export default HomeworkAssignmentHelp;


