import * as React from 'react';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import SpinnerOverlay from '../common/SpinnerOverlay';
import { View } from 'react-native';
import styles from '../../styles/styles';
import communityStyles from '../../styles/communityStyles';
import PropTypes from 'prop-types';

RequestErrorScreen.propTypes = {
  error: PropTypes.string,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  text: PropTypes.string
};

RequestErrorScreen.defaultProps = {
  text: 'Unable to get data'
};

function RequestErrorScreen({ error, onPress, isLoading, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <AppText>{text}</AppText>
        {error.includes('Network Error') && (
          <View style={communityStyles.networkErrorView}>
            <AppText>There was a network error</AppText>
          </View>
        )}
      </View>
      <View style={styles.section}>
        <AppButton title="Try Again" onPress={onPress} disabled={isLoading} />
      </View>
      <SpinnerOverlay show={isLoading} />
    </View>
  );
}

export default RequestErrorScreen;
