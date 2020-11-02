// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний


// let x = document.getElementsByTagName('*')
// for (const z of x) {
//     if (z.getAttribute('class')){
//         console.log(z);
//     }
// }

// let x = document.getElementsByTagName('p')
// for (const z of x) {
//   z.innerText = 'hello oktenweb'
// }

let x = document.getElementsByTagName('div')
for (const z of x) {
  z.style.backgroundColor = 'red'
}