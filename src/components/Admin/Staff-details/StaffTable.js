import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffTable.css';

function StaffTable({ staffData, handleEdit, handleDelete }) {
  const navigate = useNavigate();

  const handleEditClick = (staff) => {
    navigate('/staff-details', { state: { editingStaff: staff } });
  };

  const handleAddClick = () => {
    navigate('/staff-details');
  };

  return (
    <div className="staff-table-container">
      <h2>Staff Details</h2>
      <table className="staff-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Shift</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.age}</td>
              <td>{staff.gender}</td>
              <td>{staff.phoneNo}</td>
              <td>{staff.address}</td>
              <td>{staff.shift}</td>
              <td>{staff.dob}</td>
              <td>{staff.email}</td>
              <td>
                <button onClick={() => handleEditClick(staff)}>Edit</button>
                <button onClick={() => handleDelete(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-staff-button" onClick={handleAddClick}>Add New Staff</button>
    </div>
  );
}

export default StaffTable;
