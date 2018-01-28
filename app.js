/* Herencia de Prototypes en JavaScript */
function Cliente( nombre, saldo ) {
    this .nombre = nombre;
    this .saldo = saldo;
}

function Empresa( nombre, saldo, telefono, tipo ) {
    Cliente .call( this, nombre, saldo );       // ---> Hereda los atributos del objeto 'Cliente'
    this .telefono = telefono;
    this .tipoEmpresa = tipo;
}
Empresa .prototype = Object .create( Cliente .prototype .nombreClienteSaldo() );  // ---> Hereda el prototype (método) del objeto 'Cliente'

// Prototype para el Objeto 'Cliente'
Cliente .prototype .nombreClienteSaldo = function() {
    return `Nombre: ${ this .nombre }, Saldo: ${ this .saldo }`;
}

const cliente = new Cliente( 'Eva', 1100 );
console .log( cliente );
console .log( cliente .nombreClienteSaldo() );

const empresa = new Empresa( 'Empresa de Acueducto', 1000000, 978734312, 'Estatal' );
console .log( empresa );
console .log( empresa .nombreClienteSaldo() );
