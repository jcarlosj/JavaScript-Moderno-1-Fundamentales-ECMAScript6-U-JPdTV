/* Arrow Functions en JavaScript */

let aprendiendo;

// --- FORMA TRADICIONAL ---
// Pasar una función como variable
aprendo1 = function() {
    console .log( 'aprendo1() ', 'Aprendiendo JavaScript' );
}
aprendo1();

// --- FORMA NUEVA (Arrow Functions)
// Pasar una función como variable 
aprendo2 = () => {
    console .log( 'aprendo2() ', 'Aprendiendo JavaScript' );
}
aprendo2();

// Pasar una función como variable 
aprendo3 = () => console .log( 'aprendo3() ', 'Aprendiendo JavaScript' );
aprendo3();

// Pasar una función como variable (retornando un valor)
aprendo4 = () => 'Aprendiendo JavaScript';
console .log( 'aprendo4() ', aprendo4() );

// Pasar una función como variable (retornando un objeto)
aprendo5 = () => ( { aprendiendo: 'Aprendiendo JavaScript' } );
console .log( 'aprendo5() ', aprendo5() );
