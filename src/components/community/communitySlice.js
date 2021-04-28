import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../services/client';
import { API_HOST, API_TOKEN } from '../../utils/env';
import { RequestStatusEnum } from '../../utils/enums';

const config = {
  headers: { Authorization: `Basic ${API_TOKEN}` },
  timeout: 10000
};

export const getCommunityDecks = createAsyncThunk(
  'community/getCommunityDecks',
  async () => {
    const resp = await client.get(`${API_HOST}/api/decks`, config);
    return resp.data;
  }
);

export const getCommunityDeck = createAsyncThunk(
  'community/getCommunityDeck',
  async (id) => {
    const resp = await client.get(`${API_HOST}/api/decks/${id}`, config);
    return resp.data;
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState: {
    status: RequestStatusEnum.idle,
    error: null,
    byId: {},
    allIds: [],
    selectedId: null,
    deck: {
      name: '',
      cards: []
    }
  },
  reducers: {
    resetCommunityRequestStatus: (state) => {
      state.status = RequestStatusEnum.idle;
    },
    previewDeck: (state, action) => {
      state.selectedId = action.payload;
    }
  },
  extraReducers: {
    [getCommunityDecks.pending]: (state) => {
      state.status = RequestStatusEnum.loading;
    },
    [getCommunityDecks.fulfilled]: (state, action) => {
      state.error = null;
      state.allIds = [];
      state.byId = {};

      action.payload.forEach((deck) => {
        state.allIds.push(deck.id);
        state.byId[deck.id] = deck;
      });

      state.status = RequestStatusEnum.succeeded;
    },
    [getCommunityDecks.rejected]: (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
    },
    [getCommunityDeck.pending]: (state) => {
      state.status = RequestStatusEnum.loading;
    },
    [getCommunityDeck.fulfilled]: (state, action) => {
      state.error = null;
      state.deck = action.payload;
      state.status = RequestStatusEnum.succeeded;
    },
    [getCommunityDeck.rejected]: (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
    }
  }
});

export const {
  resetCommunityRequestStatus,
  previewDeck
} = communitySlice.actions;
export default communitySlice.reducer;
