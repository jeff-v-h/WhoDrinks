import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import { createStylesArray } from '../../utils/helpers';

class BulletListItem extends React.Component {
  render() {
    const viewStyles = createStylesArray(
      styles.listItem,
      this.props.viewStyles
    );
    return (
      <View style={viewStyles}>
        <Text style={styles.bullet}>
          {this.props.whiteBullet ? '\u25EF' : '\u2B24'}
        </Text>
        {this.props.children}
      </View>
    );
  }
}

export default BulletListItem;
