let a = 'hello';
a='bye'
console.log(a);
alert(a);
document.write(a);

let b = 'owu';
b=12;
console.log(b);
alert(b);
document.write(' '+b);

let c = 'com';
c='comics';
console.log(c);
alert(c);
document.write(' '+c);

let d = 'ua';
d=56;
console.log(d);
alert(d);
document.write(' '+d);

let e = 1;
e=23.67;
console.log(e);
alert(e);
document.write(' '+e);

let ab = 10;
ab='roka';
console.log(ab);
alert(ab);
document.write(ab);

let cd = -999;
cd='cell';
console.log(cd);
alert(cd);
document.write(cd);

let k = 123;
k=false;
console.log(k);
alert(k);
document.write(k);

let m = 3.14;
m=true;
console.log(m);
alert(m);
document.write(m);

let nm = 2.7;
nm= 'japanese'
console.log(nm);
alert(nm);
document.write(nm);

let num=16;
num='slovo';
console.log(num);
alert(num);
document.write(num);

let tr = true;
tr=1000;
console.log(tr);
alert(tr);
document.write(' '+tr);

let fl = false;
fl=true;
console.log(fl);
alert(fl);
document.write(fl);

let name=prompt('Як тебе звати?');
console.log(name);
let secondName=prompt('Як ти по батькові?');
console.log(secondName);
let age = prompt('Скільки тобі років?');
console.log(age);
document.write(' Вітаю'+' '+ name+' '+ secondName+'.Тобі '+ age+' років.');

let str = name+' '+secondName+' '+age;
console.log(str);
document.write(str);

let num1 = prompt('number1?');
let numk1= parseInt(num1,10);
document.write(numk1);
let num2 = prompt('number2?');
let numk2 = parseInt(num2,10);
let num3 =prompt('number3?');
let numk3 = parseInt(num3, 10);

let a1=prompt('number1?');
a1= parseInt(a1, 10);
console.log(a1);

let a2= prompt('number2?');
a2=parseInt(a2, 10);
console.log(a2);
let a3= prompt('number3?');
a3=parseInt(a3, 10);
console.log(a3);

let a4= prompt('number4?');
a4=parseInt(a4, 10);
console.log(a4);
let a5 = a1+a2+a3+a4;
console.log(a5);
document.write(a5);

let b1 = prompt('float1?');
b1= parseFloat(b1);
console.log(b1);
let b2 = prompt('float2?');
b2= parseFloat(b2);
console.log(b2);
let b3 = prompt('float3?');
b3= parseFloat(b3);
console.log(b3);
let result = b1+b2+b3;
console.log(result);
document.write(result);


let a=prompt('num1?');
a=parseFloat(a);
a=Math.round(a);
console.log(a);

let b= prompt('num2?');
b=parseFloat(b);
b=Math.round(b);
console.log(b);

let c= prompt('num3?');
c=parseFloat(c);
c=Math.round(c);
console.log(c);

let sum = a+b+c;
console.log(sum);
document.write(sum);

let a =prompt('num1?');
a=parseInt(a,10);
console.log(a);

let b=prompt('num2?');
b=parseInt(b,10);
console.log(b);

let c= Math.pow(a,b);
console.log(c);
document.write(c);

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let a=5 < 6;
console.log(a);
let b=5 > 6;
console.log(b);
let c=5 >=6;
console.log(c);
let d= 5 == 6;
console.log(d);


let e=10>=10;
console.log(e);
let h=10==10;
console.log(h);
let g=10!=10;
console.log(g);
let m=10>10;
console.log(m);
let n=10<10;
console.log(n);

let sl1= 123!='123';
console.log(sl1);
let sl = 123=='123';
console.log(sl);


console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 ); //true
console.log(99 > 100 && 45 > 12 ); //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
console.log(!!'-1');//true
console.log(!!-1);//true
console.log(!!'0');//true
console.log(!!'null');//true
console.log(!!'undefined');//true
console.log(!!(3/'owu'));//false
console.log((111 > 11 || 45 < 111) ||  !!'0');//true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//false








