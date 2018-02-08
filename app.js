/* Expresiones Regulares en JavaScript */
const expresion1 = new RegExp( '/abc/' ),
      expresion2 = '/abc/';

console .log( expresion1 );         // Forma 1
console .log( expresion2 );         // Forma 2

// NOTA: Ambas formas son correctas

// ---- EJEMPLOS ----- 
let valor, 
    expresionRegular;

console .group( 'Expresiones Regulares' );

    // EJEMPLO 1:
    console .group( 'Patrón 4 dígitos' );
        
        // PRIMERO
        valor = '2018';
        expresionRegular = /\d\d\d\d/;            

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        expresionRegular = /\d+/;            

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = 'En 2018 año de las tecnologías JavaScript';

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        /* NOTA: \d : Representa un Dígito
         *       En el ejemplo se pone uno por cada uno que deseamos encontrar en el patrón*/   
    console .groupEnd();

    // EJEMPLO 2:
    console .group( 'Patrón dígitos entre el 0 y el 9' );
        
        // PRIMERO
        valor = 1992;
        expresionRegular = /[0123456789]/;                  // Un patrón entre 0 y 9                   

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        expresionRegular = /[0-9]/;                         // Un patrón entre 0 y 9
        
        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        /* NOTA: El Patrón /[0123456789]/ es igual a el patrón /[0-9]/ respresenta dígitos
         *       del 1 al 9 */
    console .groupEnd();

    // EJEMPLO 3:
    console .group( 'Patrón fecha "20-10-2018"' );

        // PRIMERO
        valor = '20-10-2018';
        expresionRegular = /\d\d-\d\d-\d\d\d\d/;            

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        expresionRegular = /\d+-\d+-\d+/;                   

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

    console .groupEnd();   

    // EJEMPLO 4:
    console .group( 'Patrón hora "10:30"' );

        // PRIMERO
        valor = '10:30';
        expresionRegular = /\d\d:\d\d/;                     

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // SEGUNDO
        expresionRegular = /\d\d:\d\d \D\D/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // TERCERO
        valor = '10:30 AM';
        expresionRegular = /\d\d:\d\d \D\D/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        // CUARTO
        expresionRegular = /\d+:\d+ \D+/;                

        console .log( `valor: ${ valor } \nexpresión: ${ expresionRegular }` );
        console .log( 'Resultado: ', expresionRegular .test( valor ) );

        /* NOTA: \D : Busca un caracter que NO sea un dígito
         * */
    console .groupEnd();    
console .groupEnd();