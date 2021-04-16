// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"
// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший
// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
console.log(document.getElementById('content').innerText);
console.log(document.getElementById('rules').innerText);
document.getElementById('content').innerText='lzkxcvb';
document.getElementById('rules').innerText='kaHxcv';

let all = document.querySelectorAll('body *')
for (const element of all) {
    element.style.color='blue';
    element.style.backgroundColor='red';
}
console.log(document.getElementById('rules').classList);
console.log(document.getElementsByClassName('fc_rules'));
let allClasses = document.getElementsByClassName('fc_rules');
for (const element of allClasses) {
    element.style.color='#dd9494';
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const element = document.createElement('div');
    element.innerHTML=`
    name = ${user.name} <br/>
    age = ${user.age} <br/>
    `
    document.body.appendChild(element);
}
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const element = document.createElement('div');
    element.innerHTML=`
    name = ${user.name} <br/>
    age = ${user.age} <br/>
    `

    const elementInner = document.createElement('div');

    const elementCountry = document.createElement('p');
    elementCountry.innerText = user.address.country;

    elementInner.appendChild(elementCountry)

    const elementCity = document.createElement('p');
    elementCity.innerText = user.address.city;

    elementInner.appendChild(elementCity)

    const elementStreet= document.createElement('p');
    elementStreet.innerText = user.address.street;

    elementInner.appendChild(elementStreet)

    const elementNumber = document.createElement('p');
    elementNumber.innerText = user.address.houseNumber;

    elementInner.appendChild(elementNumber)
    element.appendChild(elementInner)
    document.body.appendChild(element);
}