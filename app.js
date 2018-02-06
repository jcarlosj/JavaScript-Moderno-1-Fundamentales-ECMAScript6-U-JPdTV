/* Symbol en JavaScript (ES6) 
 *  - Es un valor primitivo de JavaScript
 *  - Un Symbol, agregado a un valor da una cierta propiedad privada y diferente en cada objeto
 */

// ---- EJEMPLO 1 ----
// Crea un Symbol
const simbolo1 = Symbol(),
      simbolo2 = Symbol( 'Descripción del Símbolo aquí' );

console .log( 'simbolo1', simbolo1 );
console .log( 'Tipo: ', typeof simbolo1 );

console .log( 'simbolo2', simbolo2 );
console .log( 'Tipo: ', typeof simbolo2 );

console .log( 'simbolo1 === simbolo2', simbolo1 === simbolo2 );
console .log( 'Symbol() === Symbol()', Symbol() === Symbol() );

// ---- EJEMPLO 2 ----
// Crea Symbols
let nombre = Symbol(),
    apellido = Symbol();

// Crea Objeto Persona (vacío)
let persona = {}

console .log( 'Objeto Persona: ', persona );

// Agregamos propiedades
persona .nombre = 'Juan';               // Agrega propiedad 'nombre' al objeto 'persona'
persona .apellido = 'Jiménez';          // Agrega propiedad 'apellido' al objeto 'persona'
persona[ nombre ] = 'Elisa';            // Agrega el Symbol 'nombre' al objeto 'persona' (se deben usar corchetes[] )
persona[ apellido ] = 'Giraldo';        // Agrega el Symbol 'apellido' al objeto 'persona' (se deben usar corchetes[] )
persona .saldo = 1000;                  // Agrega propiedad 'saldo' al objeto 'persona'
persona .tipoCliente = 'corriente';     // Agrega propiedad 'tipoCliente' al objeto 'persona'

console .group( 'Objeto Persona' );
    console .log( 'Objeto Persona: ', persona );

    console .log( 'Nombre: ', persona .nombre );
    console .log( 'Symbol (Nombre): ', persona [ nombre ] );

    // Iterador FOR IN para iterar el objeto persona (No itera los Symbol)
    for( let i in persona ) {
        console .log( ` - ${ i }: ${ persona[ i ] }` );
    }
console .groupEnd();

// NOTA: Los Symbols no pueden ser iterados, solo se puede acceder a ellos usando corchetes y su nombre específico
//       por eso se pueden considerar como valores "privados" del objeto