import { createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    list: [],
    selectedId: '',
    selectedName: ''
  },
  reducers: {
    createDeck: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    updateDeck: (state, action) => {
      state.list = state.list.map((d) =>
        d.id === action.payload.id ? action.payload : d
      );
    },
    selectDeck: (state, action) => {
      const deck = state.list.find((d) => d.id === action.payload);
      state.selectedId = deck?.id ?? '';
      state.selectedName = deck?.name ?? '';
    },
    deleteDeck: (state, action) => {
      state.list = state.list.filter((d) => d.id !== action.payload);
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
