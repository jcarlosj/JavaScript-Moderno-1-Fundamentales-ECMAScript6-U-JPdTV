/* Sets en JavaScript (ES6) 
 *  - Es una lista ordenada de valores similar a un 'Array', Solo que NO
 *    va a permitir duplicados en su interior. Si algo va a ser duplicado 
 *    no se debe definir como set
 *  - Set es "case sensitive"
 *  - A diferencia de un 'Array' los 'Sets' no tienen indices.
 *    Por lo que la llave y el valor son el mismo
 */

// Instancia de un Set
let carrito = new Set();

console .group( 'Ejemplo 1' );
    console .log( 'carrito: ', carrito );
    console .log( 'tipo: ', typeof carrito );
    console .log( 'longitud: ', carrito .size );

    // Se agregan 4 elementos
    carrito .add( 'Camisa' );       
    carrito .add( 'Zapatos' );      // Se repiten
    carrito .add( 'Reloj' );
    carrito .add( 'Zapatos' );      // Se repiten

    console .log( 'carrito: ', carrito );
    console .log( 'longitud: ', carrito .size );    // Se muestra un total de 3 elementos. Uno de ellos está repetido
console .groupEnd();

// Tambien se puede crear un Set pasandole datos como si fuera un 'Array'
let numeros = new Set( [ 1, 3, 5, 7, 9, 3, 6, 9, 12 ] );

console .group( 'Ejemplo 2' );
    console .log( 'numeros: ', numeros );
    console .log( 'tipo: ', typeof numeros );
    console .log( 'longitud: ', numeros .size );    // 7 (Puesto que hay 2 valores repetidos)
console .groupEnd();

// Métodos o propiedades de los Sets
console .group( 'Métodos o propiedades de los Sets' );

    // Iteracción de Sets
    console .group( 'Iteración de Sets' );
        carrito .forEach( ( producto, index ) => {
            console .log( `${ index } : ${ producto }` );
        });
    console .groupEnd();

    // Convertir un 'Set' a un 'Array'
    const arregloCarrito = [ ...carrito ];      // Convierte
    console .log( 'Set a Array ' , arregloCarrito );

    console .log( 'carrito.has("Zapatos")', carrito .has( 'Reloj' ) );     // Comprueba que un elemento exista

    carrito .delete( 'Zapatos' );                                           // Elimina un elemento del Set
    console .log( 'carrito.delete("Zapatos") ', carrito );

    carrito .clear();                                     
    console .log( 'carrito.clear() ', carrito );                            // Eliminar todos los elementos que contenga el Set    
console .groupEnd();