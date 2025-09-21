import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  // Values grid replaced with a single image

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                  <span className="inline-block bg-gradient-to-r from-primary to-accent text-white font-extrabold rounded-full px-6 py-2 text-2xl md:text-3xl shadow-lg tracking-wide">
                    10,000+
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left">
                    students trust us with their academic success
                  </span>
                 


                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At <span className="font-bold text-secondary">PassNursing.com</span>, we specialize in helping nursing and health science students excel in their studies and exams. Whether it’s <span className="font-semibold text-primary">TEAS</span>, <span className="font-semibold text-primary">HESI A2</span>, <span className="font-semibold text-primary">ATI Fundamentals Proctored Exams</span>, Canvas exams, online classes, or homework assignments, our expert team is here to ensure you achieve top results.
                </p>
                <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                  <div className="font-heading font-semibold text-lg text-primary mb-2">✨ What we can do for you:</div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                    <li>Take My TEAS Exam For Me</li>
                    <li>Take My HESI A2 Exam For Me</li>
                    <li>Take My Proctored Exam For Me</li>
                    <li>Take My Online Class For Me</li>
                    <li>Write My Nursing Essay</li>
                    <li>Do My Homework For Me</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-2">500+</div>
                <div className="text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-secondary mb-2">50+</div>
                <div className="text-gray-600">Nursing Courses</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Single Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            {/* Replace the src below with your image path */}
            <img 
              src="successimages/working-desk.png" 
              alt="About passnursing.com" 
              className="rounded-2xl shadow-xl max-w-full h-auto object-contain border-2 border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
