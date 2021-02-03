import * as React from 'react';
import AppText from './AppText';
import { Text } from 'react-native';
import styles from '../../styles/styles';
import PropTypes from 'prop-types';

HeaderText.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
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
