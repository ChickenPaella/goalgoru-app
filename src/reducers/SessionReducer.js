import { SESSION_LOGIN, SESSION_LOGOUT, SET_AUTH_TOKEN, SET_USER_INFO, SET_USER_NUTRI_INFO } from '../actions/SessionAction';

const initState = {
    // isLogin: true,
    // profileImage: "https://mud-kage.kakao.com/14/dn/btqfxmheUeU/g3beLeNU2h7MVFqJnC9YPK/o.jpg",
    // username: "박정훈",
    // token:"",
    isLogin: false,
    profileImage: undefined,
    username: undefined,
    token:undefined,
    star:0,
    protein:0,
    carb:0,
    fat:0
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
            return Object.assign({}, state, {
                isLogin: true,
                username: action.username,
                profileImage: action.profileImage
            });
        case SET_USER_NUTRI_INFO:
            return Object.assign({}, state, {
                isLogin: true,
                star: action.star,
                protein: action.protein,
                carb: action.carb,
                fat: action.fat
            });
        default:
            return state;
    }
}
