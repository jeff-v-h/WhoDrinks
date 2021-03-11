import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../services/client';
import { offlineActionTypes } from 'react-native-offline';

export const postUserFeedback = createAsyncThunk(
  'user/postUserFeedback',
  async (feedback) => {
    const response = await client.post(
      'https://localhost:49155/api/userfeedback',
      feedback
    );
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    confirmedDisclaimer: false,
    feedback: [],
    status: 'idle',
    error: null
  },
  reducers: {
    logout: (state) => {
      // User login currently not implemented. Used to simply reset the redux store
      // which is completed in rootReducer
    },
    confirmDisclaimer: (state) => {
      state.confirmedDisclaimer = true;
    }
  },
  extraReducers: {
    [postUserFeedback.pending]: (state, action) => {
      state.status = 'loading';
      console.log('action in pending', action);
    },
    [postUserFeedback.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      console.log('action in succeeded', action);
    },
    [postUserFeedback.rejected]: (state, action) => {
      state.status = 'failed';
      console.log('action in failed', action);
      state.error = action.error.message;
    }
  }
});

export const { confirmDisclaimer, logout } = userSlice.actions;
export default userSlice.reducer;

/**
 * Thunks
 * To integrate react-native-offline, put thunk functions inside another function
 * and set `thunk.interceptInOffline = true` before returning the thunk.
 * Make sure to also name the thunk function rather than return an anonymous one
 */
/* example
export const fetchIssuesCount = (org, repo) => {
  async function thunk(dispatch) => {
    try {
      const repoDetails = await getRepoDetails(org, repo)
      dispatch(getRepoDetailsSuccess(repoDetails))
    } catch (err) {
      dispatch(getRepoDetailsFailed(err.toString()))
    }
  }

  thunk.interceptInOffline = true;
  return thunk;
} 
*/
/* the above would ususally look like this:
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
*/
