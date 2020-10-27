//Завдання 1 - 6

// let x = 'hello';
// x = 'bye';
// console.log(x);
// alert(x);
// document.write(x)
//
// let y = 'owu';
// y = 'notowu';
// console.log(y);
// alert(y);
// document.write('<br>', y)
//
// let z = 'com';
// z = 'ua';
// console.log(z);
// alert(z);
// document.write('<br>', z)
//
// let q = 1;
// q = 555;
// console.log(q);
// alert(q);
// document.write('<br>', q)
//
// let w = 10;
// w = 666;
// console.log(w);
// alert(w);
// document.write('<br>', w)
//
// let e = -999;
// e = -2345;
// console.log(e);
// alert(e);
// document.write('<br>', e)
//
// let r = true;
// r = false;
// console.log(r);
// alert(r);
// document.write('<br>', r)

// const x = 5;
// const y = 10;
// const z = 15;
// const q = 'Hello';
// const w = 'My';
// const e = 'World';
//
// console.log(x);
// alert(x);
// document.write(x)
//
// console.log(y);
// alert(y);
// document.write('<br>', y)
//
// console.log(z);
// alert(z);
// document.write('<br>', z)
//
// console.log(q);
// alert(q);
// document.write('<br>', q)
//
// console.log(w);
// alert(w);
// document.write('<br>', w)
//
// console.log(e);
// alert(e);
// document.write('<br>', e)

// let firstNameME = prompt('What is your name?');
// let secondNameME = prompt('What is your secondname');
// let fatherNameME = prompt('What is your fathername');
//
// console.log(firstNameME);
// alert(firstNameME);
// document.write('<br>', firstNameME)
//
// console.log(secondNameME);
// alert(secondNameME);
// document.write('<br>', secondNameME)
//
// console.log(fatherNameME);
// alert(fatherNameME);
// document.write('<br>', fatherNameME)
//
// let person = (firstNameME + secondNameME + fatherNameME);
// document.write('<br>', person)
// console.log(person);
//
//
// let firstNameMOM = prompt('What is your name?');
// let secondNameMOM = prompt('What is your secondname');
// let fatherNameMOM = prompt('What is your fathername');
//
// console.log(firstNameMOM);
// alert(firstNameMOM);
// document.write('<br>', firstNameMOM)
//
// console.log(secondNameMOM);
// alert(secondNameMOM);
// document.write('<br>', secondNameMOM)
//
// console.log(fatherNameMOM);
// alert(fatherNameMOM);
// document.write('<br>', fatherNameMOM)
//
// let personSecond = (firstNameMOM + secondNameMOM + fatherNameMOM);
// document.write('<br>', personSecond)
// console.log(personSecond);
//
//
// let firstNameFATHER = prompt('What is your name?');
// let secondNameFATHER = prompt('What is your secondname');
// let fatherNameFATHER = prompt('What is your fathername');
//
// console.log(firstNameFATHER);
// alert(firstNameFATHER);
// document.write('<br>', firstNameFATHER)
//
// console.log(secondNameFATHER);
// alert(secondNameFATHER);
// document.write('<br>', secondNameFATHER)
//
// console.log(fatherNameFATHER);
// alert(fatherNameFATHER);
// document.write('<br>', fatherNameFATHER)
//
// let personThird = (firstNameFATHER + secondNameFATHER + fatherNameFATHER);
// document.write('<br>', personThird)
// console.log(personThird);


//Завдання 7-8

// let x = +prompt('Write number');
// let y = +prompt('Write number');
// let z = +prompt('Write number');
// let r = +prompt('Write number');
//
// let result = parseInt(x) + parseInt(y) + parseInt(z) + parseInt(r);
// console.log(result);


//Завдання 9

// let x = prompt('Write number');
// let y = prompt('Write number');
// let z = prompt('Write number');
// let r = prompt('Write number');
//
// let result = parseFloat(x) + parseFloat(y) + parseFloat(z) + parseFloat(r);
// console.log(result);


//Завдання 10

// let x = prompt('Write number');
// let y = prompt('Write number');
// let z = prompt('Write number');
// let r = prompt('Write number');
//
// let result = Math.round(x) + Math.round(y) + Math.round(z) + Math.round(r);
// console.log(result);


//Завдання 11

// let x = prompt('Write number');
// let y = prompt('Write number');
//
// let resultX = parseInt(x);
// let resultY = parseInt(y);
// console.log(Math.pow(resultX,resultY));


//Завдання 12

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);


// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 <= 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// console.log(132 > 100 && 45 < 12 ); //false
// console.log(34 > 33 && 23 < 90 ); //true
// console.log(99 > 100 && 45 > 12 ); //false
// console.log(132 > 100 || 45 < 12 ); //true
// console.log(111 > 11 || 45 < 111 ); //true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));// true


// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = "true";
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
//
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = 5 - '3';
// let a10 = 75 + 'kg';
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = '23cm';
// let width = '10cm';
//
// console.log(typeof +height);
//
// let s = parseInt(height) * parseInt(width);
//
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// const p = 3.14;
// let v = p * (Math.pow(dC / 2, 2))*heightC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = Math.pow(3, 2);
// let m = Math.pow(4, 2);
//
// let k = n * m;
//
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// document.write(str);
// alert(str);
// console.log(str);
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n)

// let fullName = 'Anton Buchynskyy Volodimirovych';
// let age = 26;
// let hobbie = 'football';
//
// alert(fullName + "\n" + age);
// alert(hobbie);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Kto ';
// let str2 = 'Ti ';
// let str3 = 'Takoi';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14")
// parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")
// console.log(parseInt("Вася"))

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

let str = prompt("Enter something", "ho-ho")
console.log(str);




















