
import axios from 'axios';

export const fetchJoke = (category) => async (dispatch) => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${category}/random`);
    dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_JOKE_FAILURE', payload: error.message });
  }
};
