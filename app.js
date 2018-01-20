/* Operadores de comparación en 'JavaScript' */ 

const numero1 = 20,
      numero2 = 50,
      numero3 ='20';

console .group( 'Operadores de comparación' );
    console .log( `${ numero1 } > ${ numero2 }`, numero1 > numero2 );   // false
    console .log( `${ numero1 } < ${ numero2 }`, numero1 < numero2 );   // true

    console .log( `${ numero1 } == ${ numero3 }`, numero1 == numero3 );     // true
    console .log( `${ numero1 } === ${ numero3 }`, numero1 === numero3 );   // false

    console .log( `${ numero1 } != ${ numero2 }`, numero1 != numero2 );   // true
    
    console .log( '"hola" == " hola"', 'hola' == ' hola' );     // false

    /* (-) ABCDEFGHI... XYZabcdefg... xyz (+) */
    console .log( '"a" > "b"', 'a' > 'b' );                     // false
    console .log( '"Z" > "a"', 'Z' > 'a' );                     // false
    console .log( '"z" > "A"', 'z' > 'A' );                     // true

    console .log( 'null == undefined', null == undefined );     // true
    console .log( 'null === undefined', null === undefined );   // false                   
console .groupEnd();    

/* ===  es un comparador estricto */