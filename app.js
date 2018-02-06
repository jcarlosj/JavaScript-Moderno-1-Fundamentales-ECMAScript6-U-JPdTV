/* Destructuring (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

console.log(cliente);

// Extracción de datos tradicional
let nombre_1 = cliente .nombre,
    tipo_1 = cliente .tipo;

console .group( 'Extracción Tradicional' );
    console .log( 'Nombre', nombre_1 );    
    console .log( 'Tipo', tipo_1 );    
console .groupEnd();

// Extracción de datos usando Destructuring
let { nombre, tipo } = cliente;       // Mapea los datos (por sus nombres, pues deben llamarse igual a los del Objeto) 

console .group( 'Extracción usando Destructuring' );
    console .log( 'Nombre', nombre );    
    console .log( 'Tipo', tipo );    
console .groupEnd();