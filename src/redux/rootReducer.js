import { combineReducers } from 'redux';
import decksReducer from '../components/decks/decksSlice';
import cardsReducer from '../components/decks/cardsSlice';
import userReducer from './userSlice';
import { reducer as network } from 'react-native-offline';

const appReducer = combineReducers({
  user: userReducer,
  decks: decksReducer,
  cards: cardsReducer,
  network
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
