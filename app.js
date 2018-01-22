/* Iteraciones (For Loops) */

/* Ejemplo 1 */
console .group( 'Incremento 0 a 9' );
    for( let i = 0; i < 10; i++ ) {
        console .log( `Número: ${ i }`);
    }
console .groupEnd();

/* Ejemplo 2 */
const desde = 3,
      hasta = 8;

nombres = [
    'Ana',
    'José',
    'María',
    'Eva',
    'Carlos',
    'Luisa',
    'Juan',
    'Elisa',
    'Sofía'
];

console .group( 'Nombres' );
    for( let i = desde; i < hasta; i++ ) {
        console .log( `${ nombres[ i ] }`);
    }
console .groupEnd();

/* Ejemplo 3 */
console .groupEnd();
    for( let i = 9; i >= 0; i-- ) {
        if( i == 5 ) {
            console .log( 'Voy en el Cinco' );
            continue;       /* Se detiene y continua el ciclo sin ejecutar las lineas hasta el final del for */ 
        } 
        console .log( `#: ${ i }`);
    }
console .groupEnd();

/* Ejemplo 4 */

console .group( 'Pares e impares' );
    for( let i = 0; i < 10; i++ ) {
        if( i % 2 == 0 ) {
            console .log( `${ i } es par` );
        }
        else {
            console .log( `${ i } es impar` );
        }
    }
console .groupEnd();

/* Ejemplo 5 */
const arregloProductos = [ 
    'Camisa',
    'Boleto',
    'Guitarra',
    'Disco',
    'Reloj'
];

console .group( 'Productos' );
    for( let i = 0; i < arregloProductos .length; i++ ) {
        console .log( `Producto ${ arregloProductos[ i ] } fue agregado`);
        //if( i % 2 == 0 ) {}
    }
console .groupEnd();


