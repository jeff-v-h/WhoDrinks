import React from 'react';
import { TouchableOpacity } from 'react-native';
import PT from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStylesArray } from '../../utils/helpers';

IconButton.propTypes = {
  onPress: PT.func,
  buttonStyle: PT.oneOfType([PT.array, PT.object]),
  opacity: PT.number,
  iconName: PT.string,
  size: PT.number,
  iconStyle: PT.oneOfType([PT.array, PT.object])
};

IconButton.defaultProps = {
  onPress: () => {},
  buttonStyle: [],
  opacity: 0.7,
  iconName: 'plus',
  size: 18,
  iconStyle: []
};

function IconButton({
  onPress,
  buttonStyle,
  opacity,
  iconName,
  size,
  iconStyle
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={createStylesArray(buttonStyle)}
      activeOpacity={opacity}
    >
      <Icon name={iconName} size={size} style={createStylesArray(iconStyle)} />
    </TouchableOpacity>
  );
}

export default IconButton;
