import axios from 'axios';

const BASE_URL = "http://goalgoru.com:8080/api/";

function responseFilter(response) {
    if(response.status == 200) {
        if(!!response.data) {
            return response.data;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function get(path, callback) {
    return axios.get(BASE_URL + path).then((response) => {callback(responseFilter(response))}).catch(callback(false));
}

export function getRegionByGeoPosition(longitude, latitude, callback) {
    const path = "geo/v1/geo2addr/"+longitude+","+latitude;
    get(path, callback);
}

export function getGeoPositionByRegion(region, callback) {
    const path = "geo/v1/addr2geo/"+encodeURIComponent(region);
    get(path, callback);
}

export function getRestaurantListByGeoPosition(longitude, latitude, callback) {
    const path = "rsnt/list/"+longitude+","+latitude;
    get(path, callback);
}

export function getUserList(token, callback) {
    const path = "user/list";
    get(path, callback);
}
