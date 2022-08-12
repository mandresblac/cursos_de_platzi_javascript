function peso(peso, g1, g2) {
    return (peso * g1) / g2;
}

let gravedadTierra = 9.8;
let gravedadMarte = 3.711;  
let gravedadJupiter = 24.79;
let gravedaSaturno = 10.44;
let gravedadUrano = 8.87;

let usuario = Number(prompt("Ingrese su peso en kilos: "));
let planeta = Number(prompt("Seleccione el número del planeta:  \n1. Marte \n2. Jupiter \n3. Saturno \n4. Urano"));

if(planeta === 1) {
    document.write("Su peso en Marte es: " + parseInt(peso(usuario, gravedadMarte, gravedadTierra)) + " kilos.");
}
else if(planeta === 2) {
    document.write("Su peso en Jupiter es: " + parseInt(peso(usuario, gravedadJupiter, gravedadTierra)) + " kilos.");
}
else if(planeta === 3) {
    document.write("Su peso en Saturno es: " + parseInt(peso(usuario, gravedaSaturno, gravedadTierra)) + " kilos.");
}
else if(planeta === 4) {
    document.write("Su peso en Urano es: " + parseInt(peso(usuario, gravedadUrano, gravedadTierra)) + " kilos.");
}
else {
    document.write("No seleccionó un planeta válido.");
}
