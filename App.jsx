import React from 'react';
import {View, StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import styles from './src/styles/styles';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>
  );
}

export default App;
