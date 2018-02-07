/* Generadores en JavaScript (ES6) 
 * - Es una función que va a retornar un Iterador
 * - Debemos indicarle a JavaScript que la función en realidad es un
 *   Generador anteponiendo al nombre de la misma un asterisco
 * - Debe hacer uso de un 'yield' (Cualquier dato primitivo)
 * - Se llaman como funciones normales, pero lo que retornan es un iterador
 */

 // Crea un Generador
function *generador() {
    // Yield
    yield 1;
    yield 'Ana Maria Fernández';
    yield 3+6;
    yield true;

}

const iterador = generador();       // Asigna el valor (generador retorna un iterador)

console .log( 'iterador', iterador );

// Iteración a través del generador
console .log( 'iterador.next().value ', iterador .next() .value );      // 1
console .log( 'iterador.next().value ', iterador .next() .value );      // 9
console .log( 'iterador.next().value ', iterador .next() .value );      // 'Ana María Fernández'
console .log( 'iterador.next().value ', iterador .next() .value );      // true
console .log( 'iterador.next().value ', iterador .next() .value );      // undefined
