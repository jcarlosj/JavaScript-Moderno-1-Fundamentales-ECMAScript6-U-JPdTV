/* Función 'forEach' con Arrow Functions en JavaScript */
const productos = [ 'USB', 'Computadora', 'Pantalla', 'Teclado', 'Ratón' ];

/* --- FORMA TRADICIONAL --- */ 

// recorrer un 'Array' 
console .group( 'forEach (Tradicional Functions)' );
    productos .forEach( function( producto, index ) {
        console .log( `${ index }. ${ producto }` );
    });
console .groupEnd();

/* --- FORMA NUEVA --- */

// usando ARROW FUNCTION para recorrer un 'Array' ---
console .group( 'forEach (Arrow Functions)' );
    productos .forEach( ( producto, index ) => {
        console .log( `${ index }. ${ producto }` );
    });
console .groupEnd();

// usando ARROW FUNCTION para recorrer un 'Array' sin paréntesis (debe tener solo un parámetro)---
console .group( 'forEach (Arrow Functions sin paréntesis)' );
    let i = 0;
    productos .forEach( producto => {
        console .log( `${ i }. ${ producto }` );
        i++;
    });
console .groupEnd();

// usando ARROW FUNCTION para recorrer un 'Array' en una sola línea ---
console .group( 'forEach (Arrow Functions en una línea)' );
    i = 0;
    productos .forEach( producto => { console .log( `${ i }. ${ producto }` ); i++; } );
console .groupEnd();