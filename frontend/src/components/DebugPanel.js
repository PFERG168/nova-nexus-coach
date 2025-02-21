import React from 'react';

const DebugPanel = ({ message }) => {
  return (
    <div style={{ border: '1px solid red', padding: '10px', marginTop: '20px' }}>
      <h4>Debug Panel</h4>
      <p>{message}</p>
    </div>
  );
};

export default DebugPanel;
