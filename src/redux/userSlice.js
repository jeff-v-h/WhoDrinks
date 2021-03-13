import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../services/client';
import { API_HOST, API_TOKEN } from '../utils/env';
import { version } from '../../package.json';
import { offlineActionTypes } from 'react-native-offline';

export const postUserFeedback = createAsyncThunk(
  'user/postUserFeedback',
  async (feedback) => {
    await client.post(`${API_HOST}/api/userfeedback`, feedback);
    return feedback;
  }
);

export const getAppVersion = createAsyncThunk(
  'user/getAppVersion',
  async () => {
    const resp = await client.get(`${API_HOST}/api/appversion/${version}`, {
      headers: {
        Authorization: `Basic ${API_TOKEN}`
      }
    });
    return resp.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    appVersion: {},
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
    },
    resetStatus: (state) => {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [postUserFeedback.pending]: (state) => {
      state.status = 'loading';
    },
    [postUserFeedback.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.feedback.push({ ...action.payload, status: 'saved' });
    },
    [postUserFeedback.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      state.feedback.push({ ...action.meta.arg, status: 'failed' });
    },
    [getAppVersion.fulfilled]: (state, action) => {
      state.appVersion = {
        ...action.payload,
        dateObtained: new Date().toISOString()
      };
    }
  }
});

export const { confirmDisclaimer, logout, resetStatus } = userSlice.actions;
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
