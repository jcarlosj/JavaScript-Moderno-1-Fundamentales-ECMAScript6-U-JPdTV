/* Solo Números en Expresiones Regulares en JavaScript */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Solo Números en Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón fechas' );
        
        // PRIMERO
        valor = '1547856';
        expresionRegular = /\d+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        valor = 'Hola Mundo!';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = '1547856';
        expresionRegular = /([0-9])\w/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // CUARTO
        valor = 'Aprendiendo JavaScript!';
        expresionRegular = /([0-9])\w/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();

console .groupEnd();