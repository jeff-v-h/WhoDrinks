import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid';

// Min and max included as possible outcomes
const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    drawPile: [],
    played: [],
    indexToShow: 0,
    gameId: ''
  },
  reducers: {
    startNewGame: (state, action) => {
      state.drawPile = [...action.payload];
      const randomIndex = randomIntFromInterval(0, state.drawPile.length - 1);

      state.played = [state.drawPile[randomIndex]];
      state.drawPile.splice(randomIndex, 1);
      state.indexToShow = 0;
      state.gameId = uuid.v1();
    },
    playNewCard: (state) => {
      if (state.drawPile.length < 1) {
        return;
      }

      const drawPile = state.drawPile;
      const randomIndex = randomIntFromInterval(0, drawPile.length - 1);

      state.played.push(drawPile[randomIndex]);
      drawPile.splice(randomIndex, 1);
      state.indexToShow = state.played.length - 1;
    },
    showCard: (state, action) => {
      state.indexToShow = action.payload;
    }
  }
});

export const { startNewGame, playNewCard, showCard } = gameSlice.actions;
export default gameSlice.reducer;
