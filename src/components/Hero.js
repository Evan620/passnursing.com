import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, BookOpen, Users } from 'lucide-react';

import rightCardImg from "../assets/images/WhatsApp-Image-2023-09-06-at-19.25.09-1024x671.jpeg";
import leftCardImg from "../assets/images/ATI-TEST-Score-1024x576.png";

const Hero = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Students Helped' },
    { icon: Stethoscope, number: '50+', label: 'Nursing Courses' },
    { icon: BookOpen, number: '95%', label: 'Success Rate' },
  ];

  return (
    <section className="relative text-white overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(16,40,80,0.7),rgba(16,40,80,0.7)), url('/successimages/Nursing-Exams-Pros-Website-Banner-1-1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Card - Duplicate of Right Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
               className="relative hidden lg:block flex-shrink-0 w-full max-w-2xl"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 flex items-center justify-center">
                <img 
                  src={leftCardImg}
                  alt="Nursing Success Story" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="font-bold text-2xl">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-secondary text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="font-bold text-2xl">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 w-full max-w-2xl"
          >
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
                Succeed with <span className="text-accent">PassNursing.com</span>
              </h1>
            </div>

            {/* Categorized and styled info sections */}
            <div className="space-y-4">
              {/* Specialization List */}
              <div className="flex flex-col items-center">
                <div className="font-extrabold text-2xl md:text-3xl mb-3 text-white tracking-wide drop-shadow-lg font-heading">We Specialize In</div>
                <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
                  <li className="bg-white/20 border border-white text-white rounded-full px-4 py-1 text-sm md:text-base font-semibold shadow-sm">Exam Tutoring</li>
                  <li className="bg-white/20 border border-white text-white rounded-full px-4 py-1 text-sm md:text-base font-semibold shadow-sm">Online Classes</li>
                  <li className="bg-white/20 border border-white text-white rounded-full px-4 py-1 text-sm md:text-base font-semibold shadow-sm">Proctored Exam Help</li>
                  <li className="bg-white/20 border border-white text-white rounded-full px-4 py-1 text-sm md:text-base font-semibold shadow-sm">Zoom Exam</li>
                  <li className="bg-white/20 border border-white text-white rounded-full px-4 py-1 text-sm md:text-base font-semibold shadow-sm">Homework Help</li>
                </ul>
              </div>

              {/* Exams Info Box */}
              <div className="bg-white/10 border-l-4 border-blue-300 rounded-lg px-4 py-3 text-center text-base md:text-lg text-blue-100 shadow">
                <span className="font-semibold text-white">We Do All Nursing EXAMS</span> – <span className="font-semibold text-blue-200">ATI, Canvas, Blackboard, Schoology</span>.<br />
                Get Help With All Your Proctored Exams – <span className="font-semibold text-blue-200">Proctorio, ProctorU, Lockdown browser, Examity</span> etc.
              </div>

              {/* TEAS Callout */}
              <div className="italic text-center text-base md:text-lg text-yellow-100 bg-yellow-600/20 rounded-lg px-4 py-2 border border-yellow-300">
                <span className="font-semibold text-yellow-200">Taking The TEAS In Person?</span> Get the most up-to-date <span className="font-semibold">ATI TEAS VII & HESI A2 Question Banks</span> – Questions and Answers Available. <br /> <span className="text-accent font-semibold">Scroll down to download sample questions.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-service"
                className="btn-accent inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Request a Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="font-heading font-bold text-2xl text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Visual (original) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0 w-full max-w-2xl"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 flex items-center justify-center">
                <img 
                  src={rightCardImg}
                  alt="Nursing Success Story" 
                  className="w-full h-[400px] md:h-[500px] object-contain rounded-lg" 
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="font-bold text-2xl">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-secondary text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="font-bold text-2xl">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
