import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../utils/scaling';

const legalStyles = StyleSheet.create({
  disclaimerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(14)
  },
  section: {
    marginBottom: verticalScale(20)
  },
  heading: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(10),
    fontWeight: '700'
  },
  subHeading: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(6),
    fontWeight: '700'
  },
  text: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(6)
  }
});

export default legalStyles;
