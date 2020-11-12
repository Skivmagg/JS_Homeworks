// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let  text = document.getElementById('text');
// let  btn = document.getElementById('btn');
//
// btn.onclick = () => {
//     text.style.display = 'none';
//     btn.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//     let  btn = document.getElementById('btn');
// btn.onclick = () => {
//       btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let  myform = document.forms.form;
//
// myform.send.onclick = ()=> {
//     myform.age.value > 18 ? alert("Доступ дозволено") : alert("Доступ не дозволено");
//   }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let list = document.getElementById('list');
// let  btn = document.getElementById('btnMenu');
//
// btn.addEventListener('click', ev => {
//     if (list.className === 'list_menu'){
//       list.classList.add('list_menu_hide')
//         btn.innerText = 'Show';
//          } else {
//        list.classList.remove('list_menu_hide')
//         btn.innerText = 'Hide';
//     }
//     })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comments = [
//     {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Andriy', body:'lorem ipsum dolo sit ameti'}
// ]
//
// function addComments (arrayComments) {
//     let div = document.createElement('div');
//     div.innerHTML = '<h1>Коментарі користувачів:</h1>'
//     for (let i = 0; i < arrayComments.length; i++) {
//         let p = document.createElement('p');
//         let btn = document.createElement('button')
//         let divInside = document.createElement('div');
//         btn.innerText = 'Сховати коментар'
//         btn.style.display = 'block';
//         p.classList.add('p');
//         p.innerText = `${arrayComments[i].title} написав: ${arrayComments[i].body}  `
//
//         div.appendChild(p)
//         div.appendChild(btn)
//
//         btn.addEventListener('click', ev => {
//        if (p.className === 'p'){
//            p.classList.add('p_hide')
//        } else {
//            p.classList.remove('p_hide')
//        }
//
//         })
//     }
//     document.body.appendChild(div);
// }
// addComments(comments)



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form = document.getElementById('newform1')
// let form2 = document.getElementById('newform2')
//
// let btn = document.getElementById('btnForm')
//
// btn.onclick = () => {
//
//     console.log(`Інформація з першої форми: ${form.textSome1.value}
//      Інформація з другої форми: ${form.textSome2.value}
//      Інформація з третьої форми: ${form2.textSome1.value}
//      Інформація з четвертої форми: ${form2.textSome2.value}`)
//
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


//
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

// let Form = document.forms.newformtable;
//
// let btnForm = document.getElementById('btnTable')
//
// function table(rows, kolonki, vmist) {
//     let row = document.createElement("table")
//    let z = document.getElementById('tableForm')
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         row.appendChild(tr)
//         tr.innerText = vmist;
//         for (let j = 0; j < kolonki; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td);
//             td.innerText = vmist;
//         }
//     }
//     z.appendChild(row)
// }
//
// btnForm.addEventListener('click', ev => {
//     let formRows = Form.row.value;
//     let formKolonki = Form.kolonki.value;
//     let formVmist = Form.vmist.value;
//     table(formRows,formKolonki,formVmist);
// })

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

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

// let mat = ['жопа','гавнюк','дурак','дебіл','тупий'];
// let matSlovo = document.forms.matForm;
// let btnmat = document.getElementById('btnMat');
//
// btnmat.addEventListener('click',ev => {
//     let slovo = matSlovo.matInput.value;
//     let slovoArr = slovo.split(' ');
//     for (let i = 0; i < mat.length; i++) {
//     if (slovoArr.includes(mat[i])){
//         alert('НЕДОПУСТИМЕ СЛОВО')
//     }
//     }
//
// })


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


let h = document.querySelectorAll('h2',);
for (let i = 0; i < h.length; i++) {
    let menu = document.getElementById('menuu');
    h[i].addEventListener('click',ev => {

    })
    menu.appendChild(h[i]);

}





