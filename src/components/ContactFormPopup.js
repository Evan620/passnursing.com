import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, MessageSquare, BookOpen } from 'lucide-react';

const ContactFormPopup = ({ isOpen, onClose, subject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subject,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // TODO: Replace with actual form submission logic (EmailJS, Formspree, or custom API)
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: subject,
          message: ''
        });
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">
                {isSuccess ? 'Thank You!' : 'Get Help with ' + (subject || 'Your Studies')}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {isSuccess 
                  ? 'We\'ve received your request and will contact you shortly!'
                  : 'Fill out the form below and our team will get back to you as soon as possible.'}
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {subject && (
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute left-3 top-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Tell us more about what you need help with..."
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ContactFormPopup;
