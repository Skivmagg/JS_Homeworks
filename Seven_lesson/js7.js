// https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson6/tasks/task
//     https://github.com/VictorKmin/sep-2020/tree/master/Basic
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


// let numbers = [2,4,9,18,28,32,3,30,60,80,99,133,20,66,999,666,50,55,18,27];

// let numbersSorted = numbers.sort((a, b) => {
//     return a - b;
// });
// console.log(numbersSorted);
//
//
// let numbersSortedRev = numbers.sort((a, b) => {
//     return b - a;
// });
// console.log(numbersSortedRev);

// let threeFilter = numbers.filter(value => !(value % 3));
//
// console.log(threeFilter);
//
// let tenFilter = numbers.filter(value => !(value % 10));
//
// console.log(tenFilter);


// numbers.forEach(value => console.log(value))

// let newNumbers = [];
// numbers.map(value => {
//     newNumbers.push(value * 3);
// })
// console.log(numbers);
// console.log(newNumbers);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let words = ['Hello','World','Anton','Car','Tree','Sky','Exeption','Rocket','Plane','Pencil','Book','Item','Function','Numbers','Java']

// let sortedWordsUp = words.sort((a, b) => {
//     if (a > b){
//         return 1;
//     }
//     return -1;
// });
//
// console.log(sortedWordsUp);
//
// let sortedWordsDown = words.sort((a, b) => {
//     if (a > b){
//         return -1;
//     }
//     return 1;
// });
//
// console.log(sortedWordsDown);

// let filter = words.filter(value => {
// if (value.length > 4){
//     return value;
// }
// });
//
// console.log(filter);

// let newarr = [];
// words.map(value => {
//     newarr.push(`${value}!`)
// })
// console.log(newarr);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya',  age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya',  age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
//
// // users.sort((a, b) => a.age - b.age);
// // users.sort((a, b) => b.age - a.age);
//
// // users.sort((a, b) => a.name.length - b.name.length);
// // users.sort((a, b) => b.name.length - a.name.length);
// // console.log(users);
// let usersWithId = JSON.stringify(users);
// usersWithId = JSON.parse(usersWithId);
//
// usersWithId.map((value, index) => {
//     value.id = index + 1;
//
// })
// console.log(users);
// console.log(usersWithId);

let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
}, {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250
}, {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300
}, {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140
}, {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200
}, {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165
}, {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350
}, {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400
}, {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230
}];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв


// let volume = cars.filter(value => {
//     if (value.volume > 3){
//         return value;
//     }
// })
// console.log(volume3);

// let mers = cars.filter(value => {
//     if(value.producer === 'mercedes'){
//         return value
//     }
// })
// console.log(mers);

// let filter3 = cars.filter(value => {
//     if ((value.volume > 3) && (value.producer === 'subaru')){
//         return value;
//     }
// })
// console.log(filter3);

// let filterP = cars.filter(value => {
//     if ((value.power > 300) && (value.producer === 'subaru')){
//         return value;
//     }
// })
// console.log(filterP);

// let filter3 = cars.filter(value => {
//     if (value.engine.includes('ej') && value.power > 300 && value.producer === 'subaru'){
//         return value;
//     }
// })
// console.log(filter3);

// let filter3 = cars.filter(value => {
//     if (value.volume < 3 && value.producer === 'mercedes'){
//         return value;
//     }
// })
// console.log(filter3);

// let filter3 = cars.filter(value => {
//     if (value.volume > 2 && value.power > 250){
//         return value;
//     }
// })
// console.log(filter3);

// let filter3 = cars.filter(value => {
//     if (value.power > 250 && value.producer === 'bmw'){
//         return value;
//     }
// })
// console.log(filter3);


let usersWithAddress = [
    {
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Ihevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Ahevchenko', number: 1}},
    {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Lviv', street: 'Hhevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Bhevchenko', number: 90}}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Thevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Chevchenko', number: 2}}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Lviv', street: 'Ghevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Ehevchenko', number: 43}}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Chevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Fhevchenko', number: 16}}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Lviv', street: 'Ahevchenko', number: 121}
}];


// - взять слдующий массив
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// usersWithAddress.sort((a, b) => b.id > a.id)
//
// console.log(usersWithAddress);

// usersWithAddress.sort((a, b) => b.age > a.age)
//
// console.log(usersWithAddress);

// usersWithAddress.sort((a, b) => a.name > b.name)
//
// console.log(usersWithAddress);

// usersWithAddress.sort((a, b) => b.address.number > a.address.number)
//
// console.log(usersWithAddress);

// let filter30 = usersWithAddress.filter(value => {
//     if (value.age < 30){
//         return value;
//     }
// })
//
// console.log(filter30);

// let filter30 = usersWithAddress.filter(value => {
//     if (value.status === false && value.age < 30){
//         return value;
//     }
// })
//
// console.log(filter30);

// let filter30 = usersWithAddress.filter(value => {
//     if (!(value.address.number % 2)){
//         return value;
//     }
// })
//
// console.log(filter30);



// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [2,2,3,4,4,5,7,7,4,8];
// const x = 2;
//
// function findIndex (array, key){
// array.indexOf(key) === -1 ? console.log(-1) : console.log(`MinIndex = ${array.indexOf(key)}; MaxIndex = ${array.lastIndexOf(key)}`)
// }
//
// findIndex(arr, x)

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
// Доп 1
// _______________________

// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
// Доп 2
// ___________________________

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
//
// Доп 3

// Доп 4
//
// Вот вам еще одно дополнительное:
//
//     найти приопущенную букву в массиве:
//
//     ["a","b","c","d","f"] -> "e"
//     ["O","Q","R","S"] -> "P"

// Дополнительное задание:
//     сложить цифры числа:
//
//     sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5


// создать функцию которая принимает число и возвращает  текст как в примере:
//
//     3275  —>  "3000 + 200 + 70 +5"
//
// P.S.  Math.floor() округляет до меньшего:
//     Math.floor( 45.95); //  45
// или
// Math.trunc(45,95) //45 просто отсекает дробовую часть

let x = 522735;

function SSS (x){
let tempArr = [];
    let arr = (String(x).split(""));
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]* 10**((arr.length-1)-i));
    }

return tempArr.join('+')

}

console.log(SSS(x));