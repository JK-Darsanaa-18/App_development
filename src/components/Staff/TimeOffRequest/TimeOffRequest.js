import React, { useState } from 'react';
import { FaCheck, FaTimes, FaBars } from 'react-icons/fa';
import Sidebar from '../Navbar/Navbar';
import './TimeOffRequest.css';

const TimeOffRequest = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', shift: 'July 30, 2024 - 9:00 AM to 5:00 PM' },
    { id: 2, name: 'Jane Smith', shift: 'July 31, 2024 - 10:00 AM to 6:00 PM' },
  ]);
  const [message, setMessage] = useState('');
  const [processedRequests, setProcessedRequests] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAccept = (id) => {
    const request = requests.find((request) => request.id === id);
    if (request) {
      setProcessedRequests((prev) => [...prev, { ...request, status: 'accepted' }]);
      setRequests((prev) => prev.filter((request) => request.id !== id));
      setMessage('Request accepted');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  const handleDecline = (id) => {
    const newShift = prompt('Please provide an alternate timing');
    if (newShift) {
      const request = requests.find((request) => request.id === id);
      if (request) {
        setProcessedRequests((prev) => [
          ...prev,
          { ...request, status: 'declined', newShift },
        ]);
        setRequests((prev) => prev.filter((request) => request.id !== id));
        setMessage(`Request declined. Alternate timing: ${newShift}`);
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`time-off-request-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <FaBars /> {/* FontAwesome menu icon */}
        </button>
        <h2>Time Off Requests</h2>
        {message && <p className="message">{message}</p>}
        
        <div className="request-section">
          <ul>
            {requests.map((request) => (
              <li key={request.id} className="request-item">
                <p><strong>Name:</strong> {request.name}</p>
                <p><strong>Shift:</strong> {request.shift}</p>
                <button className="accept-btn" onClick={() => handleAccept(request.id)}>Accept</button>
                <button className="decline-btn" onClick={() => handleDecline(request.id)}>Decline</button>
              </li>
            ))}
          </ul>
        </div>
        
        <h3>Processed Requests</h3>
        <ul>
          {processedRequests.map((request) => (
            <li key={request.id} className={`request-item processed ${request.status}`}>
              <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Shift:</strong> {request.shift}</p>
              {request.status === 'accepted' ? (
                <p className="status accepted"><FaCheck /> Request accepted</p>
              ) : (
                <p className="status declined"><FaTimes /> Request declined</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeOffRequest;