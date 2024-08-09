// src/ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width:'100vw',
        backgroundColor: '#f0f0f0', // Light gray background for the full screen
        textAlign: 'center'
      }}
    >
      <div
        style={{
          padding: '20px',
          maxWidth: '800px',
          width: '100%',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
          backgroundImage: 'url(/path/to/your/background-image.jpg)', // Add your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '3em', color: '#4caf50', marginBottom: '10px' }} />
        <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Thank You!</h2>
        <p style={{ fontSize: '1.2em' }}>
          Thank you for submitting the project reports.
        </p>
        <button
          onClick={handleGoBack}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThankYou;