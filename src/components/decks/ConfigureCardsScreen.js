import React from 'react';
import { ScrollView, View, TextInput, Animated, Keyboard } from 'react-native';
import AppButton from '../common/AppButton';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import LottieView from 'lottie-react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import IconButton from '../common/IconButton';
import { saveCard, deleteCard, selectCardToEdit } from './cardsSlice';
import { connect } from 'react-redux';
import { animateSuccess } from '../../utils/helpers';

const mapState = (state) => ({
  decks: state.decks,
  cards: state.cards
});

const mapDispatch = { saveCard, deleteCard, selectCardToEdit };

class ConfigureCardsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardText: '',
      tickProgress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.loadCard();
  }

  loadCard = (cardIndex) => {
    const { decks, cards } = this.props;
    const editingCardIndex = cardIndex ?? cards.editingCardIndex;
    const editingCards = cards.byDeckId[decks.editingDeckId];

    this.setState({
      cardText:
        editingCardIndex < editingCards.length
          ? editingCards[editingCardIndex]
          : ''
    });
  };

  onChangeText = (cardText) => this.setState({ cardText });

  goPreviousCard = () => this.goToCard(-1);
  goNextCard = () => this.goToCard(1);

  goToCard = (amountToAdd) => {
    const { selectCardToEdit, decks, cards } = this.props;
    const nextIndex = cards.editingCardIndex + amountToAdd;

    if (
      nextIndex < 0 ||
      nextIndex > cards.byDeckId[decks.editingDeckId].length
    ) {
      return;
    }

    Keyboard.dismiss();
    selectCardToEdit(nextIndex);
    this.loadCard(nextIndex);
  };

  resetCardText = () => {
    this.loadCard();
    Keyboard.dismiss();
  };

  saveCard = () => {
    const { saveCard, decks, cards } = this.props;
    saveCard({
      cardText: this.state.cardText,
      deckId: decks.editingDeckId,
      cardIndex: cards.editingCardIndex
    });
    Keyboard.dismiss();
    animateSuccess(this.state.tickProgress);
  };

  deleteCard = () => {
    const { deleteCard, navigation, decks, cards } = this.props;
    deleteCard({
      deckId: decks.editingDeckId,
      cardIndex: cards.editingCardIndex
    });
    navigation.navigate('Deck');
  };

  _onHandlerStateChange = (event) => {
    // Only call functions once the user has finished swiping right or left a certain amount
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      const { decks, cards, editingCardIndex } = this.props;

      if (translationX > 50 && editingCardIndex !== 0) {
        this.goPreviousCard();
        return;
      }
      if (
        translationX < -50 &&
        editingCardIndex !== cards.byDeckId[decks.editingDeckId].length
      ) {
        this.goNextCard();
        return;
      }
    }
  };

  render() {
    const { decks, cards } = this.props;
    const { cardText } = this.state;
    const editingCards = cards.byDeckId[decks.editingDeckId];

    return (
      <PanGestureHandler onHandlerStateChange={this._onHandlerStateChange}>
        <ScrollView
          style={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <LottieView
            source={require('../../../assets/5449-success-tick.json')}
            progress={this.state.tickProgress}
          />
          <View style={styles.topButtonsRow}>
            {cards.editingCardIndex < editingCards.length && (
              <IconButton
                onPress={this.deleteCard}
                iconName="trash-o"
                size={30}
                opacity={0.5}
              />
            )}
          </View>
          <TextInput
            style={deckStyles.configCardInput}
            onChangeText={this.onChangeText}
            value={cardText}
            placeholder="Who drinks? Maybe a quick game can help decide?"
            multiline={true}
          />
          <View style={[styles.buttonsRow, deckStyles.configButtonsRow]}>
            <AppButton
              title="<"
              onPress={this.goPreviousCard}
              disabled={cards.editingCardIndex === 0}
            />
            <AppButton
              title=">"
              onPress={this.goNextCard}
              disabled={cards.editingCardIndex === editingCards.length}
            />
          </View>
          <View style={[styles.buttonsRow, deckStyles.configButtonsRow]}>
            <AppButton
              title="Reset"
              onPress={this.resetCardText}
              disabled={
                cardText === (editingCards[cards.editingCardIndex] ?? '')
              }
            />
            <AppButton title="Save" onPress={this.saveCard} />
          </View>
        </ScrollView>
      </PanGestureHandler>
    );
  }
}

export default connect(mapState, mapDispatch)(ConfigureCardsScreen);
