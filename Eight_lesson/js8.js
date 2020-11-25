

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
let  text = document.getElementById('text');
let  btn = document.getElementById('btn');
text.style.display = 'block';

btn.onclick = () => {
    text.style.display === 'block'
    ? text.style.display = 'none'
    : text.style.display ='block';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//     let  btn = document.getElementById('btn');
// btn.onclick = () => {
//       btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let  myform = document.forms.form;

myform.send.onclick = ()=> {
    myform.age.value > 18 ? alert("Доступ дозволено") : alert("Доступ не дозволено");
  }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
let list = document.getElementById('list');
let  btn1 = document.getElementById('btnMenu');

btn1.addEventListener('click', ev => {
    if (list.className === 'list_menu'){
      list.classList.add('list_menu_hide')
        btn1.innerText = 'Show';
         } else {
       list.classList.remove('list_menu_hide')
        btn1.innerText = 'Hide';
    }
    })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
    {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
    {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
    {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
    {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
    {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
]

function addComments (arrayComments) {
    let div = document.createElement('div');
    div.innerHTML = '<h1>Коментарі користувачів:</h1>'
    for (let i = 0; i < arrayComments.length; i++) {
        let p = document.createElement('p');
        let btn = document.createElement('button')
        let divInside = document.createElement('div');
        btn.innerText = 'Сховати коментар'
        btn.style.display = 'block';
        p.classList.add('p');
        p.innerText = `${arrayComments[i].title} написав: ${arrayComments[i].body}  `

        div.appendChild(p)
        div.appendChild(btn)

        btn.addEventListener('click', ev => {
       if (p.className === 'p'){
           p.classList.add('p_hide')
           btn.innerText = 'Показати коментар'
       } else {
           p.classList.remove('p_hide')
           btn.innerText = 'Сховати коментар'
       }

        })
    }
    document.body.appendChild(div);
}
addComments(comments)



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.getElementById('newform1')
let form2 = document.getElementById('newform2')

let btn2 = document.getElementById('btnForm')

btn2.onclick = () => {

    console.log(`Інформація з першої форми: ${form1.textSome1.value}
     Інформація з другої форми: ${form1.textSome2.value}
     Інформація з третьої форми: ${form2.textSome1.value}
     Інформація з четвертої форми: ${form2.textSome2.value}`)

}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// function table(rows, kolonki, where) {
//     let row = document.createElement("table")
//     let z = document.getElementById(where);
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         row.appendChild(tr)
//         tr.innerText = 1;
//         for (let j = 0; j < kolonki; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td);
//             td.innerText = 2
//         }
//     }
//     z.appendChild(row)
// }
// table(5,5,'table_here')

let Form5 = document.forms.newformtable;

let btnForm = document.getElementById('btnTable')

function table(rows, kolonki, vmist) {
    let row = document.createElement("table")
   let z = document.getElementById('tableForm')
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        row.appendChild(tr)
        tr.innerText = vmist;
        for (let j = 0; j < kolonki; j++) {
            let td = document.createElement('td')
            tr.appendChild(td);
            td.innerText = vmist;
        }
    }
    z.appendChild(row)
}

btnForm.addEventListener('click', ev => {
    let formRows = Form5.row.value;
    let formKolonki = Form5.kolonki.value;
    let formVmist = Form5.vmist.value;
    table(formRows,formKolonki,formVmist);
})

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let images = ['1.jpg','2.jpg','3.jpg','4.jpg'];

let divK = document.getElementById('karusel');
let img = document.createElement('img');
let left = document.getElementById('leftBtn')
let right = document.getElementById('rightBtn')
img.style.width = '400px';
img.setAttribute('src', `${images[0]}` );
let index = 0;
left.onclick = ev => {
    index <= 0 ? index = images.length-1 : index = index - 1;
    img.setAttribute('src', `${images[index]}` )
}
right.onclick = ev => {
    index >= images.length - 1 ? index = 0 : index ++;
    img.setAttribute('src', `${images[index]}` )
}
divK.appendChild(img);

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let mat = ['Жопа','Гавнюк','Дурак','Дебіл','Тупий',];
//
// let matSlovo = document.forms.matForm;
// let btnmat = document.getElementById('btnMat');
//
// btnmat.addEventListener('click', ev => {
//     let slovo = matSlovo.matInput.value;
//     for (let i = 0; i < mat.length; i++) {
//         if (slovo === mat[i]){
//             alert('НЕДОПУСТИМЕ СЛОВО')
//         }
//
//     }
//
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let mat = ['жопа','гавнюк','дурак','дебіл','тупий'];
let matSlovo = document.forms.matForm;
let btnmat = document.getElementById('btnMat');

btnmat.addEventListener('click',ev => {
    let slovo = matSlovo.matInput.value;
    let slovoArr = slovo.split(' ');
    for (let i = 0; i < mat.length; i++) {
    if (slovoArr.includes(mat[i])){
        alert('НЕДОПУСТИМЕ СЛОВО')
    }
    }

})


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let h = document.getElementsByTagName('h2');

let menu = document.getElementById('menuu');

for (let i = 0; i < h.length; i++) {
    let z = document.createElement('p');
    let a = document.createElement('a');
    a.setAttribute('href',`#zagolovok${i}`)

    z.innerHTML = h[i].innerHTML;
menu.appendChild(a);
    a.appendChild(z);
    h[i].setAttribute(`id`, `zagolovok${i}`);


}



// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let usersWithAddress = [
    {id:1,name: 'vasya', age: 26, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 25, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

vivesti(usersWithAddress);

// let status = usersWithAddress.filter(value => value.status === false);
// let age = usersWithAddress.filter(value => value.age >= 29);
// let city = usersWithAddress.filter(value => value.address.city === 'Kyiv');
// let butt = document.getElementById('butt');
// let statusAge = status.filter(value => value.age>=29);
// let statusCity = status.filter(value => value.address.city === 'Kyiv');
// let ageCity = age.filter(value => value.address.city === 'Kyiv');
// let ageStatusCity = usersWithAddress.filter(value => value.status === false && value.age >= 29 && value.address.city === 'Kyiv');

let form = document.forms.checkform;

butt.onclick = ev => {
    udalit();
let myArray = JSON.parse(JSON.stringify(usersWithAddress));

    if (form.check1.checked) myArray = myArray.filter(value => !value.status);
    if (form.check2.checked) myArray = myArray.filter(value => value.age >= 29);
    if (form.check3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');
vivesti(myArray);

}


function udalit (){
    let del = document.getElementById("checkboxx");
    del.innerText = '';
}

function vivesti (array){
    for (let i = 0; i < array.length; i++) {
        let p = document.createElement('p');
        p.innerText = `Імя:${array[i].name} , вік: ${array[i].age}, статус: ${array[i].status}, адрес: ${array[i].address.city} `;
        let z = document.getElementById('checkboxx');
        z.appendChild(p);
    }
    }


let t = [5,4,3,2]
console.log(...t);
navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
})