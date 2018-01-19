/* JavaScript File */ 
let nombre = prompt( '¿Cuál es tú nombre?' ),
    edad   = prompt( '¿Cuál es tú edad?' );

document .getElementById( 'app' ) .innerHTML = `Bienvenido ${ nombre } de ${ edad } años.`;    
