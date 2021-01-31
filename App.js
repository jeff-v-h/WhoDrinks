import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
