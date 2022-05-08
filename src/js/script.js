"use strict";
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB={
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privet:false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('на сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


if (4 == 9){
    console.log('ok');
}else{
    console.log('Eror');
}


// if (num < 49){
//   console.log('eror');
// }else if (num > 100){
//   console.log('много');
// } else {
//     console.log('ok');
//   };



//   (num === 50) ? console.log('ok'): console.log('eror');

const num = 51;

switch (num) {
  case 49:
      console.log('Неверное');
      break;
  case 100:
      console.log('уфф неудачник');
      break;
  case  50 :
      console.log('Уфф попаль');
      break;
  default:
      console.log('ничего не верно');
      break;

}