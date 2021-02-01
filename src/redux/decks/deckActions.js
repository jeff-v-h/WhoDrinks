import { createAction } from '@reduxjs/toolkit';

const createDeck = createAction('CREATE_DECK');
const getDeck = createAction('GET_DECK');
const saveDeck = createAction('SAVE_DECK');
const deleteDeck = createAction('DELETE_DECK');
