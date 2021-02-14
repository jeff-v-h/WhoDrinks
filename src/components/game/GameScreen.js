import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import gameStyles from '../../styles/gameStyles';
import { connect } from 'react-redux';
import { playNewCard, showCard } from './gameSlice';

const mapState = (state) => ({
  game: state.game
});

const mapDispatch = { playNewCard, showCard };

class GameScreen extends React.Component {
  componentDidMount() {
    this.startGame();
  }

  startGame = () => this.props.playNewCard();

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
    const { played, cardIndexToShow, cardPile } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.section, gameStyles.cardTextSection]}>
          <AppText>{played[cardIndexToShow]}</AppText>
        </View>
        <View style={[styles.section, gameStyles.cardButtonsSection]}>
          <View style={styles.buttonsRow}>
            <AppButton
              title="<"
              onPress={() => this.seePreviousCard()}
              disabled={cardIndexToShow === 0}
            />
            <AppButton
              title=">"
              onPress={() => this.playNextCard()}
              disabled={cardPile.length === 0}
            />
          </View>
          <View style={[gameStyles.mostRecentButtonRow]}>
            {cardIndexToShow < played.length - 1 && (
              <AppButton
                title="Most recent"
                onPress={() => this.seeCurrentCard()}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(GameScreen);
