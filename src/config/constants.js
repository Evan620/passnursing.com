// Contact Information
export const CONTACT = {
  whatsappNumber: process.env.REACT_APP_WHATSAPP_NUMBER || '+14802680707',
  phone: process.env.REACT_APP_CONTACT_PHONE || '+14802680707',
  email: process.env.REACT_APP_CONTACT_EMAIL || 'acenursingexampro@gmail.com',
  whatsappMessage: 'Hello! I need help with my nursing studies.',
};

// Social Media Links
export const SOCIAL_MEDIA = {
  facebook: process.env.REACT_APP_FACEBOOK_URL || '#',
  instagram: process.env.REACT_APP_INSTAGRAM_URL || '#',
  linkedin: process.env.REACT_APP_LINKEDIN_URL || '#',
};

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
};

// Site Information
export const SITE_INFO = {
  name: 'NursingExamCoach.com',
  tagline: 'Expert Nursing Exam Help & Support',
  description: 'Comprehensive academic support designed specifically for nursing students. Expert guidance for exams, assignments, and nursing education success.',
  copyright: '© 2025 Nursing Exams Coach – All Rights Reserved',
};

// Logo Sizes
export const LOGO_SIZES = {
  navbar: 'h-14',
  footer: 'h-16',
  mobile: 'h-12',
};
