import { SET_LOCATION } from '../actions/SearchAction';

const initState = {
    location: "경기도 성남시 분당구 판교동",
    tracking: true,
}

export default (state=initState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return Object.assign({}, state, {
                location: action.location,
                tracking: action.tracking
            });
        default:
            return state;
    }
};
