
const prompt = require('prompt-sync')();


// Micro desafío 1: 

// El Tech Leader nos informa que debemos efectuar un código 
// que permita calcular el saldo de la cuenta 
// de un cliente de la Institución Financiera. 

// Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.

let electros = ["cocina", "microondas", "airfryer", "heladera", "freezer", "lavarropas"];

console.log(`Este es el array principal: "${electros}"`)


// Ejecutar sobre el array creado las siguientes acciones:

// a. Acceder de manera arbitraria a diferentes elementos del array. 

// Recuerda mostrar por la consola los resultados.

let elPrimerElemento = electros[0];

let elSegundoElemento = electros[1];

let elTercerElemento = electros[2];

console.log(`Accedo de manera arbitraria a diferentes elementos del array: "${elPrimerElemento}, ${elSegundoElemento}, ${elTercerElemento}"`)


// b. Extraer el primer elemento del array y agregarlo al final del mismo.

let primerElectro = electros.shift();

electros.push(primerElectro);

console.log(`Extraigo el primer elemento del array y lo agrego al final del mismo: "${electros}"`);


// c. Agregar al final del array dos (2) nuevos productos.

electros.push("plancha", "Pc");

console.log(`Agrego al final del array dos (2) nuevos productos: ${electros}`);

// d. Mostrar por la consola la cantidad de elementos que contiene el array.

let longitud = electros.length;

console.log(`Muestro por la consola la cantidad de elementos que contiene el array: ${longitud}`);

// e. Buscar un elemento del array y crear una condición responsable de establecer 
// si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: 
// “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.

let electro = prompt("¿Qué elemento desea buscar?: ");

if (electros.includes(electro) == true) {
    console.log("Producto encontrado.");
} else {

    console.log("El producto buscado no existe.")

}


// f. Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.

let separadosPorEspacio = electros.join(" ");

console.log(separadosPorEspacio);


// g. Determinar la cantidad de elementos que posee la cadena de texto obtenida.

let nuevoElectros = separadosPorEspacio.split(" ");

console.log(`La cantidad de elementos que posee la cadena de texto obtenida es: ${nuevoElectros.length}.`);


// h. Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.

let nuevoElectros1 = separadosPorEspacio.replace("airfryer", "secarropas");
console.log(nuevoElectros1); 

// i.Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. 
// Tener en cuenta que los elementos deben estar separados por una coma. En todos los casos se debe mostrar por consola el resultado obtenido.