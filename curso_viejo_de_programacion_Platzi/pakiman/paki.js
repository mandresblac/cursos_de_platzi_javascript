//Array asociativo
let imagenes = [];
imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokacho"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

let coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(let freddito of coleccion){
    freddito.mostrar();
}