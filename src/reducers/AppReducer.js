import { combineReducers } from 'redux';
import { display } from './AsideReducer';
import { dimmer } from './DimmerReducer';
import { navi } from './NavigationReducer';
import { mypage } from './MyPageReducer';
import { popup } from './PopupReducer';

const initState = {
    aside: {},
    dimmer: {},
    navi: {},
    mypage: {},
    popup: {}
}

const AppReducer = (state=initState, action) => {
    console.log(action);
    return {
        aside: Object.assign({}, display(state.aside, action)),
        dimmer: Object.assign({}, dimmer(state.dimmer, action)),
        navi: Object.assign({}, navi(state.navi, action)),
        mypage: Object.assign({}, mypage(state.mypage, action)),
        popup: Object.assign({}, popup(state.popup, action))
    }
}

export default AppReducer;
