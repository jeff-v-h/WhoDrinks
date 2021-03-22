import * as React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import ListLinkRow from '../common/ListLinkRow';
import { saveDeck } from '../decks/decksSlice';
import { getCommunityDecks } from './communitySlice';
import { connect } from 'react-redux';
import { RequestStatusEnum } from '../../utils/enums';
import SpinnerOverlay from '../common/SpinnerOverlay';
import AppButton from '../common/AppButton';
import AppText from '../common/AppText';

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

  fetchCommunityDecks = () => {
    this.props.getCommunityDecks();
  };

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
              onPress={this.fetchCommunityDecks}
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
            data={community.allIds}
            renderItem={({ item: id }) => (
              <ListLinkRow
                onPress={() => this.previewDeck(id)}
                text={community.byId[id].name}
                viewStyle={communityStyles.listRow}
              >
                <Text style={styles.itemText} numberOfLines={1}>
                  {community.byId[id].name}
                </Text>
              </ListLinkRow>
            )}
            keyExtractor={(id) => id}
          />
        </View>
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckListScreen);
