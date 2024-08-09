import React, { useEffect, useState } from 'react';
import './Scheduling.css';

const Schedule = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/shifts')
      .then(response => response.json())
      .then(data => setShifts(data));
  }, []);

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Required Staff</th>
            <th>Staff Details</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map(shift => (
            <tr key={shift.id}>
              <td>{shift.id}</td>
              <td>{shift.name}</td>
              <td>{shift.date}</td>
              <td>{shift.time}</td>
              <td>{shift.location}</td>
              <td>{shift.requiredStaff}</td>
              <td>
                <table className="staff-details-table">
                  <thead>
                    <tr>
                      <th>Staff ID</th>
                      <th>Staff Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shift.staffDetails.map((staff, index) => (
                      <tr key={index}>
                        <td>{staff.id}</td>
                        <td>{staff.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
