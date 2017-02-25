import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions/SessionAction';

const initState = {
    isLogin: false,
    profileImage: null,
    username: null
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
        default:
            return state;
    }
}
