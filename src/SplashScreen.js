import React from 'react';
import './App.css'; // Import your CSS file for styling

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="logo-container">
        {/* Replace 'logo.png' with the path to your logo image */}
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
}

export default SplashScreen;
