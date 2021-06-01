import React from 'react';
import AppText from './AppText';
import { Text } from 'react-native';
import styles from '../../styles/styles';
import PT from 'prop-types';

HeaderText.propTypes = {
  text: PT.string,
  style: PT.object
};

HeaderText.defaultProps = {
  text: ''
};

function HeaderText({ text, style }) {
  const textStyles = style ? [styles.headerText, style] : styles.headerText;
  return (
    <AppText>
      <Text style={textStyles}>{text}</Text>
    </AppText>
  );
}

export default HeaderText;
