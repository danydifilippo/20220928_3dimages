let images = document.getElementsByClassName('image');

for (let image of images) {
    image.style.width="600px"  
}

// un altro modo for per cambiare stile atutti gli elementi di un array
for (let i=0; i<images.length;i++) {
    images[i].style.width="400px"
}

images.forEach(image => {
    image.style.width = "300px"
    image.style.transform = "translateY(45deg)"
});


