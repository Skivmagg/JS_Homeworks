// https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson4_divide/tasks/task4.txt#L8
// https://github.com/VictorKmin/sep-2020/blob/master/Basic/lesson4/l4.js

// - створити функцію яка виводить масив

// let arr = [1,2,3,4,5,6];
// let x = function (array){
//     console.log(array);
// }
// x(arr)

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// let arr = [];
// let arr2 = [];
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }
//
// let x = function (array){
//     random(25,array)
//     console.log(array);
// }
// let random = function (nums=0,array ){
//     for (let i = 0; i < nums; i++){
//         let randomNum = getRndInteger(0,999);
//         array.push(randomNum)
//     }
// }
//
// x(arr)
// x(arr2)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// let compare = function (num1 = 1, num2 = 1, num3 = 1){
//     console.log(Math.max(num1, num2, num3));
//     return (Math.max(num1, num2, num3))
// }
// compare(100,120,1220).log
//
// let compare = function (num1, num2, num3){
//
//     if (num1 >= num2 && num1>=num3){
//         console.log(num1);
//         return num1;
//     } else
//     if (num2 >= num1 && num2>=num3){
//         console.log(num2);
//         return num2;
//     } else {
//         (num3 >= num1 && num3>=num2)
//         console.log(num3);
//         return num3;
//     }
//
// }
// compare(123, 120, 122)
// console.log(compare(123, 120, 122));


// - створити функцію яка приймає три числа та виводить та повертає найменше.

// let compare = function (num1 = 1, num2 = 1, num3 = 1){
//     console.log(Math.min(num1, num2, num3));
//     return (Math.min(num1, num2, num3))
// }
// compare(1001,120,11)

// let compare = function (num1, num2, num3){
// let min = null;
//     if (num1 <= num2 && num1<=num3) min = num1;
//
//     if (num2 <= num1 && num2<=num3) min = num2;
//
//     if (num3 <= num1 && num3<=num2) min = num3;
//
//     console.log(min);
//     return min;
//
// }
// compare(12, 120, 122)




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

//  let compare1 = function () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
// console.log(compare1(100, 120, 1220, 120, 11220, 120, 1220, 11, 1220, 120, 6, 120, 1220));


// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву

// function compArr(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//          if (min > array[i]){
//              min = array[i];
//          }
//         if (max < array[i]){
//             max = array[i];
//         }
//     }
//     return min;
// }
//
// let numbers = [4,3,2,3,45,12,32,444,231];
// console.log(compArr(numbers));


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr = [2,4,3,2,3,4,5,2,4,44]
// function summArray(array) {
// let summ = null;
//     for (let i = 0; i < array.length; i++) {
//         summ = summ + array[i];
//     }
// return summ;
// }
//
// console.log(summArray(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [42,43,23,42,23,23,53,22,34,44]
// function summArray(array) {
// let summ = null;
// let summAverage = null;
//     for (let i = 0; i < array.length; i++) {
//         summ = summ + array[i];
//     }
//     summAverage = summ / array.length;
// return summAverage;
// }
//
// console.log(summArray(arr));


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let allCars = [
//         {model:'Tesla', year:2010, power:430, color:'red'},
//         {model:'BMW', year:2015, power:177, color:'blue'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'JEEP', year:2013, power:300, color:'yellow'},
//         {model:'Toyota', year:2020, power:400, color:'red'},];
//
// let numObj = (array) => array.length;
//
// console.log(numObj(allCars));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let allCars = [
//         {model:'Tesla', year:2010, power:430, color:'red'},
//         {model:'BMW', year:2015, power:177, color:'blue'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'JEEP', year:2013, power:300, color:'yellow'},
//         {model:'Toyota', year:2020, power:400, color:'red'},];
//
// function objKeys (array) {
// let numsOfKeys = null;
//     for (let i = 0; i < array.length; i++) {
//  numsOfKeys = numsOfKeys + (Object.keys(array[i]).length);
//     }
// return numsOfKeys;
// }
//
// console.log(objKeys(allCars));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

//
// let arr2 = [2,3,4,5,6];
//
// function arraySum(array1,array2) {
//     let arrayS = [];
//     for (let i = 0; i < array1.length; i++) {
//         arrayS.push(array1[i] + array2[i])
//     }
//     return arrayS;
// }
//
// console.log(arraySum(arr1, arr2));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr1 = [2,3,4,5,6];
//
// function arrayChange(arr, i) {
//     let arrTemp = arr[i+1];
//     arr[i+1] = arr[i];
//     arr[i] = arrTemp;
// return arr
// }
//
// console.log(arrayChange(arr1, 3));


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

// let arr = [2,0,0,3,5,0,3,0,23,0,2,43,5434,564,54,0];
//
// function sort (array){
//
//     for (let i = 0; i < array.length; i++) {
//       indexOf = array.indexOf(0)
//         array.splice(indexOf, 1);
//       array.push(0)
//     }
//     return array
// }
//
// console.log(sort(arr));

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function addBlock (text){
//     let p = document.createElement('p');
//     p.innerText = text;
//     document.body.appendChild(p)
// }
//
// addBlock("Hello owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addBlock (tag,text) {
//     let block = document.createElement(tag);
//     block.innerText = text;
//     document.body.appendChild(block)
// }
//
// addBlock('h1', 'Привіт ову');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці


//     let allCars = [
//         {model:'Tesla', year:2010, power:430, color:'red'},
//         {model:'BMW', year:2015, power:177, color:'blue'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'OPEL', year:2012, power:120, color:'red'},
//         {model:'JEEP', year:2013, power:300, color:'yellow'},
//         {model:'Toyota', year:2020, power:400, color:'red'},]
//
// function cars (array, id) {
//
//
//     let div = document.createElement('div');
//     let divOpis = document.createElement('div');
//
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         let x = document.getElementById(id)
//         y = document.createElement('div');
//     y.innerText = `Model - ${arrayElement.model}, year - ${arrayElement.year}, power - ${arrayElement.power}, color - ${arrayElement.color}`
//         x.appendChild(y)
//
//     }
//     }
// cars(allCars,'CARS')

//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.


// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2,name: 'petya',age: 30,status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
//     {id: 7, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1,    country: 'Ukraine',    city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
//     {user_id: 7, country: 'USA1', city: 'Miami'},];
//
//
//
// function arraySum (arr1,arr2){
//     arrayNew = JSON.stringify(arr1);
//     arrayNew = JSON.parse(arrayNew);
//
//     for (const users of arrayNew) {
//         for (const cities of arr2) {
//             if (users.id === cities.user_id)
//                 users.address =  cities;
//         }
//     }
//
//     return arrayNew;
//
// }
//
// console.log(arraySum(usersWithId, citiesWithId));

// **- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// function rulesFunc (arrayRules) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//
//     for (let i = 0; i < arrayRules.length; i++) {
//         const rule = arrayRules[i];
//
//         let divRule = document.createElement('div');
//         let ruleH2 = document.createElement('h2');
//         let rulep = document.createElement('p');
//
//         ruleH2.innerText = rule.title;
//         rulep.innerText = rule.body;
//
//         div.appendChild(divRule);
//         divRule.appendChild(ruleH2);
//         divRule.appendChild(rulep);
//
//     }
// }
//
//
//
// rulesFunc(rules)
























