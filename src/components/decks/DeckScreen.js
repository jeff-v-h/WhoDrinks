import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  Platform
} from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import ListLinkRow from '../common/ListLinkRow';
import IconButton from '../common/IconButton';
import { GameTypesEnum } from '../../utils/enums';
import DeckEditMenu from './DeckEditMenu';
import AppButton from '../common/AppButton';
import AppText from '../common/AppText';
import ObjectId from 'bson-objectid';
import {
  saveDeck,
  deleteDeck,
  selectDeckToEdit
  // postCreateDeck
} from './decksSlice';
import { selectCardToEdit } from './cardsSlice';
import { connect } from 'react-redux';
import Modal from '../common/Modal';

const mapState = (state) => ({
  decks: state.decks,
  cards: state.cards
  // user: state.user
});

const mapDispatch = {
  saveDeck,
  deleteDeck,
  selectDeckToEdit,
  selectCardToEdit
  // postCreateDeck
};

class DeckScreen extends React.Component {
  state = {
    selection: Platform.OS === 'android' ? { start: 0 } : null,
    modalVisible: false,
    deleteModalVisible: false,
    cannotDeleteModalVisible: false,
    communityInfoModalVisible: false,
    deckName: ''
  };

  componentDidMount() {
    this.loadDeck();
  }

  loadDeck = () => {
    const { decks, selectDeckToEdit } = this.props;
    const deck = decks.editingDeckId
      ? decks.byId[decks.editingDeckId]
      : this.createNewDeck();

    if (!decks.editingDeckId) {
      selectDeckToEdit(deck.id);
    }

    this.setState({ deckName: deck.name });
  };

  createNewDeck = () => {
    const newDeck = {
      id: ObjectId(),
      name: this.getAvailableDeckName(),
      cards: [],
      tags: [GameTypesEnum.custom]
    };
    this.props.saveDeck(newDeck);
    return newDeck;
  };

  getAvailableDeckName = () => {
    const { decks } = this.props;
    const names = Object.keys(decks.byId).map((key) => decks.byId[key].name);
    let name = 'My New Deck';
    let count = 1;

    while (names.includes(name)) {
      count++;
      name = 'My New Deck ' + count;
    }

    return name;
  };

  uploadDeck = () => {
    this.setModalVisible('communityInfoModalVisible', true);
    // const { postCreateDeck, decks, user, cards } = this.props;
    // const deckToPost = {
    //   ...decks.byId[decks.editingDeckId],
    //   cards: cards.byDeckId[decks.editingDeckId],
    //   userId: ObjectId().toHexString()
    // };
    // this.hideMenu();
    // await postCreateDeck(deckToPost);
  };

  //#region dropdown menu
  _menu = null;
  setMenuRef = (ref) => (this._menu = ref);
  showMenu = () => this._menu.show();
  hideMenu = () => this._menu.hide();
  //#endregion

  //#region modal
  onFocus = () => {
    if (Platform.OS === 'android') {
      this.setState({ selection: null });
    }
  };

  onBlur = () => {
    if (Platform.OS === 'android') {
      this.setState({ selection: { start: 0, end: 0 } });
    }
  };

  setModalVisible = (property, visible) =>
    this.setState({ [property]: visible });

  openEditModal = () => {
    this.setModalVisible('modalVisible', true);
    this.hideMenu();
  };

  onChangeDeckName = (deckName) => this.setState({ deckName });

  saveDeckName = () => {
    const { decks, saveDeck } = this.props;
    const deck = decks.byId[decks.editingDeckId];

    if (deck.name !== this.state.deckName) {
      saveDeck({ ...deck, name: this.state.deckName });
    }

    this.setModalVisible('modalVisible', false);
  };
  //#endregion

  confirmDelete = () => {
    const { decks } = this.props;
    const property =
      decks.selectedId === decks.editingDeckId
        ? 'cannotDeleteModalVisible'
        : 'deleteModalVisible';
    this.setModalVisible(property, true);
  };

  deleteDeck = () => {
    const { decks, deleteDeck, navigation } = this.props;
    deleteDeck(decks.editingDeckId);
    navigation.navigate('DeckList');
  };

  navigateToCard = (cardIndex) => {
    const { navigation, decks, cards, selectCardToEdit } = this.props;
    selectCardToEdit(cardIndex ?? cards.byDeckId[decks.editingDeckId].length);
    navigation.navigate('ConfigureCards');
  };

  render() {
    const {
      deckName,
      selection,
      modalVisible,
      deleteModalVisible,
      cannotDeleteModalVisible,
      communityInfoModalVisible
    } = this.state;
    const { decks, cards } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={deckStyles.titleRow}>
          <View style={deckStyles.titleView}>
            <Text style={deckStyles.title} numberOfLines={1}>
              {decks.byId[decks.editingDeckId]?.name ?? ''}
            </Text>
          </View>
          <View style={deckStyles.menuWrapper}>
            <DeckEditMenu
              menuRef={this.setMenuRef}
              onPressMenu={this.showMenu}
              onPressEdit={this.openEditModal}
              onPressUpload={this.uploadDeck}
              onPressDelete={this.confirmDelete}
            />
          </View>
        </View>
        <Modal
          visible={modalVisible}
          dismiss={() => this.setModalVisible('modalVisible', false)}
        >
          <View style={styles.inputModalContent}>
            <TextInput
              style={styles.modalInput}
              value={deckName}
              onChangeText={this.onChangeDeckName}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              selection={selection}
              multiline={true}
              maxLength={60}
            />
            <View style={styles.buttonsRow}>
              <AppButton
                title="Cancel"
                onPress={() => this.setModalVisible('modalVisible', false)}
              />
              <AppButton title="Save" onPress={this.saveDeckName} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={deleteModalVisible}
          dismiss={() => this.setModalVisible('deleteModalVisible', false)}
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragaph}>
              Are you sure you want to permanently remove this deck from your
              device?
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton
                title="Cancel"
                onPress={() =>
                  this.setModalVisible('deleteModalVisible', false)
                }
              />
              <AppButton title="Delete" onPress={this.deleteDeck} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={cannotDeleteModalVisible}
          dismiss={() =>
            this.setModalVisible('cannotDeleteModalVisible', false)
          }
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragaph}>
              Cannot delete a selected deck.
            </AppText>
            <AppText style={styles.paragaph}>
              Please set another deck on the "Deck List" screen as the
              'selected' deck before deleting this one.
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton
                title="Ok"
                onPress={() =>
                  this.setModalVisible('cannotDeleteModalVisible', false)
                }
              />
            </View>
          </View>
        </Modal>
        <Modal
          visible={communityInfoModalVisible}
          dismiss={() =>
            this.setModalVisible('communityInfoModalVisible', false)
          }
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragaph}>
              Online community not yet available!
            </AppText>
            <AppText style={styles.paragaph}>
              Feel free to hit the top right menu and go to the "Contact Us"
              section to let us know if you would like to share decks you've
              made with friends or an online community!
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton
                title="Ok"
                onPress={() =>
                  this.setModalVisible('communityInfoModalVisible', false)
                }
              />
            </View>
          </View>
        </Modal>
        <View style={styles.list}>
          <FlatList
            data={cards.byDeckId[decks.editingDeckId]}
            renderItem={({ item, index }) => (
              <ListLinkRow
                onPress={() => this.navigateToCard(index)}
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
        <IconButton
          onPress={() => this.navigateToCard()}
          buttonStyle={styles.floatingIconButton}
          iconStyle={styles.floatingActionIcon}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(DeckScreen);
