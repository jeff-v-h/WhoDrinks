import { createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    decks: [],
    selectedDeckId: ''
  },
  reducers: {
    createDeck: (state, action) => {
      state.decks = [...state.decks, action.payload];
    },
    saveDeck: (state, action) => {
      state.decks = state.decks.map((d) =>
        d.id === action.payload.id ? action.payload : d
      );
    },
    deleteDeck: (state, action) => {
      state.decks = state.decks.filter((d) => d.id !== action.payload);
    }
  }
});

export const { createDeck, saveDeck, deleteDeck } = decksSlice.actions;
export default decksSlice.reducer;
