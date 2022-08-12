//Creamos la clase Billete y adentro creamos 2 parametros v=valor y c=cantidad
class Billete {
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

//Creamos funcion entregarDinero
function entregarDinero(){
    //La variable t recibe la caja de texto del HTML con id dinero
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(let bi of caja){//bi es la variable de los billetes
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0){
        //Cuando el cajero no tiene el dinero suficiente arroja este mensaje
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    }
    else{
        for(let e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
}

//Creamos un array vacio llamado caja que es donde vamos a guardar o meter todoslos billetes que tiene nuestro cajero automatico
let caja = [];

//Creamos un array vacio llamado entregado que representa los billetes o dinero total que le entregamos al usuario
let entregado = [];

//Agregamos o empujamos(.push) al array caja 5 billetes de 125, 10 billetes de 50, 5 billetes de 20, 10 billetes de 10 y 5 billetes de 5
caja.push(new Billete(125, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

//La variable dinero es la cantidad de plata que le pide el usuario al cajero
let dinero = 0;

//La variable div es el resultado de la division cada vez que iteramos
let div = 0;

let papeles = 0;

//La variable resultado captura el elemento de HTML con id resultado en javascript
let resultado = document.getElementById("resultado");

//Variable b que representa el boton Extraer del HTML
let b = document.getElementById("extraer");
//Cuando se da click al boton extraer del HTML representado en javascript por la variable b, se dispara la funcion entregarDinero
b.addEventListener("click", entregarDinero);

