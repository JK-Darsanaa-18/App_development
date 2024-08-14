import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StaffTable.css';

function StaffTable() {
  const [staffData, setStaffData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/staff/');
        setStaffData(response.data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
        alert('Error fetching staff data. Please try again.');
      }
    };

    fetchStaffData();
  }, []);

  // Navigate to the staff details page for editing
  const handleEditClick = (staff) => {
    navigate('/staff-details', { state: { editingStaff: staff } });
  };

  // Navigate to the staff details page for adding new staff
  const handleAddClick = () => {
    navigate('/staff-details');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/staff/${id}/delete/`);
      // Update frontend state to remove the deleted staff
      setStaffData(staffData.filter(staff => staff.id !== id));
      alert('Staff member deleted successfully!');
    } catch (error) {
      console.error('Error deleting staff:', error);
      alert('Error deleting staff. Please try again.');
    }
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
                <button className="edit-button" onClick={() => handleEditClick(staff)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(staff.id)}>Delete</button>
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