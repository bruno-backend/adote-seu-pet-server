import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // arquivo CSS na pasta src
import App from './App'; // arquivo App.js na pasta src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

