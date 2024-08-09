import React, { useState } from 'react';
import Sidebar from '../Navbar/Navbar'; // Import Sidebar
import './Home.css'; // Ensure this file exists and is correctly linked

const Home = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`home-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <header className="staffheader">
        <button className="menu-icon" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
        </button>
        <h1 className="staffheader-title">Staff Portal</h1>
      </header>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        {children} {/* Render child components (page content) here */}
      </main>
    </div>
  );
};

export default Home;
