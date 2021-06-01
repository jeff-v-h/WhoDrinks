import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Alert,
  TextInput,
  Animated
} from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import ListLinkRow from '../common/ListLinkRow';
import { saveDeck } from '../decks/decksSlice';
import { getCommunityDeck } from './communitySlice';
import { connect } from 'react-redux';
import { RequestStatusEnum } from '../../utils/enums';
import SpinnerOverlay from '../common/SpinnerOverlay';
import AppButton from '../common/AppButton';
import AppText from '../common/AppText';
import DeckListHeader from './DeckListHeader';
import ObjectId from 'bson-objectid';
import RequestErrorScreen from './RequestErrorScreen';
import LottieView from 'lottie-react-native';
import { animateSuccess } from '../../utils/helpers';
import Modal from '../common/Modal';

const mapState = (state) => ({
  community: state.community,
  decks: state.decks,
  isConnected: state.network.isConnected
});

const mapDispatch = { getCommunityDeck, saveDeck };

const initialState = {
  nameModalVisible: false,
  attemptedDeckName: '',
  deckName: '',
  tickProgress: new Animated.Value(0)
};

class CommunityDeckScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };

    this.fetchDeck = this.fetchDeck.bind(this);
    this.saveDeck = this.saveDeck.bind(this);
    this.previewCard = this.previewCard.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeDeckName = this.onChangeDeckName.bind(this);
  }

  componentDidMount() {
    this.fetchDeck();
  }

  fetchDeck() {
    const { community, getCommunityDeck } = this.props;
    getCommunityDeck(community.selectedId);
  }

  saveDeck() {
    const { saveDeck, community, decks } = this.props;
    const names = Object.keys(decks.byId).map((key) => decks.byId[key].name);
    const name =
      this.state.deckName.trim() !== ''
        ? this.state.deckName
        : community.deck.name;

    if (names.includes(name)) {
      const deckName = this.suggestNewDeckName(names, name);
      this.setState({
        nameModalVisible: true,
        attemptedDeckName: name,
        deckName
      });
      return;
    }

    const newDeck = {
      ...community.deck,
      name,
      id: ObjectId().toHexString()
    };

    saveDeck(newDeck);
    this.setState({ ...initialState }, () =>
      animateSuccess(this.state.tickProgress)
    );
  }

  suggestNewDeckName = (names, currentName) => {
    let count = 1;
    let name;

    do {
      count++;
      name = currentName + count;
    } while (names.includes(name));

    return name;
  };

  onChangeDeckName(deckName) {
    this.setState({ deckName });
  }

  closeModal() {
    this.setState({ nameModalVisible: false });
  }

  previewCard(index) {
    const cardText = this.props.community.deck.cards[index];
    Alert.alert(null, cardText, null, { cancelable: true });
  }

  render() {
    const { community, isConnected } = this.props;
    const isLoading = community.status === RequestStatusEnum.loading;

    if (community.error || (community.deck.cards.length < 1 && !isConnected)) {
      return (
        <RequestErrorScreen
          error={!isConnected ? '' : community.error}
          text={
            !isConnected
              ? 'You are not connected to the internet'
              : 'Unable to get data'
          }
          onPress={this.fetchDeck}
          isLoading={isLoading}
        />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <LottieView
            source={require('../../../assets/5449-success-tick.json')}
            progress={this.state.tickProgress}
          />
          <FlatList
            data={community.deck.cards}
            ListHeaderComponent={
              <DeckListHeader
                text={community.deck.name}
                onPress={this.saveDeck}
              />
            }
            ListHeaderComponentStyle={communityStyles.deckListHeader}
            renderItem={({ item, index }) => (
              <ListLinkRow
                onPress={() => this.previewCard(index)}
                viewStyle={[styles.listRow, styles.paddedRow]}
              >
                <Text style={styles.itemText} numberOfLines={2}>
                  {item}
                </Text>
              </ListLinkRow>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Modal visible={this.state.nameModalVisible} dismiss={this.closeModal}>
          <View style={styles.inputModalContent}>
            <View style={styles.inputModalDetails}>
              <AppText style={styles.inputModalDetailsText}>
                You already have a deck named "{this.state.attemptedDeckName}
                ". Please provide another name.
              </AppText>
            </View>
            <TextInput
              style={styles.modalInput}
              value={this.state.deckName}
              onChangeText={this.onChangeDeckName}
              multiline={true}
              maxLength={60}
            />
            <View style={styles.buttonsRow}>
              <AppButton title="Cancel" onPress={this.closeModal} />
              <AppButton title="Save" onPress={this.saveDeck} />
            </View>
          </View>
        </Modal>
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckScreen);
