// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
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
// }


// function html (name,description,atrList) {
//     this.name = name;
//     this.description = description;
//     this.atrList = atrList;
// }
// let a = new html('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [
//     {atrName:'href', atrDescr:'Задает адрес документа, на который следует перейти.',},
//     {atrName:'name', atrDescr: 'Устанавливает имя якоря внутри документа.'}]);
//
// console.log(a);


// class html {
//     constructor(name, description, atrList) {
//         this.name = name
//         this.description = description
//         this.atrList = atrList
//     }
// }
//
// let a = new html('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [{atrName: 'href', atrDescr: 'Задает адрес документа, на который следует перейти.'}, {atrName: 'name', atrDescr: 'Устанавливает имя якоря внутри документа.'}])
//
// let div = new html ('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [{atrName: 'align', atrDescr: 'Задает выравнивание содержимого тега div.'}, {atrName: 'title', atrDescr: 'Добавляет всплывающую подсказку к содержимому.'}])
//
// let h1 = new html('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег h1 представляет собой наиболее важный заголовок первого уровня, а тег h6 служит для обозначения заголовка шестого уровня и является наименее значительным.', [{atrName:'align', atrDescr:'Определяет выравнивание заголовка',}])
//
// let h1 = new html('', '', [{atrName:'', atrDescr:'',}, {atrName:'', atrDescr: ''}])
//
// let span = new html('span', 'Тег span предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как table, p или div, с помощью тега span можно выделить часть информации внутри других тегов и установить для нее свой стиль.', [{atrName:'class', atrDescr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',}, {atrName:'id', atrDescr: 'Указывает имя стилевого идентификатора.'}]);
//
// // let input = new html('input', 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом input предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{atrName:'list', atrDescr:'Указывает на список вариантов, которые можно выбирать при вводе текста.',}, {atrName:'size', atrDescr: 'Ширина текстового поля.'}])
//
//
// console.log(a);
// console.log(div);



// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: "Model X",
//     creator: "Tesla",
//     year: 1999,
//     maxSpd: 283,
//     vEng: 6,
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpd} на годину`);
//     },
//     info: function () {
//         console.log(`Модель машини: ${this.model}, Компанія виробник: ${this.creator}, Максимальна швидкість: ${this.maxSpd}, Обєм мотору:${this.vEng} літрів.`);
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpd += newSpeed;
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     addDriver: function (driver){
//         this.driver = driver;
//     }
// }
// car.addDriver({name:'Anton', exp:5, age:26})
// car.changeYear(1250)
// car.increaseMaxSpeed(25);
// console.log(car);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class createCar {
//     constructor(model, creator, year, maxSpd, vEng) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.maxSpd = maxSpd;
//         this.vEng = vEng;
//
//     }
//     drive(){
//         console.log(`Ми їдемо зі швидкістю ${this.maxSpd} кілометрів на годину`)
//     }
//     info(){
//         console.log(`Модель машини: ${this.model}, Компанія виробник: ${this.creator}, Максимальна швидкість: ${this.maxSpd}, Обєм мотору:${this.vEng} літрів.`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpd += newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let newCar = new createCar('Model X', 'Tesla', '2018', 258, 6.0);
//
//
//
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(25)
// newCar.changeYear(1999)
// newCar.addDriver({name:'Anton', exp:5, age:26})
//
// console.log(newCar);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class girl {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// class king {
//     constructor(name, age, bootSize) {
//         this.name = name;
//         this.age = age;
//         this.bootSize = bootSize;
//     }
// }
// let kingJ = new king('Anton', 26, 35)
//
// let girl1 = new girl('Ira', 25, 41)
// let girl2 = new girl('Anya', 23, 38)
// let girl3 = new girl('Vara', 24, 38)
// let girl4 = new girl('Oksana', 22, 33)
// let girl5 = new girl('Malina', 21, 34)
// let girl6 = new girl('Olya', 27, 35)
// let girl7 = new girl('Tanya', 24, 37)
// let girl8 = new girl('Ivanna', 29, 38)
// let girl9 = new girl('Masha', 32, 39)
// let girl10 = new girl('Karina', 22, 34)
//
// let allGirls = [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10]
//
//
// for (let i = 0; i < allGirls.length; i++) {
//     let girlElement = allGirls[i];
//     if (girlElement.size === kingJ.bootSize){
//         console.log(`Попелюшка яка повинна бути з принцом, це - ${girlElement.name}`)
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function King (name, age, bootSize){
//     this.name = name;
//     this.age = age;
//     this.bootSize = bootSize;
//     }
//
// let kingJ = new King('Anton', 26, 35)
//
//
// function Girl (name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let girl1 = new Girl('Ira', 25, 41)
// let girl2 = new Girl('Anya', 23, 38)
// let girl3 = new Girl('Vara', 24, 38)
// let girl4 = new Girl('Oksana', 22, 33)
// let girl5 = new Girl('Malina', 21, 34)
// let girl6 = new Girl('Olya', 27, 33)
// let girl7 = new Girl('Tanya', 24, 35)
// let girl8 = new Girl('Ivanna', 29, 38)
// let girl9 = new Girl('Masha', 32, 39)
// let girl10 = new Girl('Karina', 22, 34)
//
//
// let allGirls = [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10]
//
// function findGirl (array) {
//     for (let i = 0; i < array.length; i++) {
//         let girlElement = array[i];
//         if (girlElement.size === kingJ.bootSize) {
//             console.log(`Попелюшка яка повинна бути з принцом, це - ${girlElement.name}`)
//         }
//     }
// }
//     findGirl(allGirls);


// BONUS
//
//
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число
//     , которое встречается нечетное количество раз

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class newCar {
    constructor(marka,engPower,price,year,owner) {
        this.marka = marka;
        this.engPower = engPower;
        this.price = price;
        this.year = year;
        this.owner = owner;
    }
        engineRemont () {
            this.engPower = Math.floor((this.engPower * 1.1));
        }
        priceUp () {
            this.price = Math.floor((this.price * 1.05));
        }
        newDriver (newDriverObject){
        this.owner.name = newDriverObject.name;
        this.owner.age = newDriverObject.age;
        this.owner.drivingAge = newDriverObject.drivingAge;
        }
        training (){
        this.owner.drivingAge += 1;
        }

}

let car1 = new newCar('Reno',107,3400,2005,{name:'Anton', age: 26, drivingAge: 5});
let car2 = new newCar('Mitsubisi',127,3200,2006,{name:'Vanya', age: 30, drivingAge: 2});
let car3 = new newCar('Reno',157,3800,2008,{name:'Volodya', age: 42, drivingAge: 10});
let car4 = new newCar('Mersedes',199,6400,2015,{name:'Andrey', age: 35, drivingAge: 12});
let car5 = new newCar('BMW',237,8400,2016,{name:'Sergiy', age: 55, drivingAge: 25});
let car6 = new newCar('Pejo',68,2400,2007,{name:'Ira', age: 26, drivingAge: 5});
let car7 = new newCar('RolsRoys',407,17400,2013,{name:'Petro', age: 35, drivingAge: 12});
let car8 = new newCar('Deowoe',134,5400,2009,{name:'Ivan', age: 24, drivingAge: 7});
let car9 = new newCar('Reno',121,4400,2008,{name:'Vova', age: 26, drivingAge: 4});
let car10 = new newCar('Reno',132,7400,2014,{name:'Jora', age: 29, drivingAge: 9});


car10.engineRemont();
car2.engineRemont();
car4.engineRemont();
car5.engineRemont();
car8.engineRemont();
car10.newDriver({name:'JoraNEW', age: 32, drivingAge: 14});
car2.newDriver({name:'VanyaNEW', age: 30, drivingAge: 3});
car4.newDriver({name:'AndreyNEW', age: 35, drivingAge: 4});
car5.newDriver({name:'SergiyNEW', age: 26, drivingAge: 5});
car8.newDriver({name:'IvanNEW', age: 24, drivingAge: 7});

// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let cars = [car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];


for (let i = 0; i < cars.length; i+=2) {
    cars[i].engineRemont();
    cars[i].priceUp();

}

for (let i = 0; i < cars.length; i++) {
    if (cars[i].owner.drivingAge < 5 && cars[i].owner.age > 25){
        console.log(`Водій ${cars[i].owner.name} відправляється на підвищення кваліфікації` )
        cars[i].training();
    } else {
        console.log(`Водій ${cars[i].owner.name} пройшов перевірку` )
    }

}
let carsPrice = null;
for (let i = 0; i < cars.length; i++) {
  carsPrice = carsPrice + cars[i].price;
}

console.log(cars);
console.log(carsPrice);









