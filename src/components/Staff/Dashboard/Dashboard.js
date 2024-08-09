// src/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import PieChart from './PieChart';
import ProjectStatus from './ProjectStatus';
import tasks from './Tasks';
import Sidebar from '../Navbar/Navbar';

const Dashboard = () => {
  const projects = [
    { name: 'Project Alpha', completion: 75 },
    { name: 'Project Beta', completion: 50 },
    { name: 'Project Gamma', completion: 90 },
    { name: 'Project Virtual', completion: 80 },
    { name: 'Project Pioneer', completion: 65 },
    { name: 'Project AI', completion: 60 },
    { name: 'Project Greenpio', completion: 95 },
  ];

  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCheckboxChange = (task) => {
    setCompletedTasks((prevCompletedTasks) => {
      const newCompletedTasks = new Set(prevCompletedTasks);
      if (newCompletedTasks.has(task)) {
        newCompletedTasks.delete(task);
      } else {
        newCompletedTasks.add(task);
      }
      return newCompletedTasks;
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
        </button>
        <h2 className="dashboard-title">Dashboard</h2>
        <p className="welcome-message">Welcome to the staff scheduling dashboard.</p>

        <div className="dashboard-sections">
          {/* Project Completion Status Section */}
          <div className="section project-status">
            <h3>Project Completion Status</h3>
            <ProjectStatus projects={projects} />
          </div>

          {/* Task To-Do List Section */}
          <div className="section task-list">
            <h3>Task To-Do List</h3>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className={`task-item ${completedTasks.has(task.task) ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={completedTasks.has(task.task)}
                    onChange={() => handleCheckboxChange(task.task)}
                  />
                  {task.task} - <span className="due-date">{task.dueDate}</span><br></br><p></p>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics Section */}
          <div className="section statistics">
            <h3>Statistics</h3>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
