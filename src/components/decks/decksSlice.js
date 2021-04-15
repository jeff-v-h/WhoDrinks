import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import standardDeck from '../../utils/decks/standard-deck';
import client from '../../services/client';
import { API_HOST, API_TOKEN } from '../../utils/env';
import { RequestStatusEnum } from '../../utils/enums';

const config = {
  headers: { Authorization: `Basic ${API_TOKEN}` },
  timeout: 5000
};

export const postCreateDeck = createAsyncThunk(
  'decks/postCreateDeck',
  async (deck) => {
    const resp = await client.post(`${API_HOST}/api/decks`, deck, config);

    return {
      ...deck,
      previousDeckId: deck.id,
      id: resp.data.id
    };
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
      }
    },
    allIds: [standardDeck.id],
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
      const { id, userId, name, tags, previousDeckId } = action.payload;
      // Update id because id made by backend is the source of truth
      state.byId[id] = { id, name, userId, tags };
      state.allIds = state.allIds.map((prevId) =>
        prevId === previousDeckId ? id : prevId
      );
      delete state.byId[previousDeckId];
      if (state.selectedId === previousDeckId) {
        state.selectedId = id;
      }
      state.editingDeckId = id;
      state.status = RequestStatusEnum.succeeded;
    },
    [postCreateDeck.rejected]: (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
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
