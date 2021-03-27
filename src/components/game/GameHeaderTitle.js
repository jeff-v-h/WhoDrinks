import React from 'react';
import { Text } from 'react-native';
import { string } from 'prop-types';
import { connect } from 'react-redux';

GameHeaderTitle.propTypes = {
  deckName: string
};

GameHeaderTitle.defaultProps = {
  deckName: 'test'
};

function GameHeaderTitle({ deckName }) {
  return <Text>Deck</Text>;
}

// const GameHeaderTitleContainer = connect((state) => ({
//   deckName: state.game.deckName
// }))(GameHeaderTitle);

export default GameHeaderTitle;
