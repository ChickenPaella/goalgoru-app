import { DIMMING, UNDIMMING } from "../actions/DimmerAction.js";

const initState = {
    dimmed: false
}

export default (state=initState, action) => {
    switch(action.type) {
        case DIMMING:
            return Object.assign({}, state, {
                dimmed: true
            });
        case UNDIMMING:
            return Object.assign({}, state, {
                dimmed: false
            });
        default:
            return state;
    };
};
