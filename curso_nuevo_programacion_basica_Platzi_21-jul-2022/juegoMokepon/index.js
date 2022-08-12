//Importamos la librería express.js dentro de mi proyecto para poderlo utilizar
const express = require("express");
//Importamos librería "cors" dentro del proyecto
const cors = require("cors");

//Creamos una aplicación con express.js que se llamara "app"
const app = express();

//Deshabilitamos posibles errores de cors
app.use(cors());

//habilitamos la capacidad de recibir peticiones de tipo POST que traigan contenido en formato .json
app.use(express.json());

//Creamos lista de jugadores
const jugadores = [];

//Clase que representa a cada uno de los jugadores
class Jugador{
    //Método constructor
    constructor(id){
        this.id = id;
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon;
    }

    actualizarPosicion(x, y){
        this.x = x;
        this.y = y;
    }
} 

//Clase mokepon
class Mokepon{
    //Método constructor
    constructor(nombre){
        this.nombre = nombre;
    }
}

//Le decimos a express.js que cuando reciba una petición en la URL raíz "/" responda "Hola"
//req = request o petición, res = response o respuesta
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`; 
    const jugador = new Jugador(id);
    jugadores.push(jugador)//Lo agregamos a la lista de jugadores

    //Cabecera con metadatos
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.send(id); //.send() permite enviar respuesta al usuario o cliente
});


app.post("/mokepon/:jugadorId", (req, res) =>{
    const jugadorId = req.params.jugadorId || "";
    const nombre = req.body.mokepon || "";
    const mokepon = new Mokepon(nombre);
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon);
    }

    console.log(jugadores);//Este console.log() se puede eliminar
    console.log(jugadorId);//Este console.log() se puede eliminar
    res.end();
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y);
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id);

    res.send({
        enemigos
    });
})

//Le decimos a express.js que escuche continuamente en el puerto 3000 las peticiones de los clientes para que todo el tiempo pueda responderles, utilizamos la propiedad .listen() con el número del puerto que es 3000
app.listen(3000, () => {
    console.log("Servidor funcionando");
});
