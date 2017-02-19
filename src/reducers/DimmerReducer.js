import { DIMMING, UNDIMMING } from "../actions/DimmerAction.js";

const initState = {
    dimmed: false
}

export const dimmer = (state=initState, action) => {
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

export const DimmerReducer = (state={}, action) => {
    return {
        dimmer: dimmer(state.dimmed, action)
    }
}
