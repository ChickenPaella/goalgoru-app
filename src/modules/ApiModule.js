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
    // , {
    //     headers: {
    //         "X-Auth-Token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYWthby0zNzU1NDY1NTkifQ.4hWZgpvN5PCz8bUbcdIKxZgUQJRq9Lx2B8kd60nbCRyXlfE0LLE0Z6PvV7kv0YNQQSe2wRKPEHhPzo3jn6MuSQ"
    //     }
    // }

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
