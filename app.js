/* Destructuring a 'Functions' en JavaScript, método ES6 */

// Crea función
function reservacion( completo, opciones ) {
    let { metodoPago, cantidad, dias } = opciones;      // Destructuring Método Nuevo (ES6)

    console .log( 'Método: ', metodoPago );
    console .log( 'Cantidad: ', cantidad );
    console .log( 'Días: ', dias );    
}

// Llama reservación
reservacion( 
    true,                           // [true/false] Si se realiza la reservación
    {                               // Objeto
        metodoPago: 'credito',
        cantidad: 2000,
        dias: 3
    } 
); 
