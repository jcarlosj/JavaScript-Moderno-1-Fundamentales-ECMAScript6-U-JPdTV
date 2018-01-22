/* Scope en JavaScript 
   Se refiere al alcance que pueden tener las variables, 
   funciones en los diferentes ámbitos (Su visibilidad) */

var a = 'a';
let b = 'b';
const c = 'c';

/* Scope de la función */
console .group( 'Scope en JavaScript' );

    function funcionScope() {
        var a = 'A';
        let b = 'B';
        const c = 'C';
        console .log( `FUNCIÓN  (a, b, c): ${ a }, ${ b }, ${ c }` );   /* Su Scope (visibilidad) es dentro de la función */
    }
    funcionScope();

    /* Scope de Bloque */
    if( true ) {
        var a = 'AA';
        let b = 'BB';
        const c = 'CC';
        console .log( `BLOQUE   (a, b, c): ${ a }, ${ b }, ${ c }` );   /* Su Scope (visibilidad) es dentro un bloque */
    }

    /* FOR */
    console .group( 'FOR' );
    
        for( var a = 0; a < 5; a++ ) {
            console .log( 'FOR (a) ', a );
        } 
        for( let b = 0; b < 5; b++ ) {
            console .log( 'FOR (b) ', b );
        }
    
    console .groupEnd();

    console .log( `GLOBALES (a, b, c): ${ a }, ${ b }, ${ c }` );   /* Su Scope (visibilidad) es global, pueden en todo momento. No están dentro de bloques, funciones o métodos */

console .groupEnd();