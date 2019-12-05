'use strict'
var numero=444;
var texto1="bienvenido al curso de web";
var texto2="BIENVENIO curso JAVA";

var dato=numero.toString(); //numero a cadena
    dato=texto1.toUpperCase(); //todo mayoscula
    dato=texto2.toLocaleLowerCase();//todo miniscula
//console.log(dato);
//cacular longitus
//console.log(texto1.length);
// convadenar
var textoTotal=texto1+" "+texto2;
var textoTotal1=texto1.concat(" ",texto2);
console.log(textoTotal);
console.log(textoTotal1);// es lo mismo
var busqueda=textoTotal1.indexOf("curso");//nos da la posicion de esta palabra
console.log(busqueda);
var busqueda1=textoTotal1.lastIndexOf("curso"); //ultima aparicion de la palabra
console.log(busqueda1);
var busqueda2=textoTotal1.search("juan"); //lo mismo q indexof si no aparece nos vota -1
var busqueda3=textoTotal1.match(/curso/g);//cuntas veces nos aparece esa palabra
console.log(busqueda3);
var busqueda4=textoTotal1.substr(14,20); //palabras q estan en ese rango
console.log(busqueda4);
var busqueda5=textoTotal1.charAt(44); //me vote la letra 
console.log(busqueda5);
var busqueda6=textoTotal1.startsWith("bienvenido al curso");// me vota true, puedo reducir la palabraa tambien
console.log(busqueda6);
var busqueda7=textoTotal1.endsWith("curso JAVA");// me vota true
console.log(busqueda7);
var busqueda8=textoTotal1.includes("web");// si una palabra esta en la cadena true
console.log(busqueda8);
