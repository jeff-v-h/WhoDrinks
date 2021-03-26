import * as React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import ListLinkRow from '../common/ListLinkRow';
import { getCommunityDecks, previewDeck } from './communitySlice';
import { connect } from 'react-redux';
import { RequestStatusEnum } from '../../utils/enums';
import SpinnerOverlay from '../common/SpinnerOverlay';
import RequestErrorScreen from './RequestErrorScreen';

const mapState = (state) => ({
  community: state.community
});

const mapDispatch = { getCommunityDecks, previewDeck };

class CommunityDeckListScreen extends React.Component {
  componentDidMount() {
    this.fetchCommunityDecks();
  }

  fetchCommunityDecks = () => this.props.getCommunityDecks();

  previewDeck = (id) => {
    const { navigation, previewDeck } = this.props;
    previewDeck(id);
    navigation.navigate('CommunityDeck');
  };

  render() {
    const { community } = this.props;
    const isLoading = community.status === RequestStatusEnum.loading;

    if (community.error) {
      return (
        <RequestErrorScreen
          error={community.error}
          onPress={this.fetchCommunityDecks}
          isLoading={isLoading}
        />
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
