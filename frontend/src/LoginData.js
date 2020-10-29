export function getUserId() {
    if(typeof(localStorage.userId) !== "undefined") {
        return localStorage.userId;
    }

    return false;
}

export function deleteToken() {
    localStorage.removeItem("token");
}

export function deleteUserId() {
    localStorage.removeItem("userId");
}