import * as React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import ListLinkRow from '../common/ListLinkRow';
import IconButton from '../common/IconButton';
import { selectDeck, selectDeckToEdit } from './decksSlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  decks: state.decks
});

const mapDispatch = { selectDeck, selectDeckToEdit };

class DeckListScreen extends React.Component {
  selectDeck = (id) => {
    const { decks, selectDeck } = this.props;
    if (decks.selectedId !== id) {
      selectDeck(id);
    }
  };

  navigateToDeck = (id) => () => {
    const { navigation, selectDeckToEdit } = this.props;
    selectDeckToEdit(id ?? '');
    navigation.navigate('Deck');
  };

  render() {
    const { decks } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={decks.allIds}
            ListHeaderComponent={
              <Text style={deckStyles.currentlySelectedHeading}>Selected</Text>
            }
            ListHeaderComponentStyle={deckStyles.deckListHeader}
            renderItem={({ item }) => (
              <ListLinkRow
                onPress={() => this.selectDeck(item)}
                text={decks.byId[item].name}
                viewStyle={deckStyles.listRow}
              >
                <View style={deckStyles.selectedCol}>
                  {item === decks.selectedId && (
                    <IconButton
                      iconName="check"
                      buttonStyle={deckStyles.selectedIcon}
                    />
                  )}
                </View>
                <Text style={styles.itemText} numberOfLines={1}>
                  {decks.byId[item].name}
                </Text>
                <IconButton
                  iconName="edit"
                  onPress={this.navigateToDeck(item)}
                  size={24}
                  buttonStyle={deckStyles.editDeck}
                />
              </ListLinkRow>
            )}
            keyExtractor={(item) => decks.byId[item].name}
          />
        </View>
        <IconButton
          onPress={this.navigateToDeck()}
          buttonStyle={styles.IconButton}
          iconStyle={styles.floatingActionIcon}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(DeckListScreen);
