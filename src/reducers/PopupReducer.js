import { OPEN_POPUP, CLOSE_POPUP } from "../actions/PopupAction.js";

const initState = {
    visible: false,
    title: null,
    content: null
}

export const popup = (state, action) => {
    switch(action.type) {
        case OPEN_POPUP:
            return Object.assign({}, state, {
                visible: true,
                title: action.title,
                content: action.content
            });
        case CLOSE_POPUP:
            return Object.assign({}, state, {
                visible: false,
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
};

export const PopupReducer = (state = initState, action) => {
    return {
        popup: popup(state.popup, action)
    }
};