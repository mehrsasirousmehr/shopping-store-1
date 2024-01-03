const setCookie = (data) => {
    // store jwt(token) in cookie
    document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`; //store for 1day
};

export { setCookie };
