/* CallBacks en JavaScript
 * Es una Función donde se ejecuta una función (forEach es un ejemplo de CallBack) 
 */

const ciudades = [ 'Bogotá', 'Santiago de Cali', 'Medellín', 'Cartagena', 'Manizales' ]; 

console .group( 'Callback inline (forEach)' );

    // Es conocida como Inline Callback, ya que es una función anónima (Es la forma recomendada)
    ciudades .forEach( function( ciudad ) {
        console .log( '-', ciudad );
    }); 

console .groupEnd();

console .group( 'CallBack Definido (forEach)' );

    // Es conocida como funciona definida, por que la función si tiene un nombre
    function callback( ciudad ) {
        console .log( '+', ciudad );
    }
    ciudades .forEach( callback );

console .groupEnd();

