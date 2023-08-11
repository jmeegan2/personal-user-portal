import React from 'react';
import './Dashboard.css';
import Weather from './Weather.js';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="weather-side">
        <h2>Weather</h2>
    <Weather/>
      </div>
      <div className="content-side">
        {/* Placeholder Content */}
        <h2>Content</h2>
        <p>This is some placeholder content on the other side.</p>
      </div>
    </div>
  );
}

export default Dashboard;
