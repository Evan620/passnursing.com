import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  PenTool, 
  FileText, 
  GraduationCap, 
  ClipboardCheck,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Services = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const services = [
    { icon: BookOpen, title: 'Online Exams Help', description: 'Comprehensive support for nursing exams and quizzes with expert guidance.', route: '/services/online-exams-help' },
    { icon: PenTool, title: 'Homework & Assignment Help', description: 'Professional assistance with essays, projects, and written tasks.', route: '/services/homework-assignment-help' },
    { icon: FileText, title: 'Essay & Research Paper Writing', description: 'Specialized research and academic writing services for nursing students.', route: '/services/essay-research-writing' },
    { icon: GraduationCap, title: 'Online Class Help', description: 'Guidance and support for online nursing courses and virtual learning.', route: '/services/online-class-help' },
    { icon: ClipboardCheck, title: 'Online Quizzes', description: 'Practice and assistance with quizzes to reinforce learning.', route: '/services/online-quizzes' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Our"
        accentWord="Services"
        subtitle="Comprehensive academic support tailored for nursing students"
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-background hover:bg-gray-100 transition-colors duration-200">
              <span className="font-heading font-semibold text-lg text-gray-800">Select a Service</span>
              <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="mt-4 divide-y divide-gray-100">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.title} className="py-3">
                        <button onClick={() => navigate(service.route)} className="w-full flex items-center justify-between text-left group">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary p-2 rounded-xl"><Icon className="h-5 w-5 text-white" /></div>
                            <div>
                              <div className="font-heading font-semibold text-gray-800 group-hover:text-primary transition-colors duration-200">{service.title}</div>
                              <div className="text-sm text-gray-600">{service.description}</div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
