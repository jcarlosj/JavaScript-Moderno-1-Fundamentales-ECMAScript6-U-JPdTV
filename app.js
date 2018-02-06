/* Destructuring 'Objects' y 'Arrays' en JavaScript (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

 const cliente = {
     tipo: 'Platinium',
     saldo: 9000,
     datos: {
         nombre: 'Juliana',
         apellido: 'Puerta',
         residencia: {
            ciudad: 'Medellín',
            pais: 'Colombia'
         }
     },
     movimientos: [ '12-03-2018', '09-02-2017', '21-11-2016' ]
 }

 // Extraer datos usando Destructuring 
let {
    tipo, 
    datos,
    datos: { residencia }, 
    movimientos: [ , dos, tres ]
} = cliente;

console .log( 'Tipo:', tipo );                   // Usa 'tipo'
console .log( 'Nombre:', datos .nombre );        // Usa 'datos'
console .log( 'Apellido:', datos .apellido );    // Usa 'datos'
console .log( 'País:', residencia .pais );       // Usa 'datos: { residencia }'
console .log( 'Ciudad:', residencia .ciudad );   // Usa 'datos: { residencia }'
console .log( 'Movimiento 2:', dos );            // Usa 'movimientos: [ , dos, tres ]'
console .log( 'Movimiento 3:', tres );           // Usa 'movimientos: [ , dos, tres ]'