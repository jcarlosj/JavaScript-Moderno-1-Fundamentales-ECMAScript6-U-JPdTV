/* Array de Objetos en JavaScript */

const moviles = [
    { modelo: 'S3' , marca: 'Samsung', color: 'blanco' },
    { modelo: 'S4' , marca: 'Samsung', color: 'negro' },
    { modelo: 'iPhone6' , marca: 'Apple', color: 'blanco' },
    { modelo: 'G5' , marca: 'Motorola', color: 'dorado' }
];

console .log ( moviles );
console .log ( 'Cantiad de moviles ', moviles .length );
console .log ( 'Modelo del movil de la posición 1 ', moviles[ 1 ] .modelo );

console .group( 'Recorrer cada Objeto del Array' );
    /* Recorrer usando un loop for */
    for( let i = 0; i < moviles .length; i++ ) {
        console .log( `${ moviles[ i ] .marca } - ${ moviles[ i ] .modelo }` );
    }
console .groupEnd();

/* El Array de Objetos no puede ser cambiado por otro pues fue definido como 
   constante (const), pero sus valores internos si 
   
moviles = [
    { modelo: 'S8' , marca: 'Samsung', color: 'blanco' },
    { modelo: 'Zend 2' , marca: 'Asus', color: 'negro' }
];
*/

moviles[ 0 ] .modelo = 'Zend 3';
moviles[ 0 ] .marca = 'Asus';
moviles[ 0 ] .color = 'Negro';
   
console .log ( moviles );