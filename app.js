/* Funciones Propias en JavaScript */

/* Se define funcion (Sin Argumentos) */
function saludar() {
    console .log( 'Hola ');
}
/* Realizamos el llamado */
saludar();
saludar();

/* Se define funcion (Con Argumentos) */
function saludarA( nombre ) {
    console .log( `Hola ${ nombre }`);
}
/* Realizamos el llamado */
saludarA( 'Maria' );
saludarA( 'José' );
saludarA( 'Jorge' );

/* Se define funcion (Con Argumentos que imprime valores) */
function sumar1( numeroA, numeroB ) {
    console .log( 'sumar1 ', numeroA + numeroB );
}
/* Realizamos el llamado */
sumar1( 13, 9 );
sumar1( 0, -1 );

/* Se define funcion (Con Argumentos que retorna valores) */
function sumar2( numeroA, numeroB ) {
    return numeroA + numeroB;
}
/* Realizamos el llamado */
console .log( 'sumar2 ', sumar2( 2, 3 ) );
console .log( 'sumar2 ', sumar2( 10, 4 ) );