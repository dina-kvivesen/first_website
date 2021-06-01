const url = "http://dinakvivesen.com/rainydays/wp-json/wc/store/products?per_page=100";

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

    for (let i = 0; i < products.length; i++) {
        if(i < 8) {
            continue;
        }
       var product = products[i];

        productContainer.innerHTML += `<a href="product.html?id=${product.id}" class="container">
                                        <div>
                                        <img src="${product.images[0].src}">
                                        <h3>${product.name}</h3>
                                        <p>${product.prices.price}
                                        ${product.prices.currency_symbol}</p>
                                        

                                        </div>`;

    }
}