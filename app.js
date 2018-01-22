/* Iteraciones (While Loop) */

console .group( 'While Loop');
    /* Ejemplo 1 */
    let i = 0;

    console .group( 'Números' );    
        while( i < 10 ) {
            if( i === 5 ) {
                console .log( '--- Cinco ---' );
                i++;
                continue;
            }
            console .log( `Número ${ i }` );
            i++;
        }
    console .groupEnd();

    /* Ejemplo 2 */
    i = 0;

    const musica = [ 
        'La bicicleta (Carlos Vives)',
        'Felices los 4 (Maluma)',
        'Vivir Mi Vida (Mark Anthony)',
        'No te pido flores (Fanny Lu)'
    ];

    console .group( 'Música' );    
        while( i < musica .length ) {
            console .log( `Reproducciendo... ${ musica[ i ] }` );
            i++;
        }
    console .groupEnd();
console .groupEnd();