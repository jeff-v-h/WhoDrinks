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

const mapState = (state) => ({
  community: state.community
});

const mapDispatch = { getCommunityDeck, saveDeck };

class CommunityDeckScreen extends React.Component {
  constructor(props) {
    super(props);

    this.fetchDeck = this.fetchDeck.bind(this);
    this.previewCard = this.previewCard.bind(this);
  }

  componentDidMount() {
    this.fetchDeck();
  }

  saveDeck = async (id) => {
    // this.saveDeck(id)
  };

  fetchDeck() {
    const { community, getCommunityDeck } = this.props;
    getCommunityDeck(community.selectedId);
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
              <AppText style={communityStyles.deckHeader}>
                {community.deck.name}
              </AppText>
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
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckScreen);
