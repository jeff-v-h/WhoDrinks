import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

class BulletListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.bullet}>{'\u2B24'}</Text>
        {this.props.children}
      </View>
    );
  }
}

export default BulletListItem;
