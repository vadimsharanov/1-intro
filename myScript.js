"use strict"
// Kintamojo apibrezimas (declaration)
var x;
var y;
var z,g;
var elementas;


//Reiksmes kintamajam priskyrimas (assingment)
x = 16;
y = 16.6;
z = "Labas pasauli"


//Sudetis
var suma, a, b;
a=5;
b=6;
suma = a + b;

//skirtumas
var skirtumas;
a = 11;
b = 3;
skirtumas = a-b;

//daugyba
var daugyba;
daugyba = skirtumas * 5;

//dalyba
var dalyba;
dalyba = daugyba /8 ;

dalyba +=1;
dalyba += skirtumas;



elementas = document.querySelector(".tekstas");

//Kintamuju isvedimas
console.log(suma);
console.log(skirtumas);
console.log(daugyba);
console.log(dalyba);