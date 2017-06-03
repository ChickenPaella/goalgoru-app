import axios from 'axios';

const BASE_URL = "http://goalgoru.com:8080";

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
	const token = localStorage.getItem('token');
	const data = { withCredentials: true, headers: {} };
	if(token != null) data.headers['X-AUTH-TOKEN'] = token;
    axios.defaults.baseURL = BASE_URL;
    axios.get(path, data).then((response) => {callback(responseFilter(response))}).catch(callback(false));
}

var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		while (i < input.length) {

		  chr1 = input.charCodeAt(i++);
		  chr2 = input.charCodeAt(i++);
		  chr3 = input.charCodeAt(i++);

		  enc1 = chr1 >> 2;
		  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		  enc4 = chr3 & 63;

		  if (isNaN(chr2)) {
			  enc3 = enc4 = 64;
		  } else if (isNaN(chr3)) {
			  enc4 = 64;
		  }

		  output = output +
			  this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			  this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input)
	{
	    var output = "";
	    var chr1, chr2, chr3;
	    var enc1, enc2, enc3, enc4;
	    var i = 0;

	    input = input.replace(/[^A-Za-z0-9+/=]/g, "");

	    while (i < input.length)
	    {
	        enc1 = this._keyStr.indexOf(input.charAt(i++));
	        enc2 = this._keyStr.indexOf(input.charAt(i++));
	        enc3 = this._keyStr.indexOf(input.charAt(i++));
	        enc4 = this._keyStr.indexOf(input.charAt(i++));

	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 & 3) << 6) | enc4;

	        output = output + String.fromCharCode(chr1);

	        if (enc3 != 64) {
	            output = output + String.fromCharCode(chr2);
	        }
	        if (enc4 != 64) {
	            output = output + String.fromCharCode(chr3);
	        }
	    }

	    return output;
	}
}

export function getUserInfo(token, callback) {
	localStorage.setItem('token', token);
	var tmp = token.split(".", 3);
	console.log(tmp);
	var _token_header = Base64.decode(tmp[0]).trim();
	_token_header = _token_header.substring(_token_header.indexOf("{"), _token_header.indexOf("}")+1);
	var _token_claim = Base64.decode(tmp[1]);
	_token_claim = _token_claim.substring(_token_claim.indexOf("{"), _token_claim.indexOf("}")+1);
	console.log(typeof(_token_header) + _token_header);
	console.log(typeof(_token_claim) + _token_claim);
	var user_id = JSON.parse(_token_claim).sub;
	localStorage.setItem('user_id', user_id);
    const path = "/api/user/view/me";
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
    const path = "/api/user/status/-temp-kakao-375867508/" + year + "/" + (month + 1);

    console.log(path);

    get(path, callback);
}
