"use strict";
// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB={
//   count:numberOfFilms,
//   movies:{},
//   actors:{},
//   genres:[],
//   privet:false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('на сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('на сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 9){
//     console.log('ok');
// }else{
//     console.log('Eror');
// }


// // if (num < 49){
// //   console.log('eror');
// // }else if (num > 100){
// //   console.log('много');
// // } else {
// //     console.log('ok');
// //   };



// //   (num === 50) ? console.log('ok'): console.log('eror');

// const num = 51;

// switch (num) {
//   case 49:
//       console.log('Неверное');
//       break;
//   case 100:
//       console.log('уфф неудачник');
//       break;
//   case  50 :
//       console.log('Уфф попаль');
//       break;
//   default:
//       console.log('ничего не верно');
//       break;

// }



// *
// **
// ***
// ****
// *****

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


// first:for ( let i = 0; i < 3; i++){
//     console.log(`first level: ${i}`);
//     for ( let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for ( let k = 0; k < 5; k++){
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for(let i = 5; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 20; i >= 10; i--){
//     if ( i === 13){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log( i );
//     }
//   }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);






// const lines = 5;
// let result = '';

// for (let i = 1; i < lines; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
    
//     result += '\n';
// }
// console.log(result);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB={
//   count:numberOfFilms,
//   movies:{},
//   actors:{},
//   genres:[],
//   privet:false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }
//     console.log(personalMovieDB);





let numberOfFilms;

function start(){
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN( numberOfFilms )){
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    }
}
start();



const personalMovieDB={
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privet:false
};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel(); 
    console.log(personalMovieDB);


    function showMyDB(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    }
    function writeYourGenres(){
        for (let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenres();