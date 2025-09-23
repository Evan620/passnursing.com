import React from 'react';

const TestButton = () => {
  return (
    <div style={{
      position: 'fixed',
      left: '20px',
      bottom: '20px',
      zIndex: 9999,
      width: '60px',
      height: '60px',
      backgroundColor: 'red',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      TEST
    </div>
  );
};

export default TestButton;
