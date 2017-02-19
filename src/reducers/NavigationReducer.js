import { CHANGE_TITLE } from "../actions/NavigationAction";

let initState = {
    title: "고루고루"
}

export const navi = (state=initState, action) => {

    switch (action.type) {
        case CHANGE_TITLE:
            return Object.assign({}, state, {
                title: action.title
            });
        default:
            return state;
    }
}
