/* Object Create en JavaScript (POO en ES5) */
const Cliente = {
    imprimirSaldo : function() {
        return `Nombre: ${ this .nombre }, Saldo: ${ this .saldo }`;
    },
    retirarSaldo : function( retiro ) {
        return this .saldo -= retiro;
    }
}

// Crear el Objeto usando 'Object Create'
const mary = Object .create( Cliente );

/*  Atributos  */
mary .nombre = 'Sofia';
mary .saldo = 900;

/* Prototype (Método objeto Cliente) */
mary .tipoCliente = function () {
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

console .log( mary );

console .log( 'Retiro: 415, Saldo: ', mary .retirarSaldo( 415 ) );
console .log( mary .imprimirSaldo() );
console .log( 'Tipo Cliente', mary .tipoCliente() );

/* NOTA: Es otra forma de crear un Objeto */