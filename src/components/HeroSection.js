import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle, accentWord, backgroundImage = require('../assets/images/banner-4-1.jpg2_-1.jpg') }) => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {title} {accentWord && <span className="text-accent">{accentWord}</span>}
          </h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
