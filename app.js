/* Solo Correo Electrónico en Expresiones Regulares en JavaScript */

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Solo correo electrónico en Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón email' );
        
        // PRIMERO
        valor = 'correo@correo.co';
        expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        valor = 'www.correo.co';
        expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = 'correo@correo.c';
        expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // CUARTO
        valor = 'correo@fulanito';
        expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // QUNTO
        valor = 'correofulanito.sip';
        expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            // Solo mayúsculas             

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();

console .groupEnd();