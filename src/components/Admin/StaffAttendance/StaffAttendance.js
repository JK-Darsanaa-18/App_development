import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import moment from 'moment'; // Import moment for time formatting
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection

function StaffAttendance() {
  const [staffData, setStaffData] = useState([
    { id: 1, name: 'John Doe', isPresent: null, time: null },
    { id: 2, name: 'Jane Smith', isPresent: null, time: null },
    { id: 3, name: 'Bob Johnson', isPresent: null, time: null },
  ]);

  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showAbsent, setShowAbsent] = useState(false);

  const navigate = useNavigate(); // Hook to navigate between pages

  const handleAttendance = (id, status) => {
    const currentTime = moment().format('HH:mm'); // 24-hour format
    setStaffData(staffData.map(staff =>
      staff.id === id ? { ...staff, isPresent: status, time: currentTime } : staff
    ));
  };

  const markAttendance = () => {
    setAttendanceMarked(true);
  };

  const presentStaff = staffData.filter(staff => staff.isPresent);
  const absentStaff = staffData.filter(staff => staff.isPresent === false);

  const goToReport = () => {
    navigate('/report', { state: { presentStaff, absentStaff, date: moment().format('YYYY-MM-DD') } });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="staff-attendance" style={{
        padding: '400px',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        textAlign: 'center'
      }}>
        {!attendanceMarked ? (
          <>
            <h2 style={{ textAlign: 'center' }}>Mark Attendance</h2>
            <div className="attendance-container" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(233, 230, 230, 0.1)',
              backgroundColor: '#fff',
              width: '600px', // Fixed width for better layout
              textAlign: 'center' // Center text alignment
            }}>
              <table style={{ margin: '0 auto', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Name</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Present</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  {staffData.map((staff) => (
                    <tr key={staff.id}>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{staff.name}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                        <button
                          onClick={() => handleAttendance(staff.id, true)}
                          disabled={attendanceMarked && staff.isPresent === null}
                          style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            color: 'white',
                            backgroundColor: staff.isPresent ? '#218838' : '#e1e8e3'
                          }}
                        >
                          Present
                        </button>
                      </td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                        <button
                          onClick={() => handleAttendance(staff.id, false)}
                          disabled={attendanceMarked && staff.isPresent === null}
                          style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            color: 'white',
                            backgroundColor: staff.isPresent === false ? '#c82333' : '#e4d9db'
                          }}
                        >
                          Absent
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={markAttendance} style={{
                marginTop: '20px',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'white',
                backgroundColor: '#007bff'
              }}>Mark Attendance</button>
            </div>
          </>
        ) : (
          <>
            <div className="attendance-summary" style={{
              textAlign: 'center',
              marginTop: '20px',
              width:'400px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              backgroundColor: '#fff',
              display: 'inline-block' // Display as an inline-block box
            }}>
              <h3>Attendance Summary</h3>
              <p>Total Present: {presentStaff.length}</p>
              <p>Total Absent: {absentStaff.length}</p>
              <button onClick={goToReport} style={{
                marginTop: '20px',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'white',
                backgroundColor: '#007bff'
              }}>View Report</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StaffAttendance;
