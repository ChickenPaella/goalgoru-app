import { TOGGLE_ASIDE, CLOSE_ASIDE, OPEN_ASIDE } from "../actions/AsideAction.js";

let initState = {
    visible: true
}

export default (state=initState, action) => {
    switch(action.type) {
        case TOGGLE_ASIDE:
            return Object.assign({}, state, {
                visible: state.visible?false:true
            });
        case OPEN_ASIDE:
            return Object.assign({}, state, {
                visible: true
            });
        case CLOSE_ASIDE:
            return Object.assign({}, state, {
                visible: false
            });
        default:
            return state;
    }
}
