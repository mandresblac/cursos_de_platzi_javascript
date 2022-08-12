//Hay 2 tipos de funcions en javascript: Declarativas y de Expresion o anonimas.

//Funciones Declarativas
function miFuncion1(a, b) {
    return a + b;
}

//Llamada de la funcion
console.log(miFuncion1(4, 5));


//Funciones de Expresion o anonimas
let miFuncion2 = function(a, b) {
    return a - b
}

//Llamada de la funcion
console.log(miFuncion2(5, 2));


let miFuncion3 = (a, b) => {
    return a * b;
}

//Llamada de la función
console.log(miFuncion3(4, 2));