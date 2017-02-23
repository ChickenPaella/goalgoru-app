import { PREV_WEEK, NEXT_WEEK } from "../actions/MyPageAction.js";

export const display = (state, action) => {
    switch(action.type) {
        case PREV_WEEK:
            return Object.assign({}, state, {
                visible: state.visible?false:true
            });
        case NEXT_WEEK:
            return Object.assign({}, state, {
                visible: true
            });
        default:
            return state;
    }
};


export const AsideReducer = (state={}, action) => {
    return {
        display: display(state.visible, action)
    };
};
