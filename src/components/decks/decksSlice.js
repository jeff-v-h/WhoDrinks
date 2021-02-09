import { createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    list: [],
    selectedId: '',
    selectedName: '',
    editingDeckId: '',
    editingCards: [],
    editingCardIndex: 0
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
    },
    selectDeckToEdit: (state, action) => {
      const deck = state.list.find((d) => d.id === action.payload);
      state.editingDeckId = action.payload;
      state.editingCards = deck.cards;
    },
    selectCardToEdit: (state, action) => {
      state.editingCardIndex = action.payload;
    },
    saveCard: (state, action) => {
      const { editingCardIndex, editingCards } = state;
      const cardText = action.payload;

      if (editingCardIndex || editingCardIndex === 0) {
        editingCards[editingCardIndex] = cardText;
      } else {
        editingCards[editingCardIndex].push(cardText);
      }
    },
    deleteCard: (state, action) => {
      state.editingCards.splice(action.payload, 1);
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
} = decksSlice.actions;
export default decksSlice.reducer;
