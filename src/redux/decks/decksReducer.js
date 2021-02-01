import { createAction, createReducer } from '@reduxjs/toolkit';

export const createDeck = createAction('CREATE_DECK');
export const saveDeck = createAction('SAVE_DECK');
export const deleteDeck = createAction('DELETE_DECK');

const initialState = {
  decks: [],
  selectedDeckId: ''
};

const decksReducer = createReducer(initialState, {
  [createDeck]: (state, action) => ({
    ...state,
    decks: [...state.decks, action.payload]
  }),
  [saveDeck]: (state, action) => {
    const decks = state.decks.map((d) =>
      d.id === action.payload.id ? action.payload : d
    );
    return { ...state, decks };
  },
  [deleteDeck]: (state, action) => ({
    ...state,
    decks: state.decks.filter((d) => d.id !== action.payload)
  })
});

export default decksReducer;
