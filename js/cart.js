let cartButtons = document.querySelectorAll("#addtocart-button");

let products = [
    {
        name: 'Jacket name',
        tag: 'Green',
        price: 899,
        inCart: 0
    },
]

for (let i=0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('a span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('a span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('a span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector
(".products");
let cartCost = localStorage.getItem('totalCost');

if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
        <ion-icon id="trash-icon" name="trash-outline"></ion-icon>
        <img src="images/displayjacket1.jpeg">
        <span>${item.name}</span>
        </div>
        <div class="price">${item.price}</div>
        <div class="quantity">
        <ion-icon id="minus-icon" name="remove-circle-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon id="plus-icon" name="add-circle-outline"></ion-icon>
        </div>
        <div class="total">
        Nok ${item.inCart * item.price}
        </div>
        `
    });
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
        <h3 class="basketTotalTitle">
            Basket Total
            </h3>
            <h3 class="basketTotal">
                Nok ${cartCost}
            </h3>
    `
} 
}

onLoadCartNumbers();
displayCart();

var trashButton = document.querySelectorAll("#trash-icon");

for(var i = 0; i < trashButton.length; i++) {
    var button = trashButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
})
}
