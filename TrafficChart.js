// ORIGINAL

import 'chartjs-adapter-date-fns';
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TrafficChart = ({ trafficData }) => {
  const data = {
    labels: trafficData.map(data => new Date(data.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'Download (MB/s)',
        data: trafficData.map(data => data.download),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Upload (MB/s)',
        data: trafficData.map(data => data.upload),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
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
    <div style={{ height: "300px" }}>
        <Line data={data} options={options} />
    </div>
  );
};

export default TrafficChart;


// NEW

// import 'chartjs-adapter-date-fns';
// import React from 'react';
// import { Line, Bar } from 'react-chartjs-2';

// const TrafficChart = ({ trafficData, type }) => {
//   const ChartComponent = type === 'bar' ? Bar : Line;

//   const data = {
//     labels: trafficData.map(data => new Date(data.time).toLocaleTimeString()),
//     datasets: [
//       {
//         label: 'Download (MB/s)',
//         data: trafficData.map(data => data.download),
//         fill: false,
//         borderColor: 'rgb(255, 99, 132)',
//       },
//       {
//         label: 'Upload (MB/s)',
//         data: trafficData.map(data => data.upload),
//         fill: false,
//         borderColor: 'rgb(54, 162, 235)',
//       }
//     ]
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'minute',
//           tooltipFormat: 'hh:mm:ss a'
//         },
//         title: {
//           display: true,
//           text: 'Time'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Traffic (MB/s)'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         position: 'top',
//       }
//     },
//     maintainAspectRatio: false
// };

//   return (
//     <ChartComponent data={data} options={options} />
//   );
// };

// export default TrafficChart;
