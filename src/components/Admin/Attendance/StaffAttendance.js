import React, { useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './StaffAttendance.css';

function MyAttendance() {
  const navigate = useNavigate();

  // Hardcoded staff data for demonstration
  const staffData = [
    { id: 1, name: 'darsanaa', email: 'darsanaa@example.com' },
    { id: 2, name: 'akshaya', email: 'akshaya@example.com' },
    { id: 3, name: 'geetha', email: 'geetha@example.com' },
    { id: 4, name: 'kani', email: 'kani@example.com' },
    { id: 5, name: 'Nivaa', email: 'nivaa@example.com' },
    { id: 6, name: 'bhavani', email: 'bhavani@example.com' },
    { id: 7, name: 'gopika', email: 'gopika@example.com' },
  ];

  const [attendanceData, setAttendanceData] = useState(() => {
    const initialAttendance = {};
    staffData.forEach(staff => {
      initialAttendance[staff.id] = { status: 'Absent', time: '' };
    });
    return initialAttendance;
  });

  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [date] = useState(moment().format('YYYY-MM-DD'));

  const handleAttendanceChange = (id, status) => {
    const currentTime = moment().format('HH:mm');
    setAttendanceData(prevState => ({
      ...prevState,
      [id]: { status, time: status === 'Present' ? currentTime : '' },
    }));
  };

  const handleSubmit = () => {
    // Simulate submitting the attendance
    const present = staffData.filter(staff => attendanceData[staff.id].status === 'Present');
    const absent = staffData.filter(staff => attendanceData[staff.id].status === 'Absent');

    setPresentCount(present.length);
    setAbsentCount(absent.length);
    setIsSubmitted(true);

    // Store attendance summary in localStorage for demonstration
    localStorage.setItem('attendanceSummary', JSON.stringify({
      presentStaff: present,
      absentStaff: absent,
      date,
    }));

    alert('Attendance submitted successfully');

    // Navigate to the attendance report page
    navigate('/attendance-report', {
      state: {
        presentStaff: present.map(staff => ({
          ...staff,
          time: attendanceData[staff.id].time,
        })),
        absentStaff: absent,
        date,
      },
    });
  };

  return (
    <div className="attendance-container">
      {!isSubmitted ? (
        <>
          <h2>My Attendance</h2>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map(staff => (
                <tr key={staff.id}>
                  <td>{staff.name}</td>
                  <td>{staff.email}</td>
                  <td>
                    <div className="attendance-buttons">
                      <button
                        className={attendanceData[staff.id].status === 'Present' ? 'btn present' : 'btn'}
                        onClick={() => handleAttendanceChange(staff.id, 'Present')}
                        disabled={isSubmitted}
                      >
                        Present
                      </button>
                      <button
                        className={attendanceData[staff.id].status === 'Absent' ? 'btn absent' : 'btn'}
                        onClick={() => handleAttendanceChange(staff.id, 'Absent')}
                        disabled={isSubmitted}
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-attendance-btn" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </>
      ) : (
        <div className="attendance-summary">
          <h2>Attendance Summary</h2>
          <p>Total Present: {presentCount}</p>
          <p>Total Absent: {absentCount}</p>
        </div>
      )}
    </div>
  );
}

export default MyAttendance;