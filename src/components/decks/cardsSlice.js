import { createSlice } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    byDeckId: {
      [standardDeck.id]: standardDeck.cards,
      [asianDeck.id]: asianDeck.cards
    },
    editingDeckId: standardDeck.id
  },
  reducers: {
    selectDeckToEdit: (state, action) => {
      state.editingDeckId = action.payload;
    },
    saveCard: (state, action) => {
      const { cardIndex, cardText } = action.payload;
      state.byDeckId[state.editingDeckId][cardIndex] = cardText;
    },
    deleteCard: (state, action) => {
      state.editingCards.splice(action.payload, 1);
      state.byDeckId[state.editingDeckId].splice(action.payload, 1);
    }
  }
});

export const {
  createDeck,
  updateDeck,
  selectDeck,
  deleteDeck,
  selectDeckToEdit,
  selectCardToEdit,
  saveCard,
  deleteCard
} = cardsSlice.actions;
export default cardsSlice.reducer;
