import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../styles/styles';
import PT from 'prop-types';
import { colours } from '../../styles/variables';

SpinnerOverlay.propTypes = {
  show: PT.bool.isRequired
};

function SpinnerOverlay({ show }) {
  if (!show) {
    return null;
  }

  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color={colours.primary} />
    </View>
  );
}

export default SpinnerOverlay;
