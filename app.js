/* Solo letras en Expresiones Regulares en JavaScript */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Solo letras en Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón letras mayúsculas' );
        
        // PRIMERO
        valor = 'hola comunidad javascript';
        expresionRegular = /([A-Z])\w+/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        valor = 'HOLA COMUNIDAD JAVASCRIPT';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );
    
        // TERCERO
        valor = 'Hola Comunidad JavaScript';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();

    // EJEMPLO 2:
    console .group( 'Patrón letras minúsculas' );
        
        // PRIMERO
        valor = 'hola comunidad javascript';
        expresionRegular = /([a-z])\w+/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        valor = 'HOLA COMUNIDAD JAVASCRIPT';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );
    
        // TERCERO
        valor = 'Hola Comunidad JavaScript';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();

console .groupEnd();