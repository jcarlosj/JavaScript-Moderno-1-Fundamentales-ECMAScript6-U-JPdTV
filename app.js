/* Destructuring objetos dentro de objetos (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const cliente = {
    nombre: 'Alejandro',
    apellido: 'Quina',
}

cliente .nombre = 'Melisa';
cliente .apellido = 'Sanchez';
cliente .saldo = 2500;

// Extraer valores usando Destructuring
let { nombre, tipo = 'basico', saldo = 0 } = cliente;   // Valores por defecto

console .log( 'Nombre', nombre );
console .log( 'Tipo', tipo );
console .log( 'Saldo', saldo );