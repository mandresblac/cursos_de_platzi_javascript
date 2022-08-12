function aleatorio(min, max){
    let resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    return resultado;
}

let vp = document.querySelector("#villaplatzi");
let papel = vp.getContext("2d");

let fondo = {
    url: "tile.webp",
    cargaOK: false 
};

let vaca = {
    url: "vaca.webp",
    cargaOK: false 
};

let cantidad = aleatorio(5, 25);

//Instanciamos el objeto imagen de la clase Image()
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//Instanciamos la variable vaca
vaca.imagen = new Image();
vaca.imagen.scr = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    };
    if(vaca.cargaOK){
        console.log(cantidad);
        for (let v = 0; v < cantidad; v++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}




