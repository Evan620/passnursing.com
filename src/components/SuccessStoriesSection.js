import React, { useState } from 'react';
import { motion } from 'framer-motion';


const cards = [
  {
    text: 'Hire our test takers to help you pass your online proctored ATI exams (Proctorio or Lockdown Browser exams). No upfront payment, pay after test completion.\n\n-RN  -LPN  -CNA   –Name it, we do it all…!',
    image: '/successimages/Screenshot-2024-08-22-at-15.23.39-1024x487.png',
  },
  {
    text: 'Hire our test takers to help you pass your ProctorU specialty HESI exams. No upfront payment, pay after test completion.',
    image: '/successimages/Screenshot-2024-08-22-at-20.08.55-1024x624.png',
  },
  {
    text: 'Pass Accuplacer Test With Ease\nPass The TSIA2 Accuplacer Test\nReading – > 200/300\nWriting -> 200/300\nMathematics – > 200/300\nWritingPlacer (Essay)',
    image: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.07-1.jpg',
  },
  {
    text: 'Embark on your journey to nursing excellence with our specialized exam prep services for all exams offered via the ATI Testing site. Proctorio/Lockdown browser exams.',
    image: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.14-1.jpg',
  },
  {
    text: 'Expert support for all your online proctored nursing exams. Secure, reliable, and results-driven.',
    image: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.13.jpg',
  },
  {
    text: 'No upfront payment required! Pay only after your test is completed and you are satisfied.',
    image: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.09.jpg',
  },
  {
    text: 'Comprehensive guidance for RN, LPN, CNA, and more. We cover every nursing exam you need.',
    image: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.08-2.jpg',
  },
  {
    text: 'Specialized in ATI, HESI, and Accuplacer exams. Let us help you achieve your goals.',
    image: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.11-1.jpg',
  },
  {
    text: 'Our test takers are experienced professionals. Your success is our mission.',
    image: '/successimages/WhatsApp-Image-2023-09-08-at-14.56.08-1-1.jpg',
  },
  {
    text: 'Join hundreds of successful students who have passed with our expert help. Your journey starts here!',
    image: '/successimages/WhatsApp-Image-2023-09-06-at-19.25.14-1024x737.jpeg',
  },
];

const SuccessStoriesSection = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">Success Stories: Our Top Achievers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Some of our recent ATI Exams top results, showcasing the dedication and excellence achieved with our support.<br/>
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
              }}
              className="bg-blue-50 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 min-h-[320px]"
            >
              <div className="w-full h-72 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                {card.image ? (
                  <button onClick={() => setModalImg(card.image)} className="w-full h-full focus:outline-none">
                    <img src={card.image} alt="Success story" className="object-contain w-full h-full" />
                  </button>
                ) : (
                  <span className="text-5xl text-gray-400">📷</span>
                )}
              </div>
              <div className="text-gray-700 whitespace-pre-line text-sm font-medium leading-relaxed">{card.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal overlay for image preview */}
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalImg(null)}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl font-bold" onClick={() => setModalImg(null)}>&times;</button>
            <img src={modalImg} alt="Preview" className="w-full h-auto max-h-[80vh] rounded-xl shadow-2xl border-4 border-white" />
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStoriesSection;
