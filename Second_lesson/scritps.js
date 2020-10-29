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

for (let god=0; god<=2; god++){
    console.log(god, '-----------hours');
    if (god ===2){
        for (let hv = 0; hv<=19; hv++){
            console.log(hv,'----minutes');
            for (let sec=1; sec <=60; sec++){
                console.log(sec);
            }
        }
    } else {
        for (let hv = 0; hv<=59; hv++){
            console.log(hv,'----minutes');
            for (let sec=1; sec <=60; sec++){
                console.log(sec);
            }
        }
    }


}



