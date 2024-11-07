// 1. En la carpeta ya creada, crea el archivo movies.js

// 2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno
//  de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
//  ‘Elvis’,‘Thor: amor y trueno’.

let movies = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis","Thor: amor y trueno"];


// 3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
//  amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
//  película y con letras en mayúsculas. Para ello el techleader, te solicita que crees
//  una función, la cual recibirá por parámetro la película indicada y deberá retornar la
//  misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
//  .toUpperCase(). Con ese valor recibido, deberás colocarla primero en la
//  estructura creada.


function peliculaMasVendida(params) {
    let peliEnMayuscula= params.toUpperCase();
    console.log(`La película más vendida es: ${peliEnMayuscula}`);
    return peliEnMayuscula;
}


let peliMasVendida = peliculaMasVendida("Thor: amor y trueno");

movies.pop();

movies.unshift(peliMasVendida)

console.log(`Esta es una lista de las películas, donde se destaca la película más vendida al principio de la lista: ${movies.join(", ")}`);


// 4. Una vez terminada la actividad, nos indican que debemos crear una cadena de
//  texto para las siguientes películas próximas a estrenar:
//  a. Counter-Strike
//  b. NOP
//  c. Vértigo
//  d. Nick
//  e. Avatar
//  Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
//  cuenta que cada elemento debe estar separado por una coma.

let estrenos = "Counter-Strike, NOP, Vértigo, Nick, Avatar"; 

console.log(`Estas son las películas a estrenar: ${estrenos.split(",  ")}`);


// 5. Finalmente, el TechLeader te solicita crear una función que reciba por parámetro
//  ambas estructuras creadas y debe devolver una estructura con todas
//  las películas, para ello te recomendamos que investigues lo que hace el método
//  .concat().

function todasLasMovies(params1, params2 ) {

    let todasLasMovies = params1.join(", ").concat(", ", params2.split(",  "));

    return console.log(`Esta es una lista de todo el conjunto de películas: ${todasLasMovies}`);
    
}

todasLasMovies(movies, estrenos);