import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../services/client';
import { API_HOST, API_TOKEN } from '../../utils/env';
import { RequestStatusEnum } from '../../utils/enums';

const headers = {
  Authorization: `Basic ${API_TOKEN}`
};

export const getCommunityDecks = createAsyncThunk(
  'decks/getCommunityDecks',
  async () => {
    const resp = await client.get(`${API_HOST}/api/decks`, { headers });
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
    selectedId: null
  },
  reducers: {
    resetCommunityRequestStatus: (state) => {
      state.status = RequestStatusEnum.idle;
    }
  },
  extraReducers: {
    [getCommunityDecks.pending]: (state) => {
      state.status = RequestStatusEnum.loading;
    },
    [getCommunityDecks.fulfilled]: (state, action) => {
      state.allIds = [];
      state.byId = {};

      action.payload.forEach((deck) => {
        state.allIds.push(deck.id);
        state.byId[deck.id] = deck;
      });

      state.status = RequestStatusEnum.succeeded;
    },
    [getCommunityDecks.rejected]: (state) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
    }
  }
});

export const { resetCommunityRequestStatus } = communitySlice.actions;
export default communitySlice.reducer;
