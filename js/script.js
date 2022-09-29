let images = document.getElementsByClassName('image');
let tuttelefoto = document.getElementById('container');
let i=0
let fotoprev = images[i]



function avvia() {
    fotoprev.classList.remove("mostra")
    i++
    if (i>images.lenght) {
        i=0
    }
    let fotonext = images[i]
    fotonext.classList.add("mostra")
}

