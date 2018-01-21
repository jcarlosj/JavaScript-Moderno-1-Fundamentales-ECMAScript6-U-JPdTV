/* Tipos de definición de Funciones en JavaScript */

/* Forma 1: Tradicional */
function sumarNumeros( numero1 = 3, numero2 = 4 ) {
    return numero1 + numero2;
}

console .group( 'Funcion Tradicional' );
    console .log( 'suma ', sumarNumeros( 3, 4 ) );
    console .log( 'suma ', sumarNumeros( 5 ) );
console .groupEnd();

/* Forma 2: Asignando la función como variable o constante */
const suma = function( numero1 = 3, numero2 = 4 ) {
    return numero1 + numero2;
}

console .group( 'Funcion como variable' );
    console .log( 'suma ', suma( 3, 4 ) );
    console .log( 'suma ', suma( 5 ) );
console .groupEnd();

/* Forma 3: IIFE (Se declaran e invocan inmediatamente) */
( function() {
    console .log( 'Creando un IIFE' );
})();

( function( tecnologia ) {
    console .log( `Aprendiendo ${ tecnologia }` );
})( 'JavaScript' );

( function( numero1, numero2 ) {
    console .group( 'Funcion IIFE' );
        console .log( 'suma ', numero1 + numero2 );
    console .groupEnd();
})( 10, 9 );

/* Forma 4: Métodos de Propiedad 
   Cuando una función se pone dentro de un Objeto, estas funciones con conocidas como Métodos */

const musica = {
    canciones: [ 
        'Alguien (Kany Garcia)',
        'Arroyito (Fonseca)',
        'Robarte un beso (Carlos vives)',
        'Lo mejor que hay en mi vida (Andrés Cepeda)' 
    ],
    reproducir: function( id ) {
        console .log( `Reproduciendo... ${ this .canciones[ id ] }` );
    },
    pausar: function() {
        console .log( 'Pausar música' );
    }
}

/* Los métodos también se pueden crear desde afuera del Objeto */
musica .buscar = function ( id ) {
    console .log( `Busqueda... ${ this .canciones[ id ] }` );
}

// Llamada del método dentro del objeto
console .group( 'Método de Propiedad (Función dentro de un Objeto)' );
    musica .reproducir( 2 );
    musica .pausar();
    musica .buscar( 3 );
console .groupEnd();


