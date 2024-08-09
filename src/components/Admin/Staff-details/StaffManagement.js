import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffTable from './StaffTable';
import StaffDetails from './StaffDetails';

const initialStaffData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    phoneNo: '123-456-7890',
    address: '123 Main St, Springfield',
    shift: 'Day',
    dob: '1993-01-15',
    email: 'johndoe@example.com',
    completionStatus: 'Completed'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    phoneNo: '234-567-8901',
    address: '456 Elm St, Springfield',
    shift: 'Afternoon',
    dob: '1998-05-20',
    email: 'janesmith@example.com',
    completionStatus: 'In Progress'
  },
  {
    id: 3,
    name: 'Sam Johnson',
    age: 35,
    gender: 'Male',
    phoneNo: '345-678-9012',
    address: '789 Oak St, Springfield',
    shift: 'Night',
    dob: '1988-11-30',
    email: 'samjohnson@example.com',
    completionStatus: 'Not Started'
  },
  {
    id: 4,
    name: 'Lisa Brown',
    age: 28,
    gender: 'Female',
    phoneNo: '456-789-0123',
    address: '101 Pine St, Springfield',
    shift: 'Day',
    dob: '1995-07-10',
    email: 'lisabrown@example.com',
    completionStatus: 'Completed'
  },
  {
    id: 5,
    name: 'Michael Green',
    age: 32,
    gender: 'Male',
    phoneNo: '567-890-1234',
    address: '202 Maple St, Springfield',
    shift: 'Afternoon',
    dob: '1991-03-25',
    email: 'michaelgreen@example.com',
    completionStatus: 'In Progress'
  }
];

function StaffManagement() {
  const [staffData, setStaffData] = useState(initialStaffData);
  const [editingStaff, setEditingStaff] = useState(null);

  const handleEdit = (id) => {
    const staff = staffData.find((staff) => staff.id === id);
    setEditingStaff(staff);
  };

  const handleDelete = (id) => {
    setStaffData(staffData.filter((staff) => staff.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/staff-table"
          element={<StaffTable staffData={staffData} handleEdit={handleEdit} handleDelete={handleDelete} />}
        />
        <Route
          path="/staff-details"
          element={<StaffDetails staffData={staffData} setStaffData={setStaffData} editingStaff={editingStaff} />}
        />
      </Routes>
    </Router>
  );
}

export default StaffManagement;
