import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

let allProducts = null;

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listItems = document.querySelectorAll("li");

const showProducts = (products) => {
    mainContent.innerHTML = "";

    products.forEach((product) => {
        const jsx = `
            <div>
                <img alt=${product.title} src=${product.image} />
                <h4>${shortenText(product.title)}</h4>
                <div id="price">
                    <p>$ ${product.price}</p>
                    <button>
                        Buy
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div id="rate">
                    <i class="fa-solid fa-star"></i>
                    <span>${product.rating.rate}</span>
                </div>
                <div id="count">
                    <i class="fa-solid fa-user"></i>
                    <span>${product.rating.count}</span>
                </div>
            </div>
        `;

        mainContent.innerHTML += jsx;
    });
};

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

    allProducts = await getData("products");
    showProducts(allProducts);
};

// search products
const searchHandler = () => {
    const query = inputBox.value.trim().toLowerCase();

    if (!query) return showProducts(allProducts);
    const filteredProducts = allProducts.filter((product) => product.title.toLowerCase().includes(query));

    showProducts(filteredProducts);
};

// filter products
const filterHandler = (event) => {
    const category = event.target.innerText.toLowerCase();

    listItems.forEach((li) => {
        if (li.innerText.toLowerCase() === category) {
            li.classList = "selected";
        } else {
            li.classList = "";
        }
    });

    if (category === "all") return showProducts(allProducts);

    const filteredProducts = allProducts.filter((product) => product.category.toLowerCase() === category);
    showProducts(filteredProducts);
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click", filterHandler));
