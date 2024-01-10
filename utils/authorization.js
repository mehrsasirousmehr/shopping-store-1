import { getCookie } from "./cookie.js";

// check user access level in different pages
const authHandler = () => {
    const cookie = getCookie();
    const url = location.href; // get url

    if ((cookie && url.includes("auth")) || (!cookie && url.includes("dashboard"))) {
        location.assign("index.html");
        return false;
    }
};

export default authHandler;
