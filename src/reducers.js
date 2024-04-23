import { FETCH_GENERAL_JOKE_SUCCESS, FETCH_PROGRAMMING_JOKE_SUCCESS } from './actionTypes';

const initialState = {
  generalJoke: '',
  programmingJoke: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENERAL_JOKE_SUCCESS:
      return { ...state, generalJoke: action.joke };
    case FETCH_PROGRAMMING_JOKE_SUCCESS:
      return { ...state, programmingJoke: action.joke };
    default:
      return state;
  }
};

export default reducer;
