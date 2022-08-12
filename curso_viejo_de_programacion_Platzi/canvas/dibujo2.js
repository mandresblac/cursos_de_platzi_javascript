//Variables de los input de la caja de texo y el boton en HTML
let texto = document.querySelector("#texto_lineas");
let boton = document.querySelector("#botoncito");

//Evento para que se ejecute la funcion dibujoPorClick cuando se presione el boton
boton.addEventListener("click", dibujoPorClick);

//Variables de  la etiqueta canvas de HTMML
let pantalla = document.querySelector("#dibujito");
let ancho = pantalla.width;
let lienzo = pantalla.getContext("2d");

function dibujoPorClick(){
    let lineas = parseInt(texto.value);
    let yi, xf;
    let espacio = ancho/lineas;

    //Ciclo for 1
    for(let i = 0; i < lineas; i++){
        yi = espacio * i;
        xf = espacio * (i + 1); 
        dibujarLinea("red", 0, yi, xf, 300);
    }

    //Linea lateral izquierda
    dibujarLinea("blue", 1, 1, 1, (ancho-1));
    //Linea inferior
    dibujarLinea("blue", 1, (ancho - 1), (ancho - 1), (ancho - 1));
    //Linea lateral derecha
    dibujarLinea("blue", (ancho-1), (ancho-1), (ancho-1), 1);
    //Linea superior
    dibujarLinea("blue", (ancho - 1), 1, 1, 1);
}

//Funcion para dibujar una línea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


