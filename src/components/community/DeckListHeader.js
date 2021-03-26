import * as React from 'react';
import AppText from '../common/AppText';
import IconButton from '../common/IconButton';
import { View } from 'react-native';
import communityStyles from '../../styles/communityStyles';
import PropTypes from 'prop-types';

DeckListHeader.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

function DeckListHeader({ text, onPress }) {
  return (
    <View style={communityStyles.titleRow}>
      <AppText style={communityStyles.deckHeader}>{text}</AppText>
      <View style={communityStyles.downloadButtonWrapper}>
        <IconButton
          onPress={onPress}
          iconName="download"
          size={24}
          opacity={0.5}
        />
      </View>
    </View>
  );
}

export default DeckListHeader;
