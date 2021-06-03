import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../utils/scaling';
import { isWindowHeightGreaterThan } from '../utils/helpers';

// For global components such as the app drawer navigator

const globalStyles = StyleSheet.create({
  statusBar: {
    height: verticalScale(isWindowHeightGreaterThan(768) ? 50 : 65)
  },
  statusBarTitle: {
    fontSize: moderateScale(isWindowHeightGreaterThan(768) ? 16 : 17)
  },
  drawerLabel: {
    fontSize: moderateScale(15)
  }
});

export default globalStyles;
