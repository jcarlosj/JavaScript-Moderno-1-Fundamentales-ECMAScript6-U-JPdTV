/* Destructuring objetos dentro de objetos (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const cliente = {
    nombre: 'Alejandro',
    apellido: 'Quina',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Santiago de Cali',
            pais: 'Colombia'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 9000
        }
    }
}

// Extraer valores usando Destructuring
let { datos: { ubicacion } } = cliente;     // Destructuring (Objetos que se encuentran dentro de otro Objeto)

console .log( 'Ubicación ', ubicacion );
console .log( 'Pais ', ubicacion .pais );
console .log( 'Ciudad ', ubicacion .ciudad );

let { datos: { cuenta } } = cliente;        // Destructuring (Objetos que se encuentran dentro de otro Objeto)

console .log( 'Cuenta ', cuenta );
console .log( 'Desde ', cuenta .desde );
console .log( 'Saldo ', cuenta .saldo );