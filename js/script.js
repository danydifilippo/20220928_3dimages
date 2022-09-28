let images = document.getElementsByClassName('image');
let tuttelefoto = document.getElementById('container');

for (let i=0; i<images.length;i++) {
    images[i].style.width="300px"   
}


const avvia = function() {
    let i=0
    const fotoprec = tuttelefoto[i]
    fotoprec.classList.remove("mostra")
    i++
    if (i >= tuttelefoto.lenght) {
        i = 0
    }
    const fotocorrente = tuttelefoto[i]
    fotocorrente.classList.add("mostra")
} 

console.log(avvia())
