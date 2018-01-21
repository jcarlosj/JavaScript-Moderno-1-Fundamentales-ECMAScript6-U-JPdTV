/* Objetos en JavaScript */

/* Creación de un Objeto */ 
const persona = {
    nombre: 'Miguel',
    apellido: 'Rodríguez',
    profesion: 'Diseñador Gráfico',
    email: 'miguel@correo.co',
    edad: 20,
    /* Array */
    aplicaciones: [ 'Photoshop', 'Ilustrator', 'Premier' ],
    /* Objeto */ 
    hogar: {
        ciudad: 'Medellín',
        pais: 'Colombia'
    },
    /* Función */
    nacimiento: function () {
        return new Date() .getFullYear() - this .edad; 
    }
}

/* Despliega valores del Objeto */
console .log( 'Objeto Persona ',  persona );

console .group( 'nombre' );
    console .log( 'Notación . ', persona .nombre );
    console .log( 'Notación [] ', persona[ 'nombre' ] );
console .groupEnd();

console .log( persona .profesion );

console .group( 'Array dentro del Objeto' );
    console .log( 'Todo el Array ', persona .aplicaciones );
    persona .aplicaciones .push( 'Dreamweaver' );
    console .log( 'Inserta un elemento ', persona .aplicaciones );
    console .log( 'Muestra un elemento especifico ', persona .aplicaciones[ 1 ] );
console .groupEnd();

console .group( 'Objeto dentro de Objeto' );
    console .log( 'Objeto dentro del objeto ', persona .hogar );
    console .log( 'Notación . ', persona .hogar .ciudad );
    console .log( 'Notación . y [] ', persona .hogar[ 'ciudad' ] );
    console .log( 'Doble notación [][] ', persona [ 'hogar' ][ 'ciudad' ] );
console .groupEnd()

console .group( 'Función dentro de Objeto' );
    console .log( 'nacimiento', persona .nacimiento() );
console .groupEnd()