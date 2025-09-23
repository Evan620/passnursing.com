import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Stethoscope, 
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import HeroSection from '../components/HeroSection';

const RequestService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    prerequisites: [],
    courses: [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const prerequisites = [
    'ATI TEAS', 'Fundamentals', 'Anatomy', 'Physiology', 'Biology', 
    'Chemistry', 'Psychology', 'Statistics', 'Nutrition', 'Microbiology', 
    'Medical Terminology'
  ];

  const courses = [
    'Nursing Communication', 'Case Studies', 'Nursing Skills', 'Mental Health',
    'Care Plans', 'Pediatrics', 'Pharmacology', 'MedSurg (EENT)', 'MedSurg (GI)',
    'MedSurg (GU)', 'MedSurg (Neuro)', 'OB Nursing', 'Community Health',
    'Diagnostic Testing', 'Perioperative', 'Fluid & Electrolytes', 'ABGs',
    'Leadership & Management', 'Ethics in Nursing'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (formData.prerequisites.length === 0 && formData.courses.length === 0) {
      newErrors.subjects = 'Please select at least one subject';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleMultiSelectChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));

    // Clear subjects error when user selects something
    if (errors.subjects) {
      setErrors(prev => ({
        ...prev,
        subjects: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center"
        >
          <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">
            Request Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your request. We'll get back to you within 24 hours 
            to discuss your passnursing.com education needs.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        title="Request"
        accentWord="Service"
        subtitle="Fill out the form below and our team will get back to you as soon as possible."
      />

      {/* Form Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="font-heading font-semibold text-2xl text-gray-800 mb-6 flex items-center">
                  <User className="h-6 w-6 text-primary mr-2" />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.firstName}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.lastName}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <h2 className="font-heading font-semibold text-2xl text-gray-800 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  Subject Selection
                </h2>

                {errors.subjects && (
                  <div className="flex items-center mb-4 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.subjects}
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Prerequisites */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 text-secondary mr-2" />
                      Nursing Prerequisites
                    </h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-2xl p-4">
                      {prerequisites.map((subject) => (
                        <label key={subject} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                          <input
                            type="checkbox"
                            checked={formData.prerequisites.includes(subject)}
                            onChange={() => handleMultiSelectChange('prerequisites', subject)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-gray-700">{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Core Courses */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                      <Stethoscope className="h-5 w-5 text-secondary mr-2" />
                      Core Nursing Courses
                    </h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-2xl p-4">
                      {courses.map((subject) => (
                        <label key={subject} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                          <input
                            type="checkbox"
                            checked={formData.courses.includes(subject)}
                            onChange={() => handleMultiSelectChange('courses', subject)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-gray-700">{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <h2 className="font-heading font-semibold text-2xl text-gray-800 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-primary mr-2" />
                  Tell Us More
                </h2>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Please describe your specific needs, learning goals, or any questions you have about our services..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <React.Fragment>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Send className="h-5 w-5" />
                      <span>Submit Request</span>
                    </React.Fragment>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-bold text-3xl text-gray-800 mb-6">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">Review</h3>
                <p className="text-gray-600">We'll review your request and match you with the right tutor.</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">Contact</h3>
                <p className="text-gray-600">We'll contact you within 24 hours to discuss your needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">Start</h3>
                <p className="text-gray-600">Begin your personalized nursing education journey.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestService;
