/* 'Async/Await' en JavaScript (ES7)
     - Nos permite crear funciones que sean asíncronas, es decir que puedan ejecutarse junto a otras
     - Como todo se ejecuta de forma asíncrona con 'await' le indicamos que cosas deben deternerse 
       para ser ejecutadas hasta el final para luego continuar su ejecución
     - Aún no está soportado en todos los navegadores
     - Una función asíncrona siempre va a requerir un 'Promise'
*/

// Crea function asíncrona
async function obtenerClientes() {
    const clientes = new Promise( ( resolve, reject ) => {  // Crea un Promise (usando Arrow Functions)
        // Simulamos la carga de datos desde un servidor
        setTimeout( () => {                                 // Arrow Function
            resolve( 'Clientes descargados...' );
        }, 2000 );      // 2 seg
    });

    // Simula si hubo o no un ERROR
    const error = false;                                    // Cambiar valor para simularlo

    if( !error ) {
        // 'await' Detiene la ejecución hasta que se cumpla el Promise que se le indica en este caso 'clientes'
        const respuesta = await clientes;     
        
        return respuesta;
    }
    else {
        // 'reject' no esta disponible aquí. Sin embargo podemos hacer que el 'Promise' envie un mensaje para el 'reject'
        await Promise .reject( 'Hubo un error...' );
    }
}

// Ejecutamos la función asíncrona
obtenerClientes() 
    .then( respuesta => console .log( 'OK: ', respuesta ) )     // 'respuesta' viene del 'resolve'
    .catch( error => console .log( 'ERROR', error ) );          // 'error' ciene del 'reject' (Captura el ERROR)


