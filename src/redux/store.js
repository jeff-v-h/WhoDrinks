import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { offline } from '@redux-offline/redux-offline';
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: (defaultEnhancers) => [offline, ...defaultEnhancers]
  // offline(offlineConfig)
});

export default store;
