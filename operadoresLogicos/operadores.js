// operador &&
const nombre = 'Carlos';
const edad = 19;
const tieneEntrada = true;


const permitirAcceso = edad >= 18 && tieneEntrada;

//console.log('Acceso permitido a la SAQ: ' + permitirAcceso);

// operador OR
const nombre2 = 'John';
const age = 20;
const billet = true;
const parentPermition = true;

const permitirAcceso2 = (age >= 21 && billet)  || (parentPermition && billet)

  console.log(`${nombre2} has acces to concert tonight : ` + permitirAcceso2);

// operador !NOT -transforma lo contrario de la respuesta
let variable = false;

console.log(!variable);


