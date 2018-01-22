/* Iterar Objeto usando un FOR...IN Loop */
const Persona = {
    nombre: 'Radamel Falcao García Zárate',
    profesion: 'Jugador de Fútbol Soccer',
    apodo: 'El Tigre',
    estatura: 1.77,
    nacimiento: '10 de febrero de 1986',
    lugarNacimiento: 'Santa Marta, Colombia',
    equipoActual: 'Mónaco',
    posicion: 'Delantero',
    numeroCamiseta: 9
    
}

console .log( Persona );

console .group( 'For... in Loop' );
    for( let dato in Persona ) {
        console .log( `${ dato } : ${ Persona[ dato ] }` );
    }
console .groupEnd();