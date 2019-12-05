'use strict'
var num=[];
for(var i=1;i<5;i++){
    var n=parseInt(prompt("ingrese nro",0));
    num.push(n);//agrega
}
num.sort();//ordea
console.log(num);
num.reverse();// invierte
console.log(num);
num.length;// nro de elementos
console.log(num);