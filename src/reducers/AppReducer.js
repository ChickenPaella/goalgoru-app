import { combineReducers } from 'redux';
import { display } from './AsideReducer';
import { dimmer } from './DimmerReducer';

const initState = {
    aside: {},
    dimmer: {}
}

const AppReducer = (state=initState, action) => {
    return {
        aside: Object.assign({}, display(state.aside, action)),
        dimmer: Object.assign({}, dimmer(state.dimmer, action))
    }
}

export default AppReducer;
