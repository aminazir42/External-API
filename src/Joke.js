import React, { useState } from 'react';
import logoImage from './funny.png';

const CategoryPage = ({ onSelectCategory }) => {
  const [joke, setJoke] = useState(null);

  const handleCategorySelect = async (category) => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="category-page">
      <div className="center-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h2 style={{ fontSize: '37px' }}>Let me make you laugh</h2>
        <br></br>  
        <button onClick={() => handleCategorySelect('programming')} style={{ fontFamily: 'Courier New', fontWeight: 'bold', fontSize: '20px', color:'#000' }}>Click me</button>
    
        {joke && (
          <div>
            <h3>Joke:</h3>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
