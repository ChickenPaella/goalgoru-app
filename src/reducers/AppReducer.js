import { combineReducers } from 'redux';
import AsideReducer from './AsideReducer';
import DimmerReducer from './DimmerReducer';
import NavigationReducer from './NavigationReducer';
import MyPageReducer from './MyPageReducer';
import RewardReducer from './RewardReducer';
import PopupReducer from './PopupReducer';
import SearchReducer from './SearchReducer';


const AppReducer = combineReducers({
    aside: AsideReducer,
    dimmer: DimmerReducer,
    navi: NavigationReducer,
    mypage: MyPageReducer,
    reward: RewardReducer,
    popup: PopupReducer,
    search: SearchReducer
});

export default AppReducer;
