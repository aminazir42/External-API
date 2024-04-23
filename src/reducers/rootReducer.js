// rootReducer.js
import { combineReducers } from 'redux';
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
  joke: jokeReducer,
});

export default rootReducer;
