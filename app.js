/* Arrow Functions en JavaScript (Pasando Parámetros) */

let aprendiendo;

// --- FORMA TRADICIONAL ---
// Pasar una función como variable
aprendo1 = function( tecnologia ) {
    console .log( 'aprendo1() ', 'Aprendiendo ' + tecnologia );
}
aprendo1( 'JavaScript' );

// --- FORMA NUEVA (Arrow Functions)
// Pasar una función como variable 
aprendo2 = ( tecnologia ) => {
    console .log( 'aprendo2() ', 'Aprendiendo ' + tecnologia );
}
aprendo2( 'JavaScript' );

// Pasar una función como variable 
aprendo3 = ( tecnologia ) => console .log( 'aprendo3() ', 'Aprendiendo ' + tecnologia );
aprendo3( 'JavaScript' );

// Pasar una función como variable (retornando un valor)
aprendo4 = ( tecnologia ) => 'Aprendiendo ' + tecnologia;
console .log( 'aprendo4() ', aprendo4( 'JavaScript' ) );

// Pasar una función como variable (retornando un objeto)
aprendo5 = ( tecnologia ) => ( { aprendiendo: tecnologia } );
console .log( 'aprendo5() ', aprendo5( 'JavaScript' ) );

// NOTA: Cuando solo se pasa un parámetro se pueden obviar los paréntesis
aprendo6 = tecnologia => ( { aprendiendo: tecnologia } );
console .log( 'aprendo6() ', aprendo6( 'JavaScript' ) );