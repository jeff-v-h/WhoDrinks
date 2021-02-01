import { createAction } from '@reduxjs/toolkit';

export const createDeck = createAction('CREATE_DECK');
export const saveDeck = createAction('SAVE_DECK');
export const deleteDeck = createAction('DELETE_DECK');

const initialState = {
  decks: [],
  selectedDeckId: ''
};

function decksReducer(state = initialState, action) {
  switch (action.type) {
    case createDeck.type:
      return { ...state, decks: [...state.decks, action.payload] };
    case saveDeck.type: {
      const decks = state.decks.map((d) =>
        d.id === action.payload.id ? action.payload : d
      );
      return { ...state, decks };
    }
    case deleteDeck.type: {
      const decks = state.decks.filter((d) => d.id !== action.payload);
      return { ...state, decks };
    }
    default:
      return state;
  }
}

export default decksReducer;
