import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../utils/scaling';

const communityStyles = StyleSheet.create({
  listRow: {
    height: verticalScale(50),
    paddingHorizontal: moderateScale(20)
  },
  networkErrorView: {
    paddingTop: verticalScale(50)
  },
  deckListHeader: {
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    paddingBottom: verticalScale(10),
    marginBottom: verticalScale(5),
    paddingHorizontal: moderateScale(10)
  },
  deckHeader: {
    textAlign: 'left',
    fontSize: moderateScale(20)
  }
});

export default communityStyles;
