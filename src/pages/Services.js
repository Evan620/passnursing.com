import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  PenTool, 
  FileText, 
  GraduationCap, 
  ClipboardCheck,
  CheckCircle,
  Clock,
  Users,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Online Exams Help',
      description: 'Comprehensive support for nursing exams and quizzes with expert guidance.',
      features: [
        'Exam preparation strategies',
        'Quiz assistance and practice',
        'Study guides and materials',
        'Test-taking techniques',
        'Time management tips',
        'Stress reduction methods'
      ],
      process: [
        'Initial assessment of your needs',
        'Customized study plan creation',
        'Regular practice sessions',
        'Mock exam simulations',
        'Performance feedback and improvement'
      ],
      pricing: 'Starting at $45/hour',
      duration: 'Flexible scheduling'
    },
    {
      icon: PenTool,
      title: 'Homework & Assignment Help',
      description: 'Professional assistance with essays, projects, and written tasks.',
      features: [
        'Essay writing and editing',
        'Research project completion',
        'Academic formatting (APA, MLA)',
        'Citation and referencing',
        'Grammar and style improvement',
        'Plagiarism-free content'
      ],
      process: [
        'Topic analysis and planning',
        'Research and data collection',
        'Draft creation and review',
        'Editing and proofreading',
        'Final submission preparation'
      ],
      pricing: 'Starting at $35/page',
      duration: '24-48 hours turnaround'
    },
    {
      icon: FileText,
      title: 'Essay & Research Paper Writing',
      description: 'Specialized research and academic writing services for nursing students.',
      features: [
        'Literature reviews',
        'Case study analysis',
        'Research paper writing',
        'Evidence-based practice papers',
        'Nursing theory applications',
        'Clinical reflection papers'
      ],
      process: [
        'Research topic selection',
        'Literature review and analysis',
        'Thesis statement development',
        'Structured writing process',
        'Peer review and revisions'
      ],
      pricing: 'Starting at $40/page',
      duration: '3-7 days depending on length'
    },
    {
      icon: GraduationCap,
      title: 'Online Class Help',
      description: 'Guidance and support for online nursing courses and virtual learning.',
      features: [
        'Discussion post assistance',
        'Virtual presentation support',
        'Online assignment completion',
        'Class participation guidance',
        'Virtual lab assistance',
        'Online exam preparation'
      ],
      process: [
        'Course material review',
        'Assignment understanding',
        'Content creation and submission',
        'Regular progress monitoring',
        'Grade improvement strategies'
      ],
      pricing: 'Starting at $50/session',
      duration: 'Ongoing throughout course'
    },
    {
      icon: ClipboardCheck,
      title: 'Online Quizzes',
      description: 'Practice and assistance with quizzes to reinforce learning.',
      features: [
        'Practice quiz creation',
        'Quiz preparation strategies',
        'Performance analysis',
        'Weak area identification',
        'Study material recommendations',
        'Confidence building'
      ],
      process: [
        'Learning objective assessment',
        'Practice quiz administration',
        'Performance evaluation',
        'Targeted study recommendations',
        'Progress tracking'
      ],
      pricing: 'Starting at $25/quiz',
      duration: 'Immediate feedback'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive academic support designed specifically for nursing students. 
              From exam preparation to assignment assistance, we're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary p-4 rounded-2xl">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-gray-800 mb-4">
                          What We Offer
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading font-semibold text-lg text-gray-800 mb-4">
                          Our Process
                        </h3>
                        <ul className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-2">
                              <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <span className="text-gray-600">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="font-semibold">{service.pricing}</span>
                      </div>
                    </div>

                    <button className="btn-primary">
                      Request This Service
                    </button>
                  </div>

                  {/* Visual/Image Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-24 w-24 text-primary mx-auto mb-4" />
                        <h3 className="font-heading font-semibold text-xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">
                          Professional nursing education support
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Choose the service that best fits your needs and take the first step 
              toward academic success in your nursing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Request Service Now
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
