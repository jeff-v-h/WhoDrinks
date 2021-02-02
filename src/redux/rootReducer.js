import { combineReducers } from 'redux';
import decksReducer from './decksSlice';
import userReducer from './userSlice';

export default combineReducers({
  decks: decksReducer,
  user: userReducer
});
