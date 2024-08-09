import React from 'react';
import './StaffHeader.css'; // Ensure this file exists
import ProfileIcon from '../ProfileIcon/ProfileIcon'; // Import the custom ProfileIcon component

const StaffHeader = ({ toggleSidebar }) => {
  return (
    <header className="staffheader">
      <button className="menu-icon" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
      </button>
      <h1 className="staffheader-title">Staff Portal</h1>
      <ProfileIcon /> {/* Custom ProfileIcon component */}
    </header>
  );
};

export default StaffHeader;
