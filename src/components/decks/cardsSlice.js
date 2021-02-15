import { createSlice } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';
import { saveDeck } from './decksSlice';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    byDeckId: {
      [standardDeck.id]: standardDeck.cards,
      [asianDeck.id]: asianDeck.cards
    },
    editingCardIndex: 0
  },
  reducers: {
    saveCard: (state, action) => {
      const { cardIndex, cardText, deckId } = action.payload;
      const cards = state.byDeckId[deckId];

      if (cardIndex < cards.length) {
        cards[cardIndex] = cardText;
      } else {
        cards.push(cardText);
      }
    },
    deleteCard: (state, action) => {
      const { cardIndex, deckId } = action.payload;
      state.byDeckId[deckId].splice(cardIndex, 1);
    },
    selectCardToEdit: (state, action) => {
      state.editingCardIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveDeck, (state, action) => {
      const { cards, id } = action.payload;
      if (cards) {
        state.byDeckId[id] = cards;
      }
    });
  }
});

export const { saveCard, deleteCard, selectCardToEdit } = cardsSlice.actions;
export default cardsSlice.reducer;
