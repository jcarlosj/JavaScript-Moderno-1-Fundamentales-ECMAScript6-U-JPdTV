/* Operadores AND y OR en las estructuras de control en JavaScript (If/ElseIf) */

/* Operador && (AND) */
let edadAdmitida = 13,
    generoAdmitido = 'masculino';

if( edadAdmitida >= 18 && generoAdmitido == 'masculino' ) {
    console .log( 'Debe prestar servicio militar, Bienvenido!' );
}
else if( generoAdmitido == 'masculino' ) {
    console .log( 'Debe esperar a cumplir la mayoría de edad' );
}
else {
    console .log( 'Las chicas no prestan servicio militar en Colombia!' );
}

/* Operador || (OR) */
let efectivo = 300,
    credito = 300,
    disponible = efectivo + credito;
    totalCarrito = 500;

/* Forma 1 */    
if ( totalCarrito < efectivo || totalCarrito < credito ) {
    console .log( 'Puede pagar' );
}    
else {
    console .log( 'No puede pagar' );
}

/* Forma 2 */
if ( totalCarrito < efectivo || totalCarrito < credito ) {
    console .log( 'Puede pagar' );
}    
else if( totalCarrito < disponible ) {
    console .log( 'Puede pagar (crédito + efectivo)' );
}
else {
    console .log( 'No puede pagar' );
}

/* Forma 3 */
if ( totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible ) {
    console .log( 'Puede pagar' );
}    
else {
    console .log( 'No puede pagar' );
}