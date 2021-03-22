import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../utils/scaling';

const communityStyles = StyleSheet.create({
  listRow: {
    height: verticalScale(50),
    paddingHorizontal: moderateScale(20)
  },
  networkErrorView: {
    paddingTop: verticalScale(50)
  }
});

export default communityStyles;
