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
    marginBottom: verticalScale(20),
    alignItems: 'flex-start'
  },
  text: {
    marginBottom: moderateScale(10),
    fontSize: moderateScale(18),
    textAlign: 'left',
    width: '100%'
  },
  contactUsInputSection: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  contactUsInput: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    marginHorizontal: moderateScale(10),
    marginBottom: verticalScale(6),
    fontSize: moderateScale(16),
    borderWidth: 1,
    width: '100%'
  },
  feedbackButtonSection: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: verticalScale(20)
  },
  feedbackInput: {
    textAlignVertical: 'top'
  },
  deckListHeader: {
    borderBottomWidth: 1,
    paddingBottom: moderateScale(10)
  }
});

export default contactStyles;
