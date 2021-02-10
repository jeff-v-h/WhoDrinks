import { createSlice } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    byDeckId: {
      [standardDeck.id]: standardDeck.cards,
      [asianDeck.id]: asianDeck.cards
    }
  },
  reducers: {
    saveCard: (state, action) => {
      const { cardIndex, cardText, deckId } = action.payload;
      state.byDeckId[deckId][cardIndex] = cardText;
    },
    deleteCard: (state, action) => {
      const { cardIndex, deckId } = action.payload;
      state.byDeckId[deckId].splice(cardIndex, 1);
    }
  }
});

export const { saveCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
