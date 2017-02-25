import { SET_LOCATION } from '../actions/RewardAction';

const initState = {
    location: "경기도 성남시 분당구 판교동"
}

export default (state=initState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return Object.assign({}, state, {
                location: action.location
            });
        default:
            return state;
    }
};
