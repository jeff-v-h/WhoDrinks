import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../utils/scaling';

const contactStyles = StyleSheet.create({
  feedbackScreen: {
    justifyContent: 'flex-start'
  },
  textSection: {
    flex: 0,
    justifyContent: 'flex-start',
    height: verticalScale(110),
    marginBottom: verticalScale(30),
    alignItems: 'flex-start'
  },
  text: {
    marginBottom: moderateScale(10),
    fontSize: moderateScale(18),
    textAlign: 'left'
  },
  contactUsInputSection: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  contactUsInput: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    fontSize: moderateScale(18),
    borderBottomWidth: 1,
    width: '100%'
  },
  fedbackButtonSection: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  feedbackInput: {
    borderWidth: 1,
    borderTopWidth: 0,
    textAlignVertical: 'top'
  }
});

export default contactStyles;
