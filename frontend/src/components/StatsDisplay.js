import React from 'react';

const StatsDisplay = ({ analysis }) => {
  return (
    <div>
      <h3>Analysis Results</h3>
      <pre>{JSON.stringify(analysis, null, 2)}</pre>
    </div>
  );
};

export default StatsDisplay;
