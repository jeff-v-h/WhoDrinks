import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { colours } from './variables';

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
    paddingLeft: moderateScale(5)
  },
  button: {
    backgroundColor: colours.coral,
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
  IconButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: colours.coral,
    borderColor: colours.coral,
    borderRadius: 200 / 2
  },
  floatingActionIcon: {
    color: colours.white
  },
  headerRightIconWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: moderateScale(14)
  },
  bold: {
    fontWeight: '700'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colours.modalBlack,
    padding: moderateScale(15)
  },
  bottomPopupModal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colours.modalBlack
  },
  modalContent: {
    padding: moderateScale(15),
    backgroundColor: colours.white
  },
  inputModalView: {
    flex: 1,
    backgroundColor: colours.modalBlack,
    justifyContent: 'center'
  },
  inputModalDetails: {
    paddingHorizontal: moderateScale(10),
    marginBottom: verticalScale(5)
  },
  inputModalDetailsText: {
    textAlign: 'left'
  },
  inputModalContent: {
    backgroundColor: colours.white,
    minHeight: verticalScale(130),
    justifyContent: 'space-around',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20)
  },
  modalInput: {
    paddingLeft: moderateScale(4),
    paddingRight: moderateScale(4),
    paddingBottom: verticalScale(4),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
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
    marginVertical: verticalScale(10)
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  bullet: {
    marginRight: moderateScale(5),
    fontSize: moderateScale(8),
    marginTop: verticalScale(4)
  },
  redBorder: {
    borderColor: colours.error
  }
});

export default styles;
