import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../utils/scaling';
import { colours } from './variables';

const selectedColWidth = moderateScale(56);

const deckStyles = StyleSheet.create({
  deckListHeader: {
    borderBottomWidth: 1,
    paddingBottom: verticalScale(5)
  },
  selectedHeading: {
    width: selectedColWidth,
    textAlign: 'center'
  },
  deckListRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colours.grey,
    height: verticalScale(65)
  },
  deckListLinkRow: {
    width: '80%',
    borderBottomWidth: 0
  },
  selectedCol: {
    width: selectedColWidth,
    marginRight: moderateScale(10)
  },
  selectedIcon: {
    alignSelf: 'center'
  },
  verticleLine: {
    height: '50%',
    alignSelf: 'center',
    marginVertical: verticalScale(20),
    width: 1.5,
    backgroundColor: colours.lightgrey
  },
  deckListButtonsCol: {
    flex: 1
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
    marginHorizontal: moderateScale(5),
    width: moderateScale(30)
  },
  deckEditButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(35),
    height: verticalScale(30)
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
    color: colours.primary
  },
  orText: {
    marginVertical: verticalScale(15)
  },
  disclaimerTitle: {
    marginBottom: verticalScale(6)
  }
});

export default deckStyles;
