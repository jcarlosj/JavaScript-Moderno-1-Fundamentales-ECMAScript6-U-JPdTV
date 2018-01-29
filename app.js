/* Clases en JavaScript (POO en ES6) */
class Cliente {
    constructor( nombre, saldo ) {
        this .nombre = nombre;
        this .saldo = saldo;
    }
    /* Prototypes */
    imprimirSaldo() {
        return `Nombre: ${ this .nombre }, Saldo: ${ this .saldo }`;
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

/* Clase Empresa hereda de la clase Cliente */
class Empresa extends Cliente {
    constructor( nombre, saldo, telefono, tipo ) {
        super( nombre, saldo );            // ---> Llama al constructor padre 'Cliente' hereda los atributos
        this .telefono = telefono;
        this .tipo = tipo;
    }
    static bienvenida() {                               // ---> Prototype estático
        return `Bienvenido al cajero banca empresarial.`;
    }
}

/* Para Instanciar un Cliente */
const maria = new Cliente( 'Maria', 10000 );
console .log( Cliente .bienvenida() );                  // ---> Los métodos (o prototypes) estáticos no requieren ser instanciados
console .log( 'Tipo Cliente: ', maria .tipoCliente() );
console .log( '> ', maria .imprimirSaldo() );
console .log( 'Retira: 3000, Saldo ', maria .retirarSaldo( 7000 ) );

/* Para Instanciar una Empresa */
const empresa = new Empresa( 'Empresa de Teléfonos', 9560923, 2115694, 'Telecomunicaciones' );
console .log( Empresa .bienvenida() );                  // ---> Los métodos (o prototypes) estáticos no requieren ser instanciados
console .log( 'Tipo Cliente: ', empresa .tipoCliente() );
console .log( '> ', empresa .imprimirSaldo() );
console .log( 'Retira: 2735000, Saldo ', empresa .retirarSaldo( 2735000 ) );
