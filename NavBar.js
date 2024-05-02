import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#device-details">Device Details</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
