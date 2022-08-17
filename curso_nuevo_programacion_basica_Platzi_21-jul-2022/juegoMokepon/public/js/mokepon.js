//Para esconder el elemento con id "seleccionar-ataque" del documento html cuando arranque el juego
const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");

//Para esconder el elemento con id "reiniciar" (que es la section donde esta el boton de reinicio del juego) del documento html cuando arranque el juego
const sectionReiniciar = document.querySelector("#reiniciar");
const  botonMascotaJugador = document.querySelector("#boton-mascota");
sectionReiniciar.style.display = "none";//El valor "none" oculta en el navegador el elemento con id "reiniciar" del documento html
const botonReiniciar = document.querySelector("#boton-reiniciar");

//Para esconder el elemento con id "seleccionar-mascota" del documento html 
const sectionSeleccionarMascota = document.querySelector("#seleccionar-mascota");
const spanMascotaJugador = document.querySelector("#mascota-jugador");

const spanMascotaEnemigo = document.querySelector("#mascota-enemigo");

const spanVidasJugador = document.querySelector("#vidas-jugador");
const spanVidasEnemigo = document.querySelector("#vidas-enemigo");

const sectionMensajes = document.querySelector("#resultado");
const ataquesDelJugador = document.querySelector("#ataques-del-jugador");
const ataquesDelEnemigo = document.querySelector("#ataques-del-enemigo");

const contenedorTarjetas = document.querySelector("#contenedor-tarjetas");
const contenedorAtaques = document.querySelector("#contenedor-ataques");

//CANVAS
const sectionVerMapa = document.querySelector("#ver-mapa");
const mapa = document.querySelector("#mapa");

//Variables globales
let jugadorId = null;
let enemigoId = null;
let mokepones = []; //Arreglo vació para luego almacenar objetos o instancias de la clase Mokepon
let mokeponesEnemigos = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;

//Almacenamos en variables el llamado a los elementos del documento html que hacemos a través del atributo id
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;

//Botones de ataque
let botonFuego;
let botonAgua;
let botonTierra ;


let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./assets/mokemap.webp";
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20 ;
const anchoMaximoDelMapa = 400; //700

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20;
}

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;


class Mokepon {
    //Método constructor
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.nombre = nombre; /* this.nombre es igual al parámetro nombre que estamos pasando entre paréntesis */
        this.foto = foto; /* this.foto es igual al parámetro foto que estamos pasando entre paréntesis */
        this.vida = vida; /* this.vida es igual al parámetro vida que estamos pasando entre paréntesis */
        this.ataques = [];
        this.ancho = 40;
        this.alto = 40;
        this.x = numeroAleatorio(0, mapa.width - this.ancho);
        this.y = numeroAleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.id = id;
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

//Objetos de la clase Mokepon
let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5, "./assets/hipodoge.webp");
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5, "./assets/capipepo.webp")
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5, "./assets/ratigueya.webp")
let langostelvis = new Mokepon("Langostelvis", "./assets/langostelvis.png", 5, "./assets/langostelvis.png")
let Tucapalma = new Mokepon("Tucapalma", "./assets/tucupalma.png", 5, "./assets/tucupalma.png")
let pydos = new Mokepon("Pydos", "./assets/pydos.png", 5, "./assets/pydos.png")

const HIPODOGE_ATAQUES = [
    { nombre: "Agua💧", id: "boton-agua" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Tierra 🌱", id: "boton-tierra" }
];
hipodoge.ataques.push(...HIPODOGE_ATAQUES);

const CAPIPEPO_ATAQUES = [
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
];
capipepo.ataques.push(...CAPIPEPO_ATAQUES);

const RATIGUEYA_ATAQUES = [
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Tierra 🌱", id: "boton-tierra" }
];
ratigueya.ataques.push(...RATIGUEYA_ATAQUES);

const LANGOSTELVIS_ATAQUES = [
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Tierra 🌱", id: "boton-tierra" }
];
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES);

const TUCUPALMA_ATAQUES = [
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Tierra 🌱", id: "boton-tierra" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
];
Tucapalma.ataques.push(...TUCUPALMA_ATAQUES);

const PYDOS_ATAQUES = [
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Fuego 🔥", id: "boton-fuego" },
    { nombre: "Agua 💧", id: "boton-agua" },
    { nombre: "Tierra 🌱", id: "boton-tierra" }
];
pydos.ataques.push(...PYDOS_ATAQUES);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, Tucapalma, pydos);

//OJO esta función es opcional si la etiqueta script del html esta en el head del mismo documento html para que cargue el código Javascript de primeras
function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none";//el valor none oculta en el navegador el elemento con id seleccionar-ataque del documento html

    //Para ocultar el mapa en el inicio del juego
    sectionVerMapa.style.display = "none";

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.querySelector("#Hipodoge");
    inputCapipepo = document.querySelector("#Capipepo");
    inputRatigueya = document.querySelector("#Ratigueya");
    inputLangostelvis = document.querySelector("#Langostelvis");
    inputTucapalma = document.querySelector("#Tucapalma");
    inputPydos = document.querySelector("#Pydos");

    })

    //Escuchamos a través del método addEventListener() el evento click almacenado en la variable botonMascotaJugador que contiene la etiqueta html con el id boton-mascota
    //Cuando javascript (o el navegador) detecte que le damos click al boton de la mascota del jugador va a llamar a la funcion seleccionarMascotaJugador y la va a ejecutar
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    
    botonReiniciar.addEventListener("click", reiniciarJuego);

    unirseAlJuego();
}

function unirseAlJuego() {
    fetch("http://192.168.0.28:8080/unirse")
        .then(function (res) {
            if(res.ok){
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador(){

    //Condicional
    //El método Checked es para comprobar que el boton se selecciono
    if(inputHipodoge.checked === true){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    }
    else if(inputCapipepo.checked === true){
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    }
    else if(inputRatigueya.checked === true){
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    }
    else if(inputLangostelvis.checked === true){
        spanMascotaJugador.innerHTML = inputLangostelvis.id;
        mascotaJugador = inputLangostelvis.id;
    }
    else if(inputTucapalma.checked === true){
        spanMascotaJugador.innerHTML = inputTucapalma.id;
        mascotaJugador = inputTucapalma.id;
    }
    else if(inputPydos.checked === true){
        spanMascotaJugador.innerHTML = inputPydos.id;
        mascotaJugador = inputPydos.id;
    }
    else{
        alert("No seleccionaste ninguna mascota. \n!SELECCIÓNALA AHORA!");
        return
    } 
    
    sectionSeleccionarMascota.style.display = "none";//el valor none oculta en el navegador el elemento con id seleccionar-mascota del documento html

    seleccionarMokepon(mascotaJugador);

    extraerAtaques(mascotaJugador);
    sectionVerMapa.style.display = "flex";
    iniciarMapa();
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.0.28:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador){
    let ataques;
    for(let i = 0; i < mokepones.length; i++){
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button class="boton-de-ataque b-ataque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })

    botonFuego = document.querySelector("#boton-fuego");
    botonAgua = document.querySelector("#boton-agua");
    botonTierra = document.querySelector("#boton-tierra");
    botones = document.querySelectorAll(".b-ataque");

}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "Fuego 🔥"){
                ataqueJugador.push("FUEGO");
                console.log(ataqueJugador);
                boton.style.background = "#687980"
                boton.disabled = true;
            }
            else if(e.target.textContent === "Agua 💧"){
                ataqueJugador.push("AGUA");
                console.log(ataqueJugador);
                boton.style.background = "#687980"
                boton.disabled = true;
            }
            else{
                ataqueJugador.push("TIERRA");
                console.log(ataqueJugador);
                boton.style.background = "#687980"
                boton.disabled = true;
            }
            if(ataqueJugador.length === 5) {
                enviarAtaques();
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.0.28:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50);
}

function obtenerAtaques() {
    fetch(`http://192.168.0.28:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if(res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if(ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque();
}

function ataqueAleatorioEnemigo(){
    /* console.log("Ataques enemigo", ataquesMokeponEnemigo); */
    let ataqueAleatorio = numeroAleatorio(0, ataquesMokeponEnemigo.length -1);
    
    if(ataqueAleatorio === 0 || ataqueAleatorio === 1){
        ataqueEnemigo.push("FUEGO");
    }
    else if(ataqueAleatorio === 3 || ataqueAleatorio === 4){
        ataqueEnemigo.push("AGUA");
    }
    else{
        ataqueEnemigo.push("TIERRA");
    }
    console.log(ataqueEnemigo);
    
    iniciarPelea();
    
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate();
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
    clearInterval(intervalo);

    for (let i = 0; i < ataqueJugador.length; i++) {
        indexAmbosOponentes(i, i);
        if(ataqueJugador[i]  === ataqueEnemigo[i]){
            crearMensaje("EMPATE");
        }
        else if (ataqueJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA"){
            indexAmbosOponentes(i, i);
            crearMensaje("GANASTE"),
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador; 
        }
        else if (ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO"){
            indexAmbosOponentes(i, i);
            crearMensaje("GANASTE"),
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador; 
        }
        else if (ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA"){
            indexAmbosOponentes(i, i);
            crearMensaje("GANASTE"),
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador; 
        }
        else {
            indexAmbosOponentes(i, i);
            crearMensaje("PERDISTE"),
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }

    }
    
    //Revisamos las vidas
    revisarVidas();
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!!");
    }
    else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("!FELICITACIONES! !GANASTE! 😊🎊🎉");
        
    }
    else{
        crearMensajeFinal("Lo siento, perdiste 😥😭");
    }
}

function crearMensaje(resultado){
    
    //Creamos un parrafo en el documento html desde Javascript con el método createElement()
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p"); 

    //Al parrafo creado anteriormente le metemos un texto desde Javascript
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    //Para mostrar el mensaje de la variable parrafo en el documento HTML desde javascript, utilizamos el método appendChild() que nos permite agarrar elementos que ya hallamos creado en Javascript e insertarlos a algún otro elemento del documento html
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal;
    sectionReiniciar.style.display = "block";//El valor "block" muestra en el navegador el elemento con id "reiniciar" (que contiene el boton de reiniciar) del documento html
}

function reiniciarJuego(){
    location.reload();
}

//Declaramos función para número aleatorio
function numeroAleatorio(min, max) {
    //Operación para hallar el número aleatorio
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
        );
        mascotaJugadorObjeto.pintarMokepon();

        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);

        mokeponesEnemigos.forEach(function (mokepon){
            mokepon.pintarMokepon();
            revisarColision(mokepon);
        })
}

function enviarPosicion(x, y){
    fetch(`http://192.168.0.28:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if(res.ok) {
            res.json()
                .then(function ({enemigos}) {
                    console.log(enemigos);
                    mokeponesEnemigos = enemigos.map(function (enemigo){
                        let mokeponEnemigo = null;
                        const mokeponNombre = enemigo.mokepon.nombre || "";
                        if(mokeponNombre === "Hipodoge"){
                            mokeponEnemigo = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5, "./assets/hipodoge.webp", enemigo.id);
                        }
                        else if(mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5, "./assets/capipepo.webp", enemigo.id);
                        }
                        else if(mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5, "./assets/ratigueya.webp", enemigo.id);
                        }
                        else if(mokeponNombre === "Langostelvis"){
                            mokeponEnemigo = new Mokepon("Langostelvis", "./assets/langostelvis.png", 5, "./assets/langostelvis.png", enemigo.id);
                        }
                        else if(mokeponNombre === "Tucupalma"){
                            mokeponEnemigo = new Mokepon("Tucapalma", "./assets/tucupalma.png", 5, "./assets/tucupalma.png", enemigo.id);
                        }
                        else if(mokeponNombre === "Pydos"){
                            mokeponEnemigo = new Mokepon("Pydos", "./assets/pydos.png", 5, "./assets/pydos.png", enemigo.id);
                        }

                        mokeponEnemigo.x = enemigo.x;
                        mokeponEnemigo.y = enemigo.y;

                        return mokeponEnemigo;
                    })                    
                })
        }
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5;
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5;
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5;
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5;
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba();
            break;
        case "ArrowDown":
            moverAbajo();
            break;
        case "ArrowLeft":
            moverIzquierda();
            break;
        case "ArrowRight":
            moverDerecha();
            break;

        default:
            break;
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
    console.log(mascotaJugadorObjeto, mascotaJugador);

    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener("keydown", sePresionoUnaTecla);
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(params) {
    for(let i = 0; i < mokepones.length; i++){
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i];
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    //Para la mascota
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;

    if( 
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
        ) {
            return;
    }

    detenerMovimiento();
    clearInterval(intervalo);
    /* console.log("Se detecto una colisión"); */

    enemigoId = enemigo.id;
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "none";
    seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener('load', iniciarJuego);

