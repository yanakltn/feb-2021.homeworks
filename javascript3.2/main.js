// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// b) робить ширину елементу ul 400px
// c) робить ширину всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту увиаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

document.getElementById('main_header').innerHTML='FEB-2021';
document.getElementById('main_header').style.color='orange';

document.getElementsByTagName('ul')[0].style.width = '400px';

let array = document.getElementsByClassName('linkList');
for (const element of array) {
    element.style.width = '50%';
}
console.log(document.getElementsByClassName('listElement2')[0].innerHTML);

let allLi = document.getElementsByTagName('li');
for (const element of allLi) {
    element.style.backgroundColor = 'grey';
}
let alla = document.getElementsByTagName('a');
for (const element of alla) {
    element.classList.add('anchor');
    if (element.innerText ==='link3'){
        element.style.fontSize = '40px';
    }
    element.classList.add(`element_${element.innerText}`);
}

// let subHeaders = document.getElementsByClassName('sub-header');
// for (let element of subHeaders) {
//     element.style.backgroundColor = prompt('enter color');
//     if(element.innerText === 'content 2 segment'){
//         element.style.color = prompt('enter color');
//     }
// }

// document.getElementsByClassName('content_1')[0].innerText = prompt('enter text');
// let pes = document.getElementsByTagName('p');
// for (const element of pes) {
//     element.style.padding = '20px';
// }

document.getElementsByClassName('text2')[0].innerText ='FEB-2021';


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let userArray = [];

for (let i = 0; i < usersWithId.length; i++) {
    const users = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        const cities = citiesWithId[j];
        if(users.id === cities.user_id){
            let common = {
                id: users.id,
                name: users.name,
                age: users.age,
                status: users.status,
                address: cities
            }
            userArray.push(common);
        }
    }
}
console.log(userArray);