/* Iteradores disponibles en JavaScript 'Values Iterator' (ES6) */
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

console .group( 'Values Iterator' );

    // Recorremos un 'Array' usando 'Values Iterator' (este ignora las llaves)
    console .group( 'Array "ciudades"' );
    for( let ciudad of ciudades ) {             // No usamos 'values(), es iterador por defecto para los 'Arrays' y está implicito.
        console .log( ciudad );               
    }
    console .groupEnd();

    // Recorremos un 'Set' usando 'Values Iterator' (este ignora las llaves)
    console .group( 'Set "ordenes"' );
    for( let orden of ordenes .values() ) {
        console .log( orden );                   
    }
    console .groupEnd();

    // Recorremos un 'Map' usando 'Values Iterator' (este ignora las llaves)
    console .group( 'Map "datos"' );
    for( let dato of datos .values() ) {
        console .log( dato );                   
    }
    console .groupEnd();

console .groupEnd();