'use strict'
//DOM Docuemnt Object Model
function cambiarColor(color){
    caja.style.background=color;
}
//CONSEGUIR ELEMENTOS DE CON UN ID CONGRETO
var caja=document.getElementById("micaja"); //identificador de html
//ptra forma se haria asi
////no me funciona esta forma xq
caja.innerHTML="este es el nuevo mensaje q aparece en htlml del id";
caja.style.background="red"; //incluso cambia estilo el fondo
caja.style.padding="20px";// agranda el el fondo 
caja.style.color="white";//color de letra
caja.className="hola1" //aniadir atributo en htlml
//console.log(caja);
//CONSEGUIR   TODAS LAS ETIQUETAS  DIV
var todosLosDiv=document.getElementsByTagName('div'); //todos los div
//var contenidoEnTexto=todosLosDiv[2].textContent;// muestra el contenido de ese dv
var contenidoEnTexto=todosLosDiv[2];
contenidoEnTexto.innerHTML="otro texto para el segundo div";
contenidoEnTexto.style.background="black";
contenidoEnTexto.style.color="white";
//console.log(contenidoEnTexto);
//vamos a poner a todos en una lista
var todosLosDiv=document.createElement('div');
var valor;
for(valor in todosLosDiv){
    var parrafo=document.createElement("p");
    var texto=document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.appendChild(texto);
    document.getElementById("miseccion").appendChild(parrafo);
}

//CONSEGUIR EIQUETAS POR UN TIP OE DIV