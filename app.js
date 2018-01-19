/* Métodos disponibles para 'Strings' en 'JavaScript' */ 

let tecnologia = 'JavaScript', 
    mensaje    = "Aprendiendo JavaScript, CSS, HTML para ser un Frontend";

console .group( 'Métodos disponibles para "Strings"' ); 
    console .group( 'Aplicado a la variable "tecnologia"' ); 
        console .log( 'concat()', tecnologia .concat( ' ', 'es genial!' ) );                // JavaScript es genial!
        console .log( 'toUpperCase()', tecnologia .toUpperCase() );                         // JAVASCRIPT
        console .log( 'toLowerCase()', tecnologia .toLowerCase() );                         // javascript
        console .log( 'repeat( 10 )', tecnologia .repeat( 10 ) );                          // Repite 10 veces "JavaScript"
    console .groupEnd();
    console .group( 'Aplicado a la variable "mensaje"' );
        console .log( 'indexOf( "JavaScript" ) ', mensaje .indexOf( 'JavaScript' ) );       // 12
        console .log( 'indexOf( "PHP" ) ', mensaje .indexOf( 'PHP' ) );                     // -1
        console .log( 'substring( 0, 11 ) ', mensaje .substring( 0, 11 ) );                 // Aprendiendo                                              
        console .log( 'substring( 3, 21 ) ', mensaje .substring( 3, 21 ) );                 // endiendo JavaScrip
        console .log( 'slice( 3, 21 ) ', mensaje .slice( 3, 21 ) );                         // endiendo JavaScrip (Similar a substring)
        console .log( 'slice( -3 ) ', mensaje .slice( -3 ) );                               // end (de derecha a izquierda)
        console .log( 'slice( -30 ) ', mensaje .slice( -30 ) );                             // CSS, HTML para ser un Frontend (de derecha a izquierda)
        console .log( 'split( " " ) ', mensaje .split( ' ' ) );                             // [ "Aprendiendo", "JavaScript,", "CSS,", "HTML", "para", "ser", "un", "Frontend" ]           
        console .log( 'split( " " ) ', mensaje .split( ',' ) );                             // [ "Aprendiendo JavaScript", " CSS", " HTML para ser un Frontend" ]
        console .log( 'replace( "HTML", "PHP" )', mensaje .replace( 'HTML', 'PHP' ) );      // Aprendiendo JavaScript, CSS, PHP para ser un Frontend        
        console .log( 'includes( "CSS" )', mensaje .includes( 'CSS' ) );                    // true (Si el texto 'CSS' esta incluido en el 'String')
    console .groupEnd();
console .groupEnd();    