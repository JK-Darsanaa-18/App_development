// src/ProfileIcon.js
import React from 'react';
import './ProfileIcon.css';
import { ReactComponent as UserIcon } from './ProfileIcon.svg'; // Adjust the path if necessary

const ProfileIcon = () => {
  return (
    <a href="/my-account" target="_blank" rel="noopener noreferrer" className="profile-icon">
      <UserIcon />
    </a>
  );
};

export default ProfileIcon;