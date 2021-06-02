import React from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard
} from 'react-native';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import Modal from '../common/Modal';
import styles from '../../styles/styles';
import contactStyles from '../../styles/contactStyles';
import {
  postUserFeedback,
  resetStatus,
  resetFeedbackEnqueued
} from '../../redux/userSlice';
import { connect } from 'react-redux';
import FeedbackSuccessScreen from './FeedbackSuccessScreen';
import SpinnerOverlay from '../common/SpinnerOverlay';
import { RequestStatusEnum } from '../../utils/enums';

const mapState = (state) => ({
  user: state.user,
  network: state.network
});

const mapDispatch = { postUserFeedback, resetStatus, resetFeedbackEnqueued };

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  feedback: '',
  keyboardShowing: false,
  emailValid: false
};

class ContactUsScreen extends React.Component {
  constructor(props) {
    super(props);

    const lastFeedback = props.user.feedback[props.user.feedback.length - 1];

    this.state =
      lastFeedback?.status === RequestStatusEnum.failed
        ? { ...lastFeedback }
        : { ...initialState };

    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.setState({ keyboardShowing: true });
  }

  keyboardDidHide() {
    this.setState({ keyboardShowing: false });
  }

  handleFirstNameChange(firstName) {
    this.setState({ firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName });
  }

  handleEmailChange(email) {
    this.setState({ email, emailValid: /\S+@\S+\.\S+/.test(email) });
  }

  handleFeedbackChange(feedback) {
    this.setState({ feedback });
  }

  sendFeedback = () => {
    const { firstName, lastName, email, feedback } = this.state;
    this.props.postUserFeedback({
      firstName,
      lastName,
      email,
      feedback,
      userCreatedOn: new Date().toISOString()
    });
  };

  resetFeedbackScreen = () => {
    this.setState({ ...initialState });
    this.props.resetStatus();
  };

  render() {
    const { status, feedbackEnqueued } = this.props.user;

    if (status === RequestStatusEnum.succeeded) {
      return <FeedbackSuccessScreen onPress={this.resetFeedbackScreen} />;
    }

    const {
      firstName,
      lastName,
      email,
      feedback,
      keyboardShowing,
      emailValid
    } = this.state;
    const isLoading = status === RequestStatusEnum.loading;
    const emailInputStyles = [contactStyles.contactUsInput];

    if (email.length > 0 && !emailValid) {
      emailInputStyles.push(styles.redBorder);
    }

    return (
      <>
        <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={[styles.container, contactStyles.feedbackScreen]}>
              {!keyboardShowing && (
                <View style={[styles.section, contactStyles.textSection]}>
                  <AppText style={contactStyles.text}>
                    Got ideas to make this game more fun?
                  </AppText>
                  <AppText style={contactStyles.text}>
                    {"Or maybe you've found an error?"}
                  </AppText>
                  <AppText style={contactStyles.text}>
                    {"Either way, we'd love to hear from you!"}
                  </AppText>
                </View>
              )}
              <View
                style={[styles.section, contactStyles.contactUsInputSection]}
              >
                <TextInput
                  style={contactStyles.contactUsInput}
                  value={firstName}
                  onChangeText={this.handleFirstNameChange}
                  onFocus={this.keyboardDidShow}
                  placeholder="First name"
                  editable={!isLoading}
                />
                <TextInput
                  style={contactStyles.contactUsInput}
                  value={lastName}
                  onChangeText={this.handleLastNameChange}
                  onFocus={this.keyboardDidShow}
                  placeholder="Last name"
                  editable={!isLoading}
                />
                <TextInput
                  style={emailInputStyles}
                  value={email}
                  onChangeText={this.handleEmailChange}
                  onFocus={this.keyboardDidShow}
                  placeholder="E-mail"
                  editable={!isLoading}
                />
                <TextInput
                  style={[
                    contactStyles.contactUsInput,
                    contactStyles.feedbackInput
                  ]}
                  value={feedback}
                  onChangeText={this.handleFeedbackChange}
                  onFocus={this.keyboardDidShow}
                  placeholder="Feedback"
                  multiline={true}
                  editable={!isLoading}
                  numberOfLines={3}
                />
              </View>
              <View
                style={[styles.section, contactStyles.feedbackButtonSection]}
              >
                <AppButton
                  title="Send"
                  onPress={this.sendFeedback}
                  disabled={!emailValid || feedback.trim().length < 1}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Modal
          visible={status === RequestStatusEnum.failed}
          dismiss={this.props.resetStatus}
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragraph}>
              Unable to send right now, please try again later.
            </AppText>
            <AppText style={styles.paragraph}>
              We will keep your feedback here for you until you send
              successfully or change it yourself.
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton title="Ok" onPress={this.props.resetStatus} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={feedbackEnqueued}
          dismiss={this.props.resetFeedbackEnqueued}
        >
          <View style={styles.inputModalContent}>
            <AppText style={styles.paragraph}>
              Unable to send right now.
            </AppText>
            <AppText style={styles.paragraph}>
              Your feedback will be sent once you are back online.
            </AppText>
            <View style={styles.buttonsRow}>
              <AppButton
                title="Ok"
                onPress={this.props.resetFeedbackEnqueued}
              />
            </View>
          </View>
        </Modal>
        <SpinnerOverlay show={isLoading} />
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(ContactUsScreen);
