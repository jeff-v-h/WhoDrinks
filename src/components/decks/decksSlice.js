import { createSlice } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    byId: {
      [standardDeck.id]: {
        id: standardDeck.id,
        name: standardDeck.name,
        type: standardDeck.type
      },
      [asianDeck.id]: {
        id: asianDeck.id,
        name: asianDeck.name,
        type: asianDeck.type
      }
    },
    allIds: [standardDeck.id, asianDeck.id],
    selectedId: standardDeck.id,
    editingDeckId: standardDeck.id
  },
  reducers: {
    saveDeck: (state, action) => {
      const { id, name, type } = action.payload;
      state.byId[id] = { id, name, type };
    },
    selectDeck: (state, action) => {
      console.log(action);
      state.selectedId = action.payload;
    },
    deleteDeck: (state, action) => {
      const id = action.payload;

      if (state.selectedId != id) {
        delete state.byId[id];
        state.allIds = state.allIds.filter((i) => i !== id);
      }
    },
    selectDeckToEdit: (state, action) => {
      state.editingDeckId = action.payload;
    }
  }
});

export const {
  saveDeck,
  selectDeck,
  deleteDeck,
  selectDeckToEdit
} = decksSlice.actions;
export default decksSlice.reducer;
