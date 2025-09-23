import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import all images
const images = {
  whatsapp1: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.09.jpg',
  whatsapp2: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.11-1.jpg',
  whatsapp3: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.13.jpg',
  whatsapp4: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.14-1.jpg',
  whatsapp5: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.07-1.jpg',
  whatsapp6: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.08-1-1.jpg',
  whatsapp7: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.08-2.jpg',
  atiTeas: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.14-1024x737.jpeg',
  nclex: '/successimages/Screenshot-2024-08-22-at-15.23.39-1024x487.png',
  placeholder: '/images/placeholder.svg'
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
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

  const portfolioItems = [
    {
      id: 1,
      title: 'HESI A2 Exam Success',
      image: images.whatsapp1,
      category: 'HESI',
      tags: ['HESI A2', 'Exam Success', 'Scores']
    },
    {
      id: 2,
      title: 'ATI TEAS Exam Results',
      image: images.whatsapp2,
      category: 'ATI',
      tags: ['ATI TEAS', 'Exam Results', 'High Scores']
    },
    {
      id: 3,
      title: 'Proctored Exam Success',
      image: images.whatsapp3,
      category: 'Proctored',
      tags: ['Proctored Exam', 'Success', 'High Score']
    },
    {
      id: 4,
      title: 'HESI Exit Exam Score',
      image: images.whatsapp4,
      category: 'HESI',
      tags: ['HESI Exit', 'Exam Score', 'Success']
    },
    {
      id: 5,
      title: 'ATI TEAS Exam Prep',
      image: images.whatsapp5,
      category: 'ATI Teas',
      tags: ['ATI TEAS', 'Exam Prep', 'Practice']
    },
    {
      id: 6,
      title: 'HESI A2 Test Results',
      image: images.whatsapp6,
      category: 'HESI',
      tags: ['HESI A2', 'Test Results', 'Success']
    },
    {
      id: 7,
      title: 'HESI A2 Math Section',
      image: images.whatsapp7,
      category: 'HESI',
      tags: ['HESI A2', 'Math Section', 'High Score']
    },
    {
      id: 8,
      title: 'ATI TEAS 2023',
      image: images.atiTeas,
      category: 'ATI Teas',
      tags: ['ATI TEAS', '2023', 'Exam Prep']
    },
    {
      id: 9,
      title: 'NCLEX Success',
      image: images.nclex,
      category: 'Proctored',
      tags: ['NCLEX', 'Success', 'Results']
    }
  ];

  const filters = ['All', 'ATI', 'HESI', 'ATI Teas', 'Proctored'];

  const filteredItems = portfolioItems.filter(item => {
    return activeFilter === 'All' || item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(16,40,80,0.8), rgba(16,40,80,0.8)), url('/successimages/Nursing-Exams-Pros-Website-Banner-1-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We have reputable records with Unwavering Quality Standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map(filter => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      console.error('Error loading image:', item.image);
                      e.target.src = images.placeholder;
                      e.target.onerror = null; // Prevent infinite loop if placeholder also fails
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <button className="mt-3 text-sm font-medium text-accent hover:text-primary-700 flex items-center transition-colors">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-gray-500 text-lg">No portfolio items found in this category.</div>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-accent hover:text-primary-700 font-medium"
              >
                Show All Items
              </button>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredItems.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-full mt-12 text-center"
            >
              <button className="px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 transition-colors">
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-accent rounded-2xl px-6 py-12 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-white/90">
                Contact us today to learn more about our services and how we can help you succeed.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex rounded-md shadow"
              >
                <a
                  href="/request-service"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-accent bg-white hover:bg-gray-50 transition-colors"
                >
                  Request a Service
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
