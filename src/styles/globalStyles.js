import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, scale } from '../utils/scaling';
import { isWindowHeightGreaterThan } from '../utils/helpers';
import { colours } from './variables';

// For global components such as the app drawer navigator

const globalStyles = StyleSheet.create({
  statusBar: {
    height: verticalScale(isWindowHeightGreaterThan(768) ? 50 : 65),
    backgroundColor: colours.white
  },
  statusBarTitle: {
    fontSize: moderateScale(isWindowHeightGreaterThan(768) ? 16 : 17)
  },
  statusBarBackButton: {
    fontSize: 50
  },
  headerBackButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(7),
    width: '100%'
    // borderWidth: 1
  },
  headerRightIconWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: scale(14)
  },
  drawerLabel: {
    fontSize: moderateScale(15)
  }
});

export default globalStyles;
