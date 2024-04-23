// reducers/jokesReducer.js
const initialState = {
    joke: null,
    error: null,
  };
  
  const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOKE_SUCCESS':
        return { ...state, joke: action.payload, error: null };
      case 'FETCH_JOKE_FAILURE':
        return { ...state, joke: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default jokesReducer;
  