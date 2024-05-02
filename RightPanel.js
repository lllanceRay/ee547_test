// import React from 'react';
// import TrafficChart from './TrafficChart'; // Reuse the TrafficChart component

// const RightPanel = ({ totalTrafficData }) => {
//   return (
//     <div className="right-panel">
//       <h2>Total Network Traffic</h2>
//       <TrafficChart trafficData={totalTrafficData} />
//     </div>
//   );
// };

// export default RightPanel;
// import React from 'react';

// const RightPanel = ({ trafficData }) => {
//   const calculateAverageTraffic = (data) => {
//     const total = data.reduce((acc, curr) => ({
//       download: acc.download + curr.download,
//       upload: acc.upload + curr.upload,
//     }), { download: 0, upload: 0 });

//     const average = {
//       download: data.length > 0 ? (total.download / data.length).toFixed(2) : 0,
//       upload: data.length > 0 ? (total.upload / data.length).toFixed(2) : 0,
//     };

//     return average;
//   };

//   const averageTraffic = calculateAverageTraffic(trafficData);

//   return (
//     <div className="right-panel">
//       <h2>Average Network Traffic</h2>
//       <p>Download: {averageTraffic.download} MB/s</p>
//       <p>Upload: {averageTraffic.upload} MB/s</p>
//     </div>
//   );
// };

// export default RightPanel;

import React from 'react';

const RightPanel = ({ totalTrafficVolume }) => {
  return (
    <div className="right-panel">
      <h2>Average Network Traffic Volume</h2>
      <p>Total Traffic: {totalTrafficVolume || 'N/A'} GB</p>
    </div>
  );
};

export default RightPanel;

