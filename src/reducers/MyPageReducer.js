import { PREV_MONTH, NEXT_MONTH, OPEN_VALIDATE, CLOSE_VALIDATE } from "../actions/MyPageAction.js";

export const mypage = (state, action) => {
    switch(action.type) {
        case PREV_MONTH:
            return Object.assign({}, state, {
            });
        case NEXT_MONTH:
            return Object.assign({}, state, {
            });
        case OPEN_VALIDATE:
            return Object.assign({}, state, {
              alertVisible: true
            });
        case CLOSE_VALIDATE:
            return Object.assign({}, state, {
              alertVisible: false
            });
        default:
            return state;
    }
};
