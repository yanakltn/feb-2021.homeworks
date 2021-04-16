// let a = [1,2,3,4,5];
// console.log(a);
//
// let slova = ['water','juice','milk','wine','tea'];
// console.log(slova);
// let mass = ['i','k',3,5,7,8,2,true,'seg','df','vg',true,false,true,false];
// console.log(mass);


// let a =[];
// a[0]=true;
// a[1]=123;
// a[2]='lov';
// a[3] = 'coding';
// a[4]='hobby';
// console.log(a);

// let slova = ['love', 'hate','detest', 'enjoy','appreciate','kindness','generous','fabulous','envy','lviv'];

// for (let i = 0; i<slova.length;i++ ){
//     document.write(`<div>${slova[i]}</div>`);
//
// }

// for (let i = 0; i<slova.length;i++ ){
//     document.write(`<div>${slova[i] + ' '+i}</div>`);
//
// }

//
// let mass =['as','of','in','lo','jg','f','hfd','jhfd','nhf','jgf','jgoi','hjgt','hf','rt','gg','hyez','hvi','htta','fr','hg'];
// let i=0;
// while (i<mass.length){
//     document.write(`<h1>${mass[i]}</h1>`);
//     i++;
// }

// let i=0;
// while (i<mass.length){
//     document.write(`<h1>${mass[i]+' '+i}</h1>`);
//     i++;
// }

// let a = [1,2,3,4,5,67,78234,44,5,3];
// for(let i=0;i<a.length;i++){
//     document.write(a[i]);
// }

// let words=['crime','thief','robber','police','fortune','money','kidnapper','pockets','calves','irony'];
// for (let word of words) {
//     document.write(word+' ');
// }

// let all = [true,false,true,1,2,4,'crime','blood','fall','tree'];
// for (let element of all) {
//     document.write(element+' ');
// }

// let mass = ['i','k',3,8,2,true,'seg','vg',true,false];
// for (let element of mass) {
//     if (typeof element==="boolean"){
//         document.write(element+' ');
//     }
// }

// for (let element of mass) {
//     if (typeof element==="number"){
//         document.write(element+' ');
//     }
// }

// for (let element of mass) {
//     if(typeof element==="string"){
//         document.write(element+' ');
//     }
// }

// let m = [];
// m[0]=true;
// m[1]=true;
// m[2]='lo';
// m[3]='like';
// m[4]='tree';
// m[5]=12;
// m[6]=2;
// m[7]=-3;
// m[8]='gggg';
// m[9]='tryhy';

// for(let i=0; i<10; i++){
//     console.log(i);
//     document.write(i);
// }

// for(let i=0; i<100; i++){
//     console.log(i);
//     document.write(i);
// }

// for(let i=0; i<100; i=i+2){
//     console.log(i);
//     document.write(i);
// }


// for(let i=0; i<100; i++){
//     if(i%2===0){
//         console.log(i);
//         document.write(i);
//     }
// }

// for(let i=0; i<100; i++){
//     if(i%2!==0){
//         console.log(i);
//         document.write(i);
//     }
// }
//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let min = 0; min<3;min++){
//     for(let sec = 0; sec<60; sec++){
//         console.log(min,sec);
//     }
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let hr = 0;hr<3;hr++){
//     for (let min = 0; min<20;min++) {
//         for (let sec = 0; sec < 60; sec++) {
//         console.log(hr, min, sec);
//         }
//     }
// }
//робота в аудиторії
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let m= ['a', 'b', 'c'];
// let j=1;
// for(let i = 3;i<6;i++){
//         m[i]=j;
//         j++;
// }
// console.log(m);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let mass=[1, 2, 3];
// let k = 1;
// debugger;
// for (let a = 2;a>=0;a--){
//     mass[a]=k;
//     k++;
// }
// console.log(mass);



// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let b = [1,2,3];
// b.push(4,5,6);
// console.log(b);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let b = [1,2,3];
// b.unshift(4,5,6);
// console.log(b);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let words = ['js', 'css', 'jq'];
// let word = words.shift();
// console.log(word);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let words = ['js', 'css', 'jq'];
// let word = words.pop();
// console.log(word);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let mass = [1, 2, 3, 4, 5];
// let n = mass.splice(0,3);
// console.log(mass);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let mass = [1, 2, 3, 4, 5];
// let n = mass.splice(2,5);
// console.log(mass);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let abc = [1, 2, 3, 4, 5];
// let x = abc.splice(3,5,'a','b','c');
// abc.push(4,5);
// console.log(abc);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let abc = [1, 2, 3, 4, 5];
// let x1 = abc.splice(1,4,'a','b',2,3,4,'c',5,'e');
// console.log(abc);
//     Підказка. Працюйте по принципу задачі вище.

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let a=[];
// for(let i = 0;i<10;i++){
//     a[i]=i;
//     if(a[i]%2===0){
//         document.write(a[i]+' ');
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let b = [10,20,30,40,50,60,70,80,90,100];
// let a=[];
// for(let i = 0; i<b.length;i++){
//     a.push(b[i]);
// }
// console.log(b);
// console.log(a);

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let b = [10,20,30,40,50,60,70,80,90,100];
// let a=[];
// for(let i = 0; i<b.length;i++){
//     a[i]=b[i];
// }
// console.log(b);
// console.log(a);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let mass = [2,17,13,6,22,31,45,66,100,-18];
//1
// let i =0;
// while(i<mass.length){
//     console.log(mass[i]);
//     i++;
// }
//2
// for(let a = 0;a<mass.length;a++){
//     console.log(mass[a]);
// }
//3
// let i = 0;
// while(i<mass.length){
//     if (i%2!==0) {
//     document.write(mass[i]+' ');
//     }
//     i++;
// }
//4
// for (let i = 0;i<mass.length;i++){
//     if(i%2!==0){
//         document.write(mass[i]+' ');
//     }
// }
//5
// let i = 0;
// while(i<mass.length){
//     if (mass[i]%2===0) {
//     document.write(mass[i]+' ');
//     }
//     i++;
// }
//6
// for (let i = 0;i<mass.length;i++){
//     if(mass[i]%2===0){
//         document.write(mass[i]+' ');
//     }
// }
//7
// for (let i = 0;i<mass.length;i++){
//     if(mass[i]%3===0){
//         mass[i]='okten';
//     }
// }
// document.write(mass);
//8
// for(let i = mass.length-1; i>=0;i--){
//     document.write(mass[i]+' ');
// }
//9.1
// let i =mass.length-1;
// while(i>=0){
//     console.log(mass[i]);
//     i--;
// }
//9.2
// for(let a =mass.length-1;a>=0;a--){
//     console.log(mass[a]);
// }
//9.3
// let i = mass.length-1;
// while(i>=0) {
//     if (i % 2 !== 0) {
//         document.write(mass[i] + ' ');
//     }
//     i--;
// }

//9.4
// for (let i = mass.length-1;i>=0;i--){
//     if(i%2!==0){
//         document.write(mass[i]+' ');
//     }
// }

//9.5
// let i = mass.length-1;
// while(i>=0){
//     if (mass[i]%2===0) {
//     document.write(mass[i]+' ');
//     }
//     i--;
// }

//9.6
// for (let i = mass.length-1;i>=0;i--){
//     if(mass[i]%2===0){
//         document.write(mass[i]+' ');
//     }
// }

//9.7
// for (let i = mass.length-1;i>=0;i--){
//     if(mass[i]%3===0){
//         mass[i]='okten';
//     }
//         document.write(mass[i]);
// }




//10=== 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let mass1 = [];
// for (let i = 0;i<50;i++){
//         if (i % 2 === 0) {
//             mass[i] = i;
//         } else mass[i]=i+1;
// }
// console.log(mass);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let mass2=[];
// for (let i = 0; i<50; i++){
//     if(i%2!==0){
//         mass2[i]=i;
//     } else mass2[i]=i+1;
// }
// console.log(mass2);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let a =[];
// for (let i = 0;i<20;i++){
//     a[i]=Math.random();
// }
// console.log(a);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let b = [];
// for(let i=0; i<20; i++){
//     b[i]=Math.floor((Math.random() * 732) + 8);
// }
// console.log(b);
//це і наступні завдання по цьому b масиву

// 2. Вивести за допомогою console.log кожен третій елемен
// for(let a = 0;a<b.length;a++){
//     if(a%3===2){
//         console.log(b[a]);
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for(let a = 0;a<b.length;a++){
//     if((a%3===2) && (b[a]%2===0)){
//         console.log(b[a]);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let result=[];
// for(let a = 0;a<b.length;a++){
//         if ((a % 3 === 2) && (b[a] % 2 === 0)) {
//                 result.push(b[a]);
//         }
// }
// console.log(result);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним(для масиву b працює)
// for (let k=0; k<b.length-1; k++){
//     if( b[k+1]%2===0){
//         console.log(b[k]);
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56( і для цього теж)
// let mass = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let k=0; k<mass.length-1; k++){
//     if( mass[k+1]%2===0){
//         console.log(mass[k]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let money = [100,250,50,168,120,345,188];
// let averageCheque = 0;
// let genSum = 0;  //загальна сума всіх чеків
// for (let i =0; i<money.length;i++){
//     genSum=money[i]+genSum;
// }
// console.log(genSum);
// averageCheque = genSum/money.length;
// averageCheque = Math.round(averageCheque);
// console.log(averageCheque);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let a =[];
// let b =[];
// for (let i = 0;i<20;i++){
//     a[i]=Math.random();
//     b.push(a[i]*5);
// }
// console.log(a);
// console.log(b);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let allTypes = ['hate','dream','tree',13,5,6,true, false,false,2,-4,'yellow'];
// console.log(allTypes);
// let numbers = [];
// for(let i = 0;i<allTypes.length;i++){
//     if(typeof allTypes[i]==="number"){
//         numbers.push(allTypes[i]);
//     }
// }
// console.log(numbers);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let word='';
// for(let i =0;i<abc.length;i++){
//     let temp=abc[i];
//     word+=temp;
// }
// console.log(word);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let word='';
// let i =0;
// while(i<abc.length){
//     let temp = abc[i];
//     word+= temp;
//     i++;
// }
// console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let word = '';
// for (let char of abc) {
//     word+=char;
// }
// console.log(word);


