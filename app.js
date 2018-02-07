/* Iteradores para un 'String' (ES6) */

// Forma tradicional
const mensaje = 'Aprendiendo JavaScript Moderno';

for( let i = 0; i < mensaje .length; i++ ) {
    console .log( mensaje[ i ] );
}

// Forma (ES6)
for( let letra of mensaje ) {
    console .log( letra );
}