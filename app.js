/* Consumiendo REST API con FetchAPI usando 'Async/Await' en JavaScript (ES7) */

// Crea función asíncrona (Lee las tareas)
async function leerTODOs () {
    // FetchAPI usando Promises
    const respuesta = await fetch( 'https://jsonplaceholder.typicode.com/todos' );      // 'await' bloquea la ejecución hasta que se conecte a los datos

    // Procede cuando la respuesta esté lista
    const datos = await respuesta .json();                                              // 'await' bloquea la ejecución hasta que obtenga el 'Promise', luego se le indica que retorne los datos como JSON

    return datos;
}

console .log( 'leerTODOs', leerTODOs() );       // Promise

leerTODOs()
    .then( datos => console .log( 'OK!', datos ) )
    .catch( error => console .log( 'ERROR', error ) );