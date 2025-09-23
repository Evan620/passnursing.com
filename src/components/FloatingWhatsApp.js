import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [isVisible] = useState(true); // Single state declaration
  const phoneNumber = '+254707892164';
  const message = 'Hello! I need help with my nursing studies.';

  return (
    <div style={{
      position: 'fixed',
      right: '25px',
      bottom: '25px',
      zIndex: 9999,
      width: '60px',
      height: '60px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      animation: 'bounce 2s infinite',
      overflow: 'hidden'
    }}>
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          color: 'white',
          textDecoration: 'none',
          position: 'relative',
          zIndex: 1
        }}
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp size={28} />
      </a>
      
      {/* Pulsing effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        opacity: 0.6,
        transform: 'scale(1)',
        animation: 'pulse 2s infinite',
        zIndex: -1
      }}></div>
      
      {/* Notification Badge - More visible version */}
      <div style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        backgroundColor: '#ff0000',
        color: 'white',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        animation: 'pulse 1.5s infinite',
        zIndex: 2,
        border: '2px solid white',
        transform: 'translate(30%, -30%)' // Move it slightly outside the button
      }}>
        1
      </div>
      
      
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        @keyframes pulse {
          0% {transform: scale(1); opacity: 0.6;}
          70% {transform: scale(1.4); opacity: 0;}
          100% {transform: scale(1.4); opacity: 0;}
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
