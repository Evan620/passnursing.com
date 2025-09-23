import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  PenTool, 
  FileText, 
  GraduationCap, 
  ClipboardCheck,
  ArrowRight, 
  Settings2Icon
} from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const handleLearnMore = (serviceTitle) => {
    navigate(`/request-service?service=${encodeURIComponent(serviceTitle)}`);
  };
  const services = [
    {
      icon: BookOpen,
      title: 'Take my ATI TEAS for me',
      description: 'Struggling with your ATI TEAS exam? Let our expert team assist you in acing your ATI TEAS test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
    },
    {
      icon: PenTool,
      title: 'Take my HESI A2 for me',
      description: 'Struggling with your HESI A2 exam? Let our expert team assist you in acing your HESI A2 test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
    },
    {
      icon: FileText,
      title: 'Take my dosage calculation',
      description: 'Struggling with your dosage calculation exam? Let our expert team assist you in acing your dosage calculation test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
    },
    {
      icon: GraduationCap,
      title: 'Take my ATI Fundamentals',
      description: 'Struggling with the ATI Fundamentals exam? Let our expert team assist you in acing your ATI Fundamentals test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
    },
    {
      icon: ClipboardCheck,
      title: 'Take my MedSurg Exam',
      description: 'Struggling with your MedSurg exam? Let our expert team assist you in acing your MedSurg test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
    },
    {
      icon: Settings2Icon,
      title: 'Take my NCLEX Exam',
      description: 'Struggling with your NCLEX exam? Let our expert team assist you in acing your NCLEX test. Our experienced professionals will guide you through the exam preparation process, providing personalized support and resources to help you succeed.'
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

                <button 
                  onClick={() => handleLearnMore(service.title)}
                  className="flex items-center space-x-2 text-primary font-medium group-hover:text-secondary transition-colors duration-300"
                >
                  <span>Request Service</span>
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
