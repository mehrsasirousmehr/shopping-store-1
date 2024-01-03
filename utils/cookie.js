const setCookie = (data) => {
    // store jwt(token) in cookie
    document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`; //store for 1day
};

// returns token to object
const getCookie = () => {
    const cookie = document.cookie; // get cookie

    if (cookie) {
        const cookieArray = cookie.split("=");
        return {
            [cookieArray[0]]: cookieArray[1],
        };
    } else {
        return false;
    }
};

export { setCookie, getCookie };
