import { SHOW_SPINNER, HIDE_SPINNER } from '../actions/SpinnerAction';

const initState = {
    visible: false
}

export default (state=initState, action) => {
    switch(action.type) {
        case SHOW_SPINNER:
            return Object.assign({}, state, {visible: true});
        case HIDE_SPINNER:
            return Object.assign({}, state, {visible: false});
        default:
            return state;
    }
}
