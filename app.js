/* Destructuring (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

// Reasigna valores a los atributos del Objeto cliente
nombre = 'Pedro';
tipo = 'Gold';

// Esta notación permite que la extracción usando Destructuring busca los datos
// originales del Objeto no los valores modificados en el Scope Global
( { nombre, tipo } = cliente );   

console .log( 'Nombre', nombre );       // Alejandra
console .log( 'Tipo', tipo );           // Premium

