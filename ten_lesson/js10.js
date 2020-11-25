// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//    callback promice acync
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

//CB Hell

// function dayOrder(waterStatus, callback) {
//     console.log('Прокидаємось та йдемо в ванну кімнату');
//
//     setTimeout(() => {
//
//         if (!waterStatus) {
//             callback('Води немає, день насмарку', null);
//             return
//         }
//         callback(null, 'Ми помились та почистили зуби');
//
//     }, 1000)
// }
//
// function goEat(eatStatus, callback) {
//     console.log('Іду готувати їсти');
//
//     setTimeout(() => {
//         if (!eatStatus) {
//             callback('Їжі немає, голодним всі плани не виконаєш', null);
//             return;
//         }
//         callback(null, 'Приготував купу їжі, поснідав')
//     }, 2000)
// }
//
// function goWork(fuel, callback) {
//     console.log('Пішли до машини їхати на роботу');
//
//     setTimeout(() => {
//         if (fuel < 3) {
//             callback('Бензину немає, нікуда не доїдеш', null);
//             return;
//         }
//         callback(null, 'Бензин є, поїхали на роботу працювати');
//     }, 1500)
//
// }
//
// function dinner(callback) {
//     console.log('Пішли на обід')
//
//     setTimeout(() => {
//         callback();
//     },1000)
// }
//
// function goHome(fuel, callback) {
//     console.log('Збираємось додому')
//     setTimeout(() => {
// if (fuel < 3){
//     callback ('Немає бензину, додому не доїдемо', null);
//     return ;
// }
// callback(null, 'Бензин є, ми поїхали додому та успішно приїхали')
//     }, 2000)
// }
//
// function netflixChill(internetStatus, callback){
//     console.log('Прийшли додому, та запускаємо нетфлікс дивитись серіал');
//     setTimeout(()=>{
//         if (!internetStatus){
//             callback('Немає інтернету, серіал не подивитись', null);
//             return;
//         }
//         callback(null, 'Круто дивимось 3 серії серіалу та кайфуємо');
//     },3000)
// }
//
// function goSleep (sleepTime, callback){
//     console.log('Лягаэмо спати, надіємось гарно поспимо');
// setTimeout( ()=>{
//     if (sleepTime < 4){
//         console.log('Часу для сну дуже мало, завтра не встанемо, фіаско');
//         return ;
//     }
//     console.log('Часу для сну достатньо, засинаємо та спимо');
// },1000 )
// }
//
//
//
// dayOrder(true, (err, ok) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(ok)
//
//     goEat(true, (err, ok) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(ok);
//
//         goWork(22, (err, ok) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(ok);
//
//             dinner(() => {
//                 console.log('Дуже гарно пообідали та вертаємось до роботи');
//
//                 goHome(15, (err, ok)=>{
//                     if (err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(ok);
//
//                     netflixChill(true, (err,ok)=>{
//                         if (err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(ok);
//
//                         goSleep(6, (err,ok)=>{
//                             if (err){
//                                 console.log(err);
//                                 return ;
//                             }
//                             console.log(ok);
//                         })
//                     })
//                 })
//             })
//         })
//     })
//
// })


//
// function dinner(callback) {
//     console.log('Пішли на обід')
//
//     setTimeout(() => {
//         callback();
//     },1000)
// }
//
// function goHome(fuel, callback) {
//     console.log('Збираємось додому')
//     setTimeout(() => {
// if (fuel < 3){
//     callback ('Немає бензину, додому не доїдемо', null);
//     return ;
// }
// callback(null, 'Бензин є, ми поїхали додому та успішно приїхали')
//     }, 2000)
// }
//
// function netflixChill(internetStatus, callback){
//     console.log('Прийшли додому, та запускаємо нетфлікс дивитись серіал');
//     setTimeout(()=>{
//         if (!internetStatus){
//             callback('Немає інтернету, серіал не подивитись', null);
//             return;
//         }
//         callback(null, 'Круто дивимось 3 серії серіалу та кайфуємо');
//     },3000)
// }
//
// function goSleep (sleepTime, callback){
//     console.log('Лягаэмо спати, надіємось гарно поспимо');
// setTimeout( ()=>{
//     if (sleepTime < 4){
//         console.log('Часу для сну дуже мало, завтра не встанемо, фіаско');
//         return ;
//     }
//     console.log('Часу для сну достатньо, засинаємо та спимо');
// },1000 )
// }

//Promise

// function dayOrder(waterStatus) {
//
//     return new Promise((resolve, reject) => {
//         console.log('Прокидаємось та йдемо в ванну кімнату');
//
//         setTimeout(() => {
//
//             if (!waterStatus) {
//                 reject('Води немає, день насмарку');
//                 return;
//             }
//             resolve('Ми помились та почистили зуби');
//
//         }, 1000)
//     })
// }
//
// function goEat(eatStatus) {
//     console.log('Іду готувати їсти');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!eatStatus) {
//                 reject('Їжі немає, голодним всі плани не виконаєш');
//                 return;
//             }
//             resolve('Приготував купу їжі, поснідав');
//         }, 2000)
//
//     })
// }
//
// function goWork(fuel) {
//     console.log('Пішли до машини їхати на роботу');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fuel < 3) {
//                 reject('Бензину немає, нікуда не доїдеш');
//                 return;
//             }
//             resolve('Бензин є, поїхали на роботу працювати');
//         }, 1500)
//
//     })
// }
//
// function dinner() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Пішли на обід');
//         }, 1000)
//     })
// }
//
// function goHome(fuel) {
//     console.log('Збираємось додому')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fuel < 3) {
//                 reject('Немає бензину, додому не доїдемо');
//                 return;
//             }
//             resolve('Бензин є, ми поїхали додому та успішно приїхали')
//         }, 2000)
//
//     })
//
// }
//
// function netflixChill(internetStatus) {
//     console.log('Прийшли додому, та запускаємо нетфлікс дивитись серіал');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internetStatus) {
//                 reject('Немає інтернету, серіал не подивитись');
//                 return;
//             }
//             resolve('Круто дивимось 3 серії серіалу та кайфуємо');
//         }, 3000)
//     })
//
// }
//
// function goSleep(sleepTime) {
//     console.log('Лягаэмо спати, надіємось гарно поспимо');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleepTime < 4) {
//                 reject('Часу для сну дуже мало, завтра не встанемо, фіаско');
//                 return;
//             }
//             resolve('Часу для сну достатньо, засинаємо та спимо');
//         }, 1000)
//     })
//
// }

// dayOrder(true)
//     .then(value => {
//         console.log(value);
//         return goEat(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goWork(10);
//     })
//     .then(value => {
//         console.log(value);
//         return dinner();
//     })
//     .then(value => {
//         console.log(value);
//         return goHome(10);
//     })
//     .then(value => {
//         console.log(value);
//         return netflixChill(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goSleep(10);
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(reason => {
//         console.log(reason);
//     })

//async await

// function dayOrder(waterStatus) {
//
//     return new Promise((resolve, reject) => {
//         console.log('Прокидаємось та йдемо в ванну кімнату');
//
//         setTimeout(() => {
//
//             if (!waterStatus) {
//                 reject('Води немає, день насмарку');
//                 return;
//             }
//             resolve('Ми помились та почистили зуби');
//
//         }, 1000)
//     })
// }
//
// function goEat(eatStatus) {
//     console.log('Іду готувати їсти');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!eatStatus) {
//                 reject('Їжі немає, голодним всі плани не виконаєш');
//                 return;
//             }
//             resolve('Приготував купу їжі, поснідав');
//         }, 2000)
//
//     })
// }
//
// function goWork(fuel) {
//     console.log('Пішли до машини їхати на роботу');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fuel < 3) {
//                 reject('Бензину немає, нікуда не доїдеш');
//                 return;
//             }
//             resolve('Бензин є, поїхали на роботу працювати');
//         }, 1500)
//
//     })
// }
//
// function dinner() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Пішли на обід');
//         }, 1000)
//     })
// }
//
// function goHome(fuel) {
//     console.log('Збираємось додому')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fuel < 3) {
//                 reject('Немає бензину, додому не доїдемо');
//                 return;
//             }
//             resolve('Бензин є, ми поїхали додому та успішно приїхали')
//         }, 2000)
//
//     })
//
// }
//
// function netflixChill(internetStatus) {
//     console.log('Прийшли додому, та запускаємо нетфлікс дивитись серіал');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internetStatus) {
//                 reject('Немає інтернету, серіал не подивитись');
//                 return;
//             }
//             resolve('Круто дивимось 3 серії серіалу та кайфуємо');
//         }, 3000)
//     })
//
// }
//
// function goSleep(sleepTime) {
//     console.log('Лягаэмо спати, надіємось гарно поспимо');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleepTime < 4) {
//                 reject('Часу для сну дуже мало, завтра не встанемо, фіаско');
//                 return;
//             }
//             resolve('Часу для сну достатньо, засинаємо та спимо');
//         }, 1000)
//     })
//
// }
//
// async function day() {
//     try {
//         const dayorder = await dayOrder(true);
//         console.log(dayorder);
//         const eat = await goEat(true);
//         console.log(eat);
//         const gowork = await goWork(55);
//         console.log(gowork);
//         const diner = await dinner();
//         console.log(diner);
//         const gohome = await goHome(22);
//         console.log(gohome);
//         const netf = await netflixChill(true);
//         console.log(netf);
//         const gosleep = await goSleep(8);
//         console.log(gosleep);
//     } catch (err){
//         console.log(err);
//     }
//
// }
//
// day();


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let text = document.getElementById('text');

function lett (letter){
    return new Promise(resolve => {
        setTimeout(()=>{
       resolve(text.innerText +=`${letter}`)
        },Math.random()*1000)
    })
}

async function write (string){
    let z = string.split('');
       for (let letter of z) {
       await lett(letter);
    }
}

write('Hello World')



