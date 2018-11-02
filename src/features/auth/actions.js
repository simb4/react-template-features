import { actionTypes } from '../../constants';
import * as api from './api';
import { defaultAction } from '../defaultActions';

export const login = (data, callBacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_LOGIN,
    apiCall: () => { return api.login(data) },
    onSuccess: (response) => ({}),
    onFailure: (response) => ({ errorMessage: response.message }),
    callBacks: callBacks,
  })
}


export const logout = (callBacks) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_LOGOUT,
    apiCall: () => { return api.logout(getState().user.token) },
    onSuccess: (response) => ({ }),
    onFailure: (response) => ({ errorMessage: response.message, code: response.code }),
    callBacks: callBacks,
  })
}
