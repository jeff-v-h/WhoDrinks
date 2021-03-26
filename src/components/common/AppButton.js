import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import { createStylesArray } from '../../utils/helpers';

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  numberOfLines: PropTypes.number,
  opacity: PropTypes.number
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
