// ORIGINAL

// import React, { useEffect, useState } from 'react';
// import TrafficChart from './TrafficChart';

// const Dashboard = () => {
//   const [trafficData, setTrafficData] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newTrafficData = {
//         time: new Date(),  // Current time
//         download: Math.random() * 100,  // Random download speed
//         upload: Math.random() * 50,  // Random upload speed
//       };
//       setTrafficData(currentData => [...currentData, newTrafficData]);
//     }, 2000);  // New data every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Real-Time Traffic Data</h2>
//       <TrafficChart trafficData={trafficData.slice(-30)} />
//       {/* Only display the last 30 data points */}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState, useCallback } from 'react';
import TrafficChart from './TrafficChart';
// eslint-disable-next-line
import Settings from './Settings';
import Card from './Card.js';

const Dashboard = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [settings, setSettings] = useState({ updateInterval: 5, chartType: 'line' });

  const fetchData = useCallback(() => {
    const newTrafficData = {
      time: new Date(),  // Current time
      download: Math.random() * 100,  // Random download speed
      upload: Math.random() * 50,  // Random upload speed
    };
    setTrafficData(currentData => [...currentData, newTrafficData]);
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchData, settings.updateInterval * 1000);  // Dynamic interval

    return () => clearInterval(interval);
  }, [fetchData, settings.updateInterval]);
  
// eslint-disable-next-line
  const saveSettings = (newSettings) => {
    setSettings(newSettings);
  };

//   return (
//     <div>
//       <h2>Real-Time Traffic Data</h2>
//       <Settings onSave={saveSettings} />
//       <TrafficChart trafficData={trafficData.slice(-30)} type={settings.chartType} />
//     </div>
//   );
// };
  return (
    <Card>
      <h2>Real-Time Traffic Data</h2>
      <div className="chart-container">
        <TrafficChart trafficData={trafficData.slice(-30)} />
      </div>
    </Card>
    );
  }

export default Dashboard;
