import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
