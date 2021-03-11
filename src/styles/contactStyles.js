import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../utils/scaling';

const contactStyles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'space-around'
    // paddingBottom: '30%',
    // paddingTop: '30%'
  },
  text: {
    marginBottom: moderateScale(6),
    fontSize: moderateScale(18)
  },
  contactUsInput: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    // marginBottom: verticalScale(30),
    fontSize: moderateScale(18),
    borderBottomWidth: 1,
    width: '100%'
  },
  feedbackInput: {}
});

export default contactStyles;
