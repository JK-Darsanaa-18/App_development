// src/ViewSchedule.js
import React, { useState } from 'react';
import Sidebar from '../Navbar/Navbar';
import './ViewSchedule.css'; // Ensure this file exists

const ViewSchedule = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const staffDetails = [
    {
      id: 1,
      name: 'John Doe',
      phoneNo: '(123) 456-7890',
      shiftTimings: 'July 30, 2024 - 9:00 AM to 5:00 PM',
      emailID: 'john.doe@example.com',
      department: 'HR',
      role: 'Administrator',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phoneNo: '(234) 567-8901',
      shiftTimings: 'July 31, 2024 - 10:00 AM to 6:00 PM',
      emailID: 'jane.smith@example.com',
      department: 'Finance',
      role: 'Accountant',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      phoneNo: '(345) 678-9012',
      shiftTimings: 'August 1, 2024 - 8:00 AM to 4:00 PM',
      emailID: 'mike.johnson@example.com',
      department: 'IT',
      role: 'Developer',
    },
    {
      id: 4,
      name: 'Alice Brown',
      phoneNo: '(456) 789-0123',
      shiftTimings: 'August 2, 2024 - 9:00 AM to 5:00 PM',
      emailID: 'alice.brown@example.com',
      department: 'Marketing',
      role: 'Manager',
    },
    {
      id: 5,
      name: 'Bob White',
      phoneNo: '(567) 890-1234',
      shiftTimings: 'August 3, 2024 - 10:00 AM to 6:00 PM',
      emailID: 'bob.white@example.com',
      department: 'Sales',
      role: 'Executive',
    },
  ];

  return (
    <div className={`view-schedule-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
        </button>
        <h1>View Schedule</h1>
        <div className="staff-grid">
          {staffDetails.map((staff) => (
            <div key={staff.id} className="stdd">
              <p><strong>Name:</strong> {staff.name}</p>
              <p><strong>ID:</strong> {staff.id}</p>
              <p><strong>Phone No:</strong> {staff.phoneNo}</p>
              <p><strong>Shift Timings:</strong> {staff.shiftTimings}</p>
              <p><strong>Email ID:</strong> {staff.emailID}</p>
              <p><strong>Department:</strong> {staff.department}</p>
              <p><strong>Role:</strong> {staff.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewSchedule;
