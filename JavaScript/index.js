let persona = {
    nombre : 'elegu',
    edad : 30,
    tieneHijos : false,
    controlesMedicos: ["10/10/2019","20/09/2020"]

};

console.log ("nombre de la persona", persona.nombre);
console.log (persona.nombre, "tiene", persona.edad, "anos");
console.log (persona.nombre, "tiene hijos?", persona.tieneHijos);
console.log (persona.nombre, "fecha de primera consulta", persona.controlesMedicos[0]);

persona.edad = persona.edad + 1;
console.log(persona.edad);

function sumar (x,y) {
    resultado = x + y
    return resultado
}

function restar (x,y) {
    resultado = x - y
    return resultado
}

function saludar (nombre) {
    return "hola, " + nombre;
}

let eguz = {
    nombre : "eguz",
    balance : 1000
}

function balanceActual (nombre) {
   resultado =  "hola " + nombre.nombre + "tu saldo es " + nombre.balance
   return resultado
 }