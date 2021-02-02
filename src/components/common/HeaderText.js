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

const HeaderText = ({ text, style }) => {
  return (
    <AppText>
      <Text style={[styles.headerText, style]}>{text}</Text>
    </AppText>
  );
};

export default HeaderText;
