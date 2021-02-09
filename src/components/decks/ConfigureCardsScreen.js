import * as React from 'react';
import { ScrollView, View, TextInput, Animated, Easing } from 'react-native';
import AppButton from '../common/AppButton';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import LottieView from 'lottie-react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import IconButton from '../common/IconButton';
import { saveCard, selectCardToEdit } from './decksSlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  decks: state.decks
});

const mapDispatch = { selectCardToEdit, saveCard };

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

  componentDidUpdate() {
    const { navigation, route } = this.props;
    if (route.params.reloadCard) {
      navigation.setParams({ reloadCard: false });
      this.loadCard();
    }
  }

  loadCard = () => {
    const { editingCardIndex, editingCards } = this.props.decks;
    this.setState({ cardText: editingCards[editingCardIndex] });
  };

  onChangeText = (cardText) => this.setState({ cardText });

  goPreviousCard = () => this.goToCard(-1);
  goNextCard = () => this.goToCard(1);

  goToCard = (amountToAdd) => {
    const { selectCardToEdit, navigation, decks } = this.props;
    selectCardToEdit(decks.editingCardIndex + amountToAdd);
    navigation.navigate('ConfigureCards', { reloadCard: true });
  };

  resetCardText = () => this.loadCard();

  saveCard = () => {
    this.props.saveCard(this.state.cardText);
    this.animateSuccess();
  };

  deleteCard = () => {
    const { deleteCard, navigation, decks } = this.props;
    deleteCard(decks.editingCardIndex);
    navigation.navigate('Deck');
  };

  animateSuccess = () =>
    Animated.timing(this.state.tickProgress, {
      toValue: 1.5,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(this.resetSuccessAnimation);

  resetSuccessAnimation = () =>
    Animated.timing(this.state.tickProgress, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();

  _onHandlerStateChange = (event) => {
    // Only call functions once the user has finished swiping right or left a certain amount
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      const { editingCardIndex, editingCards } = this.props.decks;

      if (translationX > 50 && editingCardIndex !== 0) {
        this.goPreviousCard();
        return;
      }
      if (translationX < -50 && editingCardIndex !== editingCards.length) {
        this.goNextCard();
        return;
      }
    }
  };

  render() {
    const { editingCardIndex, editingCards } = this.props.decks;
    const { cardText } = this.state;

    return (
      <PanGestureHandler onHandlerStateChange={this._onHandlerStateChange}>
        <ScrollView style={styles.scrollContainer}>
          <LottieView
            source={require('../../../assets/5449-success-tick.json')}
            progress={this.state.tickProgress}
          />
          <View style={styles.topButtonsRow}>
            {editingCardIndex < editingCards.length && (
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
              disabled={editingCardIndex === 0}
            />
            <AppButton
              title=">"
              onPress={this.goNextCard}
              disabled={editingCardIndex === editingCards.length}
            />
          </View>
          <View style={[styles.buttonsRow, deckStyles.configButtonsRow]}>
            <AppButton
              title="Reset"
              onPress={this.resetCardText}
              disabled={cardText === editingCards[editingCardIndex]}
            />
            <AppButton title="Save" onPress={this.saveCard} />
          </View>
        </ScrollView>
      </PanGestureHandler>
    );
  }
}

export default connect(mapState, mapDispatch)(ConfigureCardsScreen);
