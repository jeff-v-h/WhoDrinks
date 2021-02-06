import { createSlice } from '@reduxjs/toolkit';
import { offlineActionTypes } from 'react-native-offline';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    confirmedDisclaimer: false
  },
  reducers: {
    confirmDisclaimer: (state) => {
      state.confirmedDisclaimer = true;
    },
    testOffline: (state, action) => {
      if (action.type === offlineActionTypes.CONNECTION_CHANGE) {
        console.log('changed connection');
      } else {
        console.log('not conneciton change', action.type);
      }
    }
  }
});

export const { confirmDisclaimer, testOffline } = userSlice.actions;
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
