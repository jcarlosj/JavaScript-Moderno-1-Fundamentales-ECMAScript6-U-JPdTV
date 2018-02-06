/* Destructuring 'Arrays' en JavaScript (ES6) 
 *  Sirve para extraer valores de un Objeto, de un Arreglo 
 */

const ciudades = [ 
    'Londrés', 
    'New York', 
    'Montreal', 
    'Sudáfrica', 
    { 
        idioma: 'Inglés' 
    } 
];

console .log( ciudades );

// Extrae los valores del Objeto contenido en el 'Array'
[ idioma ] = ciudades;
console .log( 'Idioma', idioma );               // Londrés

[ , , , , lenguaje ] = ciudades;
console .log( 'Idioma', lenguaje .idioma );     // Inglés