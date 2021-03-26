import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../services/client';
import { API_HOST, API_TOKEN } from '../utils/env';
import { RequestStatusEnum } from '../utils/enums';
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
    const resp = await client.get(`${API_HOST}/api/appversions/${version}`, {
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
    appVersion: {
      version: version,
      latestVersion: version
      // forceUpdate: false,
      // recommendUpdate: false,
      // announcement: '',
      // androidUpdateUrl: 'market://details?id=',
      // iOSUpdateUrl:
      //   'itms://itunes.apple.com/us/app/apple-store/myiosappid?mt=8',
      // associatedPrivacyPolicyVersion: 'fe-' + version,
      // associatedTCsVersion: 'fe-' + version,
      // forceNewTCsAgreement: false,
      // forceNewPrivacyPolicyAgreement: false
      // termsAndConditions: '',
      // privacyPolicy: ''
      // dateObtained: new Date().toISOString()
      // dateObtained: d.setDate(d.getDate() - 8)
    },
    dismissedUpdate: false,
    confirmedAnnouncement: false,
    confirmedDisclaimer: false,
    feedback: [],
    status: RequestStatusEnum.idle,
    error: null
  },
  reducers: {
    logout: (state) => {
      // User login currently not implemented. Used to simply reset the redux store
      // which is completed in rootReducer
    },
    dismissUpdate: (state) => {
      state.dismissedUpdate = true;
    },
    confirmAnnouncement: (state) => {
      state.confirmedAnnouncement = true;
    },
    confirmDisclaimer: (state) => {
      state.confirmedDisclaimer = true;
    },
    resetStatus: (state) => {
      state.status = RequestStatusEnum.idle;
    }
  },
  extraReducers: {
    [postUserFeedback.pending]: (state) => {
      state.status = RequestStatusEnum.loading;
    },
    [postUserFeedback.fulfilled]: (state, action) => {
      state.status = RequestStatusEnum.succeeded;
      state.feedback.push({
        ...action.payload,
        status: RequestStatusEnum.succeeded
      });
    },
    [postUserFeedback.rejected]: (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.error.message;
      state.feedback.push({
        ...action.meta.arg,
        status: RequestStatusEnum.failed
      });
    },
    [getAppVersion.fulfilled]: (state, action) => {
      if (state.appVersion.latestVersion !== action.payload.latestVersion) {
        state.appVersion = {
          ...action.payload
        };
        state.dismissedUpdate = false;
        state.confirmedAnnouncement = false;
      }

      state.appVersion.dateObtained = new Date().toISOString();
    }
  }
});

export const {
  confirmDisclaimer,
  logout,
  resetStatus,
  dismissUpdate,
  confirmAnnouncement
} = userSlice.actions;
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
