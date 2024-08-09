import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch } from 'react-icons/bs';
import './Header.css';

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className='header'>
      <div className='header-icons'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
      <div className='header-center'>
        <input
          type='text'
          className='search-input'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <BsSearch className='icon search-icon' />
      </div>
    </header>
  );
}

export default Header;
