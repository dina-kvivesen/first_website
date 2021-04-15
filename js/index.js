const images = document.querySelectorAll(".image-carousel img");
images.forEach(function(image){
    image.onclick = function(event){
document.querySelector(".selected-image").classList.remove("selected-image");
const clickParent = event.target.parentNode;
clickParent.classList.add("selected-image");
    }
})

const url = "http://dinakvivesen.com/rainydays/wp-json/wc/store/products";

async function getProducts() {
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);
    }
    catch(error){
        console.log(error);
    }
}
getProducts();