/* Tipos de datos en 'JavaScript' */ 

let valor;

console .group( 'Tipos de datos Primitivos' );
    console .log( 'valor ', typeof valor );                         // undefined
    valor = 'Juan';
    console .log( 'valor = "Juan" ', typeof valor );                // string
    valor = 20;
    console .log( 'valor = 20 ', typeof valor );                    // number
    valor = -30;
    console .log( 'valor = -30 ', typeof valor );                   // number
    valor = -3.092;
    console .log( 'valor = -3.092 ', typeof valor );                // number
    valor = "-3.092";
    console .log( 'valor = "-3.092" ', typeof valor );              // string
    valor = true;
    console .log( 'valor = true ', typeof valor );                  // boolean
    valor = null;
    console .log( 'valor = null ', typeof valor );                  // object
    valor = Symbol( 'Simbolo' );
    console .log( 'valor = Symbol( "Simbolo" ) ', typeof valor );   // symbol         
console .groupEnd();    

console .group( 'Tipos de datos de Referencia' );
    valor = [ 1, 2, 3, 4 ];
    console .log( 'valor = [ 1, 2, 3, 4 ] ', typeof valor );        // object
    valor = { nombre: 'Juan', profesion: 'Desarrollador' };
    console .log( 'valor = { nombre: "Juan", profesion: "Desarrollador" }', typeof valor );        // object
    valor = new Date();
    console .log( 'valor = new Date() ', typeof valor );            // object  
console .groupEnd();    