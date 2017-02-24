import { combineReducers } from 'redux';
import { display } from './AsideReducer';
import { dimmer } from './DimmerReducer';
import { navi } from './NavigationReducer';
import { mypage } from './MyPageReducer';

const initState = {
    aside: {},
    dimmer: {},
    navi: {},
    mypage: {}
}

const AppReducer = (state=initState, action) => {
    return {
        aside: Object.assign({}, display(state.aside, action)),
        dimmer: Object.assign({}, dimmer(state.dimmer, action)),
        navi: Object.assign({}, navi(state.navi, action)),
        mypage: Object.assign({}, mypage(state.mypage, action))
    }
}

export default AppReducer;
