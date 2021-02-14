import * as React from 'react';
import { View, SafeAreaView, Text, Modal } from 'react-native';
import styles from '../../styles/styles';
import HeaderText from '../common/HeaderText';
import AppButton from '../common/AppButton';
import { DISCLAIMER } from '../../utils/constants';
import deckStyles from '../../styles/deckStyles';
import { connect } from 'react-redux';
import { selectDeck } from './decksSlice';
import { confirmDisclaimer, logout } from '../../redux/userSlice';
import { setupNewGame } from '../game/gameSlice';

const mapState = (state) => ({
  decks: state.decks,
  user: state.user,
  cards: state.cards
});

const mapDispatch = { selectDeck, confirmDisclaimer, logout, setupNewGame };

class HomeScreen extends React.Component {
  componentDidMount() {
    // this.props.logout();
  }

  goToDeckSelection = () => this.props.navigation.navigate('DeckList');

  startNewGame = () => {
    const { navigation, setupNewGame, decks, cards } = this.props;
    setupNewGame(cards.byDeckId[decks.selectedId]);
    navigation.navigate('Game');
  };

  render() {
    const { user, decks, confirmDisclaimer } = this.props;

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
            <View style={styles.bottomPopupContent}>
              <Text style={styles.bold}>Disclaimer</Text>
              <Text>{DISCLAIMER}</Text>
              <View style={styles.rightButtonsView}>
                <AppButton
                  title="Okay"
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
