// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class Computer{
    constructor(memory, power, name) {
        this.memory= memory;
        this.power = power;
        this.name = name;
    }
    powerOn(){
       console.log('computer on');
    }
    upgradePower(power){
        this.power = Math.max(Math.min(power, this.power * 1.1), this.power);
    }
    upgradeMemory(){
        this.memory *= 2;
    }
}
class Laptop extends Computer{
    constructor(memory, power, name, diagonal) {
        super(memory, power, name);
        this.diagonal= diagonal;
        this.batteryCapacity = this.power/(this.diagonal*this.memory);
    }
}
class Ultrabook extends Laptop{
    constructor(memory, power, name, diagonal, weight) {
        super(memory, power, name, diagonal);
        this.weight = weight;
    }
    powerOn() {
        if (this.weight>2 && this.batteryCapacity<4){
            console.log('error');
        } else {
            super.powerOn();
        }
    }
}

class PC extends Computer {
    constructor(memory, power, name) {
        super(memory, power, name);
        this.computeFps();
    }

    playGame(gameName){
        console.log(`You are playing ${gameName} with ${this.fps} FPS`);
    }
    upgradeMemory() {
        super.upgradeMemory();
        this.computeFps();
    }
    upgradePower(power) {
        super.upgradePower(power);
        this.computeFps();
    }

    computeFps(){
        this.fps = this.power/this.memory;
    }
}

class playPC extends PC{
    constructor(memory, power, name) {
        super(memory, power, name);
        this.computeFps();
    }
    computeFps() {
        super.computeFps();
        this.fps*=2;
    }

    playGame(gameName) {
        if(this.power<500 && this.memory<8){
            console.log('you can\'t play games on this computer');
        } else {
            super.playGame(gameName);
            this.power *=0.999;
            this.computeFps();
        }
    }
}

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function makeCar(model, producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume;


    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        console.log(this.model, this.producer, this.year, this.maxSpeed, this.engineVolume);
    }
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed+=newSpeed;
    }
    this.changeYear = function(newValue){
        this.year = newValue;
    }
    this.addDriver = function(driver){
        this.driver = driver;
    }
}

class Car{
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive(maxSpeed){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    info(){
        console.log(this.model, this.producer, this.year, this.maxSpeed, this.engineVolume);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed+=newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}
class Cinderella{
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Cinderellas = [
    new Cinderella('Yana', 19, 36),
    new Cinderella('Yana2', 19, 34),
    new Cinderella('Yana3', 19, 35),
    new Cinderella('Yana4', 19, 38),
    new Cinderella('Yana5', 19, 37),
    new Cinderella('Yana6', 19, 40),
    new Cinderella('Yana7', 19, 39),
    new Cinderella('Yana8', 19, 38),
    new Cinderella('Yana9', 19, 33),
    new Cinderella('Yana10', 19, 30),
]

class Prince{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince = new Prince('Rosti',21, 38);

for (let i = 0; i < Cinderellas.length; i++) {
    const cinderella = Cinderellas[i];
    if(cinderella.size===prince.size) {
        console.log('Cinderella is found', cinderella);
        break;
    }
}

function makeCinderella(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}

let cinderellas2 = [
    new makeCinderella('Yana',19, 36),
    new makeCinderella('Yana',19, 35),
    new makeCinderella('Yana',19, 34),
    new makeCinderella('Yana',19, 33),
    new makeCinderella('Yana',19, 32),
    new makeCinderella('Yana',19, 34),
    new makeCinderella('Yana',19, 35),
    new makeCinderella('Yana',19, 35),
    new makeCinderella('Yana',19, 39),
    new makeCinderella('Yana',19, 38)
]

function makePrince(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;

    this.findCinderella = function (cinderellas2){
        for (let i = 0; i < cinderellas2.length; i++) {
            const cinderella = cinderellas2[i];
            if(cinderella.size===this.size) {
                console.log('Cinderella is found', cinderella);
                break;
            }
        }
    }

}
let prince2 = new makePrince('Rosti',21, 38);
prince2.findCinderella(cinderellas2);


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
function makeTag(titleOfTag, action, attrs){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}
function makeAttr(titleOfAttr, actionOfAttr){
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

let a = new makeTag('a','создания ссылок',[
    new makeAttr('accesskey','Активация ссылки с помощью комбинации клавиш.'),
    new makeAttr('coords', 'Устанавливает координаты активной области.'),
    new makeAttr('download','Предлагает скачать указанный по ссылке файл.')
])
console.log(a);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
class Tag{
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
class Attr{
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let div = new Tag('div', 'выделения фрагмента документа с целью изменения вида содержимого',[
    new Attr('align','Задает выравнивание содержимого тега div.'),
    new Attr('title', 'Добавляет всплывающую подсказку к содержимому.')
]);
console.log(div);




