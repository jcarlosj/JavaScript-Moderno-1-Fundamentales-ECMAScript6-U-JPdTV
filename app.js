/* Maps en JavaScript (ES6) 
 *  - Es una lista ordenada de valores similar a un 'Array' 
 *  - Tienen indices como los 'Arrays', por los que usan
 *    llave y el valor.
 *  - Pueden almacenar datos de cualquier tipo.
 *  - Comparten muchos métodos con los Sets
 */

// Instancia de un Map
let cliente = new Map();

console .log( 'cliente', cliente );
console .log( 'tipo', typeof cliente );
console .log( 'longitud', cliente .size );

console .group( 'Agrega valores al Map' );
    // Agregar elementos (llave, valor) al Map
    cliente .set( 'nombre', 'Karen' );
    cliente .set( 'apellido', 'González' );
    cliente .set( 'tipoCuenta', 'Premium' );
    cliente .set( 'saldo', 3000 );

    console .log( 'cliente', cliente );
    console .log( 'longitud', cliente .size );

    // Acceder a los valores
    console .log( 'Nombre: ' , cliente .get( 'nombre' ) );
    console .log( 'Apellido: ' , cliente .get( 'apellido' ) );
    console .log( 'Tipo cuenta: ' , cliente .get( 'tipoCuenta' ) );
    console .log( 'Saldo: ' , cliente .get( 'saldo' ) );
console .groupEnd();

console .group( 'Cambia los valores del Map' );
    // Cambiar los valores
    cliente .set( 'nombre', 'Maura' );
    cliente .set( 'apellido', 'Villanueva' );

    // Acceder a los valores
    console .log( 'Nombre: ' , cliente .get( 'nombre' ) );
    console .log( 'Apellido: ' , cliente .get( 'apellido' ) );
    console .log( 'Tipo cuenta: ' , cliente .get( 'tipoCuenta' ) );
    console .log( 'Saldo: ' , cliente .get( 'saldo' ) );
console .groupEnd();

console .group( 'Métodos o propiedades de los Maps' );

    // Iteración de un Map
    console .group( 'Iteración de un Map' );
        cliente .forEach( ( valor, index ) => {
            console .log( ` - ${ index } : ${ valor }` );
        });
    console .groupEnd();

    console .log( 'longitud ', cliente .size );                                     // Obtener la longitud de un Map
    
    console .log( 'cliente.has("tipoCuenta")', cliente .has( 'tipoCuenta' ) );     // Comprobar que un valor existe

    cliente .delete( 'nombre' );
    console .log( 'cliente.delete("nombre") ', cliente );                           // Eliminar un par clave valor

    cliente .clear();
    console .log( 'cliente.clear() ', cliente );                           // Eliminar todo el contenido del un Map

console .groupEnd();