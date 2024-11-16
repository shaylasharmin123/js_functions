

//show text
function showText(){
  document.getElementById('st').innerHTML="HELLOW WORLD";
}

// change text
function changeText(){
  document.getElementById('ct').innerHTML = "hello there";
}

//show date
function showDate(){
  document.getElementById('sd').innerHTML = Date();
}

// on/off light 
function bulbOn(){
  document.getElementById('bulb').src="images/bulbon.gif"
}
function bulbOff (){
  document.getElementById('bulb').src="images/bulboff.gif";
}

// change style
function changeStyle(){
  document.getElementById('cs').style.border="1px solid red";
}

//show/hide content
function textShow(){
  document.getElementById('sh').style.display="block";
}
function textHide(){
  document.getElementById('sh').style.display="none";
}

// change style
function changeSize(){
  document.getElementById('sc').style.fontSize="40px";
}

// change style
function changeColor(){
  document.getElementById('cc').style.color="green";
}

// change style
function imgChange(){
  document.getElementById('ic').src="images/man3.jpg";
}

//repeat text
function repeatText(){
  var data="welcome to ss";
  document.getElementById('rt').innerHTML = data.repeat(3) ; 
}

//data manipulation
var number1 = 7;
var number2 = 7;

var result = number1 + number2;

function mData(){
  document.getElementById('m').innerHTML = result ; 
}

//data manipulation
let number3 = 7;
let number4 = 6;

let multi  = number3 * number4;

function mulData(){
  document.getElementById('mul').innerHTML = multi ; 
}

//data manipulation
let number5 = 7;
let number6 = 6;

let modulas  = number5 % number6;

function modData(){
  document.getElementById('mod').innerHTML = modulas ; 
}

//data manipulation
let number7 , number8;
number7 = 7;
number8 = 6;

number7  -= number8 ;

function sData(){
  document.getElementById('sub').innerHTML = number7 ; 
}

//data comparisn
let number9 , number11 ,results;
number9 = 7;
number11= 6;

results = number9  < number11 ;

function comData(){
  document.getElementById('com').innerHTML = results; 
}

//data comparisn
let number12 , number13 ,total;
number12 = 7;
number13= 7;

total = number12  == number13 ;

function iData(){
  document.getElementById('i').innerHTML = total; 
}

//data comparisn
let number14 , number15 ,totals;
number14 = 7;
number15= 7;

totals = number14  === number15 ;

function idData(){
  document.getElementById('id').innerHTML = totals; 
}

//value check
var x=2;
var x="john doe";
var x=0;

function vCheck(){
  document.getElementById('v').innerHTML = x; 
}

//value check
const cars = ["saab","volvo","BMW"];

function v2Check(){
  document.getElementById('v2').innerHTML = cars[1]; 
}

//value check
const car = ["saab","volvo","BMW"];
//change an element
car[0]="toyoto";
//add an element
car.push("audi");

function v3Check(){
  document.getElementById('v3').innerHTML = car; 
}

//create an object
const car1 = {type:"toyoto" , model : "500", color: "white"};
//change an property
car1.color="red";
//add an property
car1.owner="john";

function v4Check(){
  document.getElementById('v4').innerHTML = "cars owner is " +  car1.owner; 
}

//arithmatic operation
let a=3;
let b=(100*4)+a;

function v5Check(){
  document.getElementById('v5').innerHTML = b; 
}

//arithmatic operation
let c=3;
let d=5;
let e=c+d;

function v6Check(){
  document.getElementById('v6').innerHTML = e; 
}

//arithmatic operation
let f=3;
f++;
let g=f;

function v7Check(){
  document.getElementById('v7').innerHTML = g; 
}

//arithmatic operation
let h=7;
let i=h**2;

function v8Check(){
  document.getElementById('v8').innerHTML = i; 
}

//arithmatic operation
let answer1 = "its alright";
let answer2 = "he is called 'jonny'";
let answer3= 'he is called "jonny"';

function v9Check(){
  document.getElementById('v9').innerHTML =answer1+"<br>" + answer2 +"<br>" +answer3; 
}

// string length
let text="he is my brother and her name is john";

function lCheck(){
  document.getElementById('l').innerHTML = text.length; 
}

//data type
let data1= 16+"volvo";
function dType(){
  document.getElementById('d1').innerHTML = data1; 
}

//data type
let data2= "volvo"+16;
function d2Type(){
  document.getElementById('d2').innerHTML = data2; 
}

//data type
let data3= 10+10+10+"volvo";
function d3Type(){
  document.getElementById('d3').innerHTML = data3; 
}

//data type
let data4= "volvo"+10+10+10;
function d4Type(){
  document.getElementById('d4').innerHTML = data4; 
}

//data type
let data5;         // Now data5 is undefined
data5 = 5;         // Now data5 is a Number
data5 = "John";    // Now data5 is a String
function d5Type(){
  document.getElementById('d5').innerHTML = data5; 
}

//data type
let answer4 = "It's alright";
let answer5 = "He is called 'Johnny'";
let answer6 = 'He is called "Johnny"';
function d6Type(){
  document.getElementById('d6').innerHTML = answer4+"<br>" + answer5 +"<br>" +answer6; 
}

//data type
let x1 = 5;
let y1 = 5;
let z1 = 6;
function d7Type(){
  document.getElementById('d7').innerHTML = (x1 == y1) + "<br>" + (x1 == z1); 
}

//string
let text1 = 'It\'s alright.';
function d8Type(){
  document.getElementById('d8').innerHTML = text1; 
}

//method
let x2 = 123;
function d9Type(){
  document.getElementById('d9').innerHTML =  x2.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();; 
}

//method
let x3 = 9.656;
function m1Type(){
  document.getElementById('m1').innerHTML = 
  x.toFixed(0) + "<br>" +
  x.toFixed(2) + "<br>" +
  x.toFixed(4) + "<br>" +
  x.toFixed(6);
}

//method
let x4 = 9.656;
function m2Type(){
  document.getElementById('m2').innerHTML = 
  x4.toPrecision() + "<br>" +
  x4.toPrecision(2) + "<br>" +
  x4.toPrecision(4) + "<br>" +
  x4.toPrecision(6); 
}

//method
function m3Type(){
  document.getElementById('m3').innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
}

//array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function a1Type(){
  document.getElementById('a1').innerHTML = fruits.toString(); 
}

//array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits1.length;
function a2Type(){
  document.getElementById('a2').innerHTML = size; 
}

//if,else
if (hour < 18) {
  greeting = "Good day";
}
function f1Type(){
  document.getElementById('f1').innerHTML = "Good day!"; 
}

//if,else
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
function f2Type(){
  document.getElementById('f2').innerHTML = greeting; 
}

//class exm
function classEx(){
  document.getElementByClassName('p')[2].innerHTML = "hello!"; 
}

//show text
function seeText(){
  document.getElementById('see').innerHTML="HELLOW nice WORLD";
}

//show text
function sawText(){
  document.getElementById('saw').innerHTML="HELLOW beautiful WORLD";
}

// change text
function changingText(){
  document.getElementById('change').innerHTML = "hello beautiful ";
}

// change style
function changingColor(){
  document.getElementById('chan').style.color="red";
}

// change style
function changingSize(){
  document.getElementById('chsz').style.fontSize="50px";
}

