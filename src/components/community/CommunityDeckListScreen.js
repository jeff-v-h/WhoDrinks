import * as React from 'react';
import { View, SafeAreaView, FlatList, Text, Alert } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import ListLinkRow from '../common/ListLinkRow';
import { getCommunityDecks, previewDeck } from './communitySlice';
import { postUserFeedback } from '../../redux/userSlice';
import { connect } from 'react-redux';
import { RequestStatusEnum } from '../../utils/enums';
import SpinnerOverlay from '../common/SpinnerOverlay';
import RequestErrorScreen from './RequestErrorScreen';
import IconButton from '../common/IconButton';
import { WOULD_LIKE_COMMUNITY_DECK_SHARE } from '../../utils/constants';

const mapState = (state) => ({
  community: state.community,
  user: state.user
});

const mapDispatch = { getCommunityDecks, previewDeck, postUserFeedback };

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

  uploadDeck = () => {
    Alert.alert(
      'Deck sharing not yet available!',
      'Would you like to be able to share and use decks that other people have made?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
          // onPress: () => this.props.dismissUpdate()
        },
        {
          text: 'Yes',
          onPress: () =>
            this.props.postUserFeedback({
              feedback: WOULD_LIKE_COMMUNITY_DECK_SHARE
            })
        }
      ],
      { cancelable: true }
    );
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
        <IconButton
          onPress={this.uploadDeck}
          iconName="upload"
          buttonStyle={styles.IconButton}
          iconStyle={styles.floatingActionIcon}
        />
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckListScreen);
