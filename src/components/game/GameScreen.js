import * as React from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import styles from '../../styles/styles';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import gameStyles from '../../styles/gameStyles';
import { connect } from 'react-redux';
import { playNewCard, showCard, startNewGame } from './gameSlice';

const mapState = (state) => ({
  game: state.game,
  decks: state.decks,
  cards: state.cards
});

const mapDispatch = { playNewCard, showCard, startNewGame };

class GameScreen extends React.Component {
  componentDidMount() {
    const { game } = this.props;

    if (!game.gameId) {
      const { startNewGame, decks, cards, navigation } = this.props;
      const { name } = decks.byId[decks.selectedId];

      startNewGame(cards.byDeckId[decks.selectedId]);
      navigation.setParams({ name });
      Alert.alert(
        'No pre-existing game.',
        `A new game with deck "${name}" has been started for you.`
      );
      return;
    }
  }
  playNextCard = () => {
    const { played, indexToShow } = this.props.game;
    // If it is currently on the most recently played card, then play new card, otherwise go to next index
    if (indexToShow == played.length - 1) {
      this.props.playNewCard();
      return;
    }

    this.props.showCard(indexToShow + 1);
  };

  seePreviousCard = () => this.props.showCard(this.props.game.indexToShow - 1);
  seeCurrentCard = () => this.props.showCard(this.props.game.played.length - 1);

  render() {
    const { played, indexToShow, drawPile } = this.props.game;

    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.section, gameStyles.cardTextSection]}>
          <AppText>{played[indexToShow]}</AppText>
        </View>
        <View style={[styles.section, gameStyles.cardButtonsSection]}>
          <View style={styles.buttonsRow}>
            <AppButton
              title="<"
              onPress={this.seePreviousCard}
              disabled={indexToShow === 0}
            />
            <AppButton
              title=">"
              onPress={this.playNextCard}
              disabled={drawPile.length === 0}
            />
          </View>
          <View style={[gameStyles.mostRecentButtonRow]}>
            {indexToShow < played.length - 1 && (
              <AppButton title="Most recent" onPress={this.seeCurrentCard} />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(GameScreen);
