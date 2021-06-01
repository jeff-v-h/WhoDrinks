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
import Modal from '../common/Modal';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';

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
  state = {
    uploadModalVisible: false,
    enqueuedModalVisible: false
  };

  componentDidMount() {
    if (this.props.isConnected || this.props.community.allIds.length < 1) {
      this.fetchCommunityDecks();
    }
  }

  fetchCommunityDecks = () => this.props.getCommunityDecks();

  previewDeck = (id) => {
    const { navigation, previewDeck } = this.props;
    previewDeck(id);
    navigation.navigate('CommunityDeck');
  };

  setModalVisible = (property, visible) =>
    this.setState({ [property]: visible });

  uploadDeck = () => this.setModalVisible('uploadModalVisible', true);

  confirmWantDeckSharing = () => {
    this.props.postUserFeedback({
      feedback: WOULD_LIKE_COMMUNITY_DECK_SHARE
    });
    this.setModalVisible('uploadModalVisible', false);
    this.setModalVisible('enqueuedModalVisible', true);
  };

  closeEnqueuedModal = () => {
    this.setModalVisible('enqueuedModalVisible', false);
    this.props.resetFeedbackEnqueued();
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
        <Modal
          visible={this.state.uploadModalVisible}
          dismiss={() => this.setModalVisible('uploadModalVisible', false)}
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragaph}>
              Deck sharing not yet available!
            </AppText>
            <AppText style={styles.paragaph}>
              Would you like to be able to share and use decks that other people
              have made?
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton
                title="Cancel"
                onPress={() =>
                  this.setModalVisible('uploadModalVisible', false)
                }
              />
              <AppButton title="Yes" onPress={this.confirmWantDeckSharing} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.enqueuedModalVisible}
          dismiss={() => this.setModalVisible('enqueuedModalVisible', false)}
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragaph}>Unable to send right now</AppText>
            <AppText style={styles.paragaph}>
              Your feedback will be sent once you are able to connect to our
              servers.
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton title="Ok" onPress={this.closeEnqueuedModal} />
            </View>
          </View>
        </Modal>
        <SpinnerOverlay show={isLoading} />
      </SafeAreaView>
    );
  }
}

export default connect(mapState, mapDispatch)(CommunityDeckListScreen);
