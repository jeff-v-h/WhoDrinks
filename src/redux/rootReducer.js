import { combineReducers } from 'redux';
import decksReducer from './decksSlice';
import userReducer from './userSlice';
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  decks: decksReducer,
  user: userReducer,
  network
});
