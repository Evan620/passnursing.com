import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import ReadyToGetStartedSection from '../components/ReadyToGetStartedSection';

const Home = () => {
  return (
    <div className="min-h-screen">
  <Hero />
  <AboutSection />
  <ServicesSection />
  <SuccessStoriesSection />
  <TestimonialsSection />
  <ReadyToGetStartedSection />
    </div>
  );
};

export default Home;
