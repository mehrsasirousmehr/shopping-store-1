import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
    event.preventDefault();

    const username = inputsBox[0].value;
    const password = inputsBox[1].value;

    const response = await postData("auth/login", { username, password });

    setCookie(response.token);
    //send user to index.html
    location.assign("index.html");
};

// check user access level in different pages
const init = () => {
    authHandler();
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", init);
