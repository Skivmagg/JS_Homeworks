// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2


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
//     skills: ['js', 'java']
// }
// let car ={
//     marka:'BMW',
//     type: 'Jeep',
//     color:'red',
//     year:2015,
//     engine: {v:2.5, power:'300hp',mode:'turbo'}
// }
//
// for (const dogKey in dog) {
//     console.log(dogKey);
// }
// for (const manKey in man) {
//     console.log(manKey);
// }
// for (const carKey in car) {
//     console.log(carKey);
// }
//
//     console.log(Object.keys(dog));
//     console.log(Object.keys(man));
//     console.log(Object.keys(car));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.


//     let allCars = [
//         {model:'Tesla', year:2010, power:430, color:'red'},
//         {model:'BMW', year:2015, power:177, color:'blue'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'JEEP', year:2013, power:300, color:'yellow'},
//         {model:'Toyota', year:2020, power:400, color:'red'},]
// console.log(allCars);
//
// let allCarsD = [
//     {model:'Tesla', year:2010, power:430, color:'red',
//         driver:{name: 'Vova',age:43, sex:'male',exp: 15}},
//     {model:'BMW', year:2015, power:177, color:'blue',
//         driver:{name: 'Petyqa',age:23, sex:'male',exp: 12}},
//     {model:'OPEL', year:2012, power:120, color:'red',
//         driver:{name: 'Alla',age:23, sex:'female',exp: 2}},
//     {model:'JEEP', year:2013, power:300, color:'yellow',
//         driver:{name: 'Andrey',age:33, sex:'male',exp: 11}},
//     {model:'Toyota', year:2020, power:400, color:'red',
//         driver:{name: 'Ana',age:25, sex:'female',exp: 5}},]
// console.log(allCarsD);

// let i =0;
// while (i<=allCars.length-1){
//     console.log(allCars[i]);
//     i++;
// }
// for (let i= 0; i<=allCars.length-1; i++){
//     console.log(allCars[i]);
// }

// for (const allCar of allCars) {
//     console.log(allCar);
// }

// let i =0;
// while (i<=allCarsD.length-1){
//     console.log(allCarsD[i]);
//     i++;
// }
// for (let i= 0; i<=allCarsD.length-1; i++){
//     console.log(allCarsD[i]);
// }

// for (const allCar of allCarsD) {
//     console.log(allCar);
// }



// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.


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
//     skills: ['js', 'java']
// }
// let car ={
//     marka:'BMW',
//     type: 'Jeep',
//     color:'red',
//     year:2015,
//     engine: {v:2.5, power:'300hp',mode:'turbo'}
// }
//
// let dogS = JSON.stringify(dog);
// console.log(dogS);
// let manS = JSON.stringify(man);
// console.log(manS);
// let carS = JSON.stringify(car);
// console.log(carS);
//
// let dogSs = JSON.parse(dogS);
// console.log(dogSs);
// let manSs = JSON.parse(manS);
// console.log(manSs);
// let carSs = JSON.parse(carS);
// console.log(carSs);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .


//     let allCars = [
//         {model:'Tesla', year:2010, power:430, color:'red'},
//         {model:'BMW', year:2015, power:177, color:'blue'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'JEEP', year:2013, power:300, color:'yellow'},
//         {model:'Toyota', year:2020, power:400, color:'red'},]
// console.log(allCars);
//
//
// for (let i = 0; i <= allCars.length-1; i++) {
//     const allCar = allCars[i];
//     console.log(allCar);
//     console.log(JSON.stringify(allCar))
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let allCarsD = [
//     {model:'Tesla', year:2010, power:430, color:'red',
//         driver:{name: 'Vova',age:43, sex:'male',exp: 15}},
//     {model:'BMW', year:2015, power:177, color:'blue',
//         driver:{name: 'Petyqa',age:23, sex:'male',exp: 12}},
//     {model:'OPEL', year:2012, power:120, color:'red',
//         driver:{name: 'Alla',age:23, sex:'female',exp: 2}},
//     {model:'JEEP', year:2013, power:300, color:'yellow',
//         driver:{name: 'Andrey',age:33, sex:'male',exp: 11}},
//     {model:'Toyota', year:2020, power:400, color:'red',
//         driver:{name: 'Ana',age:25, sex:'female',exp: 5}},]
// console.log(allCarsD);
//
// let allCarsArr =[];
// for (let i = 0; i < allCarsD.length-1; i++) {
//     const allCarsN = allCarsD[i];
//       console.log(allCarsN);
//     allCarsArr.push(JSON.stringify(allCarsN));
//     }
// console.log(allCarsArr);


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let users = [{name: 'Anton', skills: ['js','java','c++']},
//     {name: 'Vova', skills: ['js','python','Go']},
//     {name: 'Taras', skills: ['java','C#','c++']},
// ]
// let userSkills = [];
// for (let i = 0; i <= users.length-1; i++) {
//     let userI = users[i];
//     for (const user of userI.skills) {
//        userSkills.push(user)
//
//     }
//     }
// console.log(userSkills);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya',
//         age: 31,
//         status: false,
//         skills: ['java', 'js']},
//     {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: ['java', 'js', 'html']},
//     {name: 'kolya',
//         age: 29,
//         status: true,
//         skills: ['mysql', ',mongo']},
//     {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: ['java', 'js']
// }, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (let i = 0; i < users.length-1; i++) {
//     const user = users[i];
//     console.log(user);
//         for (const user1 of user.skills) {
//             console.log(user1);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let usersAdress = [];
//
// for (let i = 0; i < users.length-1; i++) {
//     let user  = users[i];
//     console.log(user);
//     usersAdress.push(user.address)
// }
// console.log(usersAdress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// const div = document.createElement('div')
//
// for (let i = 0; i < users.length-1; i++) {
//     let user = users[i];
//     let h = document.createElement('h1')
//     let p = document.createElement('p')
//     let p2 = document.createElement('p')
//     let p3 = document.createElement('p')
//     let p4 = document.createElement('p')
//     let p5 = document.createElement('p')
//     let p6 = document.createElement('p')
//     let p7 = document.createElement('p')
//
//     let userDiv = document.createElement('div')
//
//     h.innerText = `Name - ${user.name}`
//     p.innerText = `age - ${user.age}`
//     p2.innerText = `status - ${user.status}`
//     p3.innerText = `adress:`
//     p4.innerText = ` ${user.address.city}`
//     p5.innerText = ` ${user.address.country}`
//     p6.innerText = ` ${user.address.street}`
//     p7.innerText = ` ${user.address.houseNumber}`
//
//     div.appendChild(userDiv)
//     userDiv.appendChild(h)
//     userDiv.appendChild(p)
//     userDiv.appendChild(p2)
//     userDiv.appendChild(p3)
//     p3.appendChild(p4)
//     p3.appendChild(p5)
//     p3.appendChild(p6)
//     p3.appendChild(p7)
//
//     document.body.appendChild(div)
//
// }



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let x = 1;
// let usersWithCities = [];
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2,name: 'petya',age: 30,status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1,    country: 'Ukraine',    city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// usersWithCities = JSON.stringify(usersWithId);
// usersWithCities = JSON.parse(usersWithCities);
//
// for (const users of usersWithCities) {
//     for (const cities of citiesWithId) {
//         if (users.id === cities.user_id)
//             users.address =  cities;
//     }
// }
// console.log(usersWithCities);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let x = document.getElementById('jstest');
// x.innerText = 'Hello Lorem'
// x.style.width = '100px'
// x.style.height = '300px'
//
//
// let y = document.getElementsByClassName('jsclass')
// for (const yText of y) {
//     yText.innerText = 'Tobi tozhe privet'
//     yText.style.width = '150px'
//     yText.style.height = '200px'
// }
//
// let z = document.getElementsByTagName('main')
// for (const zText of z) {
//     zText.innerText = 'Zdarova'
//     zText.style.width = '50px'
//     zText.style.height = '100px'
// }


// let table = document.createElement('table')
// let tr = document.createElement('tr')
// let td = document.createElement('td')
// let td2 = document.createElement('td')
// let td3 = document.createElement('td')
//
// table.appendChild(tr)
// tr.appendChild(td)
// tr.appendChild(td2)
// tr.appendChild(td3)
// td.innerText = '1';
// td2.innerText = '1';
// td3.innerText = '1';
// document.body.appendChild(table)
const n = prompt('Скільки рядків?')
const m = prompt('Скільки Стовпчиків?')
let table = document.createElement('table')
for (let i = 0; i < n; i++) {
    let tr = document.createElement('tr')
    tr.innerText = '1'
    for (let j = 0; j < m; j++) {
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerText = '1'
    }
    table.appendChild(tr)
}
document.body.appendChild(table)