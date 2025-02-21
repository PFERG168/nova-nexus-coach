import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatsDisplay from './StatsDisplay';
import TrainingPlan from './TrainingPlan';
import DebugPanel from './DebugPanel';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  useEffect(() => {
    // Fetch user data from Node backend
    axios.get('http://localhost:3000/api/user/1')
      .then(res => setUserData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAnalyzeGame = () => {
    axios.post('http://localhost:3000/api/training/analyze', { userId: 1 })
      .then(res => {
        setAnalysis(res.data);
        setDebugInfo("Game analysis completed successfully.");
      })
      .catch(err => {
        console.error(err);
        setDebugInfo("Error analyzing game.");
      });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Current Game: {userData.current_game}</p>
        </div>
      )}
      <button onClick={handleAnalyzeGame}>Analyze Gameplay</button>
      {analysis && (
        <div>
          <StatsDisplay analysis={analysis.analysis} />
          <TrainingPlan plan={analysis.recommendedTraining} />
        </div>
      )}
      {debugInfo && <DebugPanel message={debugInfo} />}
    </div>
  );
};

export default Dashboard;
