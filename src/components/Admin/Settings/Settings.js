import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [currentEmail, setCurrentEmail] = useState('727722euai018@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Apply the selected theme to the body
    document.body.className = selectedTheme.toLowerCase();
  }, [selectedTheme]);

  const handleThemeToggle = () => {
    setSelectedTheme(prevTheme => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  };

  const handleEmailChange = () => {
    // Logic to update email
    setCurrentEmail(newEmail);
    setNewEmail('');
  };

  const handlePasswordChange = () => {
    // Logic to update password
    setCurrentPassword(newPassword);
    setNewPassword('');
    // Optionally, send an email notification here
  };

  return (
    <div className='settings-page'>
      <div className='settings-card'>
        <h1>Settings</h1>
        <form>
          <section className='theme-settings'>
            <h2>Theme</h2>
            <button type='button' onClick={handleThemeToggle}>
              {selectedTheme === 'Light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
          </section>
          
          <section className='email-settings'>
            <h2>Manage Email</h2>
            <p>Current Email: {currentEmail}</p>
            <input
              type='email'
              value={newEmail}
              placeholder='New Email'
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button type='button' onClick={handleEmailChange}>Update Email</button>
          </section>
          
          <section className='password-settings'>
            <h2>Manage Password</h2>
            <div className='password-inputs'>
              <input
                type='password'
                value={currentPassword}
                placeholder='Current Password'
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type='password'
                value={newPassword}
                placeholder='New Password'
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div><br></br>
            <button type='button' onClick={handlePasswordChange}>Change Password</button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Settings;
