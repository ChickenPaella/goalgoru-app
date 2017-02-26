import { SESSION_LOGIN, SESSION_LOGOUT, SET_AUTH_TOKEN, SET_USER_INFO } from '../actions/SessionAction';

const initState = {
    isLogin: true,
    profileImage: "https://mud-kage.kakao.com/14/dn/btqfxmheUeU/g3beLeNU2h7MVFqJnC9YPK/o.jpg",
    username: "박정훈",
    token:"",
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
                isLogin: true,
                token: action.token
            });
        case SET_USER_INFO:
            console.log("test"+action.username, action.profileImage);
            return Object.assign({}, state, {
                isLogin: true,
                username: action.username,
                profileImage: action.profileImage
            });
        default:
            return state;
    }
}
