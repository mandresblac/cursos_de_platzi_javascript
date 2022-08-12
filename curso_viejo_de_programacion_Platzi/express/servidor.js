//Este es el codigo para crear un servidor web con express, y tenemos 2 opciones.
//Sitio web de express en internet: https://www.npmjs.com/package/express

//Las 2 lineas siguientes siempre son obligatorias para crear el servidor express
const express = require("express");
const app = express();

//---------------------------_ OPCION 1 - FORMA CORTA -----------------------------------
app.get("/", function(req, res){// "req" es require o peticion, "res" es response o respuesta
    res.send("Hola mundo");
})

app.get("/cursos", function(req, res){// "req" es require o peticion, "res" es response o respuesta
    res.send("Hola mundillo");
})

//Ponemos a correr el servidor con el metodo .listen() por el puerto 3000
app.listen(3000);


//---------------------------- OPCION 2 - FORMA LARGA -----------------------------------
app.get("/", inicio);// URL /
app.get("/cursos", cursos);// URL /cursos

//Funcion inicio
function inicio(req, res){//"req" es require o peticion, "res" es response o respuesta
    res.send("Este es el <strong>Home</strong> genial!!")
}

//Funcion cursos
function cursos(req, res){//"req" es require o peticion, "res" es response o respuesta
    res.send("Estos son los <strong>cursos</strong>");
}

//Ponemos a correr el servidor con el metodo .listen() por el puerto 8989
app.listen(8989);
