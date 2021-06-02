import React from 'react';
import { View, SafeAreaView, Text, Linking, Platform } from 'react-native';
import styles from '../../styles/styles';
import HeaderText from '../common/HeaderText';
import AppButton from '../common/AppButton';
import AppText from '../common/AppText';
import Modal from '../common/Modal';
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

  render() {
    const { user, decks, confirmAnnouncement } = this.props;
    const { appVersion, dismissedUpdate, confirmedAnnouncement } = user;

    if (appVersion.forceUpdate) {
      return (
        <View style={styles.container}>
          <Modal visible={true}>
            <View style={styles.inputModalContent}>
              <AppText style={styles.paragraph}>Upgrade Required</AppText>
              <AppText style={styles.paragraph}>
                Your version is outdated, please update to the newest version!
              </AppText>
              <View style={styles.buttonsRow}>
                <AppButton
                  title="Open app store"
                  onPress={this.redirectToAppStore}
                />
              </View>
            </View>
          </Modal>
        </View>
      );
    }

    const isRecommendUpdate = !!appVersion.recommendUpdate && !dismissedUpdate;
    const showAnnouncement =
      !!appVersion.announcement && !confirmedAnnouncement && !isRecommendUpdate;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <HeaderText text="Who Drinks" />
          <Text style={deckStyles.betaText}>Beta</Text>
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
        <Modal visible={showAnnouncement} dismiss={confirmAnnouncement}>
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragraph}>Announcement</AppText>
            <AppText style={styles.paragraph}>
              {user.appVersion.announcement}
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton title="Ok" onPress={confirmAnnouncement} />
            </View>
          </View>
        </Modal>
        <Modal visible={isRecommendUpdate} dismiss={this.props.dismissUpdate}>
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragraph}>Upgrade</AppText>
            <AppText style={styles.paragraph}>
              A newer version of this app is available. Would you like to
              download it?
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton title="Cancel" onPress={this.props.dismissUpdate} />
              <AppButton title="Ok" onPress={this.redirectToAppStore} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(HomeScreen);
