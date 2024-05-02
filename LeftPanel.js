// import React from 'react';
// import TrafficChart from './TrafficChart'; // Ensure you have this component to show the chart
// import './LeftPanel.css'; // Make sure to style appropriately

// const LeftPanel = ({ trafficData, modelPrediction, actualStatus, onNodeChange, nodeIds }) => {
//     return (
//         <div className="left-panel">
//             <h2>Node Traffic Data</h2>
//             <select onChange={onNodeChange} className="node-selector">
//                 {nodeIds.map(nodeId => (
//                     <option key={nodeId} value={nodeId}>{`Node ${nodeId}`}</option>
//                 ))}
//             </select>
//             <TrafficChart trafficData={trafficData} />
//             <div className="ddos-status">
//                 <div className="status-prediction">
//                     <span>Model Prediction:</span>
//                     <span className={modelPrediction.includes('Detected') ? 'detected' : 'normal'}>
//                         {modelPrediction}
//                     </span>
//                 </div>
//                 <div className="status-actual">
//                     <span>Actual Status:</span>
//                     <span className={actualStatus.includes('Detected') ? 'detected' : 'normal'}>
//                         {actualStatus}
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LeftPanel;


import React from 'react';
import TrafficChart from './TrafficChart'; // Ensure you have this component to show the chart
import './LeftPanel.css';

const LeftPanel = ({ trafficData, modelPrediction, actualStatus, onNodeChange, nodeIds }) => {
    return (
        <div className="left-panel">
            <h2>Node Traffic Data</h2>
            <select onChange={onNodeChange} className="node-selector">
                {nodeIds.map(nodeId => (
                    <option key={nodeId} value={nodeId}>{`Node ${nodeId}`}</option>
                ))}
            </select>
            <TrafficChart trafficData={trafficData} />
            <div className="ddos-status">
                <div className="status-prediction">
                    <span>Model Prediction:</span>
                    <span className={modelPrediction.includes('Detected') ? 'detected' : 'normal'}>
                        {modelPrediction}
                    </span>
                </div>
                <div className="status-actual">
                    <span>Actual Status:</span>
                    <span className={actualStatus.includes('Detected') ? 'detected' : 'normal'}>
                        {actualStatus}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;
