import env from '../../constants/env';
import * as API from '../defaultApi';

const SERVER_URL = env.SERVER_URL;

const getProfileUrl = SERVER_URL + "auth/users/get/";

export const getProfile = (token) => (
  API.stdApiGET({ token, url: getProfileUrl })
)
