/* Promises en JavaScript */

// 'resolve' se ejecuta cuando la Promise se cumple (Parámetro 1)
// 'reject' se ejecuta cuando la Promise NO se cumple (Parámetro 2)

// Creamos un Promise
const aplicarDescuento = new Promise( function( resolve, reject ) {
    const descuento = false;    // [true/false] Para simular o no el error 

    if( descuento ) {
        resolve( 'Descuento Aplicado' );
    }
    else {
        reject( 'No se puede aplicar el descuento' );
    }

});

/* Indicamos las acciones a realizar */
aplicarDescuento .then( function( resultado ) {
    console .log( 'CORRECTO', resultado );
}). catch( function( error ) {
    console .log( 'ERROR', error );
});