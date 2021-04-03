import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../utils/scaling';
import { colours } from './variables';

const selectedColWidth = moderateScale(56);

const deckStyles = StyleSheet.create({
  deckListHeader: {
    borderBottomWidth: 1,
    paddingBottom: verticalScale(5),
    marginBottom: verticalScale(5)
  },
  currentlySelectedHeading: {
    width: selectedColWidth,
    textAlign: 'center'
  },
  selectedCol: {
    width: selectedColWidth,
    marginRight: moderateScale(10)
  },
  selectedIcon: {
    alignSelf: 'center'
  },
  editDeck: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(13)
  },
  configCardInput: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    fontSize: moderateScale(24),
    height: verticalScale(300),
    width: '100%'
  },
  configButtonsRow: {
    marginBottom: verticalScale(50)
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: verticalScale(5),
    paddingBottom: verticalScale(5),
    borderBottomColor: colours.black,
    borderBottomWidth: 1
  },
  titleView: {
    flex: 1,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold'
  },
  menuWrapper: {
    padding: moderateScale(5),
    marginRight: moderateScale(5),
    marginLeft: moderateScale(5)
  },
  selectDeckView: {
    width: '100%'
  },
  selectDeckButton: {
    backgroundColor: colours.white,
    elevation: 5,
    marginTop: verticalScale(5)
  },
  selectDeckText: {
    color: colours.coral
  },
  orText: {
    marginVertical: verticalScale(15)
  },
  disclaimerTitle: {
    marginBottom: verticalScale(6)
  }
});

export default deckStyles;
