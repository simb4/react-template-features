import { combineReducers } from 'redux'
import { actionTypes } from '../../constants'
import { User } from './models.js';

const token = (state = "", action) => {
    switch(action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return action.token
        case actionTypes.ACTION_LOGOUT.success:
        case actionTypes.ACTION_LOGOUT.failed:
            return ""
        default: 
            return state
    }
}

const user = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return User(action.user);
        case actionTypes.ACTION_LOGOUT.success:
        case actionTypes.ACTION_LOGOUT.failed:
            return {}
        default:
            return state
    }
}

const isLoading = (state = false, action) => {
    switch(action.type) {
            // return true;
        case actionTypes.ACTION_LOGOUT.success:
        case actionTypes.ACTION_LOGOUT.failed:
            return false;
        default:
            return state
    }
}


const userReducer = combineReducers({
    token,
    user,
    isLoading,
})

export default userReducer;
