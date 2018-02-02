/* CallBacks en JavaScript
 * Es una Función donde se ejecuta una función (forEach es un ejemplo de CallBack) 
 */

const paises = [ 'Colombia', 'México', 'Brasil', 'Argentina', 'Panamá', 'Canadá' ];

// Función que implementa otra función como parámetro, Muestra nuevo pais agregado en un lapso de 4 segundos
function nuevoPais( pais, mostrar ) {       // pais: valor / mostrar: función
    console .log( 'Ejecuta nuevoPais()' );
    setTimeout( function() {
        paises .push( pais );
        mostrar();                          // Hace referencia a la función que se pasa como parámetro mostrarPaises() en este caso
    }, 4000 );      // 4seg
}

// Función que muestra los paises en un lapso de tiempo de 2 seg
function mostrarPaises() {
    console .log( 'Ejecuta mostrarPaises()' );
    // Simula traer los datos de un REST API
    setTimeout( function() {
        let html = '<ul>';      // Crea un "Template" vacío

        /* Recorre el 'Array' de los países */
        paises .forEach( function( pais ) {
            html += `<li>${ pais }</li>`;    // Agrega los datos al Template
        });

        html += '</ul>';

        // Agrega la plantilla con los datos al DOM
        document .getElementById( 'app' ) .innerHTML = html;

    }, 2000 );      // 2seg
}

// Ejecuta los llamados
nuevoPais( 'Estados Unidos', mostrarPaises );  // Agregar nuevo país - Tarda 4 segundos (Pasa como parámetro la función mostrarPaises)
mostrarPaises();                               // Mostrar los paises - Tarda 2 Segundos 