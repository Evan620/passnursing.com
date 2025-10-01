import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import { CONTACT } from '../config/constants';

// Styled components to avoid boolean attribute warnings
const StyledWhatsAppButton = styled.div`
  position: fixed;
  right: 25px;
  bottom: 90px;
  z-index: 9999;
  
  @media (min-width: 768px) {
    bottom: 25px;
  }
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
  overflow: hidden;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 1;
`;

const FloatingWhatsApp = () => {
  const [isVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Clean up any existing style tags to prevent duplicates
  useEffect(() => {
    const existingStyle = document.getElementById('whatsapp-button-styles');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'whatsapp-button-styles';
      style.textContent = `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0% { transform: scale(0.5); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      const style = document.getElementById('whatsapp-button-styles');
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <StyledWhatsAppButton 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledLink 
          href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </StyledLink>
        
        {/* Pulsing effect */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          transform: 'scale(0)',
          animation: 'pulse 2s infinite',
          pointerEvents: 'none'
        }}></div>
      </StyledWhatsAppButton>
    </>
  );
};

export default FloatingWhatsApp;
