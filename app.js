/* Destructuring a 'Functions' en JavaScript, método ES6 */

// Crea función pasando un objeto con valores predeterminados
function reservacion( completo, { metodoPago = 'efectivo', cantidad = 0, dias = 0 } = {} ) {

    console .log( 'Método: ', metodoPago );
    console .log( 'Cantidad: ', cantidad );
    console .log( 'Días: ', dias );  

    if( completo ) {
        console .log( 'Hacer la reserva' );
    }
    else {
        console .log( 'Cancelar la reserva' );
    }

}

// Llama reservación
console .group( 'Primera reservación' );
    reservacion( 
        false,                           // [true/false] Si se realiza la reservación
        {}                               // Objeto vacío 
    ); 
console .groupEnd();

console .group( 'Segunda reservación' );
    reservacion( 
        true,                           // [true/false] Si se realiza la reservación
        {                               // Objeto 
            cantidad: 5000,
            dias: 5
        }                               
    ); 
console .groupEnd();
