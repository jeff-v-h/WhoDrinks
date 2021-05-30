import { StyleSheet } from 'react-native';
import { moderateScale } from '../utils/scaling';

// For global components such as the app drawer navigator

const globalStyles = StyleSheet.create({
  drawerLabel: {
    fontSize: moderateScale(15)
  }
});

export default globalStyles;
