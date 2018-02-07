/* Maps en JavaScript (ES6) 
 *  - Es una lista ordenada de valores similar a un 'Array' 
 *  - Tienen indices como los 'Arrays', por los que usan
 *    llave y el valor.
 *  - Pueden almacenar datos de cualquier tipo.
 *  - Comparten muchos métodos con los Sets
 */

// Instancia de un Map (parámetros por default)
const paciente = new Map(
    [ 
        [ 'nombre', 'Fulanito de Tal' ],
        [ 'apellido', 'Por cual' ],
        [ 'habitacion', 'No definida' ] 
    ]
);

console .group( 'Valores por Default' );
    console .log( 'paciente', paciente );
console .groupEnd();

// Agregamos valores al Map
console .group( 'Define datos del paciente' );
    paciente .set( 'nombre', 'Jenny' );
    paciente .set( 'apellido', 'González' );
    console .log( 'paciente', paciente );
console .groupEnd();

// Iteramos o recorremos las datos del Map
console .group( 'Recorre datos del Map (paciente)' );
    paciente .forEach( ( valor, llave ) => {
        console .log( ` - ${ llave } : ${ valor }` );
    });
console .groupEnd();