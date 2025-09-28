import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, Stethoscope, Heart, Brain, Pill, Baby, Shield, Activity, MessageCircle } from 'lucide-react';
import ContactFormPopup from '../components/ContactFormPopup';
import HeroSection from '../components/HeroSection';

const Subjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const openContactForm = (subjectName) => {
    setSelectedSubject(subjectName);
    setIsContactFormOpen(true);
  };

  const categories = [
    { id: 'all', name: 'All Subjects', icon: BookOpen },
    { id: 'prerequisites', name: 'Prerequisites', icon: BookOpen },
    { id: 'core', name: 'Core Nursing', icon: Stethoscope },
    { id: 'specialty', name: 'Specialty Areas', icon: Heart }
  ];

  const subjects = [
    // Prerequisites
    { 
      id: 1, 
      name: 'ATI TEAS', 
      category: 'prerequisites', 
      description: 'Test of Essential Academic Skills preparation',
      icon: BookOpen,
      difficulty: 'Medium',
      duration: '4-6 weeks'
    },
    { 
      id: 2, 
      name: 'Fundamentals', 
      category: 'prerequisites', 
      description: 'Basic nursing principles and foundations',
      icon: BookOpen,
      difficulty: 'Medium',
      duration: '8-12 weeks'
    },
    { 
      id: 3, 
      name: 'Anatomy', 
      category: 'prerequisites', 
      description: 'Human body structure and organization',
      icon: BookOpen,
      difficulty: 'Hard',
      duration: '12-16 weeks'
    },
    { 
      id: 4, 
      name: 'Physiology', 
      category: 'prerequisites', 
      description: 'Human body function and processes',
      icon: BookOpen,
      difficulty: 'Hard',
      duration: '12-16 weeks'
    },
    { 
      id: 5, 
      name: 'Biology', 
      category: 'prerequisites', 
      description: 'General biological principles',
      icon: BookOpen,
      difficulty: 'Medium',
      duration: '8-12 weeks'
    },
    { 
      id: 6, 
      name: 'Chemistry', 
      category: 'prerequisites', 
      description: 'General and organic chemistry principles',
      icon: BookOpen,
      difficulty: 'Hard',
      duration: '12-16 weeks'
    },
    { 
      id: 7, 
      name: 'Psychology', 
      category: 'prerequisites', 
      description: 'Human behavior and mental processes',
      icon: Brain,
      difficulty: 'Medium',
      duration: '8-12 weeks'
    },
    { 
      id: 8, 
      name: 'Statistics', 
      category: 'prerequisites', 
      description: 'Statistical analysis and data interpretation',
      icon: BookOpen,
      difficulty: 'Hard',
      duration: '8-12 weeks'
    },
    { 
      id: 9, 
      name: 'Nutrition', 
      category: 'prerequisites', 
      description: 'Nutritional science and dietary principles',
      icon: BookOpen,
      difficulty: 'Medium',
      duration: '6-8 weeks'
    },
    { 
      id: 10, 
      name: 'Microbiology', 
      category: 'prerequisites', 
      description: 'Study of microorganisms and their effects',
      icon: BookOpen,
      difficulty: 'Hard',
      duration: '10-12 weeks'
    },
    { 
      id: 11, 
      name: 'Medical Terminology', 
      category: 'prerequisites', 
      description: 'Medical language and terminology',
      icon: BookOpen,
      difficulty: 'Easy',
      duration: '4-6 weeks'
    },

    // Core Nursing Courses
    { 
      id: 12, 
      name: 'Nursing Communication', 
      category: 'core', 
      description: 'Therapeutic communication in nursing practice',
      icon: Stethoscope,
      difficulty: 'Medium',
      duration: '6-8 weeks'
    },
    { 
      id: 13, 
      name: 'Case Studies', 
      category: 'core', 
      description: 'Clinical case analysis and problem-solving',
      icon: Stethoscope,
      difficulty: 'Medium',
      duration: '8-10 weeks'
    },
    { 
      id: 14, 
      name: 'Nursing Skills', 
      category: 'core', 
      description: 'Essential nursing procedures and techniques',
      icon: Stethoscope,
      difficulty: 'Medium',
      duration: '10-12 weeks'
    },
    { 
      id: 15, 
      name: 'Mental Health', 
      category: 'core', 
      description: 'Psychiatric and mental health nursing',
      icon: Brain,
      difficulty: 'Hard',
      duration: '12-14 weeks'
    },
    { 
      id: 16, 
      name: 'Care Plans', 
      category: 'core', 
      description: 'Nursing care planning and documentation',
      icon: Stethoscope,
      difficulty: 'Medium',
      duration: '8-10 weeks'
    },
    { 
      id: 17, 
      name: 'Pediatrics', 
      category: 'core', 
      description: 'Nursing care for children and adolescents',
      icon: Baby,
      difficulty: 'Hard',
      duration: '12-14 weeks'
    },
    { 
      id: 18, 
      name: 'Pharmacology', 
      category: 'core', 
      description: 'Drug therapy and medication management',
      icon: Pill,
      difficulty: 'Hard',
      duration: '12-16 weeks'
    },
    { 
      id: 19, 
      name: 'MedSurg (EENT)', 
      category: 'core', 
      description: 'Medical-surgical nursing - Eye, Ear, Nose, Throat',
      icon: Stethoscope,
      difficulty: 'Hard',
      duration: '8-10 weeks'
    },
    { 
      id: 20, 
      name: 'MedSurg (GI)', 
      category: 'core', 
      description: 'Medical-surgical nursing - Gastrointestinal',
      icon: Stethoscope,
      difficulty: 'Hard',
      duration: '8-10 weeks'
    },
    { 
      id: 21, 
      name: 'MedSurg (GU)', 
      category: 'core', 
      description: 'Medical-surgical nursing - Genitourinary',
      icon: Stethoscope,
      difficulty: 'Hard',
      duration: '8-10 weeks'
    },
    { 
      id: 22, 
      name: 'MedSurg (Neuro)', 
      category: 'core', 
      description: 'Medical-surgical nursing - Neurological',
      icon: Brain,
      difficulty: 'Hard',
      duration: '10-12 weeks'
    },
    { 
      id: 23, 
      name: 'OB Nursing', 
      category: 'core', 
      description: 'Obstetric and gynecological nursing',
      icon: Heart,
      difficulty: 'Hard',
      duration: '12-14 weeks'
    },
    { 
      id: 24, 
      name: 'Community Health', 
      category: 'core', 
      description: 'Population health and community nursing',
      icon: Shield,
      difficulty: 'Medium',
      duration: '8-10 weeks'
    },
    { 
      id: 25, 
      name: 'Diagnostic Testing', 
      category: 'core', 
      description: 'Laboratory and diagnostic procedure interpretation',
      icon: Activity,
      difficulty: 'Medium',
      duration: '6-8 weeks'
    },
    { 
      id: 26, 
      name: 'Perioperative', 
      category: 'core', 
      description: 'Surgical nursing and perioperative care',
      icon: Stethoscope,
      difficulty: 'Hard',
      duration: '8-10 weeks'
    },
    { 
      id: 27, 
      name: 'Fluid & Electrolytes', 
      category: 'core', 
      description: 'Fluid balance and electrolyte management',
      icon: Stethoscope,
      difficulty: 'Hard',
      duration: '6-8 weeks'
    },
    { 
      id: 28, 
      name: 'ABGs', 
      category: 'core', 
      description: 'Arterial blood gas analysis and interpretation',
      icon: Activity,
      difficulty: 'Hard',
      duration: '4-6 weeks'
    },

    // Specialty Areas
    { 
      id: 29, 
      name: 'Leadership & Management', 
      category: 'specialty', 
      description: 'Nursing leadership and healthcare management',
      icon: Shield,
      difficulty: 'Medium',
      duration: '8-10 weeks'
    },
    { 
      id: 30, 
      name: 'Ethics in Nursing', 
      category: 'specialty', 
      description: 'Ethical principles and decision-making in nursing',
      icon: Heart,
      difficulty: 'Medium',
      duration: '6-8 weeks'
    }
  ];

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || subject.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Nursing"
        accentWord="Subjects"
        subtitle="Explore our comprehensive nursing subject offerings and get the help you need to succeed."
      />

      {/* Search and Filter Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Showing {filteredSubjects.length} of {subjects.length} subjects
              </p>
            </div>
          </motion.div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredSubjects.map((subject, index) => {
                const Icon = subject.icon;
                return (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="card group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary p-3 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {subject.name}
                        </h3>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(subject.difficulty)}`}>
                          {subject.difficulty}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {subject.description}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <a
                        href={`https://wa.me/14802680707?text=Hello! I need help with ${encodeURIComponent(subject.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4 mr-1.5" />
                        WhatsApp
                      </a>
                      <button 
                        onClick={() => openContactForm(subject.name)}
                        className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors duration-300"
                      >
                        Learn More <span className="ml-1">→</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredSubjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-gray-600 mb-2">
                No subjects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
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
              Need Help with a Specific Subject?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Can't find the subject you're looking for? Our expert tutors can help 
              with any nursing-related coursework or exam preparation.
            </p>
            <button className="btn-accent">
              Request Custom Help
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Popup */}
      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)}
        subject={selectedSubject}
      />
    </div>
  );
};

export default Subjects;
