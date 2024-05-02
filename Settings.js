import React, { useState, useContext } from 'react';
import { TextField, Button, MenuItem, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const Settings = ({ onSave }) => {
  const [updateInterval, setUpdateInterval] = useState('5'); // Default update interval (seconds)
  const [chartType, setChartType] = useState('line'); // Default chart type

  const handleIntervalChange = (event) => {
    setUpdateInterval(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const handleSave = () => {
    onSave({
      updateInterval: parseInt(updateInterval),
      chartType
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6">Settings</Typography>
      <TextField
        select
        label="Update Interval (Seconds)"
        value={updateInterval}
        onChange={handleIntervalChange}
        helperText="Please select the interval for data updates"
        variant="outlined"
        style={{ marginBottom: 20, width: 250 }}
      >
        {[1, 2, 5, 10, 30].map((option) => (
          <MenuItem key={option} value={option.toString()}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Chart Type"
        value={chartType}
        onChange={handleChartTypeChange}
        helperText="Please select the type of chart to display"
        variant="outlined"
        style={{ marginBottom: 20, width: 250 }}
      >
        {['line', 'bar'].map((type) => (
          <MenuItem key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart
          </MenuItem>
        ))}
      </TextField>
      <Button
        startIcon={<SaveIcon />}
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save Settings
      </Button>
    </div>
  );
};

export default Settings;
