import { Animated, Easing, Dimensions } from 'react-native';

// First param is always an object when the second param exists
export const createStylesArray = (mainStyle, flexibleStyles) => {
  if (flexibleStyles) {
    return Array.isArray(flexibleStyles)
      ? [mainStyle, ...flexibleStyles]
      : [mainStyle, flexibleStyles];
  }
  return Array.isArray(mainStyle) ? mainStyle : [mainStyle];
};

export const isDateOverOneWeekAgo = (dateString) =>
  new Date().getTime() >
  new Date(dateString).getTime() + 7 * 24 * 60 * 60 * 1000;

const resetSuccessAnimation = (tickProgress) => {
  Animated.timing(tickProgress, {
    toValue: 0,
    duration: 500,
    easing: Easing.linear,
    useNativeDriver: true
  }).start();
};

export const animateSuccess = (tickProgress) => {
  Animated.timing(tickProgress, {
    toValue: 1.5,
    duration: 1500,
    easing: Easing.linear,
    useNativeDriver: true
  }).start(() => resetSuccessAnimation(tickProgress));
};

export const isWindowHeightGreaterThan = (height) =>
  Dimensions.get('window').height > height;

export const isWindowWidthGreaterThan = (width) =>
  Dimensions.get('window').width > width;
