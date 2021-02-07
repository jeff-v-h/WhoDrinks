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
import uuid from 'uuid';
import { createDeck, updateDeck, deleteDeck } from './decksSlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  decks: state.decks
});

const mapDispatch = { createDeck, updateDeck, deleteDeck };

class DeckScreen extends React.Component {
  state = {
    selection: Platform.OS === 'android' ? { start: 0 } : null,
    modalVisible: false,
    deck: {
      id: '',
      name: '',
      cards: []
    },
    deckName: ''
  };

  componentDidMount() {
    this.loadDeck();
  }

  // componentDidUpdate() {
  //   const { navigation, route } = this.props;
  //   if (route.params.reloadDeck) {
  //     this.loadDeck();
  //     navigation.setParams({ reloadDeck: false });
  //   }
  // }

  loadDeck = () => {
    const { decks, route } = this.props;
    const deck = route.params.deckId
      ? decks.list.find((d) => d.id == route.params.deckId)
      : this.createNewDeck();

    this.setState({ deck, deckName: deck.name });
  };

  createNewDeck = () => {
    const newDeck = {
      id: uuid.v1(),
      name: this.getAvailableDeckName(),
      cards: [],
      type: GameTypesEnum.custom
    };
    this.props.createDeck(newDeck);
    return newDeck;
  };

  getAvailableDeckName = () => {
    let name = 'My New Deck';
    let count = 0;
    while (this.props.decks.list.findIndex((d) => d.name === name) > -1) {
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
    const { deck, deckName } = this.state;

    if (deck.name === deckName) {
      this.setModalVisible(false);
      return;
    }

    const newDeck = { ...deck, name: deckName };
    this.props.updateDeck(newDeck);
    this.setState({ deck: newDeck, modalVisible: false });
  };
  //#endregion

  confirmDelete = async () => {
    const { decks, deleteDeck, navigation } = this.props;
    if (decks.selectedId === this.state.deck.id) {
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
            deleteDeck(this.state.deck.id);
            navigation.navigate('DeckList');
          }
        }
      ]
    );
  };

  navigateToCard = (cardIndex) => {
    this.props.navigation.navigate('ConfigureCards', {
      deckId: this.state.deckId,
      cardIndex
    });
  };

  render() {
    const { deck, deckName, selection, modalVisible } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={deckStyles.titleRow}>
          <View style={deckStyles.titleView}>
            <Text style={deckStyles.title} numberOfLines={1}>
              {deck.name}
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
            data={deck.cards}
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
