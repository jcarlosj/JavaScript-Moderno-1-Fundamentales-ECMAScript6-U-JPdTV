/* Estructuras de control en JavaScript (If/ElseIf) */

/* Ejemplo 1 */ 
let hora = 20;

/* Forma 1 */
if( hora > 0 && hora < 12 ) {
    console .log( 'Buenos días!' );
}
else {
    if( hora < 19 ) {
        console .log( 'Buenas tardes!' );
    }
    else{
        console .log( 'Buenos noches!' );
    }
}

/* Forma 2 */
hora = 13;

if( hora > 0 && hora < 12 ) {
    console .log( 'Buenos días!' );
}
else if( hora < 19 ) {
    console .log( 'Buenas tardes!' );
}
else{
    console .log( 'Buenos noches!' );
}

/* Forma 3 */
hora = 90;

if( hora < 0 ) {
    console .log( `No existen las ${ hora } horas` );
}
else if( hora < 12 ) {
    console .log( 'Buenos días!' );
}
else if( hora < 19 ) {
    console .log( 'Buenas tardes!' );
}
else if( hora < 24 ) {
    console .log( 'Buenas noches!' );
}
else {
    console .log( `No existen las ${ hora } horas` );
}


