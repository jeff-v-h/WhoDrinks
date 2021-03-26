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
    paddingBottom: verticalScale(5),
    marginBottom: verticalScale(5),
    paddingHorizontal: moderateScale(10)
  },
  deckHeader: {
    textAlign: 'left',
    fontSize: moderateScale(20),
    fontWeight: 'bold'
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  downloadButtonWrapper: {
    justifyContent: 'center'
  }
});

export default communityStyles;
