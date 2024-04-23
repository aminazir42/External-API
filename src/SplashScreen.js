import React from 'react';
import './App.css'; 

const SplashScreen = ({ onNext }) => {
  const handleClick = () => {
    onNext(); 
  };

  return (
    <div className="splash-screen" onClick={handleClick}>
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
