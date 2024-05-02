import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const socketUrl = "https://yourapiendpoint.com"; // URL to the WebSocket endpoint
  let socket;

  useEffect(() => {
    // Connect to WebSocket
    socket = io(socketUrl);

    // Listen for alerts
    socket.on('ddosAlert', (alert) => {
      setAlerts(currentAlerts => [...currentAlerts, alert]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="alerts">
      {alerts.length > 0 && (
        <div className="alert-container">
          {alerts.map((alert, index) => (
            <div key={index} className={`alert alert-${alert.type}`}>
              <h4>{alert.title}</h4>
              <p>{alert.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alerts;
