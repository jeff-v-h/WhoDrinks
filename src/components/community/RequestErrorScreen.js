import React, { useState } from 'react';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import SpinnerOverlay from '../common/SpinnerOverlay';
import { View } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import PT from 'prop-types';
import DevTestSection from '../common/DevTestSection';

RequestErrorScreen.propTypes = {
  error: PT.string,
  onPress: PT.func,
  isLoading: PT.bool,
  text: PT.string
};

RequestErrorScreen.defaultProps = {
  text: 'Unable to get data'
};

function RequestErrorScreen({ error, onPress, isLoading, text }) {
  const [countTaps, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <AppText onPress={() => setCount(countTaps + 1)}>{text}</AppText>
        {error.includes('Network Error') && (
          <View style={communityStyles.networkErrorView}>
            <AppText>There was a network error</AppText>
          </View>
        )}
      </View>
      <DevTestSection
        show={countTaps !== 0 && countTaps % 5 === 0}
        isLoading={isLoading}
      />
      <View style={styles.section}>
        <AppButton title="Try Again" onPress={onPress} disabled={isLoading} />
      </View>
      <SpinnerOverlay show={isLoading} />
    </View>
  );
}

export default RequestErrorScreen;
