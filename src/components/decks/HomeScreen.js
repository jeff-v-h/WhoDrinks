import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  Linking,
  Platform
} from 'react-native';
import styles from '../../styles/styles';
import HeaderText from '../common/HeaderText';
import AppButton from '../common/AppButton';
import { isDateOverOneWeekAgo } from '../../utils/helpers';
import deckStyles from '../../styles/deckStyles';
import { connect } from 'react-redux';
import { selectDeck } from './decksSlice';
import {
  logout,
  getAppVersion,
  dismissUpdate,
  confirmAnnouncement
} from '../../redux/userSlice';
import { startNewGame } from '../game/gameSlice';
import TermsAndDisclaimerModal from '../legal/TermsAndDisclaimerModal';

const mapState = (state) => ({
  decks: state.decks,
  user: state.user,
  cards: state.cards
});

const mapDispatch = {
  selectDeck,
  logout,
  startNewGame,
  getAppVersion,
  dismissUpdate,
  confirmAnnouncement
};

class HomeScreen extends React.Component {
  componentDidMount() {
    // this.props.logout();
    const { dateObtained } = this.props.user.appVersion;
    if (
      !dateObtained ||
      isDateOverOneWeekAgo(dateObtained) ||
      this.isNoAppId()
    ) {
      this.props.getAppVersion();
    }
  }

  isNoAppId = () => {
    const { appVersion } = this.props.user;
    const url =
      Platform.OS === 'ios'
        ? appVersion.iOSUpdateUrl
        : appVersion.androidUpdateUrl;
    return !url || url.includes('myappid');
  };

  goToDeckSelection = () => this.props.navigation.navigate('DeckList');

  startNewGame = () => {
    const { navigation, startNewGame, decks, cards } = this.props;
    const name = decks.byId[decks.selectedId].name;
    startNewGame(cards.byDeckId[decks.selectedId]);
    // For params to pass through, must specify screen name since it is same as stack name
    navigation.navigate('Game', {
      screen: 'Game',
      params: { name }
    });
  };

  //#region alerts
  redirectToAppStore = async () => {
    const { user, navigation } = this.props;
    const url =
      Platform.OS === 'ios'
        ? user.appVersion.iOSUpdateUrl
        : user.appVersion.androidUpdateUrl;

    try {
      const canOpen = await Linking.canOpenURL(url);
      if (!canOpen) {
        navigation.navigate('RedirectError');
        return;
      }
      Linking.openURL(url);
    } catch {
      navigation.navigate('RedirectError');
    }
  };

  forcedUpdateAlert = () => {
    Alert.alert(
      'Upgrade Required',
      'Your version is outdated, please update to the newest version!',
      [
        {
          text: 'Open app store',
          onPress: () => this.redirectToAppStore()
        }
      ]
    );
  };

  recommendUpdateAlert = () => {
    Alert.alert(
      'Update',
      'A newer version of this app is available. Would you like to download it?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => this.props.dismissUpdate()
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.dismissUpdate();
            this.redirectToAppStore();
          }
        }
      ],
      {
        text: 'OK',
        onDismiss: () => this.props.dismissUpdate()
      }
    );
  };

  announcementAlert = () => {
    const { user, confirmAnnouncement } = this.props;
    Alert.alert('Accouncement', user.appVersion.announcement, [
      {
        text: 'OK',
        onPress: () => confirmAnnouncement()
      }
    ]);
  };

  checkAlerts = () => {
    const {
      appVersion,
      dismissedUpdate,
      confirmedAnnouncement
    } = this.props.user;

    if (appVersion.forceUpdate) {
      this.forcedUpdateAlert();
    } else if (appVersion.recommendUpdate && !dismissedUpdate) {
      this.recommendUpdateAlert();
    } else if (appVersion.announcement && !confirmedAnnouncement) {
      this.announcementAlert();
    }
  };
  //#endregion

  render() {
    const { user, decks } = this.props;
    this.checkAlerts();

    if (user.appVersion.forceUpdate) {
      return <View style={styles.container} />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <HeaderText text="Who Drinks" />
        </View>
        <View style={deckStyles.selectDeckView}>
          <Text style={styles.text}>Deck:</Text>
          <AppButton
            title={decks.byId[decks.selectedId]?.name ?? ''}
            onPress={this.goToDeckSelection}
            style={deckStyles.selectDeckButton}
            textStyle={deckStyles.selectDeckText}
            numberOfLines={1}
          />
        </View>
        <View style={styles.section}>
          <AppButton
            title="Start Game"
            onPress={this.startNewGame}
            disabled={!decks.selectedId}
            style={styles.button}
          />
        </View>
        <TermsAndDisclaimerModal />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(HomeScreen);
