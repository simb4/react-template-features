import { actionTypes } from '../../constants';
import * as api from './api';
import { defaultAction } from '../defaultActions';

export const getProfile = (callBacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_GET_PROFILE,
    apiCall: () => { return api.getProfile(getState().user.token) },
    onSuccess: (response) => ({ user: response.user }),
    onFailure: (response) => ({ errorMessage: response.message }),
    callBacks: callBacks,
  })
}