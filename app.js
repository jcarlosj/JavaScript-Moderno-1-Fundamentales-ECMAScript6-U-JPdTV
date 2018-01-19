/* Var, Let y Const */ 

/* Declaraciones con VAR */
var edad;

console .group( 'Declaraciones tipo VAR' );
    var nombre = 'Juan';                    // Asignar valor
    console .log( 'nombre ', nombre );      // nombre  Juan
    var nombre = "Juanita";                 // Redeclarar la variable
    console .log( 'nombre ', nombre );      // nombre  Juanita
    nombre = 'Juliana';                     // Reasignar valor
    console .log( 'nombre ', nombre );      // nombre  Juliana
    
    console .log( 'edad ', edad );          // edad undefined
console .groupEnd();

/* Formas de nombrar variables 

var primerNombre;       // Camel Case
var primer_nombre;      // Underscore
var PrimerNombre;       // Pascal Case
var primernombre;       // NO RECOMENDADO
*/

/* Declaraciones con LET (Con Ambito) */
let primerNombre = 'Carlos',
    tituloLibro = 'Aprenda JavaScript en 100 lecciones';

console .group( 'Declaraciones tipo LET' );
    console .log( primerNombre + ' lee "' + tituloLibro + '"' );    
    console .log( `${ primerNombre } lee "${ tituloLibro }"` );  // Usando 'Template Literals'
console .groupEnd();
//let primerNombre = 'Alejandro';     // ERROR: 'let' no permite redeclarar una variable como lo permite 'var'


/* Declaraciones con CONST (Constante) */
const producto = 'Libro';

/* Es un ERROR hacer lo siguiente 
const producto;
producto = 'Libro';
*/
console .group( 'Declaraciones tipo CONST' );
    console .log( 'producto', producto );
console .groupEnd();