// actionCreators.js
import axios from 'axios';
import { FETCH_JOKE_SUCCESS } from './actionTypes';

export const fetchJoke = (type) => {
  return async (dispatch) => {
    try {
      let url = '';
      if (type === 'general') {
        url = 'https://official-joke-api.appspot.com/random_joke';
      } else if (type === 'programming') {
        url = 'https://official-joke-api.appspot.com/jokes/programming/random';
      }
      const response = await axios.get(url);
      const { setup, punchline } = response.data;
      const newJoke = `${setup} ${punchline}`;
      dispatch({ type: FETCH_JOKE_SUCCESS, joke: newJoke });
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };
};
