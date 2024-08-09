import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ShiftCalendar.css';
import Sidebar from '../Navbar/Navbar'; // Adjust the path to where your Sidebar component is located
import { FaBars } from 'react-icons/fa'; // Import FaBars icon
import axios from 'axios';

const localizer = momentLocalizer(moment);

const ShiftCalendar = () => {
  const [events, setEvents] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/shifts')
      .then(response => {
        const shifts = response.data;
        const events = shifts.map(shift => {
          const [startTime, endTime] = shift.time.split('-').map(time => {
            const [hours, minutes] = time.match(/\d+/g).map(Number);
            const period = time.match(/[aApP][mM]/)[0].toLowerCase();
            let date = new Date(`${shift.date}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`);
            if (period === 'pm' && hours !== 12) {
              date.setHours(date.getHours() + 12);
            }
            if (period === 'am' && hours === 12) {
              date.setHours(0);
            }
            return date;
          });

          return {
            title: `${shift.name} - ${shift.time}`,
            start: startTime,
            end: endTime
          };
        });
        setEvents(events);
      })
      .catch(error => {
        console.error('There was an error fetching the shifts!', error);
      });
  }, []);

  return (
    <div className="shift-calendar-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <FaBars /> {/* FontAwesome menu icon */}
        </button>
        <h2 className="shift-calendar-heading">Shift Calendar</h2>
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '500px', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShiftCalendar;
