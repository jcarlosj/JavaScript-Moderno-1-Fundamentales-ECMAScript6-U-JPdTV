/* Arrays en JavaScript y sus métodos */
let nombre = 'Juan';

const numeros = [ 10, 20, 30, 40, 50 ];                     /* Forma 1 */ 
const meses = new Array( 'Enero', 'Febrero', 'Marzo' );     /* Forma 2 (usando 'new Array') */

/* Los Arrays en JavaScript soportan diferentes tipos de datos */
const diferentesTipos = [ 'Hola!', 20, true, null, false, undefined ];

console .log( 'numeros ', numeros );
console .log( 'meses ', meses );
console .log( 'diferentesTipos ', diferentesTipos );

/* Métodos de los Arrays */
console .group( 'Métodos para aplicar a los Arrays' );
    console .log( 'Los meses del Array: ', meses );                         // ['Enero', 'Febrero', 'Marzo']
    console .log( 'El mes de la posición 1: ', meses[ 1 ] );                // Febrero
    console .log( 'Cantidad de meses: ', meses .length );                   // 3
    console .log( '"meses" es un Array? ', Array .isArray( meses ) );       // true
    console .log( '"nombre" es un Array? ', Array .isArray( nombre ) );     // false
console .groupEnd();

/* Insertando valores en el Array */
console .group( 'Insertando valores en un array "push, unshift" ' );
    console .log( 'Array inicial para los meses: ', meses ); 
    meses[ 4 ] = 'Mayo';        /* Forma 1 (Asignando directamente) */
    meses .push( 'Junio' );     /* Forma 2 (Usando el método 'push' agregando al final del mismo) */
    meses .unshift( 'Mes 0' );  /* Forma 3 (Usando el método 'unshift' agregando al inicio del mismo) */ 
    console .log( 'Ahora los meses del Array: ', meses ); 
console .groupEnd();

/* Eliminar valores en el Array */
console .group( 'Eliminando valores en un array "pop, shift, splice" ' );
    meses .pop();       // Elimina el último elemento del Array
    console .log( 'Elimino el último "pop()": ', meses );       
    meses .shift();     // Elimina el primer elemento del Array
    console .log( 'Elimino el primero "shift()": ', meses ); 
    meses .splice( 2, 1 );    // Elimina un rango de elementos
    console .log( 'Elimino el primero "splice( 2, 1 )": ', meses ); 
console .groupEnd();

/* Cambiar orden inverso los elementos del Array */ 
console .group( 'Revertir el orden de los elementos del array' );
    console .log( 'Revertir orden "reverse": ', meses .reverse() );
    console .log( 'Orden final: ', meses ); 
console .groupEnd();

/* Búscar elementos dentro de un Array */
console .group( 'Busquedas dentro de un array' );
    console .log( 'indexOf("Febrero")', meses .indexOf( 'Febrero' ) );
console .groupEnd();

/* Unir Arrays */ 
let arreglo1 = [ 1, 50, 10, 35, 4 ],
    arreglo2 = [ 3, 9, 360, 7, 36, 100 ],
    arreglo3 = arreglo1 .concat( arreglo2 );    

    console .log( 'Unir dos arreglos "concat" ', arreglo3 );    

/* Ordenar un Array */
const frutas = [ 'Platano', 'Manzana', 'Fresa', 'Zanahoria', 'Naranja', 'Melón' ];

console .group( 'Ordenar un Array' );

    /* Ordenando Array de Strings con 'sort' */
    console .group( 'Ordenando Array de Strings' );
        console .log( 'Frutas ', frutas );
        frutas .sort();             /* Ordena de la A a la Z */
        console .log( 'Frutas "sort" ', frutas );
    console .groupEnd();

    /* Ordenando Array de Numbers con 'sort' */
    console .group( 'Ordenando Array de Numbers' );         
        console .log( 'Numeros ', arreglo3 );
        arreglo3 .sort(); 
        console .log( 'Numeros "sort" ', arreglo3 );

            /* Ordenando Array de Numbers con 'sort' CORRECTAMENTE (Menor a mayor) */
            console .group( 'Ordenando Array de Numbers (Menor a Mayor)' );         
                arreglo3 .sort( function( numeroA, numeroB ) {
                    return numeroA - numeroB;
                }); 
                console .log( 'Numeros "sort" ', arreglo3 );
            console .groupEnd();

            /* Ordenando Array de Numbers con 'sort' CORRECTAMENTE (Mayor a Menor) */
            console .group( 'Ordenando Array de Numbers (Mayor a Menor)' );         
                arreglo3 .sort( function( numeroA, numeroB ) {
                    return numeroB - numeroA;
                }); 
                console .log( 'Numeros "sort" ', arreglo3 );
            console .groupEnd();

    console .groupEnd();

console .groupEnd();