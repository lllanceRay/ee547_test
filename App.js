///
// import React, { useState, useEffect } from 'react';
// import LeftPanel from './components/LeftPanel';
// import RightPanel from './components/RightPanel';
// import './App.css';

// function App() {
//   const [currentNode, setCurrentNode] = useState('node1'); // Default node
//   const [trafficData, setTrafficData] = useState([]); // Initializes traffic data as an empty array
//   const [averageTrafficVolume, setAverageTrafficVolume] = useState(''); // Initialize to empty string for average data
//   const [modelPrediction, setModelPrediction] = useState(false); // Default model prediction
//   const [actualStatus, setActualStatus] = useState(false); // Default actual status
//   const nodeIds = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6', 'node7', 'node8', 'node9']; // List of node IDs

//   const handleNodeChange = (event) => {
//     setCurrentNode(event.target.value); // Set the current node based on selection
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const nodeResponse = await fetch(`http://your-backend-url/api/nodes/${currentNode}`);
//         if (!nodeResponse.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const nodeData = await nodeResponse.json();
//         setTrafficData(nodeData.trafficData.slice(0, 20)); // Keep only the newest 20 entries
//         setModelPrediction(nodeData.modelPrediction);
//         setActualStatus(nodeData.actualStatus);

//         const averageResponse = await fetch(`http://your-backend-url/api/average`);
//         if (!averageResponse.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const averageData = await averageResponse.json();
//         setAverageTrafficVolume(averageData.totalTrafficVolume);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//         setTrafficData([]);
//         setAverageTrafficVolume('N/A');
//         setModelPrediction(false);
//         setActualStatus(false);
//       }
//     };

//     fetchData();
//     // Refresh data every minute (60000 milliseconds)
//     const intervalId = setInterval(fetchData, 60000);

//     return () => clearInterval(intervalId); // Clear interval on component unmount
//   }, [currentNode]); // Re-fetch data when currentNode changes or on interval

//   return (
//     <div className="App">
//       <div className="dashboard-container">
//         <LeftPanel 
//           trafficData={trafficData}
//           modelPrediction={modelPrediction ? 'Detected (1)' : 'Normal (0)'}
//           actualStatus={actualStatus ? 'Detected (1)' : 'Normal (0)'}
//           onNodeChange={handleNodeChange}
//           nodeIds={nodeIds}
//         />
//         <RightPanel totalTrafficVolume={averageTrafficVolume} />
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
  const [currentNode, setCurrentNode] = useState('node1'); // Default node
  const [trafficData, setTrafficData] = useState([]); // Initializes traffic data as an empty array
  const [averageTrafficVolume, setAverageTrafficVolume] = useState(''); // Initialize to empty string for average data
  const [modelPrediction, setModelPrediction] = useState(false); // Default model prediction
  const [actualStatus, setActualStatus] = useState(false); // Default actual status
  const nodeIds = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6', 'node7', 'node8', 'node9']; // List of node IDs

  const handleNodeChange = (event) => {
    setCurrentNode(event.target.value); // Set the current node based on selection
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nodeResponse = await fetch(`http://18.219.154.35:3000/api/nodes/${currentNode}`);
        if (!nodeResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const nodeData = await nodeResponse.json();
        setTrafficData(nodeData.trafficData.slice(0, 20)); // Keep only the newest 20 entries
        setModelPrediction(nodeData.modelPrediction);
        setActualStatus(nodeData.actualStatus);

        const averageResponse = await fetch(`http://18.219.154.35:3000/api/traffic`);
        if (!averageResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const averageData = await averageResponse.json();
        setAverageTrafficVolume(averageData.totalTrafficVolume);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setTrafficData([]);
        setAverageTrafficVolume('N/A');
        setModelPrediction(false);
        setActualStatus(false);
      }
    };

    fetchData();
    // Refresh data every minute (5000 milliseconds)
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentNode]); // Re-fetch data when currentNode changes or on interval

  return (
    <div className="App">
      <div className="dashboard-container">
        <LeftPanel 
          trafficData={trafficData}
          modelPrediction={modelPrediction ? 'Detected (1)' : 'Normal (0)'}
          actualStatus={actualStatus ? 'Detected (1)' : 'Normal (0)'}
          onNodeChange={handleNodeChange}
          nodeIds={nodeIds}
        />
        <RightPanel totalTrafficVolume={averageTrafficVolume} />
      </div>
    </div>
  );
}

export default App;
