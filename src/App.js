import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        // Your main content goes here
        <div>
          <h1>Welcome to My App!</h1>
          {/* Add your other components and content here */}
        </div>
      )}
    </div>
  );
};

export default App;
