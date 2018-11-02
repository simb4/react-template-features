import { api } from "../constants"
import _ from 'lodash';
import qs from 'qs';
// import fetch from 'cross-fetch';

const modifyHeader = (options) => {
  let headers = _.extend({}, api.STD_HEADERS);

  if (options.formData) {
    delete headers['Content-Type'];
  }

  if (!!options.token)
    headers['Authorization'] = 'JWT ' + options.token;

  // console.log('header', headers, options);
  return headers;
}

export const stdApiPOST = (options) => (
  fetch(
    options.url,
    {
      method: 'POST',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
      // body: qs.stringify(options.data || {}),
    }
  )
)

export const stdApiDELETE = (options) => (
  fetch(
    options.url,
    {
      method: 'DELETE',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
      // body: qs.stringify(options.data || {}),
    }
  )
)

export const stdApiGET = (options) => (
  fetch(
    options.url + '?' + qs.stringify(options.data || {}),
    {
      method: 'GET',
      headers: modifyHeader(options),
    }
  )
)

export const apiFormData = (options) => (
  fetch(
    options.url,
    {
      method: "POST",
      headers: modifyHeader({...options, formData: true}),
      body: options.data
    }
  )
)

export const apiWithArray = (options) => (
  fetch(
    options.url,
    {
      method: "POST",
      headers: !!options.token ? {
        ...api.STD_HEADERS,
        "auth-token": options.token,
      } : api.STD_HEADERS,
      body: api.transformRequest(options.data)
    }
  )
)