/* Iteradores disponibles en JavaScript 'Default Iterator' (ES6) 
 * Este tipo de iterador es cuando no le indicamos el método de iteración que se desea
*/
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

console .group( 'Default Iterator' );

    // Recorremos un 'Array' usando 'Default Iterator' (Solo muestra valores)
    console .group( 'Array "ciudades"' );
    for( let ciudad of ciudades ) {             
        console .log( ciudad );               
    }
    console .groupEnd();

    // Recorremos un 'Set' usando 'Default Iterator' (Solo muestra valores)
    console .group( 'Set "ordenes"' );
    for( let orden of ordenes ) {
        console .log( orden );                   
    }
    console .groupEnd();

    // Recorremos un 'Map' usando 'Default Iterator' (Muestra el conjunto de datos en un 'Array', similar a el 'Entries Iterator')
    console .group( 'Map "datos"' );
    for( let dato of datos ) {
        console .log( dato );                   
    }
    console .groupEnd();

console .groupEnd();