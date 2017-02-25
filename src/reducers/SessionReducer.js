import { SESSION_LOGIN, SESSION_LOGOUT, SET_AUTH_TOKEN } from '../actions/SessionAction';

const initState = {
    isLogin: false,
    profileImage: null,
    username: null,
    token:null,
}

export default (state=initState, action) => {
    switch(action.type) {
        case SESSION_LOGIN:
            return Object.assign({}, state, {
                isLogin: true
            });
        case SESSION_LOGOUT:
            return Object.assign({}, state, {
                isLogin: false
            });
        case SET_AUTH_TOKEN:
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return state;
    }
}
