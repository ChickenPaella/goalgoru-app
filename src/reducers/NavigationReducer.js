import { CHANGE_TITLE, CHANGE_ACTION_BAR_MODE, CHANGE_ACTION_BAR_TRANSPARENT, SET_MAP_LINK } from "../actions/NavigationAction";

let initState = {
    title: "고루고루",
    mode: 0,
    transparent: false,
    mapUrl: ""
}

export default (state=initState, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return Object.assign({}, state, {
                title: action.title
            });
        case CHANGE_ACTION_BAR_MODE:
            return Object.assign({}, state, {
                mode: action.mode
            });
        case CHANGE_ACTION_BAR_TRANSPARENT:
            return Object.assign({}, state, {
                transparent: action.transparent
            });
        case SET_MAP_LINK:
            return Object.assign({}, state, {
                mapUrl: action.mapUrl
            })
        default:
            return state;
    }
}
