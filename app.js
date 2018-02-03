/* Callback con Arrow Functions en JavaScript */
const productos = [ 'USB', 'Computadora', 'Pantalla', 'Teclado', 'Ratón' ];

// Implementamos un CallBack Tracional     
const cantidadLetrasProducto1 = productos .map( function( producto ) {
    return producto .length;
});      

// Implementamos un CallBack usando Arrow Functions
const cantidadLetrasProducto2 = productos .map( ( producto ) => {
    return producto .length;
});      

// Implementamos un CallBack usando Arrow Functions sin parentesis
const cantidadLetrasProducto3= productos .map( producto => {
    return producto .length;
});      

// Implementamos un CallBack en una línea usando Arrow Functions sin parentesis y retornando en automático
const cantidadLetrasProducto4= productos .map( producto => producto .length );

console .group( 'Cantidad letras por producto' );
    console .log( 'Callback Tradicional ', cantidadLetrasProducto1 );
    console .log( 'Calback Arrow Functions (1) ', cantidadLetrasProducto2 );
    console .log( 'Calback Arrow Functions (sin parentesis) ', cantidadLetrasProducto3 );
    console .log( 'Calback Arrow Functions (sin parentesis y en una línea) ', cantidadLetrasProducto4 );
console .groupEnd();