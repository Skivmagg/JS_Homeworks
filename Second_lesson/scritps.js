// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let x = [5,10,15,20,25];
// let y = ['Hello','My','Name','is','Anton'];
// let z = [5,10,15,20,25,'Hello','My','Name','is','Anton',true,false,true,false,false]
// console.log(x);
// console.log(y);
// console.log(z);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let x=[];
// x[0] = 10;
// x[1] = 15;
// x[2] = 20;
// console.log(x);
//
// x.push('hello');
// x.unshift('World');
//
// x.pop();
// x.shift();


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <=10; i++) {
//
//     document.write('<div> Hello </div>',i);
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<=20) {
//     document.write('<h1>World</h1>')
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let x = [1,2,3,4,5,6,7,8,9,10];
//
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let x = ['Hello','My','Name','is','Anton','Hello','My','Name','is','Anton'];
//
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let x = [1,2,true,'is','Anton',false,'My','Name',null,'Anton'];
//
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let x = [1, 2, true, 'is', 'Anton', false, 'My', 'Name', true, 'Anton'];
//
// if (typeof x[0] == 'boolean') {
//     console.log(x[0])
// }
// if (typeof x[1] == 'boolean') {
//     console.log(x[1])
// }
// if (typeof x[2] == 'boolean') {
//     console.log(x[2])
// }
// if (typeof x[3] == 'boolean') {
//     console.log(x[3])
// }
// if (typeof x[4] == 'boolean') {
//     console.log(x[4])
// }
// if (typeof x[5] == 'boolean') {
//     console.log(x[5])
// }
// if (typeof x[6] == 'boolean') {
//     console.log(x[6])
// }
// if (typeof x[7] == 'boolean') {
//     console.log(x[7])
// }
// if (typeof x[8] == 'boolean') {
//     console.log(x[8])
// }
// if (typeof x[9] == 'boolean') {
//     console.log(x[9])
// }
// if (typeof x[10] == 'boolean') {
//     console.log(x[10])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let x = [1, 2, true, 'is', 'Anton', false, 'My', 12, true, 'Anton'];
//
// if (typeof x[0] == "number") {
//     console.log(x[0])
// }
// if (typeof x[1] == "number") {
//     console.log(x[1])
// }
// if (typeof x[2] == "number") {
//     console.log(x[2])
// }
// if (typeof x[3] == "number") {
//     console.log(x[3])
// }
// if (typeof x[4] == "number") {
//     console.log(x[4])
// }
// if (typeof x[5] == "number") {
//     console.log(x[5])
// }
// if (typeof x[6] == "number") {
//     console.log(x[6])
// }
// if (typeof x[7] == "number") {
//     console.log(x[7])
// }
// if (typeof x[8] == "number") {
//     console.log(x[8])
// }
// if (typeof x[9] == "number") {
//     console.log(x[9])
// }
// if (typeof x[10] == "number") {
//     console.log(x[10])
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let x = [];
// x[0] = 12;
// x[1] = 23;
// x[2] = null;
// x[3] = false;
// x[4] = 'world';
// x[5] = 231;
// x[6] = 14;
// x[7] = true;
// x[8] = 'hello';
//
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }


// - Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 > 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let hv = 0; hv<=2; hv++){
//     console.log('***',hv);
//     for (let sec=1; sec <=60; sec++){
//         console.log(sec);
//     };
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let god=0; god<=2; god++){
//     console.log(god, '-----------hours');
//     if (god ===2){
//         for (let hv = 0; hv<=19; hv++){
//             console.log(hv,'----minutes');
//             for (let sec=1; sec <=60; sec++){
//                 console.log(sec);
//             }
//         }
//     } else {
//         for (let hv = 0; hv<=59; hv++){
//             console.log(hv,'----minutes');
//             for (let sec=1; sec <=60; sec++){
//                 console.log(sec);
//             }
//         }
//     }
//
// }

// for (let h = 0; h < 3; h++) {
//
//     for (let m = 0; m < 60; m++) {
//         if (h === 2 && m === 20) {
//             break;
//         }
//         for (let s = 0; s < 60; s++) {
//
//             console.log(`${h}: ${m}: ${s}`);
//         }
//         }
//     }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let x = ['a', 'b', 'c'];
//
// for (let i = 0; i <= 2; i++) {
//
//     document.write(x[i])
//
// }


// let x = ['a', 'b', 'c'];
//
// let i = 0;
// while (i<=2){
//     document.write(x[i])
//     i++;
// }

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let x =['a', 'b', 'c'];
//
// for (let i = 1; i<=3;i++){
//     x.push(i);
//
// }
// console.log(x);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let x=[1,2,3]
// let z=[];
// for (let i = x.length - 1; i>=0; i--){
//     z.push(x[i]);
// }
// console.log(z);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let x=[1,2,3]
// for (let i = 4; i<=6; i++){
//     x.push(i);
// }
// console.log(x);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let x=[1,2,3]
// for (let i = 6; i>=4; i--){
//     x.unshift(i);
// }
// console.log(x);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let x=['js', 'css', 'jq']
// let y = x.pop(x.length - 1);
//
// console.log(y);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

//     let x= [1, 2, 3, 4, 5];
// let y = [x.slice(3)]
// console.log(y);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let x= [1, 2, 3, 4, 5];
// let y = [x.slice(0,2)]
// console.log(y);
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

//     let x= [1, 2, 3, 4, 5];
// let y = [x.splice(1,2)]
//
// console.log(x);
//
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

//     let x= [1, 2, 3, 4, 5];
// x.splice(3,0, 'a', 'b', 'c')
//
// console.log(x);
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

//     let x= [1, 2, 3, 4, 5];
// x.splice(1,0, 'a', 'b')
// x.splice(6,0, 'c')
// x.splice(8,0, 'e')
// console.log(x);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let x= [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i<=x.length; i++){
//     if (x[i]%2===0) {
//         console.log(x[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let x= [1,2,3,4,5,6,7,8,2,10];
// let y =[];
//
// for (let i = 0; i<x.length; i++){
//     y.push(x[i]);
// }
// console.log(x);
// console.log(y);
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//     let x= [1,2,3,4,5,6,7,8,2,10];
// let y =[];
//
// for (let i = 0; i<x.length; i++){
//     y[i] = (x[i]);
// }
// console.log(x);
// console.log(y);

















