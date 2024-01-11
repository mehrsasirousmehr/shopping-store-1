import authHandler from "./utils/authorization.js";
import { getData } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
    mainContent.innerHTML = "";
};

const init = async () => {
    // check user access level in different pages
    authHandler();
    
    // get users data
    const users = await getData("users");
    renderUsers(users);
};

document.addEventListener("DOMContentLoaded", init);
