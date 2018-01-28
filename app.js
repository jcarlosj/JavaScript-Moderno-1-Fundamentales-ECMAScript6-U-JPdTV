/* Crear 'String' usando constructores */
const nombre1 = 'Jerónimo',                 // Forma corriente
      nombre2 = new String( 'Juliana' );    // Como constructor

console .group( 'String' );
    console .log( `${ nombre1 } es de tipo ${ typeof nombre1 }` );      // string
    console .log( `${ nombre2 } es de tipo ${ typeof nombre2 }` );      // object
console .groupEnd();

/* Crear 'Number' usando constructores */
const numero1 = 1,                  // Forma corriente
      numero2 = new Number( 9 );    // Como constructor

console .group( 'Number' );
    console .log( `${ numero1 } es de tipo ${ typeof numero1 }` );      // number
    console .log( `${ numero2 } es de tipo ${ typeof numero2 }` );      // object
console .groupEnd();

/* Crear 'Boolean' usando constructores */
const boolean1 = false,                  // Forma corriente
      boolean2 = new Boolean( true );    // Como constructor

console .group( 'Boolean' );
    console .log( `${ boolean1 } es de tipo ${ typeof boolean1 }` );      // boolean
    console .log( `${ boolean2 } es de tipo ${ typeof boolean2 }` );      // object
console .groupEnd();

/* Crear un 'function' usando constructores */
const funcion1 = function( numero1, numero2 ) {                         // Forma Corriente
    return numero1 + numero2;
}
const funcion2 = new Function( 'numero1', 'numero2', 'return numero1 + numero2');   // Como constructor

console .group( 'Function' );
    console .log( `${ funcion1( 2, 3 ) } es de tipo ${ typeof funcion1() }` );      // object
    console .log( `${ funcion2( 3, 3 ) } es de tipo ${ typeof funcion2() }` );      // object
console .groupEnd();

/* Crear un 'object' usando constructores */
const persona1 = {              // Forma corriente
    nombre: 'Juan',
    apellido: 'Jiménez'
}
const persona2 = new Object({ nombre: 'Juan', apellido: 'Jiménez' });   // Como constructor

console .group( 'Object' );
    console .log( `${ persona1 } es de tipo ${ typeof persona1 }` );      // object
    console .log( `${ persona2 } es de tipo ${ typeof persona2 }` );      // object
console .groupEnd();

/* Crear un 'array' usando constructores */
const arreglo1 = [ 1, 2, 3, 4 ],                // Forma corriente
      arreglo2 = new Array( 1, 2, 3, 4 );       // Como constructor

console .group( 'Array' );
    console .log( `${ arreglo1 } es de tipo ${ typeof arreglo1 }` );      // object
    console .log( `${ arreglo2 } es de tipo ${ typeof arreglo2 }` );      // object
console .groupEnd();

/* NOTA: Existen también expresiones regulares y otros */