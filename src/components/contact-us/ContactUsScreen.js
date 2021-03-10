import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import styles from '../../styles/styles';
import contactStyles from '../../styles/contactStyles';
import { useSelector, useDispatch } from 'react-redux';
import { postUserFeedback } from '../../redux/userSlice';

const ContactUsScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const dispatch = useDispatch();
  const userSliceStatus = useSelector((state) => state.user.status);

  const sendFeedback = () => {
    dispatch(postUserFeedback());
  };
  // useEffect(() => {
  //   if (userSliceStatus === 'idle') {
  //     dispatch
  //   }
  // })

  return (
    <View style={[styles.container, contactStyles.screen]}>
      <View style={styles.section}>
        <AppText style={contactStyles.text}>
          Want to make this game even more fun to play?
        </AppText>
        <AppText style={contactStyles.text}>
          {"Or maybe you've found an error?"}
        </AppText>
        <AppText style={contactStyles.text}>
          Either way, we would love to hear from you!
        </AppText>
      </View>
      <View style={styles.section}>
        <TextInput
          style={contactStyles.feedbackInput}
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
        />
        <TextInput
          style={contactStyles.feedbackInput}
          value={lastName}
          onChangeText={(name) => setLastName(name)}
        />
        <TextInput
          style={contactStyles.feedbackInput}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={contactStyles.feedbackInput}
          value={feedback}
          onChangeText={(feedback) => setFeedback(feedback)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <AppButton title="Save" onPress={sendFeedback} />
      </View>
    </View>
  );
};

export default ContactUsScreen;
