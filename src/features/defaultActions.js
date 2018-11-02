import { actionTypes, codes } from '../constants'
import { logout } from './auth/actions'
import _ from 'lodash'

const waitSeconds = async (sec) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000 * sec);
  });
}

export const defaultAction = async (dispatch, getState, options) => {
  let callBacks = options.callBacks || {};

  dispatch({ type: options.action.started, ...options.withStart });

  // await waitSeconds(5);

  options.apiCall()
    .then(
      response => {
        response
        .text()
        .then(
          value => {
            // console.log(value);
            let responseObject;
            try {
              responseObject = JSON.parse(value);
            } catch(e) {
              console.log(e);
              responseObject = { message: 'Some error occured' };
            }
            console.log('response', responseObject);

            if(responseObject.code === codes.OK) {
              dispatch({
                type: options.action.success,
                ...options.onSuccess(responseObject.data),
              })
              if (callBacks.onSuccess) {
                callBacks.onSuccess(responseObject.data);
              }
            } else {
              dispatch({
                type: options.action.failed,
                ...options.onFailure(responseObject)
              })
              if (callBacks.onFailure) {
                callBacks.onFailure(responseObject.message);
              }
              // check if it is invalid token
              if (responseObject.code === codes.INVALID_TOKEN) {
                logout()(dispatch, getState);
              }
            }
          }
        )
      },
      error => {
        console.log(error);
        dispatch({
          type: options.action.failed,
          errorMessage: "Ошибка подключения к сети"
        })
      }
    )
}