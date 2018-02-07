/* Iteradores disponibles en JavaScript 'Entries Iterator' (ES6) */
const ciudades = [ 'Bogotá', 'Cali', 'Medellín', 'Manizales', 'Cartagena' ],        // Declara un 'Array' con datos
      ordenes = new Set( [ 123, 231, 131, 102 ] )                                   // Declara un 'Set' con datos
      datos = new Map(                                                              // Declara un 'Map' con datos
          [ 
              [ 'nombre', 'Juan David' ],
              [ 'apellidos', 'Herrera Ramírez' ],
              [ 'profesion', 'Desarrollador Web' ]
          ]
      );
console .group( 'Estructura de los datos' );
    console .log( ciudades );      
    console .log( ordenes );      
    console .log( datos ); 
console .groupEnd();

console .group( 'Entries Iterator' );

    // Recorremos un 'Array' usando 'Entries Iterator'
    console .group( 'Array "ciudades"' );
    for( let ciudad of ciudades .entries() ) {
        console .log( ciudad ); 
        console .log( `[0] => ${ ciudad[ 0 ] }, [1] => ${ ciudad[ 1 ] }`);                 
    }
    console .groupEnd();

    // Recorremos un 'Set' usando 'Entries Iterator'
    console .group( 'Set "ordenes"' );
    for( let orden of ordenes .entries() ) {
        console .log( orden ); 
        console .log( `[0] => ${ orden[ 0 ] }, [1] => ${ orden[ 1 ] }`);                   
    }
    console .groupEnd();

    // Recorremos un 'Map' usando 'Entries Iterator'
    console .group( 'Map "datos"' );
    for( let dato of datos .entries() ) {
        console .log( dato ); 
        console .log( `[0] => ${ dato[ 0 ] }, [1] => ${ dato[ 1 ] }`);                   
    }
    console .groupEnd();

console .groupEnd();