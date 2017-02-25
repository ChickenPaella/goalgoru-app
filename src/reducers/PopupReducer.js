import { OPEN_POPUP, CLOSE_POPUP } from "../actions/PopupAction.js";

const initState = {
    visible: false,
    title: null,
    content: null
}

export default (state=initState, action) => {
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
