// JokePage.js
import React from 'react';
import { connect } from 'react-redux';

const JokePage = ({ joke }) => {
  return (
    <div className="joke-page">
      <div className="center-container">
        <h2>Joke of the Day</h2>
        <p>{joke}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke.joke,
  };
};

export default connect(mapStateToProps)(JokePage);
