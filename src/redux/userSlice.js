import { createSlice } from '@reduxjs/toolkit';
import { offlineActionTypes } from 'react-native-offline';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    confirmedDisclaimer: false
  },
  reducers: {
    logout: (state) => {
      // User login currently not implemented. Used to simply reset the redux store
      // which is completed in rootReducer
    },
    confirmDisclaimer: (state) => {
      state.confirmedDisclaimer = true;
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
