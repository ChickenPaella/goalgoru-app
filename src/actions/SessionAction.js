export const SESSION_LOGIN = "SESSION_LOGIN";
export const SESSION_LOGOUT = "SESSION_LOGOUT";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";

export function sessionLogin() {
    return {
        type: SESSION_LOGIN
    }
}

export function sessionLogout() {
    return {
        type: SESSION_LOGOUT,
    }
}

export function setAuthToken(token) {
    return {
        type: SET_AUTH_TOKEN,
        token: token
    }
}

export function setUserInfo(username, profileImage) {
    return {
        type: SET_USER_INFO,
        username: username,
        profileImage: profileImage
    }
}
