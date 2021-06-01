import React from 'react';
import PT from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';
import { createStylesArray } from '../../utils/helpers';

ListLinkRow.propTypes = {
  onPress: PT.func,
  rowStyle: PT.oneOfType([PT.array, PT.object]),
  viewStyle: PT.oneOfType([PT.array, PT.object]),
  children: PT.node
};

ListLinkRow.defaultProps = {
  onPress: () => {},
  rowStyle: [],
  viewStyle: [],
  children: null
};

function ListLinkRow({ onPress, rowStyle, viewStyle, children }) {
  const touchableStyle = createStylesArray(styles.touchable, rowStyle);
  const style = createStylesArray(styles.touchableView, viewStyle);

  return (
    <TouchableHighlight
      style={touchableStyle}
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="none"
    >
      <View style={style}>{children}</View>
    </TouchableHighlight>
  );
}

export default ListLinkRow;
