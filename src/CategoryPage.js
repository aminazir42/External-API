import React from 'react';
import { connect } from 'react-redux';
import { fetchGeneralJoke, fetchProgrammingJoke } from './actionCreators';

const CategoryPage = ({ fetchGeneralJoke, fetchProgrammingJoke }) => {
  return (
    <div className="category-page">
      <div className="center-container">
        <button onClick={fetchGeneralJoke}>General Joke</button>
        <button onClick={fetchProgrammingJoke}>Programming Joke</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchGeneralJoke,
  fetchProgrammingJoke,
};

export default connect(null, mapDispatchToProps)(CategoryPage);