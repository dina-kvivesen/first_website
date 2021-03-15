const images = document.querySelectorAll(".image-carousel img");
images.forEach(function(image){
  image.onclick = function(event){
    document.querySelector(".selected-image").classList.remove("selected-image");
    const clickParent = event.target.parentNode;
    clickParent.classList.add("selected-image");
  }
})