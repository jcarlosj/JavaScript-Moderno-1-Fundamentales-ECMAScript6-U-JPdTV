/* Promises en JavaScript */

// 'resolve' se ejecuta cuando la Promise se cumple (Parámetro 1)
// 'reject' se ejecuta cuando la Promise NO se cumple (Parámetro 2)

// Creamos un Promise
const esperando = new Promise( function ( resolve, reject ) {
    // Simula tiempo que se puede tardar una REST API en leer unos 5000 registros por ejemplo
    setTimeout( function() {
        resolve( 'Se ejecutó' );        // Debe usarse el then para indicarle que hacer
    }, 5000 );      // 5seg
});        

// Espera a que resolve se cumpla para ejecutar el código
esperando .then( function( mensaje ) {
    console .log( mensaje );
});

// NOTA: El valor que estamos revisando no está disponible en el momento, pero la idea es que esté disponible en el futuro