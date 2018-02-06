/* Destructuring a 'Functions' en JavaScript, método tradicional (ES6) */

// Crea función
function reservacion( completo, opciones ) {
    opciones = opciones || {}; 

    console .log( opciones );

    // Mapear cada una de las variables (Destructuring método tradicional)
    let metodo = opciones .metodoPago,
        cantidad = opciones .cantidad,
        dias = opciones .dias;

    console .log( 'Método: ', metodo );
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
