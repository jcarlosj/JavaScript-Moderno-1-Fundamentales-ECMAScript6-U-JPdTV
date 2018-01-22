/* Fechas en JavaScript 
   Es un tema muy extenso pero se verá las funciones básicas mas utilizadas 
   En JavaScript existe un Objeto llamado Date */

console .group( 'Fechas en JavaScript' );

    /* Fecha Actual */
    const diaHoy = new Date();
    console .log( 'Fecha actual ', diaHoy );
    
    /* Fecha específica: Mes, Dia y Año */
    let navidad_2017 = new Date( '2017-12-25' );
    console .log( 'Fecha Navidad 2017 ', navidad_2017 );

    /* Obtener Fechas */
    let valor = diaHoy .getMonth();     /* Mes actual: El mes 0 es Enero y así los siguientes */
    console .log( 'Mes actual ', valor );      
    valor = diaHoy .getDate();          /* Dia actual */
    console .log( 'Día actual ', valor );       
    valor = diaHoy .getDay();           /* Dia actual */
    console .log( 'Día actual ', valor );       
    valor = diaHoy .getFullYear();      /* Año Actual */
    console .log( 'Año actual ', valor );  
    valor = diaHoy .getHours();         /* Hora Actual */
    console .log( 'Hora actual ', valor );  
    valor = diaHoy .getMinutes();       /* Minuto Actual */
    console .log( 'Minuto actual ', valor );  
    valor = diaHoy .getTime();          /* Todos los milisegundos que se han registrado desde 1970 */
    console .log( 'Todos los milisegundos que se han registrado desde 1970 ', valor );  

    /* Cambiar Fechas obtenidas */
    valor = diaHoy .getFullYear();          
    console .log( 'Año actual ', valor );
    diaHoy .setFullYear( 2016 );        /* Cambia el año: igualmente se puede hacer para todos los metodos GET */ 
    valor = diaHoy .getFullYear();
    console .log( 'Año cambiado ', valor ); 
console .groupEnd();

