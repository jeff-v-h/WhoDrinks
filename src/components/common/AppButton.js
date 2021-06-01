import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PT from 'prop-types';
import styles from '../../styles/styles';
import { createStylesArray } from '../../utils/helpers';

AppButton.propTypes = {
  title: PT.string.isRequired,
  onPress: PT.func,
  style: PT.oneOfType([PT.array, PT.object]),
  textStyle: PT.oneOfType([PT.array, PT.object]),
  disabled: PT.bool,
  disabledStyle: PT.oneOfType([PT.array, PT.object]),
  numberOfLines: PT.number,
  opacity: PT.number
};

AppButton.defaultProps = {
  onPress: () => {},
  disabled: false,
  style: [],
  textStyle: [],
  disabledStyle: [],
  numberOfLines: 0,
  opacity: 0.85
};

function AppButton({
  title,
  onPress,
  disabled,
  style,
  disabledStyle,
  textStyle,
  numberOfLines,
  opacity
}) {
  const buttonStyles = disabled
    ? createStylesArray(styles.disabledButton, disabledStyle)
    : createStylesArray(styles.button, style);

  const allTextStyles = createStylesArray(styles.buttonText, textStyle);

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={opacity}
    >
      <Text style={allTextStyles} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
