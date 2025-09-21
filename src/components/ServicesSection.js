import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  PenTool, 
  FileText, 
  GraduationCap, 
  ClipboardCheck,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Online Exams Help',
  description: 'Support for nursing exams & quizzes with expert guidance and comprehensive preparation strategies from passnursing.com.',
      features: ['Exam preparation', 'Quiz assistance', 'Study strategies', 'Test-taking tips']
    },
    {
      icon: PenTool,
      title: 'Homework & Assignment Help',
  description: 'Essays, projects, and written tasks completed with nursing expertise and academic excellence at passnursing.com.',
      features: ['Essay writing', 'Project completion', 'Research assistance', 'Academic formatting']
    },
    {
      icon: FileText,
      title: 'Essay & Research Paper Writing',
  description: 'Research, formatting, and academic writing services tailored for nursing students at passnursing.com.',
      features: ['Research papers', 'Literature reviews', 'Case studies', 'APA formatting']
    },
    {
      icon: GraduationCap,
      title: 'Online Class Help',
      description: 'Guidance for online classes, discussions, and virtual learning environments.',
      features: ['Class participation', 'Discussion posts', 'Virtual presentations', 'Online assignments']
    },
    {
      icon: ClipboardCheck,
      title: 'Online Quizzes',
      description: 'Practice and assistance with quizzes to reinforce learning and improve performance.',
      features: ['Practice quizzes', 'Quiz preparation', 'Performance analysis', 'Study materials']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic support designed specifically for nursing students at passnursing.com. 
            From exam preparation to assignment assistance, we're here to help you succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card group hover:shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary p-3 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-primary font-medium group-hover:text-secondary transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
