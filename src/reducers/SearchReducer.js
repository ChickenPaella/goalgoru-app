import { SET_LOCATION, SET_RESTAURANT_LIST } from '../actions/SearchAction';

const initState = {
    location: "경기도 성남시 분당구 판교동",
    latitude: 37.4042999,
    longitude: 127.1060225,
    tracking: true,
    list: []
}

export default (state=initState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return Object.assign({}, state, {
                location: action.location,
                tracking: action.tracking,
                latitude: action.latitude,
                longitude: action.longitude
            });
        case SET_RESTAURANT_LIST:
            return Object.assign({}, state, {
                list: action.list
            });
        default:
            return state;
    }
};
