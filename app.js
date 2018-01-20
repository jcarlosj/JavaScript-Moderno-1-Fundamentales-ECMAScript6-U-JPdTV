/* Template Literals en JavaScript */

const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;
let html;

/* Forma tradicional */
html = '<h1> Pedido (Tradicional)</h1>' +
        '<ul>' +
        '<li>' + producto1 + ' $ ' + precio1 + '</li>' + 
        '<li>' + producto2 + ' $ ' + precio2 + '</li>' + 
        '<li><b>Total:</b> ' + (precio1 + precio2)+ '</li>' + 
       '</ul>';
console .log( 'Tradicional ', html );
document .getElementById( 'app' ) .innerHTML = html;

/* Usando Template Literals */
html = `
    <h1> Pedido (Template Literals)</h1>
    <ul>
        <li> ${ producto1 } $  ${ precio1 } </li> 
        <li> ${ producto2 } $  ${ precio2 } </li> 
        <li><b>Total:</b>  ${ total( precio1, precio2 ) } </li> 
    </ul>
`;

/* Los Template Literals pueden hacer uso de las funciones */
function total( valor1, valor2 ) {
    return valor1 + valor2;
}

console .log( 'Tradicional ', html );
document .getElementById( 'app2' ) .innerHTML = html;