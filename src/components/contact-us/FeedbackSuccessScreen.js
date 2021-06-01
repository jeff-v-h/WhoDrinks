import React from 'react';
import { View } from 'react-native';
import PT from 'prop-types';
import styles from '../../styles/styles';
import contactStyles from '../../styles/contactStyles';
import AppButton from '../common/AppButton';
import AppText from '../common/AppText';

FeedbackSuccessScreen.propTypes = {
  onPress: PT.func
};

function FeedbackSuccessScreen({ onPress }) {
  return (
    <View style={[styles.container, contactStyles.feedbackScreen]}>
      <View style={[styles.section]}>
        <AppText style={contactStyles.text}>
          Your feedback has been received.
        </AppText>
        <AppText style={contactStyles.text}>
          {
            'Thank you for helping to make this game more enjoyable for everyone!'
          }
        </AppText>
        <AppText style={contactStyles.text}>
          If there is more you would like to send us, click the OK button below.
        </AppText>
      </View>
      <View style={[styles.section, contactStyles.feedbackButtonSection]}>
        <AppButton title="OK" onPress={onPress} />
      </View>
    </View>
  );
}

export default FeedbackSuccessScreen;
