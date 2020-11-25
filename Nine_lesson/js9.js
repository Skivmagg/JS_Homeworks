// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// let textArea = document.getElementById('text');
//
// textArea.value = localStorage.getItem('text');
//
// textArea.oninput = ev => localStorage.setItem('text', textArea.value);


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.


// let input1 = document.getElementById('input1');
// let check1 = document.getElementById('check1');
//
// let input2 = document.getElementById('input2');
// let check2 = document.getElementById('check2');
//
// let textArea1 = document.getElementById('text1');
//
// input1.value = localStorage.getItem('input1');
// check1.checked = JSON.parse(localStorage.getItem('check1'));
// input2.value = localStorage.getItem('input2');
// check2.checked = JSON.parse(localStorage.getItem('check2'));
// textArea1.value = localStorage.getItem('text');
//
// input1.oninput = ev => localStorage.setItem('input1', input1.value);
// input2.oninput = ev => localStorage.setItem('input2', input2.value);
// check1.oninput = ev => localStorage.setItem('check1', check1.checked);
// check2.onclick = ev => localStorage.setItem('check2', check2.checked);
// textArea1.oninput = ev => localStorage.setItem('text', textArea1.value);


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textA = document.getElementById('text2');
// let up = document.getElementById('up');
// let down = document.getElementById('down');
// let save = document.getElementById('save');
// let indexText = 0;
//
// save.onclick = ev => {
//     indexText++;
//     localStorage.setItem(`Text${indexText}`, textA.value);
//
// }
//
// up.onclick = ev => {
//     indexText--;
//     let p = localStorage.getItem(`Text${indexText}`)
//     if ( p == null){
//         indexText++;
//         return
//     }
//
//     textA.value = localStorage.getItem(`Text${indexText}`);
// }
//
// down.onclick = ev => {
//     indexText++;
//     let y = localStorage.getItem(`Text${indexText}`)
//     if ( y == null){
//         indexText--;
//         return
// }
//     textA.value = localStorage.getItem(`Text${indexText}`);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let form = document.forms.form;
let form1 = document.forms.form1;
let btnAdd = document.getElementById('btnAdd');
let btnShow = document.getElementById('btnShow');
let btnredag = document.getElementById('btnredag');
let btndell = document.getElementById('btndell');

class newContact {
    constructor(name, surname, number, email, job, skill, age) {
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.email = email;
        this.job = job;
        this.skill = skill;
        this.age = age;
    }
}

btnAdd.onclick = ev => {
    let n = form.form_name;

    let newC = new newContact(form.form_name.value, form.form_surname.value, form.form_number.value, form.form_email.value, form.form_job.value, form.form_skill.value, form.form_age.value)

    localStorage.setItem(`${form.form_name.value}`, JSON.stringify(newC));

}

btnShow.onclick = ev => {
    let t = document.getElementById('allContactsShow');
    t.innerHTML = '';

    let allLocal = {...localStorage};
    for (let key in allLocal) {

        let z = JSON.parse(localStorage.getItem(key));

        let all = document.getElementById('allContactsShow');
        let div = document.createElement('div');
        let p = document.createElement('p');
        let btndel = document.createElement('button');
        let btnred = document.createElement('button');
        btndel.innerText = 'Удалитии користувача';
        btnred.innerText = 'Редагувати користувача';


        btndel.onclick = ev1 => {
            localStorage.removeItem(key)
            p.innerHTML = '';
        }

        p.innerText = `Користувач ${z.name}: Name: ${z.name}, SurName: ${z.surname},number: ${z.number},Email: ${z.email},Job: ${z.job},skill: ${z.skill},age: ${z.age},`

        btnred.onclick = ev1 => {
            let h = document.getElementById('vsplivashka');
            h.style.display = 'block';

            form1.form_name.value = z.name;
            form1.form_surname.value = z.surname;
            form1.form_number.value = z.number;
            form1.form_email.value = z.email;
            form1.form_job.value = z.job;
            form1.form_skill.value = z.skill;
            form1.form_age.value = z.age;

            btnredag.onclick = ev2 => {

                localStorage.removeItem(z.name)

                let newRed = new newContact(form1.form_name.value, form1.form_surname.value, form1.form_number.value, form1.form_email.value, form1.form_job.value, form1.form_skill.value, form1.form_age.value)

                localStorage.setItem(form1.form_name.value, JSON.stringify(newRed));

                h.style.display = 'none';

            }
        }

        p.appendChild(btndel);
        p.appendChild(btnred);
        div.appendChild(p);
        all.appendChild(div);
    }


}

btndell.onclick = ev => {
    let h = document.getElementById('vsplivashka');
    h.style.display = 'none';

}


for (let name in allLocal) {
    console.log(name);
    let t = JSON.parse(localStorage.getItem('name'));
    console.log(t)

}


document.getElementById('allContactsShow');
document.createElement('p');








