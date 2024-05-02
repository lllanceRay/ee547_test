import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from './Card.js';

const DeviceDetails = ({ deviceId }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date()]);
  const [historicalData, setHistoricalData] = useState([]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setSelectedDateRange([start, end]);
    fetchHistoricalData(deviceId, start, end);
  };

  const fetchHistoricalData = async (deviceId, start, end) => {
    // REAL API CALL
    const response = await fetch(`https://yourapiendpoint.com/devices/${deviceId}/traffic?start=${start.toISOString()}&end=${end.toISOString()}`);
    const data = await response.json();
    setHistoricalData(data);
  };

  const data = {
    labels: historicalData.map(data => new Date(data.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'Download (MB/s)',
        data: historicalData.map(data => data.download),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Upload (MB/s)',
        data: historicalData.map(data => data.upload),
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          tooltipFormat: 'hh:mm:ss a'
        },
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Traffic (MB/s)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      }
    },
    maintainAspectRatio: false
  };

  return (
    <Card>
      <div>
        <h2>Device Traffic Details (Device ID: {deviceId})</h2>
        <div style={{ width: '500px', marginBottom: '20px' }}>
          <DatePicker
            selected={selectedDateRange[0]}
            onChange={handleDateChange}
            startDate={selectedDateRange[0]}
            endDate={selectedDateRange[1]}
            selectsRange
            inline
          />
        </div>
        <div style={{ height: "300px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default DeviceDetails;
