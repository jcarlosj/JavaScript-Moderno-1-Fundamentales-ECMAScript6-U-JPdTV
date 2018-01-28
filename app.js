/* Método Alternativo (Antes de ES6) */
function Cliente( nombre, saldo ) {         
    this .nombre = nombre;
    this .saldo = saldo;
    this .tipoCliente = function() {
        let tipo;

        if( this .saldo > 1000 ) {
            tipo = 'gold';
        }
        else if( this .saldo > 500 ) {
            tipo = 'platinum';
        }
        else {
            tipo = 'normal';
        }

        return tipo;
    }
}

const cliente1 = new Cliente( 'Pablo', 12000 );  // --> El Constructor
const cliente2 = new Cliente( 'Karen', 4000 );  // --> El Constructor

console .log( `${ cliente1 .nombre } es cliente tipo ${ cliente1 .tipoCliente() }` );
console .log( `${ cliente2 .nombre } es cliente tipo ${ cliente2 .tipoCliente() }` );