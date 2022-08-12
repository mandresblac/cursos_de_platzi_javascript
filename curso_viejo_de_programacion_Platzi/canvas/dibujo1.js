let d = document.querySelector("#dibujito");
let lienzo = d.getContext("2d"); //.getContext() es una funcion del objeto canvas que me permite obtener el area donde voy a dibujar en 2d

//Rectangulo grande
lienzo.fillStyle = "lightgrey";
lienzo.fillRect(0, 0, 300, 300);// .fillRect() dibuja un rectángulo relleno.
lienzo.strokeRect(0, 0, 300, 300);// .strokeRect() dibuja el contorno del rectangulo.

//Dibujando primera línea
lienzo.beginPath();//.beginPath() s la funcion para arrancar el traso del dibujo
lienzo.strokeStyle = "blue";//.strokeStyle es para definir el color de la línea
lienzo.moveTo(50, 10);//.moveTo() es un metodo o funcion del canvas para mover el lapiz de dibujo a donde va a arrancar la línea
lienzo.lineTo(250, 2);//.lineTo() es la funcion del canvas para trazar una línea
lienzo.stroke();//.stroke() dibuja la línea
lienzo.closePath();//.closePath() es la funcion para cerrar el traso del dibujo

//Funcion para dibujar una línea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
