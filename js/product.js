const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);
const url_api = "http://dinakvivesen.com/rainydays/wp-json/wc/store/products";
const corsFix = "https://noroffcors.herokuapp.com/" + url_api;
const url = "http://dinakvivesen.com/rainydays/wp-json/wc/store/products/" + id;

async function getProduct() {
    try {
    const response = await fetch(url);
    const details = await response.json();

console.log(details);

for (let i = 0; i < details.length; i++) {
    console.log(details[i]);
    
    document.title = details[i].name;

}
createHTML(details);
         
} catch (error) {
    console.log("error occurred", error);
    container.innerHTML = "An error occurred, please try again later.";
}
}

getProduct();

function createHTML(details)  {
    container.innerHTML = `<div class="imagecontainer"><img src="${details.images[0].src}"></div>
    <div class="productinfo">
    <h3>${details.name}</h3>
    <p>${details.prices.price}
    ${details.prices.currency_symbol}</p>
    <p>${details.short_description}</p></div>
    `;
}