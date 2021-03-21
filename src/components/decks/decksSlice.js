import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import asianDeck from '../../utils/decks/asian-deck';
import client from '../../services/client';
import { API_HOST, API_TOKEN } from '../../utils/env';
import { RequestStatusEnum } from '../../utils/enums';

export const postCreateDeck = createAsyncThunk(
  'decks/postCreateDeck',
  async (deck) => {
    const resp = await client.post(`${API_HOST}/api/deck`, deck, {
      headers: {
        Authorization: `Basic ${API_TOKEN}`
      }
    });
    console.log('returned id', resp);
    return deck;
  }
);

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    byId: {
      [standardDeck.id]: {
        id: standardDeck.id,
        name: standardDeck.name,
        tags: standardDeck.tags
        // Once a deck has been shared to public, it will have a userId
      },
      [asianDeck.id]: {
        id: asianDeck.id,
        name: asianDeck.name,
        tags: asianDeck.tags
      }
    },
    allIds: [standardDeck.id, asianDeck.id],
    selectedId: standardDeck.id,
    editingDeckId: standardDeck.id,
    status: RequestStatusEnum.idle,
    error: null
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
    },
    resetDeckRequestStatus: (state) => {
      state.status = RequestStatusEnum.idle;
    }
  },
  extraReducers: {
    [postCreateDeck.pending]: (state) => {
      state.status = RequestStatusEnum.loading;
    },
    [postCreateDeck.fulfilled]: (state, action) => {
      state.status = RequestStatusEnum.succeeded;
      console.log('action pauyload in fulfilled', action.payload);
      // state.byId[action.payload]
    },
    [postCreateDeck.rejected]: (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
      console.log('action pauyload in failed', action.error);
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
