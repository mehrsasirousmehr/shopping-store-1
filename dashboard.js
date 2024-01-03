import { getCookie } from "./utils/cookie.js";

// check user access level in different pages
const init = () => {
    const cookie = getCookie();

    if (!cookie) {
        location.assign("auth.html");
    }
};

document.addEventListener("DOMContentLoaded", init);