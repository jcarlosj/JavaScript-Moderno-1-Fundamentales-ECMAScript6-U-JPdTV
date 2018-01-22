/* Estructuras de control en JavaScript (If/Else) */

/* Ejemplo 1 */ 
const edad = 17;

if( edad >= 18 ) {
    console .log( 'Eres mayor de edad puedes entrar al sitio' );
}
else {
    console .log( 'Eres menor de edad NO puedes entrar al sitio' );
}

/* Ejemplo 2: Comprobar que una variable tiene un valor X */ 
let puntaje;

/* Forma 1 */ 
if( puntaje ) {
    console .log( `El puntaje fue de ${ puntaje }` );
}
else {
    console .log( `No hay puntaje`);
}

/* Forma 2 */
if( typeof puntaje != 'undefined' ) {
    console .log( `El puntaje fue de ${ puntaje }` );
}
else {
    console .log( `No hay puntaje`);
}

/* Ejemplo 3: Comprobar dos valores */
let efectivo = 500,
    totalCarrito = 300;

if( efectivo > totalCarrito ) {
    console .log( 'Pago correcto' );
}
else {
    console .log( 'Fondos insuficientes!' );
}    