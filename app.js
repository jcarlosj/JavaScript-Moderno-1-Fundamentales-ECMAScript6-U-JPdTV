/* Iteradores en JavaScript (ES6) 
 * Estos iteradores a diferencia de los tradicionales ofrecen más flexibilidad
 * y control en la ejecución del código, permite el paso a paso
 */

// Forma tradicional
console .group( 'FOR iterador tradicional' );
    for( let i = 0; i < 5; i++ ) {
        console .log( i );
    }
console .groupEnd();

// Creación de un Iterador
function crearIterador( carrito ) {
    let i = 0;      // Inicializamos el indice

    return {
        siguiente: () => {
            let fin = ( i >= carrito .length ),
                valor = !fin ? carrito[ i++ ] : undefined;      // !fin : [true/false] Siempre que no haya llegado al final)

            return {
                fin : fin,
                valor : valor
            }    
        }
    }
}

// Crea Carrito
const carrito = [ 'Falda' ,'Reloj' ,'Camiseta' ,'Pantalon' ,'Collar' ];

// Implementa la iteración 
const recorrerCarrito = crearIterador( carrito );

// Recorre el carrito (Permite ir paso a paso)
console .group( 'Iterador en JavaScript (Paso a paso)' );
    console .log( recorrerCarrito .siguiente() );   // Object { fin: false, valor: "Falda" }
    console .log( recorrerCarrito .siguiente() );   // Object { fin: false, valor: "Reloj" }
    console .log( recorrerCarrito .siguiente() );   // Object { fin: false, valor: "Camiseta" }
    console .log( recorrerCarrito .siguiente() );   // Object { fin: false, valor: "Pantalon" }
    console .log( recorrerCarrito .siguiente() );   // Object { fin: false, valor: "Collar" }
    console .log( recorrerCarrito .siguiente() );   // Object { fin: true, valor: undefined }
console .groupEnd();