import { createAction, createReducer } from '@reduxjs/toolkit';
import client from '../services/client';
import { API_HOST, API_TOKEN } from '../utils/env';
import { RequestStatusEnum } from '../utils/enums';
import { version } from '../../package.json';
import { getUniqueId } from 'react-native-device-info';
import {
  offlineActionCreators,
  offlineActionTypes
} from 'react-native-offline';

//#region Actions
export const logout = createAction('user/logout');
export const dismissUpdate = createAction('user/dismissUpdate');
export const confirmAnnouncement = createAction('user/confirmAnnouncement');
export const confirmTermsAndConditions = createAction(
  'user/confirmTermsAndConditions'
);
export const resetStatus = createAction('user/resetStatus');
export const resetFeedbackEnqueued = createAction('user/resetFeedbackEnqueued');
//#endregion

//#region Thunk actions
const postUserFeedbackType = 'user/postUserFeedback';
const postUserFeedbackPending = createAction(`${postUserFeedbackType}/pending`);
const postUserFeedbackFulfilled = createAction(
  `${postUserFeedbackType}/fulfilled`
);
const postUserFeedbackRejected = createAction(
  `${postUserFeedbackType}/rejected`
);

const getAppVersionFulfilled = createAction(`user/getAppVersion/fulfilled`);
//#endregion

//#region Thunks
export const postUserFeedback = (feedback) => {
  async function thunk(dispatch, getState) {
    dispatch(postUserFeedbackPending());
    try {
      feedback.deviceId = getUniqueId();
      await client.post(`${API_HOST}/api/userfeedback`, feedback, {
        timeout: 7000
      });
      dispatch(postUserFeedbackFulfilled(feedback));
    } catch (err) {
      if (getState().user.feedbackAttempts <= 3) {
        dispatch(offlineActionCreators.fetchOfflineMode(thunk));
      } else {
        dispatch(
          postUserFeedbackRejected({
            feedback,
            error: err?.message
          })
        );
      }
    }
  }

  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true,
    name: 'postUserFeedback',
    args: feedback
  };
  return thunk;
};

const config = {
  headers: { Authorization: `Basic ${API_TOKEN}` },
  timeout: 7000
};

export const getAppVersion = () => {
  async function thunk(dispatch) {
    try {
      const resp = await client.get(
        `${API_HOST}/api/appversions/${version}`,
        config
      );
      dispatch(getAppVersionFulfilled(resp.data));
    } catch (e) {}
  }
  return thunk;
};
//#endregion

const initialState = {
  appVersion: {
    version: version,
    latestVersion: version,
    // forceUpdate: false,
    // recommendUpdate: false,
    // announcement: '',
    // androidUpdateUrl: 'market://details?id=myappid',
    // iOSUpdateUrl:
    //   'itms://itunes.apple.com/us/app/apple-store/myappid?mt=8',
    associatedPrivacyPolicyVersion: 'fe-' + version,
    associatedTCsVersion: 'fe-' + version
    // forceNewTCsAgreement: false,
    // forceNewPrivacyPolicyAgreement: false
    // termsAndConditions: '',
    // privacyPolicy: ''
    // dateObtained: new Date().toISOString()
    // dateObtained: d.setDate(d.getDate() - 8)
  },
  dismissedUpdate: false,
  confirmedAnnouncement: false,
  confirmedTermsAndConditions: false,
  feedback: [],
  feedbackAttempts: 0,
  feedbackEnqueued: false,
  status: RequestStatusEnum.idle,
  error: null
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    // User login currently not implemented. Used to reset the redux store via rootReducer
    .addCase(logout, () => {})
    .addCase(dismissUpdate, (state) => {
      state.dismissedUpdate = true;
    })
    .addCase(confirmAnnouncement, (state) => {
      state.confirmedAnnouncement = true;
    })
    .addCase(confirmTermsAndConditions, (state) => {
      state.confirmedTermsAndConditions = true;
    })
    .addCase(resetStatus, (state) => {
      state.status = RequestStatusEnum.idle;
    })
    .addCase(resetFeedbackEnqueued, (state) => {
      state.feedbackEnqueued = false;
    })
    .addCase(postUserFeedbackPending, (state) => {
      state.status = RequestStatusEnum.loading;
      state.feedbackAttempts++;
    })
    .addCase(postUserFeedbackFulfilled, (state, action) => {
      state.status = RequestStatusEnum.succeeded;
      state.feedback.push({
        ...action.payload,
        status: RequestStatusEnum.succeeded
      });
      state.feedbackAttempts = 0;
    })
    .addCase(postUserFeedbackRejected, (state, action) => {
      state.status = RequestStatusEnum.failed;
      state.error = action.payload.error;
      state.feedback.push({
        ...action.payload.feedback,
        status: RequestStatusEnum.failed
      });
    })
    .addCase(getAppVersionFulfilled, (state, action) => {
      if (state.appVersion.latestVersion !== action.payload.latestVersion) {
        state.appVersion = {
          ...action.payload
        };
        state.dismissedUpdate = false;
        state.confirmedAnnouncement = false;

        if (action.payload.forceNewTCsAgreement) {
          state.confirmedTermsAndConditions = false;
        }
      }

      state.appVersion.dateObtained = new Date().toISOString();
    })
    .addCase(offlineActionTypes.FETCH_OFFLINE_MODE, (state, action) => {
      state.status = RequestStatusEnum.idle;
      if (action.payload.prevThunk) {
        state.feedbackEnqueued = true;
      }
    });
});

export default userReducer;
