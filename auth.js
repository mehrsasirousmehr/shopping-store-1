import { postData } from "./utils/httpReq.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
    event.preventDefault();

    const username = inputsBox[0].value;
    const password = inputsBox[1].value;
    const data = {
        username: "mor_2314",
        password: "83r5^_",
    };

    const response = await postData("auth/login", { username, password });
    console.log(response);
};
loginButton.addEventListener("click", submitHandler);
