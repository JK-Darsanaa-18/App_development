import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectSubmit.css';
import { FaBars } from 'react-icons/fa'; // Import FaBars icon
import Sidebar from '../Navbar/Navbar'; // Adjust the path to where your Sidebar component is located

const ProjectSubmit = () => {
  const [projectName, setProjectName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Project Name:', projectName);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Files:', files);

    // Navigate to thank you page after submission
    navigate('/thank-you');
  };

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`projectsub-container ${sidebarOpen ? 'shifted' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h2 className="projectsub-title">Add Project Reports</h2>
      <form onSubmit={handleSubmit} className="projectsub-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="files">Project Files</label>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ProjectSubmit;
