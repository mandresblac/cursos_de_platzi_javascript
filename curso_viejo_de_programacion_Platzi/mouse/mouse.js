//mousedown y mouseup
document.addEventListener("onmouesdown");
let areaDibujo = document.querySelector("#area-de-dibujo");
let pincel = areaDibujo.getContext("2d");

//Area del dibujo

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 500, 500);// .fillRect() dibuja un rectángulo relleno.
pincel.strokeRect(0, 0, 500, 500);// .strokeRect() dibuja el contorno del rectangulo.
