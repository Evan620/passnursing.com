import React from 'react';
import { motion } from 'framer-motion';

const ReadyToGetStartedSection = () => (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of nursing students who have achieved their academic goals with passnursing.com
            with our personalized support services.
          </p>
          <button className="btn-accent text-lg px-8 py-4">
            Request Service Now
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReadyToGetStartedSection;
