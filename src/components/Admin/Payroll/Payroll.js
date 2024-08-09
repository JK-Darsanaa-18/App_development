import React, { useState } from 'react';
import './Payroll.css'; // Create and import CSS file for styling

function Payroll() {
  const initialStaffData = [
    { id: 1, name: 'John Doe', department: 'Sales', salary: 50000, experience: 5, increment: 4000 },
    { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 60000, experience: 3, increment: 5500 },
    { id: 3, name: 'Bob Johnson', department: 'HR', salary: 55000, experience: 7, increment: 4200 },
    { id: 4, name: 'Bobby', department: 'IT', salary: 50000, experience: 4, increment: 4200 },
    { id: 5, name: 'Bindhu', department: 'HR', salary: 65000, experience: 8, increment: 5400 },
    { id: 6, name: 'Ram', department: 'TL', salary: 55000, experience: 2, increment: 5400 }
  ];

  const [staffData, setStaffData] = useState(initialStaffData);
  const [editId, setEditId] = useState(null);
  const [newSalary, setNewSalary] = useState('');

  const calculateIncrement = (originalSalary, newSalary) => {
    // Increment percentage based on the salary
    let incrementPercentage = 0.05; // 5%
    let maxIncrement = originalSalary;

    // Calculate the increment based on the new salary
    let increment = (newSalary - originalSalary) * incrementPercentage;

    // Ensure the increment does not exceed the salary
    if (increment > maxIncrement) {
      increment = maxIncrement;
    }

    return increment;
  };

  const handleEditClick = (id, currentSalary) => {
    setEditId(id);
    setNewSalary(currentSalary);
  };

  const handleSaveClick = (id, originalSalary) => {
    const updatedStaffData = staffData.map(staff => {
      if (staff.id === id) {
        const newIncrement = calculateIncrement(originalSalary, newSalary);
        return { ...staff, salary: newSalary, increment: newIncrement };
      }
      return staff;
    });
    setStaffData(updatedStaffData);
    setEditId(null);
  };

  const handleInputChange = (e) => {
    setNewSalary(Number(e.target.value));
  };

  return (
    <div className="payroll">
      {staffData.map((staff) => (
        <div key={staff.id} className="card">
          <div className="card-header">
            <h3>{staff.name}</h3>
            {editId === staff.id ? (
              <input 
                type="number" 
                value={newSalary} 
                onChange={handleInputChange} 
              />
            ) : (
              <span>₹{staff.salary}</span>
            )}
          </div>
          <div className="card-body">
            <div>Department: {staff.department}</div>
            <div>Experience: {staff.experience} years</div>
            <div>Annual Increment: ₹{staff.increment}</div>
          </div>
          <div className="card-actions">
            {editId === staff.id ? (
              <button onClick={() => handleSaveClick(staff.id, staff.salary)}>Save</button>
            ) : (
              <button onClick={() => handleEditClick(staff.id, staff.salary)}>Edit</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Payroll;
