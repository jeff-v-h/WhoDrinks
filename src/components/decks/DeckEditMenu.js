import React from 'react';
import PropTypes from 'prop-types';
import deckStyles from '../../styles/deckStyles';
import Menu, { MenuItem } from 'react-native-material-menu';
import IconButton from '../common/IconButton';

DeckEditMenu.propTypes = {
  menuRef: PropTypes.func.isRequired,
  onPressMenu: PropTypes.func.isRequired,
  onPressEdit: PropTypes.func.isRequired,
  onPressUpload: PropTypes.func.isRequired,
  onPressDelete: PropTypes.func.isRequired
};

function DeckEditMenu({
  menuRef,
  onPressMenu,
  onPressEdit,
  onPressUpload,
  onPressDelete
}) {
  return (
    <Menu
      ref={menuRef}
      button={
        <IconButton
          onPress={onPressMenu}
          buttonStyle={deckStyles.deckEditButton}
          iconStyle={deckStyles.deckEditIcon}
          iconName="ellipsis-v"
          size={24}
          opacity={0.5}
        />
      }
    >
      <MenuItem
        onPress={onPressEdit}
        style={deckStyles.deckEditMenuItem}
        textStyle={deckStyles.deckEditMenuItemText}
      >
        Edit Name
      </MenuItem>
      <MenuItem
        onPress={onPressUpload}
        style={deckStyles.deckEditMenuItem}
        textStyle={deckStyles.deckEditMenuItemText}
      >
        Upload
      </MenuItem>
      <MenuItem
        onPress={onPressDelete}
        style={deckStyles.deckEditMenuItem}
        textStyle={deckStyles.deckEditMenuItemText}
      >
        Delete
      </MenuItem>
    </Menu>
  );
}

export default DeckEditMenu;
