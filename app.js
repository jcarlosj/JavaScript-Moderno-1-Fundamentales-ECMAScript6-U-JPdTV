/* Operador ternario en JavaScript (Es como un If en una sola línea) */

/* Ejemplo 1 */
const loguedo = true;
let estado;

estado = loguedo === true ? 'Si se logueo' : 'No se logueo';    /* (Condición) ? 'Si se cumple' : 'Si no se cumple'; */ 

console .log( estado );

/* Ejemplo 2 */
const cantidadHuevos = 11;

console .log( cantidadHuevos == 12 ? 'Es una docena' : 'No es una docena', 'de huevos' );