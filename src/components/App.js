import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ReduxNetworkProvider } from 'react-native-offline';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      {/* Set pingServerUrl to a non-working url to imitate network.isConnected = false */}
      <ReduxNetworkProvider>
        {/* <ReduxNetworkProvider pingServerUrl="https://www.recauraz.com/"> */}
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar barStyle="auto" />
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
};

export default App;
