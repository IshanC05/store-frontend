export const login = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

export const logout = () => {
    localStorage.removeItem("data");
}

export const isLoggedIn = () => {
    const data = localStorage.getItem("data");
    if (data) {
        const ob = JSON.parse(data);
        if (ob.token && ob.user) return true;
    }
    return false;
}

export const getToken = () => {
    return isLoggedIn() ? JSON.parse(localStorage.getItem("data")).token : null;
}

export const getLoggedInUserDetails = () => {
    return isLoggedIn() ? JSON.parse(localStorage.getItem("data")).user : null;
}