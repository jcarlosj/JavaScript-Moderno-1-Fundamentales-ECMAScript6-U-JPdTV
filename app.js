/* Generadores en JavaScript (ES6) 
 * - Es una función que va a retornar un Iterador
 * - Debemos indicarle a JavaScript que la función en realidad es un
 *   Generador anteponiendo al nombre de la misma un asterisco
 * - Debe hacer uso de un 'yield' (Cualquier dato primitivo)
 * - Se llaman como funciones normales, pero lo que retornan es un iterador
 */

 // Crea un Generador
function *nuevoGenerador( carrito ) {
    for( let i = 0; i <= carrito .length; i++ )  {
        yield carrito[ i ];    
    }
}

// Crea un 'Array'
const carrito = [ 'Cinturón', 'Cartera', 'Pañuelo', 'Camiseta', 'Pantalón' ];

// Implementa el generador al 'Array'
let iterador = nuevoGenerador( carrito );

console .log( 'iterador', iterador );

console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: "Cinturón", done: false }
console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: "Cartera", done: false }
console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: "Pañuelo", done: false }
console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: "Camiseta", done: false }
console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: "Pantalón", done: false }
console .log( 'iterador.next().value', iterador .next() .value );    // Object { value: undefined, done: false }

