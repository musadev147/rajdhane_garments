import React from 'react';

const PrintHeader = () => {
  return (
    <div className="receipt-header-image" style={{ marginBottom: '20px', textAlign: 'center' }}>
      <img 
        src="/print-header.png" 
        alt="Rajdhani Super Shop Banner" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          display: 'block', 
          margin: '0 auto' 
        }} 
      />
    </div>
  );
};

export default PrintHeader;
