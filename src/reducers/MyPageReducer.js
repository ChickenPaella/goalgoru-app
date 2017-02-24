import { PREV_MONTH, NEXT_MONTH, OPEN_VALIDATE, CLOSE_VALIDATE } from "../actions/MyPageAction.js";

export const mypage = (state, action) => {
    switch(action.type) {
        case PREV_MONTH:
            return Object.assign({}, state, {
              visible: state.visible?false:true
            });
        case NEXT_MONTH:
            return Object.assign({}, state, {
              visible: true
            });
        case OPEN_VALIDATE:
            return Object.assign({}, state, {
              validate: {
                visible: true
              }
            });
        case CLOSE_VALIDATE:
            return Object.assign({}, state, {
              validate: {
                visible: false
              }
            });
        default:
            return state;
    }
};

export const MyPageReducer = (state={}, action) => {
    return {
        mypage: mypage(state.validate, action)
    }
};
