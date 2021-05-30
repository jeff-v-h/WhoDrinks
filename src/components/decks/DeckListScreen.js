import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import IconButton from '../common/IconButton';
import { selectDeck, selectDeckToEdit } from './decksSlice';
import { connect } from 'react-redux';
import DeckListRow from './DeckListRow';

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

  navigateToDeck = (id) => {
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
              <Text style={deckStyles.selectedHeading}>Selected</Text>
            }
            ListHeaderComponentStyle={deckStyles.deckListHeader}
            renderItem={({ item }) => (
              <DeckListRow
                deckName={decks.byId[item].name}
                isSelected={item === decks.selectedId}
                rowOnPress={() => this.selectDeck(item)}
                editOnPress={() => this.navigateToDeck(item)}
              />
            )}
            keyExtractor={(item) => decks.byId[item].name}
          />
        </View>
        <IconButton
          onPress={() => this.navigateToDeck()}
          buttonStyle={styles.floatingIconButton}
          iconStyle={styles.floatingActionIcon}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(DeckListScreen);
