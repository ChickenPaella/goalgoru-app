export const SESSION_LOGIN = "SESSION_LOGIN";
export const SESSION_LOGOUT = "SESSION_LOGOUT";

export function sessionLogin() {
    return {
        type: SESSION_LOGIN
    }
}

export function sessionLogout() {
    return {
        type: SESSION_LOGOUT
    }
}
