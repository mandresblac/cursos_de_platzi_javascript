const teclas = {
    UP: 38, 
    DOWN: 40, 
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener('keydown', dibujarTeclado);
let cuadrito = document.querySelector("#area-de-dibujo");
let papel = cuadrito.getContext("2d");
let x = 100;
let y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

//Funcion para dibujar una línea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    let colorcito = "green";
    let movimiento = 1;
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, (y - movimiento), papel);
            y -= movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, (y + movimiento), papel);
            y += movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, (x - movimiento), y, papel);
            x -= movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, (x + movimiento), y, papel);
            x += movimiento;
            break;
        default:
            console.log('Otra tecla');
    }
}
