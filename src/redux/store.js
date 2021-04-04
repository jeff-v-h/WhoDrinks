import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNetworkMiddleware } from 'react-native-offline';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [
    networkMiddleware,
    ...getDefaultMiddleware({
      // Set to false if too many actions contain thunk function as a value since react-native-offline needs to store functions in state
      serializableCheck: false
    })
  ],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
