/* Iteradores disponibles en JavaScript 'Keys Iterator' (ES6) */
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

console .group( 'Keys Iterator' );

    // Recorremos un 'Array' usando 'Keys Iterator' (Solo muestra las indices o llaves)
    console .group( 'Array "ciudades"' );
    for( let ciudad of ciudades .keys() ) {             
        console .log( ciudad );               
    }
    console .groupEnd();

    // Recorremos un 'Set' usando 'Keys Iterator' (Solo muestra las indices o llaves)
    console .group( 'Set "ordenes"' );
    for( let orden of ordenes .keys() ) {
        console .log( orden );                   
    }
    console .groupEnd();

    // Recorremos un 'Map' usando 'Keys Iterator' (Solo muestra las indices o llaves)
    console .group( 'Map "datos"' );
    for( let dato of datos .keys() ) {
        console .log( dato );                   
    }
    console .groupEnd();

console .groupEnd();