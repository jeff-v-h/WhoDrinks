import React from 'react';
import { View, SafeAreaView, FlatList, Text, Alert } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import ListLinkRow from '../common/ListLinkRow';
import { getCommunityDecks, previewDeck } from './communitySlice';
import { postUserFeedback, resetFeedbackEnqueued } from '../../redux/userSlice';
import { connect } from 'react-redux';
import { RequestStatusEnum } from '../../utils/enums';
import SpinnerOverlay from '../common/SpinnerOverlay';
import RequestErrorScreen from './RequestErrorScreen';
import IconButton from '../common/IconButton';
import { WOULD_LIKE_COMMUNITY_DECK_SHARE } from '../../utils/constants';

const mapState = (state) => ({
  community: state.community,
  feedbackEnqueued: state.user.feedbackEnqueued,
  isConnected: state.network.isConnected
});

const mapDispatch = {
  getCommunityDecks,
  previewDeck,
  postUserFeedback,
  resetFeedbackEnqueued
};

class CommunityDeckListScreen extends React.Component {
  componentDidMount() {
    if (this.props.isConnected || this.props.community.allIds.length < 1) {
      this.fetchCommunityDecks();
    }
  }

  componentDidUpdate() {
    if (this.props.feedbackEnqueued) {
      this.showEnqueuedMessage();
    }
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

  showEnqueuedMessage = () => {
    Alert.alert(
      'Unable to send right now',
      'Your feedback will be sent once you are able to connect to our servers.',
      [
        {
          text: 'OK',
          onPress: () => this.props.resetFeedbackEnqueued()
        }
      ],
      { cancelable: true, onDismiss: () => this.props.resetFeedbackEnqueued() }
    );
  };

  render() {
    const { community, isConnected } = this.props;
    const isLoading = community.status === RequestStatusEnum.loading;

    if (community.error || (community.allIds.length < 1 && !isConnected)) {
      return (
        <RequestErrorScreen
          error={!isConnected ? '' : community.error}
          text={
            !isConnected
              ? 'You are not connected to the internet'
              : 'Unable to get data'
          }
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
          buttonStyle={styles.floatingIconButton}
          iconStyle={styles.floatingActionIcon}
        />
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckListScreen);
