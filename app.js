/* Clases en JavaScript (POO en ES6) */
class Cliente {
    constructor( nombre, apellido, saldo ) {
        this .nombre = nombre;
        this .apellido = apellido;
        this .saldo = saldo;
    }
    /* Prototypes */
    imprimirSaldo() {
        return `Nombre: ${ this .nombre } ${ this .apellido }, Saldo: ${ this .saldo }`;
    }
    tipoCliente() {
        let tipo;

        if( this .saldo > 10000 ) {
            tipo = 'gold';
        }
        else if( this .saldo > 5000 ) {
            tipo = 'platinum';
        }
        else {
            tipo = 'normal';
        }

        return tipo;
    }
    retirarSaldo( retiro ) {
        return this .saldo -= retiro;
    }
    static bienvenida() {                               // ---> Prototype estático
        return `Bienvenido al cajero.`;
    }
    
}

const maria = new Cliente( 'Maria', 'Perez', 10000 );
console .log( Cliente .bienvenida() );                  // ---> Los métodos (o prototypes) estáticos no requieren ser instanciados
console .log( 'Tipo Cliente: ', maria .tipoCliente() );
console .log( '> ', maria .imprimirSaldo() );
console .log( 'Retira: 3000, Saldo ', maria .retirarSaldo( 7000 ) );