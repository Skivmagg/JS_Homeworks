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

let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya',  age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya',  age: 31, status: false},
    {name: 'max', age: 31, status: true}];

// users.sort((a, b) => a.age - b.age);
// users.sort((a, b) => b.age - a.age);

// users.sort((a, b) => a.name.length - b.name.length);
// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);
let usersWithId = JSON.stringify(users);
usersWithId = JSON.parse(usersWithId);

usersWithId.map((value, index) => {
    value.id = index + 1;

})
console.log(users);
console.log(usersWithId);













