import React from 'react';
import { View, Text } from 'react-native';
import ListLinkRow from '../common/ListLinkRow';
import IconButton from '../common/IconButton';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import PropTypes from 'prop-types';

DeckListRow.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  deckName: PropTypes.string.isRequired,
  editOnPress: PropTypes.func.isRequired,
  rowOnPress: PropTypes.func.isRequired
};

function DeckListRow({ isSelected, deckName, editOnPress, rowOnPress }) {
  return (
    <View style={deckStyles.deckListRow}>
      <ListLinkRow
        onPress={rowOnPress}
        text={deckName}
        rowStyle={deckStyles.deckListLinkRow}
        viewStyle={styles.listRow}
      >
        <View style={deckStyles.selectedCol}>
          {isSelected && (
            <IconButton
              iconName="check"
              buttonStyle={deckStyles.selectedIconWrapper}
              iconStyle={deckStyles.selectedIcon}
            />
          )}
        </View>
        <Text style={styles.itemText} numberOfLines={1}>
          {deckName}
        </Text>
      </ListLinkRow>
      <View style={deckStyles.verticleLine}></View>
      <View style={deckStyles.deckListButtonsCol}>
        <IconButton
          iconName="edit"
          onPress={editOnPress}
          size={24}
          buttonStyle={deckStyles.editDeckButton}
          iconStyle={deckStyles.editDeckIcon}
        />
      </View>
    </View>
  );
}

export default DeckListRow;
