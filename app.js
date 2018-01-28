/* Literal Object */
const cliente = {
    nombre : 'Juan',
    saldo : 200,
    tipoCliente  : function() {
        let tipo;

        if(  this .saldo > 1000 ) {
            tipo = 'gold';
        }
        else if( this .saldo > 5000 ) {
            tipo = 'diamond'
        }
        else {
            tipo = 'classic';
        }

        return tipo;
    }
}

console .log( cliente .tipoCliente() );