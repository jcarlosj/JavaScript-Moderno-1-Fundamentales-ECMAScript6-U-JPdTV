/* Métodos disponibles para Números en 'JavaScript' */ 

const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .1020,
      numero5 = -3;

console .group( 'Operaciones básicas' );
    console .log( 'suma ', numero1 + numero2 );
    console .log( 'resta ', numero1 - numero2 );
    console .log( 'multiplicación ', numero1 * numero2 );
    console .log( 'división ', numero1 / numero2 );
    console .log( 'módulo ', numero1 % numero2 );
    console .log( 'gerarquia de operadores ', ( ( 10 + 20 + 15 + 3 ) * .2 ) );
console .groupEnd();    

console .group( 'Operaciones con métodos de JavaScript' );
    console .log( 'Math.PI ', Math .PI );                           // 3.1415... (Valor de PI)
    console .log( 'Math.round( 2.562 ) ', Math .round( 2.562 ) );   // 3 (Redondea)
    console .log( 'Math.ceil( 2.562 ) ', Math .ceil( 2.562 ) );     // 3 (Redondea por arriba)
    console .log( 'Math.floor( 2.562 ) ', Math .floor( 2.562 ) );   // 2 (Redondea por abajo)
    console .log( 'Math.sqrt( 144 ) ', Math .sqrt( 144 ) );         // 12 (Raíz cuadrada)
    console .log( 'Math.abs( -3 ) ', Math .abs( numero5 ) );        // 3 (Número absoluto
    console .log( 'Math.pow( 8, 3 ) ', Math .pow( 8, 3 ) );         // 512 (Potencia)
    console .log( 'Math.min( 8, 3, 5, 6, 1, 7, 9, 8 ) ', Math .min( 8, 3, 5, 6, 1, 7, 9, 8 ) );     // 1 (El número minimo)
    console .log( 'Math.max( 8, 3, 5, 6, 1, 7, 9, 8 ) ', Math .max( 8, 3, 5, 6, 1, 7, 9, 8 ) );     // 9 (El número máximo)         
    console .log( 'Math.random() ', Math .random() );               // X.XXXX (Número aleatorio)
console .groupEnd();    