import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles/styles';

export default class AppText extends React.Component {
  render() {
    return (
      <Text
        style={[styles.text, this.props.style]}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }
}
