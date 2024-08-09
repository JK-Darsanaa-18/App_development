import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shifts.css';

const Shifts = () => {
  const [shift, setShift] = useState({
    id: '',
    name: '',
    date: '',
    time: '',
    location: '',
    requiredStaff: ''
  });

  const [staffDetails, setStaffDetails] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShift({
      ...shift,
      [name]: value
    });
  };

  const handleStaffChange = (e, index) => {
    const { name, value } = e.target;
    const newStaffDetails = [...staffDetails];
    newStaffDetails[index] = {
      ...newStaffDetails[index],
      [name]: value
    };
    setStaffDetails(newStaffDetails);
  };

  useEffect(() => {
    const newStaffDetails = Array.from({ length: parseInt(shift.requiredStaff || 0) }, (_, index) => ({
      id: index + 1,
      name: ''
    }));
    setStaffDetails(newStaffDetails);
  }, [shift.requiredStaff]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const shiftWithStaff = { ...shift, staffDetails };
    axios.post('http://localhost:3001/shifts', shiftWithStaff)
      .then(response => {
        console.log('Shift added:', response.data);
        // Clear the form
        setShift({
          id: '',
          name: '',
          date: '',
          time: '',
          location: '',
          requiredStaff: ''
        });
        setStaffDetails([]);
      })
      .catch(error => {
        console.error('There was an error adding the shift!', error);
      });
  };

  return (
    <div className="shift-form-wrapper">
      <div className="shift-form-container">
        <h1>Add New Shift</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID:</label>
            <input type="number" name="id" value={shift.id} onChange={handleChange} required />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" name="name" value={shift.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={shift.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Time:</label>
            <input type="text" name="time" value={shift.time} onChange={handleChange} required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" name="location" value={shift.location} onChange={handleChange} required />
          </div>
          <div>
            <label>Required Staff:</label>
            <input type="number" name="requiredStaff" value={shift.requiredStaff} onChange={handleChange} required />
          </div>

          {staffDetails.map((staff, index) => (
            <div key={index} className="staffdt">
              <h3>Staff {index + 1}</h3>
              <div>
                <label>ID:</label>
                <input type="number" name="id" value={staff.id} readOnly />
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={staff.name} onChange={(e) => handleStaffChange(e, index)} required />
              </div>
            </div>
          ))}

          <button type="submit">Add Shift</button>
        </form>
      </div>
    </div>
  );
};

export default Shifts;
