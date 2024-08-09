import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import { BsPersonCircle } from 'react-icons/bs';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);

  const handleLogout = () => {
    console.log('User logged out');
    window.location.href = '/admin-login'; // Example redirect
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='menu-bars' onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </div>
          <div className='profile-icon' onClick={handleProfileClick}>
            <BsPersonCircle />
            {showProfileMenu && (
              <div className='profile-menu'>
                <div className='profile-item'>
                  <strong>Admin</strong>
                </div>
                <div className='profile-item'>
                  <span>Email: admin@gmail.com</span>
                </div>
                <div className='profile-item'>
                  <span>Role: Administrator</span>
                </div>
                <div className='profile-item'>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items ' onClick={toggleSidebar}>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path} onClick={item.onClick}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;