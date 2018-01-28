/* Prototypes */
function Cliente( nombre, saldo ) {
    this .nombre = nombre;
    this .saldo = saldo;
    this .tipoCliente = function() {            // ---> Esta restringido. Solo está disponible para el Objeto 'Cliente'
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

const cliente1 = new Cliente( 'Eva', 1100 ),
      cliente2 = new Cliente( 'Sofia', 610 ),
      cliente3 = new Cliente( 'Juan', 170 );

console .log( cliente1 );
console .log( cliente2 );
console .log( cliente3 );

/* Crea Prototype 'retirarSaldo' */
Cliente .prototype .retirarSaldo = function( retiro ) {   // ---> Este método es más flexible, agrega a las funcionalidades al Objeto 'Cliente'
    if( this. saldo > retiro ) {
        return this .saldo -= retiro;
    }
    else {
        return false;
    }
}

/* Crea Prototype 'getSaldo' */
Cliente .prototype .getSaldoCliente = function() {
    return `Nombre: ${ this .nombre }, Tu saldo disponible es: ${ this .saldo}, Tipo cliente: ${ this .tipoCliente() } `;
}

/* Resultados */
console .group( 'Cliente 1' );
    console .log( cliente1 .getSaldoCliente() );
console .groupEnd();

console .group( 'Cliente 2' );
    console .log( cliente2 .getSaldoCliente() );
    console .log( 'Retiro: 615, Saldo: ', cliente2 .retirarSaldo( 615 ) );
console .groupEnd();

console .group( 'Cliente 3' );
    console .log( cliente3 .getSaldoCliente() );
    console .log( 'Retiro: 95, Saldo: ', cliente3 .retirarSaldo( 95 ) );
console .groupEnd();



