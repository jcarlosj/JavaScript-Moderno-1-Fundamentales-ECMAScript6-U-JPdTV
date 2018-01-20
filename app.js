let dato;

/* Función 'toFixed' en 'JavaScript' */ 
console .group( 'dato.toFixed()' );
    
    /* Función que solo aplica a números */
    dato = '932743254';
    //console .log( 'dato.toFixed()', dato .toFixed() );      // ERROR: toFixed no es una función para Strings
    console .log( 'dato = "932743254" \nparseInt(dato).toFixed(2)', parseInt( dato ) .toFixed( 2 ) );       // 932743254.00
    dato = '932743254.734125602';
    console .log( 'dato = "932743254" \nparseFloat(dato).toFixed(3)', parseFloat( dato ) .toFixed( 3 ) );   // 932743254.00
    dato = 932743254;
    console .log( 'dato = 932743254 \ndato .toFixed()', dato .toFixed() );                 // 0932743254 
    dato = 932743254;
    console .log( 'dato = 932743254 \ndato .toFixed(6)', dato .toFixed( 6 ) );             // 0932743254.000000 
    dato = 932743254.343589342;
    console .log( 'dato = 932743254.343589342 \ndato .toFixed() ', dato .toFixed() );      // 0932743254 
    dato = 932743254.343589342;
    console .log( 'dato = 932743254.343589342 \ndato .toFixed(3) ', dato .toFixed( 3 ) );  // 0932743254.343 
console .groupEnd();