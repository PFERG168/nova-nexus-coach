import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import './styles/debug.css'; // If you need debug styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);