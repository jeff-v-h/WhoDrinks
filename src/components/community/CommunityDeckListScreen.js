import * as React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import ListLinkRow from '../common/ListLinkRow';
import { saveDeck } from '../decks/decksSlice';
import { getCommunityDecks } from './communitySlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  community: state.community
});

const mapDispatch = { saveDeck, getCommunityDecks };

class CommunityDeckListScreen extends React.Component {
  componentDidMount() {
    this.props.getCommunityDecks();
  }

  previewDeck = (id) => {
    const { navigation } = this.props;
    previewDeck(id);
    navigation.navigate('PreviewDeck');
  };

  render() {
    const { community } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={community.allIds}
            renderItem={({ item: id }) => (
              <ListLinkRow
                onPress={() => this.previewDeck(id)}
                text={community.byId[id].name}
                viewStyle={deckStyles.listRow}
              >
                <Text style={styles.itemText} numberOfLines={1}>
                  {community.byId[id].name}
                </Text>
              </ListLinkRow>
            )}
            keyExtractor={(id) => id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckListScreen);
