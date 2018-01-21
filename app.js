/* Variable const en objetos y arreglos */

/* const en Arrays */
const numeros = [ 1, 2, 3, 4 ];

//numeros = [ 7, 8, 9, 0 ];     /* El arreglo completo no puede ser reasignado a no ser que sea un 'let' o un 'var' */ 

numeros[ 0 ] = 5;               /* Sus valores individuales sí */
numeros .push( 6 );             /* O agregar nuevos valores individuales */ 

console .log( 'Array ', numeros );

/* const en Objetos */
const Persona = {
    nombre: 'Juan',
    colorOjos: 'Marrones',
    colorPiel: 'Blanca',
    estatura: 1.67,
    genero: 'Masculino',
    edad: 40
}

/* El objeto completo no puede ser reasignado a no ser que sea un 'let' o un 'var'  
Persona = {
    nombre: 'María',
    colorOjos: 'Negros',
    colorPiel: 'Blanca',
    estatura: 1.69,
    genero: 'Femenino',
    edad: 40
}
*/

Persona .nombre = 'Maria';
Persona .genero = 'Femenino';
Persona .estatura = 1.69;
Persona .colorOjos = 'Negros';

console .log( 'Objeto ', Persona );