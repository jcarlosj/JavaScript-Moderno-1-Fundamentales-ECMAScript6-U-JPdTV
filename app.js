/* Letras o Números en Expresiones Regulares en JavaScript */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Letras o Números en Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón fechas' );
        
        // PRIMERO
        valor = '20-10-2018';
        expresionRegular = /\w+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        valor = '1234';
        expresionRegular = /\w+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = 'Hola saludos terricolas';
        expresionRegular = /\w+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // CUARTO
        valor = 'El 2018 el año para aprender JavaScript';
        expresionRegular = /\w+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        /* NOTA: \w : Evaluará que lo que tenga la expresión sea únicamente números o letras
         * */
    console .groupEnd();

console .groupEnd();