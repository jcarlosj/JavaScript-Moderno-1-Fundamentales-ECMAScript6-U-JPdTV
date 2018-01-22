/* Iteraciones (Do-While Loop) 
   El código se ejecuta al menos una ves sin importar si la condición se cumple o no */
   let indice;

   console .group( 'Do-While Loop' );
   
       console .group( 'Ejemplo 1' );
           /* Ejemplo 1 */
           indice = 0;
   
           do {
               console .log( `Número ${ indice }` );
   
               indice++;
           } while ( indice < 10 );
   
       console .groupEnd();
   
       console .group( 'Ejemplo 2' );    
           /* Ejemplo 2 */
           indice = 1000;
           
           do {
               console .log( `Número ${ indice }` );
   
               indice++;
           } while ( indice < 10 );
   
       console .groupEnd();    
   
   console .groupEnd();