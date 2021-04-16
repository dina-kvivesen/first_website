const url = "http://dinakvivesen.com/rainydays/wp-json/wc/store/products";
const corsFix = "https://noroffcors.herokuapp.com/" + url;

const productContainer = document.querySelector(".products");

async function getProducts() {
    try{
        const response = await fetch(corsFix);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error){
        console.log(error);
    }
}
getProducts();

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += `<a href="product.html?id=${product.id}" class="container">
                                        <div>
                                        <img src="${product.images[0].src}">
                                        <p>${product.prices.price}
                                        ${product.prices.currency_symbol}</p>
                                        <h3>${product.name}</h3>

                                        </div>`;

    })
}

