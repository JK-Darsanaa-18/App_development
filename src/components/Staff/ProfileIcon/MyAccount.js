import React from 'react';
import './MyAccount.css'; // Add your styling here

const MyAccount = () => {
  return (
    <div className="my-account">
      <h2>My Account</h2>
      <img
        className="profile-photo"
        src="https://t4.ftcdn.net/jpg/03/25/91/85/360_F_325918530_0MFQE3vsuaIW8W9Kb47fHYTUBRMvZqEP.jpg"
        alt="Profile"
      />
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> 727722euai018@skcet.ac.in</p>
        <p><strong>Role:</strong> Administrator</p>
        <p><strong>Department:</strong> HR</p>
        <p><strong>Phone:</strong>1234567890</p>
        <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default MyAccount;