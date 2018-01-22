/* Manejando Errores en JavaScript */

/* Manejando ERROR usando TryCatch o TryCatchFinallly*/
try {
    funcionQueNoExiste();       // Llama función que no existe
} 
catch( error ) {
    console .log( error );
}
finally {
    console .log( 'No le importa, ejecuta de todos modos' );
}

/* Podemos llamar la funcion primero */
obtenerClientes();

/* Definirla después */
function obtenerClientes() {
    console .log( 'Descargando... ' );     // Simulamos la descarga de los clientes

    setTimeout( function() {
        console .log( 'Listado de clientes Completo' );
    }, 3000 );
}

/* NOTA: No se debe abusar de TRY/CATCH no se debe usar para todo, pero
         se sugiere usarlo en funciones en los que se esperan datos y no 
         se saben si tienen datos o puedan llegar vacias */ 
