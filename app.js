/* Iteraciones (Map Loop) */
const carritoCompras = [
    { id: 1, producto: 'Libro', valor: 90000, nombre: 'Aprenda JavaScript' },
    { id: 2, producto: 'Periódico', valor: 3500, nombre: 'El Tiempo' },
    { id: 3, producto: 'Revista', valor: 14700, nombre: 'Muy Linux' },
    { id: 4, producto: 'Zapatillas', valor: 260700, nombre: 'Adidas' }
];

console .group( 'Map Loop' );

    const nombreProducto = carritoCompras .map( function( carrito ) {
        return carrito .producto;
    });

    console .log( nombreProducto );

console .groupEnd();