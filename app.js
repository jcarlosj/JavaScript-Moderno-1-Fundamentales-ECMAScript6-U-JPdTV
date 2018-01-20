const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';
let dato;

/* Convertir Strings a Numbers en 'JavaScript' */ 
console .group( 'Convierte "String" a un "Number"' );
    console .log( `"${ numero1 }" + ${ numero2 } `, numero1 + numero2 );                        // 5010 (El + es para concatenar cuando detecta un "String" o sumar)
    console .log( `"${ numero1 }" - ${ numero2 } `, numero1 - numero2 );                        // 40   (La resta si la ejecuta)
    console .log( `Number("${ numero1 }") + ${ numero2 } `, Number( numero1 ) + numero2 );      // 60
    
    /* Usando parseInt */
    console .group( 'parseInt (Enteros)' );
        console .log( `parseInt("${ numero1 }") + ${ numero2 } `, parseInt( numero1 ) + numero2 );  // 60
        console .log( `parseInt("${ numero3 }") `, parseInt( numero3 ) );                           // NaN
        
        dato = parseInt( "100" );
        console .log( 'parseInt("100")', dato );   // 100
        dato = parseInt( "100.2030" );
        console .log( 'parseInt("100.2030")', dato );   // 100
    console .groupEnd();

    /* Usando parseFloat (Decimales o punto coma flotante) */
    console .group( 'parseFloat (Décimales)' );
        dato = parseFloat( "100" );
        console .log( 'parseFloat("100")', dato );   // 100
        dato = parseFloat( "100.2030" );
        console .log( 'parseFloat("100.2030")', dato );   // 100.203
    console .groupEnd();

    dato = Number( "20" );
    console .log( 'dato = Number("20")', dato );            // 20
    dato = Number( "20.12309" );
    console .log( 'dato = Number("20.12309")', dato );      // 20.12309
    dato = Number( "Hola Mundo!" );
    console .log( 'dato = Number("Hola Mundo!")', dato );   // NaN
console .groupEnd();

/* Convertir Boolean a Numbers en 'JavaScript' */ 
console .group( 'Convierte "Boolean" a un "Number"' );    
    dato = Number( true );
    console .log( 'dato = Number(true)', dato );            // 1
    dato = Number( false );
    console .log( 'dato = Number(false)', dato );           // 0
console .groupEnd();

/* Convertir Null/Undefined a Numbers en 'JavaScript' */ 
console .group( 'Convierte "null e undefined" a un "Number"' );
    dato = Number( null );
    console .log( 'dato = Number(null)', dato );            // 0
    dato = Number( undefined );
    console .log( 'dato = Number(undefined)', dato );       // NaN
console .groupEnd();

/* Convertir 'Array' a Numbers en 'JavaScript' */ 
console .group( 'Convierte "Array" a un "Number"' );
dato = Number( [ 1, 2 ,3 ,4 ] );
console .log( 'dato = Number([ 1, 2 ,3 ,4 ])', dato );      // NaN         // 0
console .groupEnd();