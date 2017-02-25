export const SET_MANUAL_LOCATION = "SET_MANUAL_LOCATION";
export const SET_LOCATION = "SET_LOCATION";

export function setLocation(location, tracking) {
    return {
        type: SET_LOCATION,
        location: location,
        tracking: tracking
    }
}
