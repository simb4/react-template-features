import env from '../../constants/env';
import * as API from '../defaultApi';

const SERVER_URL = env.SERVER_URL;

const loginUrl = SERVER_URL + "auth/activation/login/";
const logoutUrl = SERVER_URL + "auth/users/logout/";


export const login = (data) => ( API.stdApiPOST({ data, url: loginUrl }) )

export const logout = (token) => ( API.stdApiGET({ token, url: logoutUrl }) )
