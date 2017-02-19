import { combineReducers } from 'redux';
import { display } from './AsideReducer';
import { dimmer } from './DimmerReducer';
import { navi } from './NavigationReducer';

const initState = {
    aside: {},
    dimmer: {},
    navi: {}
}

const AppReducer = (state=initState, action) => {
    return {
        aside: Object.assign({}, display(state.aside, action)),
        dimmer: Object.assign({}, dimmer(state.dimmer, action)),
        navi: Object.assign({}, navi(state.navi, action))
    }
}

export default AppReducer;
