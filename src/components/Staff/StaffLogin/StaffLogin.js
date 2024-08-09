import React, { useState,useEffect} from 'react';
import axios from 'axios';
import './StaffLogin.css';
import { Link, useNavigate } from 'react-router-dom';

const StaffLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  useEffect(() => {
    // Set the class on the body element
    document.body.className = 'login-page';
    // Cleanup the class when the component unmounts
    return () => {
      document.body.className = '';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      setSuccess('Login successful!');
      navigate('/home');
      setError('');
    } catch (err) {
      setError('Login failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="ff">
    <div className="form-container">
      <h2>Staff</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
  
    </div>
    </div>
  );
};

export default StaffLogin;
