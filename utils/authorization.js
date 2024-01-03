import { getCookie } from "./cookie.js";

// check user access level in different pages
const authHandler = () => {
    const cookie = getCookie();
    const url = location.href; // get url

    if (cookie && url.includes("auth.html")) {
        location.assign("index.html");
        return false;
    } else if (!cookie && url.includes("dashboard")) {
        location.assign("auth.html");
        return false;
    }
};

export default authHandler;
