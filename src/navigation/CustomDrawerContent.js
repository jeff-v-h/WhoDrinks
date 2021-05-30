import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import globalStyles from '../styles/globalStyles';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} labelStyle={globalStyles.drawerLabel} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
