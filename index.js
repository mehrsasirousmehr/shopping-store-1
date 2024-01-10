import { getCookie } from "./utils/cookie.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

// show login or dashboard button
const init = async () => {
    const cookie = getCookie();

    if (cookie) {
        // User is logged in, show the dashboard button and hide the login button
        loginButton.style.display = "none";
    } else {
        // No user session found, display the login button and hide the dashboard button
        dashboardButton.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", init);
