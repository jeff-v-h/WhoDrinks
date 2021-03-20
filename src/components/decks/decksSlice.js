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
        tags: standardDeck.tags
      },
      [asianDeck.id]: {
        id: asianDeck.id,
        name: asianDeck.name,
        tags: asianDeck.tags
      }
    },
    allIds: [standardDeck.id, asianDeck.id],
    selectedId: standardDeck.id,
    editingDeckId: standardDeck.id
  },
  reducers: {
    saveDeck: (state, action) => {
      const { id, name, tags } = action.payload;

      if (!state.byId[id]) {
        state.allIds.push(id);
      }

      state.byId[id] = { id, name, tags };
    },
    selectDeck: (state, action) => {
      state.selectedId = action.payload;
    },
    deleteDeck: (state, action) => {
      const id = action.payload;

      if (state.selectedId != id) {
        delete state.byId[id];
        state.allIds = state.allIds.filter((i) => i !== id);

        if (id === state.editingDeckId) {
          state.editingDeckId = '';
        }
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
