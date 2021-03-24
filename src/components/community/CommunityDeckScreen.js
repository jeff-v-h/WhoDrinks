import * as React from 'react';
import { View, SafeAreaView, FlatList, Text, Alert } from 'react-native';
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
import IconButton from '../common/IconButton';
import ObjectId from 'bson-objectid';

const mapState = (state) => ({
  community: state.community,
  decks: state.decks
});

const mapDispatch = { getCommunityDeck, saveDeck };

const initialState = {
  nameModalVisible: false,
  attemptedDeckName: '',
  deckName: ''
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

    if (names.contains(community.deck.name)) {
      const deckName = this.suggestNewDeckName(names, community.deck.name);
      this.setState({
        nameModalVisible: true,
        attemptedDeckName: community.deck.name,
        deckName
      });
      return;
    }

    const newDeck = {
      ...community.deck,
      id: ObjectId().toHexString()
    };
    if (this.state.deckName) {
      newDeck.name = this.state.deckName;
    }

    saveDeck(newDeck);
    this.setState({ ...initialState });
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

  closeModal() {
    this.setState({ nameModalVisible: false });
  }

  previewCard(index) {
    const cardText = this.props.community.deck.cards[index];
    Alert.alert(null, cardText, null, { cancelable: true });
  }

  render() {
    const { community } = this.props;
    const isLoading = community.status === RequestStatusEnum.loading;

    if (community.error) {
      return (
        <View style={styles.container}>
          <View style={styles.section}>
            <AppText>Unable to get data</AppText>
            {community.error.includes('Network Error') && (
              <View style={communityStyles.networkErrorView}>
                <AppText>There was a network error</AppText>
              </View>
            )}
          </View>
          <View style={styles.section}>
            <AppButton
              title="Try Again"
              onPress={this.fetchDeck}
              disabled={isLoading}
            />
          </View>
          <SpinnerOverlay show={isLoading} />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={community.deck.cards}
            ListHeaderComponent={
              <View style={communityStyles.titleRow}>
                <AppText style={communityStyles.deckHeader}>
                  {community.deck.name}
                </AppText>
                <View style={communityStyles.downloadButtonWrapper}>
                  <IconButton
                    onPress={this.saveDeck}
                    iconName="download"
                    size={24}
                    opacity={0.5}
                  />
                </View>
              </View>
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.nameModalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={styles.inputModalView}>
            <View style={styles.inputModalContent}>
              <Text>
                You already have a deck named {this.state.attemptedDeckName}.
              </Text>
              <Text>Please provide another name.</Text>
              <TextInput
                style={styles.modalInput}
                value={this.state.deckName}
                onChangeText={this.onChangeDeckName}
                // onFocus={this.onFocus}
                // onBlur={this.onBlur}
                // selection={selection}
                multiline={true}
                maxLength={60}
              />
              <View style={styles.buttonsRow}>
                <AppButton title="Cancel" onPress={this.closeModal} />
                <AppButton title="Save" onPress={this.saveDeck} />
              </View>
            </View>
          </View>
        </Modal>
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckScreen);
