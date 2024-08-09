import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        {/* <i className="fas fa-times"></i> FontAwesome close icon */}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
              <li><Link to="/scheduling" onClick={toggleSidebar}>Schedule</Link></li>
          {/* <li><Link to="/schedule" onClick={toggleSidebar}>View Schedule</Link></li> */}
          <li><Link to="/time-off-requests" onClick={toggleSidebar}>Requests</Link></li>
          <li><Link to="/calendar" onClick={toggleSidebar}>Upcoming Shifts</Link></li>
          <li><Link to="/projectsubmit" onClick={toggleSidebar}>Reports</Link></li>
          <li><Link to="/StaffLogin" onClick={toggleSidebar}>Logout</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
