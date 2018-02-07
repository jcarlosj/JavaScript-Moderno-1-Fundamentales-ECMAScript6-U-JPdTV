/* Iteradores en JavaScript: Obtener URL de un conjunto de enlaces (ES6) */

const enlaces = document .getElementsByTagName( 'a' );       // Obtenemos todos los enlaces

for( let enlace of enlaces ) {
    console .log( enlace .href );                            // Obtiene la URL de cada uno de los enlaces 
}