import * as React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
  Text,
  Platform,
  Modal
} from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import ListLinkRow from '../common/ListLinkRow';
import IconButton from '../common/IconButton';
import { GameTypesEnum } from '../../utils/enums';
import Menu, { MenuItem } from 'react-native-material-menu';
import AppButton from '../common/AppButton';
import ObjectId from 'bson-objectid';
import { saveDeck, deleteDeck, selectDeckToEdit } from './decksSlice';
import { selectCardToEdit } from './cardsSlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  decks: state.decks,
  cards: state.cards
});

const mapDispatch = {
  saveDeck,
  deleteDeck,
  selectDeckToEdit,
  selectCardToEdit
};

class DeckScreen extends React.Component {
  state = {
    selection: Platform.OS === 'android' ? { start: 0 } : null,
    modalVisible: false,
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

  setModalVisible = (visible) => this.setState({ modalVisible: visible });

  openEditModal = () => {
    this.setModalVisible(true);
    this.hideMenu();
  };

  onChangeDeckName = (deckName) => this.setState({ deckName });

  saveDeckName = () => {
    const { decks, saveDeck } = this.props;
    const deck = decks.byId[decks.editingDeckId];

    if (deck.name !== this.state.deckName) {
      saveDeck({ ...deck, name: this.state.deckName });
    }

    this.setModalVisible(false);
  };
  //#endregion

  confirmDelete = () => {
    const { decks, deleteDeck, navigation } = this.props;
    if (decks.selectedId === decks.editingDeckId) {
      Alert.alert('', 'Cannot delete a selected deck');
      return;
    }

    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to permanently remove this deck from your device?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            this.setModalVisible(false);
            this.hideMenu();
          }
        },
        {
          text: 'Delete',
          onPress: () => {
            deleteDeck(decks.editingDeckId);
            navigation.navigate('DeckList');
          }
        }
      ]
    );
  };

  navigateToCard = (cardIndex) => {
    const { navigation, decks, cards, selectCardToEdit } = this.props;
    selectCardToEdit(cardIndex ?? cards.byDeckId[decks.editingDeckId].length);
    navigation.navigate('ConfigureCards');
  };

  render() {
    const { deckName, selection, modalVisible } = this.state;
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
            <Menu
              ref={this.setMenuRef}
              button={
                <IconButton
                  onPress={this.showMenu}
                  iconName="ellipsis-v"
                  size={24}
                  opacity={0.5}
                />
              }
            >
              <MenuItem onPress={this.openEditModal}>Edit Name</MenuItem>
              <MenuItem onPress={this.confirmDelete}>Delete</MenuItem>
            </Menu>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <View style={deckStyles.modalView}>
            <View style={deckStyles.modalContent}>
              <TextInput
                style={deckStyles.titleInput}
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
                  onPress={() => this.setModalVisible(false)}
                />
                <AppButton title="Save" onPress={this.saveDeckName} />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.list}>
          <FlatList
            data={cards.byDeckId[decks.editingDeckId]}
            renderItem={({ item, index }) => (
              <ListLinkRow
                onPress={() => this.navigateToCard(index)}
                viewStyle={[deckStyles.listRow, deckStyles.deckListRow]}
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
          buttonStyle={styles.IconButton}
          iconStyle={styles.floatingActionIcon}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(DeckScreen);
