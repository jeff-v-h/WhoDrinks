import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { colours } from './variables';

// Compared to global styles these are re-used multiple times in various components throughout the app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10)
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: moderateScale(10)
  },
  scrollContainer: {
    flex: 1,
    padding: moderateScale(10)
  },
  text: {
    fontSize: moderateScale(20),
    textAlign: 'center'
  },
  headerText: {
    fontSize: moderateScale(30),
    textAlign: 'center'
  },
  flexStart: {
    justifyContent: 'flex-start'
  },
  list: {
    flex: 1,
    width: '100%'
  },
  listRow: {
    height: verticalScale(50)
  },
  paddedRow: {
    paddingHorizontal: moderateScale(10)
  },
  topButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: verticalScale(30),
    paddingRight: moderateScale(5),
    paddingLeft: moderateScale(5),
    marginTop: verticalScale(10)
  },
  button: {
    backgroundColor: colours.primary,
    padding: moderateScale(6),
    borderRadius: 2,
    minWidth: scale(80)
  },
  disabledButton: {
    backgroundColor: colours.grey,
    padding: moderateScale(6),
    borderRadius: 2,
    minWidth: scale(80)
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: moderateScale(20),
    color: colours.white
  },
  buttonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: verticalScale(10)
  },
  touchable: {
    width: '100%',
    paddingTop: scale(5),
    paddingBottom: scale(5),
    borderBottomWidth: 1,
    borderBottomColor: colours.grey
  },
  touchableView: {
    height: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  itemText: {
    fontSize: moderateScale(18),
    flex: 1
  },
  floatingIconButton: {
    position: 'absolute',
    width: moderateScale(50),
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    right: scale(30),
    bottom: verticalScale(40),
    backgroundColor: colours.primary,
    borderColor: colours.primary,
    borderRadius: 200 / 2
  },
  floatingActionIcon: {
    color: colours.white,
    fontSize: moderateScale(16)
  },
  headerRightIconWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: scale(14)
  },
  bold: {
    fontWeight: '700'
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colours.modalBlack
  },
  modalContentWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: colours.white,
    padding: moderateScale(15),
    marginHorizontal: scale(15),
    marginVertical: verticalScale(25)
  },
  bottomModalContentWrapper: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomModalContent: {
    backgroundColor: colours.white,
    padding: moderateScale(15)
  },
  inputModalDetails: {
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(5)
  },
  inputModalDetailsText: {
    textAlign: 'left'
  },
  inputModalContent: {
    backgroundColor: colours.white,
    minHeight: verticalScale(130),
    justifyContent: 'space-around',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(20),
    marginLeft: scale(20),
    marginRight: scale(20)
  },
  modalInput: {
    paddingHorizontal: scale(4),
    paddingBottom: verticalScale(4),
    marginHorizontal: moderateScale(10),
    marginBottom: verticalScale(20),
    fontSize: moderateScale(20),
    borderBottomWidth: 1
  },
  rightButtonsView: {
    alignItems: 'flex-end'
  },
  modalButton: {
    minWidth: scale(50),
    padding: moderateScale(2),
    marginTop: verticalScale(5)
  },
  modalButtonText: {
    fontSize: moderateScale(14)
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkText: {
    color: colours.linkBlue
  },
  textBlock: {
    marginBottom: verticalScale(10)
  },
  paragraph: {
    marginBottom: verticalScale(20)
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: scale(10)
  },
  bullet: {
    marginRight: scale(5),
    fontSize: moderateScale(8),
    marginTop: verticalScale(4)
  },
  redBorder: {
    borderColor: colours.error
  }
});

export default styles;
