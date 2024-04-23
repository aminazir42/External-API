// jokeReducer.js
import { FETCH_JOKE_SUCCESS } from './actionTypes';

const initialState = {
  joke: '',
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_SUCCESS:
      return { ...state, joke: action.joke };
    default:
      return state;
  }
};

export default jokeReducer;
