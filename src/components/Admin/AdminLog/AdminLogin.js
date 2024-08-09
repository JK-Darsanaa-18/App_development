import React, { useState, useEffect } from 'react';
import './AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    document.body.className = 'login-page';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = '727722euai018@skcet.ac.in';
    const validPassword = 'Geetha@123';

    if (formData.email === validEmail && formData.password === validPassword) {
      setSuccess('Login successful!');
      setError('');
      login(); // Set the authentication state
      navigate('/admin-home');
    } else {
      setError('Invalid email or password. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="ff">
      <div className="form-ff">
        <h2>Admin</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <p>Employee Login?<Link to="/StaffLogin">Login</Link></p>
      </div>
    </div>
  );
};

export default AdminLogin;