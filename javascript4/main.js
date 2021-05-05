// 1) створити функцію яка приймає масив та виводить його
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 5) створити функцію яка повертає найбільше число з масиву
// 6) створити функцію яка повертає найменьше число з масиву
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//1
 function returnMass(mass){
    console.log(mass);
 }
//test1
 let m=[1,2,3,4];
  returnMass(m);
  let r=['jh','eihr','ejh',4,35,7];
  returnMass(r);
//2
function fillMass(mass1, size){
    let n = [];
    for (let i = 0;i<size; i++) {
        n[i]= Math.random();
    }
    returnMass(n);
}
//test2
let k = [];
fillMass(k,10);
let widths = [];
fillMass(widths, 5);
//3
function min(a,b,c){
     let min;
     if(a<b && a<c){
         min=a;
     } else if(b<a && b<c){
         min=b;
     } else if(c<a && c<b){
         min=c;
     }
     console.log(min);
     return min;
}
//test3
min(12,3,6);
min(2,-34,100);
//4
function max(a,b,c){
    let max;
    if(a>b && a>c){
        max=a;
    } else if(b>a && b>c){
        max=b;
    } else if(c>a && c>b){
        max=c;
    }
    console.log(max);
    return max;
}
//test 4
max(23,99,102);
max(-3,-236,-5);

//5
function maxMass(mass){
    let maxM;
    maxM = mass[0];
    for (let i = 0; i < mass.length; i++) {
        if (maxM<mass[i]){
            maxM=mass[i];
        }
    }
    console.log(maxM);
    return maxM;
}
//test5
let testM = [1,24,5,7,6];
maxMass(testM);
let testM2 = [12,134,567,678,82,4,0,12222];
maxMass(testM2);

//6
function minMass(mass){
    let minM;
    minM = mass[0];
    for (let i = 0; i < mass.length; i++) {
        if (minM>mass[i]){
            minM=mass[i];
        }
    }
    console.log(minM);
    return minM;
}
//test6
minMass(testM);
minMass(testM2);

//7
function sumElements(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}
//test7
sumElements(testM);
sumElements(testM2);

//8
function avrElements(arr){
    let sum = 0;
    let avr = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    avr = sum/arr.length;
    console.log(avr);
    return avr;
}

//test8
avrElements(testM);
avrElements(testM2);

//9
let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function keysGet(person){
    let keysArr = [];
    for (let i = 0; i < person.length; i++) {
        keysArr = keysArr.concat(Object.keys(person[i]));
    }
    console.log(keysArr);
    return keysArr;
}
//test9
keysGet(user);
//10
function valuesGet(person){
    let valuesArr = [];
    for (let i = 0; i < person.length; i++) {
        valuesArr = valuesArr.concat(Object.values(person[i]));
    }
    console.log(valuesArr);
    return valuesArr;
}
//test10
valuesGet(user);

//11
let m1 = [1,2,3,4];
let m2 = [2,3,4,5];

function sumNum(mass1,mass2){
    let sumArr =[];
    let sum =0;
    for (let i = 0; i < mass1.length; i++) {
        for (let j = 0; j < mass2.length; j++) {
            if(i===j){
                sum = mass1[i]+mass2[j];
                sumArr.push(sum);
            }
        }
    }
    console.log(sumArr);
    return sumArr;
}
//test11
sumNum(m1,m2);

// 1- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// 2- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// 3- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// 4- Створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// 5- Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//1
function range(){
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(min>arguments[i]){
            min = arguments[i];
        }
        if(max<arguments[i]){
            max = arguments[i];
        }
    }
    console.log(max);
    console.log(min);
    return min;
}
//test1
range(1,23,4,5,6,3,67,-6);

//2 mix 9&10
let userT = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function keysOralues(person,n){
    let kvArr = [];
        for (let i = 0; i < person.length; i++) {
            if(n){
                kvArr = kvArr.concat(Object.keys(person[i]));
            } else {
                kvArr = kvArr.concat(Object.values(person[i]));
                }
        }
    console.log(kvArr);
    return kvArr;
}
//test if n = true=>keys else =>values
keysOralues(userT,false);
keysOralues(userT,true);

//3
function changeI(mass, i){
    for (let n = 0; n < mass.length;n++){
         if(i === n){
             let temp = mass[n];
             mass[n]=mass[n+1];
             mass[n+1]=temp;

         }
    } console.log(mass);
}
//test3
changeI([9,8,0,4], 0);
changeI([9,8,0,4], 1);
changeI([9,8,0,4], 2);


//4
function sortArr(arr){
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0){
            if(i!==index){
                arr[index] = arr[i];
                arr[i]=0;
            } index++;
        }
    }
    console.log(arr);
    return arr;
}

//test4
sortArr([1,0,6,0,3]);
sortArr([2,34,0,0,4,2,0,1,24]);
sortArr([1,23,0,23,0,7,30,0,15]);
//5
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

function names(str){
    let strings = str.split(' ');
    let name =[];
    for (let i = 0; i < strings.length; i++) {
        if(strings[i]!==''){
            name.push(strings[i]);
        }
    }
    let strF = name.join(' ');
    console.log(strF);
    return strF;
}
//test5
names(n1);
names(n2);
names(n3);

// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
// ******************* НАЗАД В МИНУЛЕ *********************** //
const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
function backToPast(){
    const text1 = document.createElement('p')
    text1.innerText = 'Hello owu';
    document.body.appendChild(text1);

    const text2 = document.createElement(arguments[0]);
    text2.innerText = arguments[1];
    document.body.appendChild(text2);

    let carsm = arguments[2];
    for (let i = 0; i < carsm.length; i++) {
        const car = carsm[i];
        const element = document.createElement(arguments[3]);
        element.innerHTML = `
        producer = ${car.producer} <br/>
        model = ${car.model} <br/>
        year = ${car.year} <br/>
        color = ${car.color} <br/>
        type= ${car.type} <br/>
        engine = ${car.engine} <br/>
        volume = ${car.volume} <br/>
        power = ${car.power} <br/>
        `
        const elementInner = document.createElement(arguments[3]);

        const elementProducer = document.createElement(arguments[3]);
        elementProducer.innerText = car.producer;
        elementInner.appendChild(elementProducer);

        const elementModel = document.createElement(arguments[3]);
        elementModel.innerText = car.model;
        elementInner.appendChild(elementModel);

        const elementYear = document.createElement(arguments[3]);
        elementYear.innerText = car.year;
        elementInner.appendChild(elementYear);

        const elementColor = document.createElement(arguments[3]);
        elementColor.innerText = car.color;
        elementInner.appendChild(elementColor);

        const elementType= document.createElement(arguments[3]);
        elementType.innerText = car.type;
        elementInner.appendChild(elementType);

        const elementVolume = document.createElement(arguments[3]);
        elementVolume.innerText = car.volume;
        elementInner.appendChild(elementVolume);

        const elementPower = document.createElement(arguments[3]);
        elementPower.innerText = car.power;
        elementInner.appendChild(elementPower);

        element.appendChild(elementInner);
        document.body.appendChild(element);
    }
}
backToPast('p','bye owu',cars,'div');

