import { createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    decks: [],
    selectedDeckId: '',
    selectedDeckName: ''
  },
  reducers: {
    createDeck: (state, action) => {
      state.decks = [...state.decks, action.payload];
    },
    updateDeck: (state, action) => {
      state.decks = state.decks.map((d) =>
        d.id === action.payload.id ? action.payload : d
      );
    },
    selectDeck: (state, action) => {
      const deck = state.decks.find((d) => d.id === action.payload);
      state.selectedDeckId = deck?.id ?? '';
      state.selectedDeckName = deck?.name ?? '';
    },
    deleteDeck: (state, action) => {
      state.decks = state.decks.filter((d) => d.id !== action.payload);
    }
  }
});

export const {
  createDeck,
  updateDeck,
  selectDeck,
  deleteDeck
} = decksSlice.actions;
export default decksSlice.reducer;
