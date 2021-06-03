import React from 'react';
import globalStyles from '../styles/globalStyles';
import { View } from 'react-native';
import IconButton from '../components/common/IconButton';
import { useNavigation } from '@react-navigation/native';

function MyHeaderBackButton() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.headerBackButtonWrapper}>
      <IconButton
        onPress={navigation.goBack}
        iconName="arrow-left"
        size={16}
        opacity={0.5}
      />
    </View>
  );
}

export default MyHeaderBackButton;
