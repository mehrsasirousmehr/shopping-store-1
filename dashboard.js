import authHandler from "./utils/authorization.js";

// check user access level in different pages
const init = () => {
    authHandler();
};

document.addEventListener("DOMContentLoaded", init);
