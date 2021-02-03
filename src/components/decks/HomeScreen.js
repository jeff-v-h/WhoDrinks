import * as React from 'react';
import { View, SafeAreaView, Text, Modal } from 'react-native';
import styles from '../../styles/styles';
import HeaderText from '../common/HeaderText';
import AppButton from '../common/AppButton';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';
import { DISCLAIMER } from '../../utils/constants';
import deckStyles from '../../styles/deckStyles';
import { connect } from 'react-redux';
import { createDeck, selectDeck } from '../../redux/decksSlice';
import { confirmDisclaimer } from '../../redux/userSlice';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.loadSelectedDeck();
  }

  componentDidUpdate() {
    const { route, navigation } = this.props;
    // if (route.params?.reloadSelection) {
    //   // const { selectedId, selectedName } = route.params;
    //   navigation.setParams({ reloadSelection: false });
    // }
  }

  loadSelectedDeck = () => {
    // await StorageService.clearAllData();
    const { selectDeck, decks } = this.props;
    if (decks.list.length > 0 && !decks.selectedId) {
      selectDeck(decks.list[0].id);
    }

    if (decks.list.length === 0) {
      this.firstTimeSetup();
    }
  };

  firstTimeSetup = () => {
    const { createDeck, selectDeck } = this.props;
    console.log('first time setup');
    createDeck(standardDeck);
    createDeck(asianDeck);
    selectDeck(standardDeck.id);
  };

  goToDeckSelection = () => {
    const { selectedId, selectedName } = this.props.decks;
    this.props.navigation.navigate('DeckList', {
      selectedDeckId: selectedId,
      selectedDeckName: selectedName
    });
  };

  render() {
    const { navigation, user, decks, confirmDisclaimer } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <HeaderText text="Don't Think" />
          <HeaderText text="Just Drink" />
        </View>
        <View style={deckStyles.selectDeckView}>
          <Text style={styles.text}>Deck:</Text>
          <AppButton
            title={decks.selectedName}
            onPress={this.goToDeckSelection}
            style={deckStyles.selectDeckButton}
            textStyle={deckStyles.selectDeckText}
            numberOfLines={1}
          />
        </View>
        <View style={styles.section}>
          <AppButton
            title="Start Game"
            onPress={() =>
              navigation.navigate('Game', {
                screen: 'Game',
                params: {
                  deckId: decks.selectedId,
                  deckName: decks.selectedName,
                  newGame: true
                }
              })
            }
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

const mapState = (state) => ({
  decks: state.decks,
  user: state.user
});

const mapDispatch = { createDeck, selectDeck, confirmDisclaimer };

export default connect(mapState, mapDispatch)(HomeScreen);
