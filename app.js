/* Iteraciones (Foreach Loop) */
const tareas = [
    'Comer Cliente nuevo Proyecto',
    'Viajar a Medellin',
    'Estudiar Angular',
    'Trabajar Proyecto WordPress',
    'Investigar Despliegue en AWS'
];
console .log( tareas );

/* Forma 1: Usando FOR */
console .group( 'Usando FOR' );
    for( let i = 0; i < tareas .length; i++ ) {
        console .log( tareas[ i ] );
    }
console .groupEnd();

/* Forma 2: Usando WHILE */
let i = 0;

console .group( 'Usando WHILE' );
    while( i < tareas .length ) {
        console .log( tareas[ i ] );
        i++;
    }
console .groupEnd();

/* Forma 3: Usando FOREACH */
console .group( 'Usando FOREACH' );
    tareas .forEach( function( tareas, index ) {
       console .log( `${ index } : ${ tareas }` ); 
    });
console .groupEnd();