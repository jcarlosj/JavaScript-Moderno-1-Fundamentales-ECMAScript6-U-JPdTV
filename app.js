/* Rangos en Expresiones Regulares en JavaScript 
 * - Para expresar un rango de números debe usarse las llaves, en las que se indica un 
 *   número inicial y uno final para el rango. Ej: {1,2}, {3,9}
 * - De igual manera se usan las llaves para establecer un valor fijo de caracteres que 
 *   se desea evaluar. Ej: {4}, {9}, {1} */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Rangos Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón fechas' );
        
        // PRIMERO
        valor = '20-10-2018';
        expresionRegular = /\d+-\d+-\d+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        expresionRegular = /\d{1,2}-\d{1,2}-\d{4}/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = '2-1-2018';                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // CUARTO
        valor = '2-1-18';                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // QUINTO
        valor = '2-100-2018';                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEXTO
        valor = '200-10-2018';                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        /* NOTA: { 1, 2 } Denota un rango de números (entre uno y dos dígitos)
        *        { 4 }    Denota un número fijo de digitos */
    console .groupEnd();

console .groupEnd();