import React from 'react';
import { View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import IconButton from '../components/common/IconButton';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../utils/scaling';

function HeaderMenuButton() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.headerRightIconWrapper}>
      <IconButton
        onPress={navigation.openDrawer}
        iconName="bars"
        size={moderateScale(20)}
        opacity={0.5}
      />
    </View>
  );
}

export default HeaderMenuButton;
