import React from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import styles from '../../styles/styles';
import contactStyles from '../../styles/contactStyles';
import { postUserFeedback } from '../../redux/userSlice';
import { connect } from 'react-redux';

const mapState = (state) => ({
  user: state.user
});

const mapDispatch = { postUserFeedback };

class ContactUsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      feedback: '',
      inputFocused: false
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleFirstNameChange(firstName) {
    this.setState({ firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName });
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handleFeedbackChange(feedback) {
    this.setState({ feedback });
  }

  onFocus() {
    this.setState({ inputFocused: true });
  }

  onBlur() {
    this.setState({ inputFocused: false });
  }

  sendFeedback = () => {
    const { firstName, lastName, email, feedback } = this.state;
    this.props.postUserFeedback({
      firstName,
      lastName,
      email,
      feedback
    });
  };

  render() {
    const { firstName, lastName, email, feedback, inputFocused } = this.state;
    const editable = this.props.user.status !== 'loading';

    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <View style={[styles.container, contactStyles.feedbackScreen]}>
          {!inputFocused && (
            <View style={[styles.section, contactStyles.textSection]}>
              <AppText style={contactStyles.text}>
                Got ideas to make this game more fun?
              </AppText>
              <AppText style={contactStyles.text}>
                {"Maybe you've found an error?"}
              </AppText>
              <AppText style={contactStyles.text}>
                Either way, we would love to hear from you!
              </AppText>
            </View>
          )}
          <View style={[styles.section, contactStyles.contactUsInputSection]}>
            <TextInput
              style={contactStyles.contactUsInput}
              value={firstName}
              onChangeText={this.handleFirstNameChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="First name"
              editable={editable}
            />
            <TextInput
              style={contactStyles.contactUsInput}
              value={lastName}
              onChangeText={this.handleLastNameChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Last name"
              editable={editable}
            />
            <TextInput
              style={contactStyles.contactUsInput}
              value={email}
              onChangeText={this.handleEmailChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="E-mail"
              editable={editable}
            />
            <TextInput
              style={[
                contactStyles.contactUsInput,
                contactStyles.feedbackInput
              ]}
              value={feedback}
              onChangeText={this.handleFeedbackChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Feedback"
              multiline={true}
              editable={editable}
              numberOfLines={5}
            />
          </View>
          {!inputFocused && (
            <View style={[styles.section, contactStyles.fedbackButtonSection]}>
              <AppButton title="Save" onPress={this.sendFeedback} />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapState, mapDispatch)(ContactUsScreen);
