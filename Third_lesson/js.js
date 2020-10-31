// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
//
// let dog = {
//     name: 'Rex',
//     age: 12,
//     type: 'Haski',
//     weight: '30kg',
//     color: 'silver'
// }
// let man = {
//     name:'Anton',
//     age:'26',
//     married: false,
//     work:'Kyivstar',
//     title:'engeneer',
// }
// let car ={
//     marka:'BMW',
//     type: 'Jeep',
//     color:'red',
//     year:2015,
//     engine:2.5,
// }
//
// console.log(dog);
// console.log(car);
// console.log(man);
//
// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
//
// let dogs=['rex','atya','boba','herty','rodes']
// let ppls=['Vanya','Petya','Robin','Yuri','Anton']
// let cars=['tesla','bmw','mersedes','opel','lambo']
// console.log(dogs);
// console.log(cars);
// console.log(ppls);
//
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - водій
//
// let driver={
//     man,
//     exp:'10years',
//     cars,
//     health:true,
// }
// console.log(driver);

// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[users.length - 1].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].name,users[4].age);
// console.log(users[5].status,users[5].age);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let x =  document.getElementById('content');
console.log(x.innerText);
x.style.backgroundColor = '#e002ea';
let y =  document.getElementById('rules');
console.log(y.innerText);
y.style.backgroundColor = '#e002ea';
x.innerText = 'Здарова як справи';
y.innerText = 'Нормально';
let z = document.getElementsByClassName('fc_rules')

console.log(y.classList)
console.log(x.classList)

for (const yElement of z) {
    console.log(yElement);
    yElement.style.color ='#e002ea';
}
console.log(z);


