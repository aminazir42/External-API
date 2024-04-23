import React from 'react';
import logoImage from './funny.png';
import { fetchJoke } from './actions/jokes';

const CategoryPage = ({ onSelectCategory, fetchJoke }) => {
  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    fetchJoke(category);
  };
  return (
    <div className="category-page">
      <div className="center-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h2 style={{ fontSize: '37px' }}>Choose a Category</h2>
        <button onClick={() => handleCategorySelect('general')} style={{ fontFamily: 'Courier New', fontWeight: 'bold', fontSize: '20px', color:'#000' }}>General Jokes</button>
        <button onClick={() => handleCategorySelect('programming')} style={{ fontFamily: 'Courier New', fontWeight: 'bold', fontSize: '20px', color:'#000' }}>Programming Jokes</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  fetchJoke,
};

export default connect(null, mapDispatchToProps)(CategoryPage);