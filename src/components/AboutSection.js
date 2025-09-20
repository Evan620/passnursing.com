import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We understand the challenges nursing students face and provide empathetic, personalized support.'
    },
    {
      icon: Target,
      title: 'Focused Excellence',
      description: 'Our specialized approach ensures you receive targeted assistance for nursing-specific challenges.'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'We foster an environment where students learn together and support each other\'s success.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with a 95% success rate among our nursing students.'
    }
  ];

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
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
                About Nursing Exams Pros
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are dedicated to personalized education, understanding that each individual's 
                path is unique. By offering tailored guidance, expert insights, and resources that 
                cater to various learning styles, we aim to build a foundation of success for 
                every student we serve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced nursing professionals and educators work together to 
                provide comprehensive support that goes beyond just passing exams. We're committed 
                to helping you develop the critical thinking skills and clinical knowledge 
                essential for your nursing career.
              </p>
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

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="card hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-800">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
