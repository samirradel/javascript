'use strict'
//plantilla
//var nombre=prompt(" nombre ");
//var apellido=prompt(" apellido");
//var edad=parseInt(prompt("mi edad"),0);
//var texto="mi nombre es "+" y tengo "+edad;
/*var texto=' 
         
         <h3>mi nombre es : $(nombre)</h3>
         <h3>mi apellido es : $(apellido)</h3>
         ';
document.write(texto);*/
//arrays
var nombres=["juan","carlos",52,true];
nombres.push("samir"); // de esa forma se agrega elementos
var lenguaje= new Array("j","s","t");
/*
var elemento=parseInt(prompt("elemento",0));
if(elemento>= nombres.length){
    alert("ingrese un numero menor "+nombres.length);
}
else{
    alert(nombres[elemento]);
}
lenguaje.forEach((elem,indice)=>{//lo lee por elemento indice es opcional
    document.write("<li>"+indice+" . "+elem+"</li>");
});

var agregar="";
do{
    agregar=prompt("agregar nombre");
    nombres.push(agregar);//agregas nombres
}while(agregar!="acabar");
nombres.pop();//elimina el ultimo elemento
//console.log(nombres);
//eliminar
var eliminar=nombres.indexOf("juan");//nro posicion
if(eliminar>-1){
    nombres.splice(eliminar,1); //elimina carlos del arreglo
}
var string =nombres.join();//convierte a string sin corchetes
var cadena="tex1,tex2,tex3";
var cadena_array=cadena.split(" , ");//lo deja entre corchetes
console.log(nombres);
console.log(string);
console.log(cadena_array); */
nombres.sort(); //ordena alfabeticamente
console.log(nombres);
