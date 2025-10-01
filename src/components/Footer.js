import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT, SOCIAL_MEDIA, SITE_INFO, LOGO_SIZES } from '../config/constants';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Subjects', path: '/subjects' },
    { name: 'Our Services', path: '/services' },
    { name: 'Request Service', path: '/request-service' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/request-service' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: SOCIAL_MEDIA.facebook },
    { name: 'Instagram', icon: Instagram, href: SOCIAL_MEDIA.instagram },
    { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_MEDIA.linkedin },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/nursing-exams-coach-high-resolution-logo-transparent.png" 
                alt={`${SITE_INFO.name} Logo`}
                className={`${LOGO_SIZES.footer} w-auto`}
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Personalized academic support for nursing students. Expert guidance, 
              tailored resources, and comprehensive assistance to help you succeed 
              in your nursing journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                // Only render if URL is not a placeholder
                if (social.href === '#') return null;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {SITE_INFO.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/request-service"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/request-service"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
