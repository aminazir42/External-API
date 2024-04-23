
import React from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/actionCreators';
import './App.css'; 
const CategoryPage = ({ fetchJoke }) => {
  const handleFetchJoke = (type) => {
    fetchJoke(type);
  };

  return (
    <div className="category-page">
      <div className="center-container">
        <button onClick={() => handleFetchJoke('general')}>General Joke</button>
        <button onClick={() => handleFetchJoke('programming')}>Programming Joke</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchJoke,
};

export default connect(null, mapDispatchToProps)(CategoryPage);
