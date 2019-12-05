'use strict'
var num=new Array(3);
for(var i=0;i<3;i++){
    var n=parseInt(prompt("ingrese nro",0));
    console.log(i);
    num.push(n);//agrega
}
for(let i in num){
    console.log(num[i]);
}
num.forEach((num,i)=>{ //porq i no empieza de 1
    document.write("<li>"+i+".-"+num+"</li>");
})
/*
num.sort();//ordea
console.log(num);
num.reverse();// invierte
console.log(num);
num.length;// nro de elementos
console.log(num);*/
var busqueda =num.find(num=>num==6); //nos vota el numero encontrado
var busqueda1=num.findIndex(num=>num==6);//no vota su ubicacion
var valores=num.some(num=>num>5); // valores mayores a 5
console.log(busqueda);
console.log(busqueda1);
console.log(valores);