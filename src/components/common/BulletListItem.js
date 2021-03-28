import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

class BulletListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.bullet}>{'\u2B24'}</Text>
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}

export default BulletListItem;
