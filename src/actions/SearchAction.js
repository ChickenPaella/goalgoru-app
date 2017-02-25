export const SET_RESTAURANT_LIST = "SET_RESTAURANT_LIST";
export const SET_LOCATION = "SET_LOCATION";


export function setLocation(location, tracking, latitude, longitude) {
    return {
        type: SET_LOCATION,
        location: location,
        tracking: tracking,
        latitude: latitude,
        longitude, longitude
    }
}

export function getRestaurantList(list) {
    return {
        type: SET_RESTAURANT_LIST,
        list: list
    }
}
