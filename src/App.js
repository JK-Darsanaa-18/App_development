// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Admin/Header-Sidebar/Sidebar';
import AdminLogin from './components/Admin/AdminLog/AdminLogin';
import AdminHome from './components/Admin/Adminhome/AdminHome';
import StaffDetails from './components/Admin/Staff-details/StaffDetails';
import StaffAttendance from './components/Admin/StaffAttendance/StaffAttendance';
import Payroll from './components/Admin/Payroll/Payroll';
import Scheduling from './components/Admin/Schedule/Scheduling';
import Shifts from './components/Admin/Shiftform/Shifts';
import Reports from './components/Admin/Reports/Reports';
import Settings from './components/Admin/Settings/Settings';
import AttendanceReport from './components/Admin/StaffAttendance/AttendanceReport';
import StaffTable from './components/Admin/Staff-details/StaffTable';
import ProtectedRoute from './components/Admin/Adminhome/ProtectedRoute';
import { AuthProvider, useAuth } from './components/Admin/AdminLog/AuthContext';
import StaffLogin from './components/Staff/StaffLogin/StaffLogin';
import Home from './components/Staff/Home/Home';
import MyAccount from './components/Staff/ProfileIcon/MyAccount';
import Dashboard from './components/Staff/Dashboard/Dashboard';
import ViewSchedule from './components/Staff/View/ViewSchedule';
import TimeOffRequest from './components/Staff/TimeOffRequest/TimeOffRequest';
import ShiftCalendar from './components/Staff/ShiftCalendar/ShiftCalendar';
import ProjectSubmit from './components/Staff/ProjectSubmit/ProjectSubmit';
import ThankYou from './components/Staff/ProjectSubmit/Thankyou';
import './App.css';

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [staffData, setStaffData] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      age: 28, 
      gender: 'Male',
      phoneNo: '123-456-7890', 
      address: '123 Main St', 
      shift: 'Day', 
      dob: '1995-06-15', 
      email: 'john.doe@example.com', 
      completionStatus: 'Completed' 
    },
    // Add other initial staff data here...
  ]);
  const [editingStaff, setEditingStaff] = useState(null);

  const handleEdit = (id) => {
    const staff = staffData.find(staff => staff.id === id);
    setEditingStaff(staff);
  };

  const handleDelete = (id) => {
    setStaffData(staffData.filter(staff => staff.id !== id));
  };

  const handleAdd = (newStaff) => {
    setStaffData([...staffData, { ...newStaff, id: Date.now() }]);
  };

  const handleUpdate = (updatedStaff) => {
    setStaffData(staffData.map(staff => staff.id === updatedStaff.id ? updatedStaff : staff));
  };

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <AuthProvider>
      <Router>
        <AuthConsumerComponent 
          toggleSidebar={toggleSidebar} 
          openSidebarToggle={openSidebarToggle} 
          staffData={staffData} 
          setStaffData={setStaffData} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          handleAdd={handleAdd} 
          handleUpdate={handleUpdate} 
          editingStaff={editingStaff} 
        />
      </Router>
    </AuthProvider>
  );
}

const AuthConsumerComponent = ({ toggleSidebar, openSidebarToggle, staffData, setStaffData, handleEdit, handleDelete, handleAdd, handleUpdate, editingStaff }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated && <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={toggleSidebar} />}
      <div className="content">
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin-home" 
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/staff-details" 
            element={
              <ProtectedRoute>
                <StaffDetails 
                  staffData={staffData} 
                  setStaffData={setStaffData} 
                  editingStaff={editingStaff} 
                  handleAdd={handleAdd} 
                  handleUpdate={handleUpdate} 
                />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/staff-attendance" 
            element={
              <ProtectedRoute>
                <StaffAttendance />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/report" 
            element={
              <ProtectedRoute>
                <AttendanceReport />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payroll" 
            element={
              <ProtectedRoute>
                <Payroll />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/scheduling" 
            element={
              // <ProtectedRoute>
                <Scheduling />
              // </ProtectedRoute>
            } 
          />
          <Route 
            path="/shift-form" 
            element={
              <ProtectedRoute>
                <Shifts />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/staff-table" 
            element={
              <ProtectedRoute>
                <StaffTable 
                  staffData={staffData} 
                  handleEdit={handleEdit} 
                  handleDelete={handleDelete} 
                />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<AdminLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<ViewSchedule />} />
          <Route path="/time-off-requests" element={<TimeOffRequest />} />
          <Route path="/calendar" element={<ShiftCalendar />} />
          <Route path="/projectsubmit" element={<ProjectSubmit />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/scheduling" element={<Scheduling/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
