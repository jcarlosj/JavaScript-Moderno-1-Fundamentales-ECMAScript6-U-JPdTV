/* Funciones Propias creando Parámetros con valores por 'Default' en JavaScript */

/* Forma 1: */ 
function saludarA( nombre ) {
    /* Crear valor por defecto para un parámetro */
    if( typeof nombre === 'undefined' ) {
        nombre = 'Fulanito de Tal';
    }
    console .log( `Hola ${ nombre }`);
}
/* Realizamos el llamado */
saludarA( 'Maria' );
saludarA( 'José' );
saludarA( 'Jorge' );
saludarA();


/* Forma 2: */ 
function saluda( nombre = 'Perencejo' ) {       /* Crear valor por defecto para un parámetro */   
    console .log( `Hola ${ nombre }`);
}
/* Realizamos el llamado */
saluda( 'Elisa' );
saluda( 'Juliana' );
saluda( 'Laura' );
saluda();