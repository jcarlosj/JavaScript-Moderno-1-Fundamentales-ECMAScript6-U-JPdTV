/* Convertir de un Number a un String en JavaScript */

let codigoPostal, dato;

console .group( 'Convertir de un Number a un String' );
    codigoPostal = 90210;
    console .log( 'codigoPostal.length ', codigoPostal .length );            // undefined (Por que length es un método exclusivo para las cadenas de texto o Strings)

    // Convierte a String
    codigoPostal = String( codigoPostal );      
    console .log( 'String(codigoPostal).length ', codigoPostal .length );   // 5 
    console .log( '( "4" + "4" ).length ', ( "4" + "4" ) .length );         // 2  

    /* Array a String */    
    dato = String( [ 1, 2, 3 ] );
    console .log( 'String ([ 1, 2, 3 ]) ', dato );                     // 1,2,3
    console .log( '(String ([ 1, 2, 3 ])).length ', dato .length );    // 5
    console .log( 'typeof String ([ 1, 2, 3 ]) ', typeof dato );       // string

    /* Convertir a String usando la función 'toString' */
    console .group( 'toString' );
        
        /* Entero a String */
        console .group( 'dato = 20' );
            dato = 20;
            dato = dato .toString();                        // Convierte a String
            console .log( 'dato ', dato );                  // 20
            console .log( 'dato.length ', dato .length );   // 2
            console .log( 'typeof dato ', typeof dato );    // string
        console .groupEnd();
    
        /* Booleano a String */
        console .group( 'dato = true' );
            dato = true;
            dato = dato .toString();                        // Convierte a String
            console .log( 'dato ', dato );                  // true
            console .log( 'dato.length ', dato .length );   // 4
            console .log( 'typeof dato ', typeof dato );    // string
        console .groupEnd();   
    
        /* Array a String */
        console .group( 'dato = [ 1, 2, 3 ]' );
            dato = [ 1, 2, 3 ];
            dato = dato .toString();                        // Convierte a String
            console .log( 'dato ', dato );                  // true
            console .log( 'dato.length ', dato .length );   // 4
            console .log( 'typeof dato ', typeof dato );    // string
        console .groupEnd();   

    console .groupEnd();
console .groupEnd();

/* Convertir de un Boolean a un String en JavaScript */
console .group( 'Convertir de un Boolean a un String' );
    
    /* Con dato booleano = true */
    console .group( 'dato = true' );
        dato = true;
        // Convierte a String
        dato = String( dato );
        console .log( 'String (true) ', dato );                     // true
        console .log( '(String (true)).length ', dato .length );    // 4
        console .log( 'typeof String (true) ', typeof dato );       // string
    console .groupEnd();

    /* Con dato booleano = false */
    console .group( 'dato = false' );
        dato = false;
        // Convierte a String
        dato = String( dato );
        console .log( 'String (true) ', dato );                     // true
        console .log( '(String (true)).length ', dato .length );    // 5
        console .log( 'typeof String (true) ', typeof dato );       // string
    console .groupEnd();    
console .groupEnd();

/* NOTA: null e undefined no se pueden convertir a String */