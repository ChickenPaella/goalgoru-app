import axios from 'axios';

const BASE_URL = "http://goalgoru.com:8080";
// const BASE_URL = "http://192.168.51.51:8080";

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
    axios.defaults.baseURL = BASE_URL;
    axios.get(path).then((response) => {callback(responseFilter(response))}).catch(callback(false));
}

export function getUserInfo(userid, callback) {
    const path = "/api/user/view/"+userid
    get(path, callback);
}

export function getNutriOfFood(foodName, callback) {
    const path = "/api/food/nutri/"+encodeURIComponent(foodName);
    get(path, callback);
}

export function getRestaurantDetail(seq, callback) {
    const path = "/api/rsnt/view/"+seq;
    get(path, callback);
}

export function getRegionByGeoPosition(longitude, latitude, callback) {
    const path = "/api/geo/v1/geo2addr/"+encodeURIComponent(longitude+","+latitude);
    get(path, callback);
}

export function getGeoPositionByRegion(region, callback) {
    const path = "/api/geo/v1/addr2geo/"+encodeURIComponent(region);
    get(path, callback);
}

export function getRestaurantListByGeoPosition(longitude, latitude, callback) {
    const path = "/api/rsnt/list/geo/"+longitude+","+latitude;
    get(path, callback);
}

export function getUserList(token, callback) {
    const path = "/api/user/list";
    get(path, callback);
}

export function getBadgeHistory(year, month, callback) {
    const path = "/api/user/status/-temp-kakao-369757425/" + year + "/" + (month + 1);

    console.log(path);

    get(path, callback);
}
