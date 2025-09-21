import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  // Placeholder WhatsApp screenshot images, replace with your actual paths
  const whatsappScreenshots = [
    require('../assets/images/WhatsApp-Image-2023-09-06-at-19.25.10.jpg'),
    require('../assets/images/WhatsApp-Image-2023-09-06-at-19.25.15.jpg'),
    require('../assets/images/WhatsApp-Image-2023-09-06-at-19.28.45.jpg'),
  ];

  // Auto-advance every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whatsappScreenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [whatsappScreenshots.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % whatsappScreenshots.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + whatsappScreenshots.length) % whatsappScreenshots.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what nursing students have to say 
            about their experience with Nursing Exams Pros.
          </p>
        </motion.div>


        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center min-h-[350px]"
              >
                <div className="bg-background rounded-2xl p-2 md:p-4 shadow-lg flex justify-center items-center w-full">
                  <img
                    src={whatsappScreenshots[currentIndex]}
                    alt={`WhatsApp testimonial ${currentIndex + 1}`}
                    className="rounded-xl object-contain max-h-[500px] md:max-h-[600px] w-full mx-auto border border-gray-200 shadow-lg"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {whatsappScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
