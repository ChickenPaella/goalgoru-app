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

export function getRegionByGeoPosition(longitude, latitude, callback) {
    const path = "geo/v1/geo2addr/"+longitude+","+latitude;
    axios.get(BASE_URL + path).then((response) => {callback(responseFilter(response))});
}
