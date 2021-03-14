import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Modal,
  Alert,
  Linking,
  Platform
} from 'react-native';
import styles from '../../styles/styles';
import HeaderText from '../common/HeaderText';
import AppButton from '../common/AppButton';
import { DISCLAIMER } from '../../utils/constants';
import deckStyles from '../../styles/deckStyles';
import { connect } from 'react-redux';
import { selectDeck } from './decksSlice';
import {
  confirmDisclaimer,
  logout,
  getAppVersion,
  dismissedUpdate,
  confirmAnnouncement
} from '../../redux/userSlice';
import { startNewGame } from '../game/gameSlice';

const mapState = (state) => ({
  decks: state.decks,
  user: state.user,
  cards: state.cards
});

const mapDispatch = {
  selectDeck,
  confirmDisclaimer,
  logout,
  startNewGame,
  getAppVersion,
  dismissedUpdate,
  confirmAnnouncement
};

class HomeScreen extends React.Component {
  componentDidMount() {
    // this.props.logout();
    const { dateObtained } = this.props.user.appVersion;
    if (!dateObtained || this.isDateOverOneWeekAgo(dateObtained)) {
      this.props.getAppVersion();
    }
  }

  isDateOverOneWeekAgo(dateString) {
    return (
      new Date().getTime() >
      new Date(dateString).getTime() + 7 * 24 * 60 * 60 * 1000
    );
  }

  goToDeckSelection = () => this.props.navigation.navigate('DeckList');

  startNewGame = () => {
    const { navigation, startNewGame, decks, cards } = this.props;
    startNewGame(cards.byDeckId[decks.selectedId]);
    navigation.navigate('Game');
  };

  //#region alerts
  redirectToAppStore = async () => {
    const url =
      Platform.OS === 'ios'
        ? this.props.user.appVersion.iOSUpdateUrl
        : this.props.user.appVersion.androidUpdateUrl;

    try {
      const canOpen = await Linking.canOpenURL(url);
      if (!canOpen) {
        this.props.navigation.navigate('RedirectError');
        return;
      }
      Linking.openURL(url);
    } catch {
      this.props.navigation.navigate('RedirectError');
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
          onPress: () => this.props.dismissedUpdate()
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.dismissedUpdate();
            this.redirectToAppStore();
          }
        }
      ]
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
    const { user, decks, confirmDisclaimer } = this.props;
    this.checkAlerts();

    if (user.appVersion.forceUpdate) {
      return <View style={styles.container} />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <HeaderText text="Don't Think" />
          <HeaderText text="Just Drink" />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={!user.confirmedDisclaimer}
          onRequestClose={() => confirmDisclaimer()}
        >
          <View style={styles.bottomPopupModal}>
            <View style={styles.modalContent}>
              <Text style={styles.bold}>Disclaimer</Text>
              <Text>{DISCLAIMER}</Text>
              <View style={styles.rightButtonsView}>
                <AppButton
                  title="OK"
                  onPress={() => confirmDisclaimer()}
                  style={styles.modalButton}
                  textStyle={styles.modalButtonText}
                />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(HomeScreen);
