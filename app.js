/* Negar Expresiones Regulares en JavaScript 
 * Para negar la expresión lo que hacemos es colocar símbolo ^ dentro de la expresión que vamos a negar */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Negando Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón NO existan 4 dígitos' );
        
        // PRIMERO
        valor = '2018';
        expresionRegular = /[^0-9]/;                // Todo lo contrario a los dígitos del 0 al 9

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();

console .groupEnd();