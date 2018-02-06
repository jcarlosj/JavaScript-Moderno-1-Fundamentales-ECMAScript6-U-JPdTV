/* Destructuring 'Arrays' en JavaScript (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const ciudades = [ 'Santiago de Cali', 'Bogotá D.C.', 'Cartagena D.T.', 'Medellín', 'Manizales' ];

// Extraer valores de un 'Array' usando Destructuring 
const [ primeraCiudad, segundaCiudad ] = ciudades;

console .log( 'Primera Ciudad', primeraCiudad );
console .log( 'Segunda Ciudad', segundaCiudad );

// Extraer el último valor del 'Array' usando Destructuring
const [ , , , , capitalCaldas ] = ciudades;

console .log( 'Quinta Ciudad', capitalCaldas );
