import { combineReducers } from 'redux';
import { actionTypes } from '../../constants';

const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return true;
        case actionTypes.ACTION_LOGOUT.success:
        case actionTypes.ACTION_LOGOUT.failed:
            return false;
        default:
            return state;
    }
}
const isLoggingIn = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.started:
            return true;
        case actionTypes.ACTION_LOGIN.failed:
        case actionTypes.ACTION_LOGIN.success:
        case actionTypes.ACTION_LOGOUT.started:
            return false;
        default:
            return state;
    }
}


const authReducer = combineReducers({
    isLoggedIn,
    isLoggingIn,
});

export default authReducer;
