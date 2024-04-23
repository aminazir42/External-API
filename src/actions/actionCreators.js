import axios from 'axios';
import { FETCH_GENERAL_JOKE_SUCCESS, FETCH_PROGRAMMING_JOKE_SUCCESS } from './actionTypes';

export const fetchGeneralJoke = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const { setup, punchline } = response.data;
      const joke = `${setup} ${punchline}`;
      dispatch({ type: FETCH_GENERAL_JOKE_SUCCESS, joke });
    } catch (error) {
      console.error('Error fetching general joke:', error);
    }
  };
};

export const fetchProgrammingJoke = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
      const { setup, punchline } = response.data[0];
      const joke = `${setup} ${punchline}`;
      dispatch({ type: FETCH_PROGRAMMING_JOKE_SUCCESS, joke });
    } catch (error) {
      console.error('Error fetching programming joke:', error);
    }
  };
};
