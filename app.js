/* Window Object (Fundamentales) 
   Es un tema muy extenso. Dicho objeto nos puede proporcionar mucha información 
   Es usado por Google, Facebook entre otras para poder filtrar por ejemplo la publicidad
   que desean mostrarnos, el idioma en que debe mostrarse etc */

console .log( window );     /* Para poder ver todas las funciones de este Objeto */

/* Ejemplo 1: Implementación del Window Object */
let altoNavegador,
    anchoNavegador;

/* Dimensiones del navegador */ 
altoNavegador = window .outerHeight;
anchoNavegador = window .outerWidth;    

console .group( 'Dimensiones del Navegador' );
    console .log( 'alto: ', altoNavegador );
    console .log( 'ancho: ', anchoNavegador );
console .groupEnd();

/* Dimensiones de la ventana del navegador */ 
altoNavegador = window .innerHeight;
anchoNavegador = window .innerWidth;

console .group( 'Dimensiones de la ventana del Navegador' );
    console .log( 'alto: ', altoNavegador );
    console .log( 'ancho: ', anchoNavegador );
console .groupEnd();

/* Location Object (URL actual) */
let data;
console .group( 'location (Object) dentro de Window Object' );
    data = window .location;
    console .log( 'URL location: ', data ); 
    data = window .location .host;
    console .log( 'Host: ', data );
    data = window .location .hostname;
    console .log( 'Hostname: ', data );
    data = window .location .port;
    console .log( 'Port: ', data );
    data = window .location .search;       /* Muestra parámetros enviados por la URL (GET) */ 
    console .log( 'Search: ', data );
    data = window .location .href;
    console .log( 'Href: ', data );
    //data = window .location .href = 'http://twitter.com';   /* Redireccionar */
    console .log( 'Href: ', data );
console .groupEnd();

/* Navigator Object */
console .group( 'navigation (Object) dentro de Window Object' );
    data = window .navigator;
    console .log( 'Object Navigator: ', data ); 
    data = window .navigator .appCodeName;
    console .log( 'Nombre del código de la aplicación: ', data );
    data = window .navigator .appName;
    console .log( 'Nombre Navegador: ', data );
    data = window .navigator .appVersion;
    console .log( 'Versión Navegador : ', data );
    data = window .navigator .userAgent;
    console .log( 'User Agent : ', data );
    data = window .navigator .language;
    console .log( 'Language : ', data );        /* Idioma en el que esta configurada la PC del usuario */
console .groupEnd();

/* History Object */
console .group( 'history (Object) dentro de Window Object' );
    console .log( window .history );
console .groupEnd();

/* Ir a páginas del historial del navegador */
//window .history .go( -3 );      /* Redireccionar a un site que esta en el historial (A veces falla por el caché del navegador) */
