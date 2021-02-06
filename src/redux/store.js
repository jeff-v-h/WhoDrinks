import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
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
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  ],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
