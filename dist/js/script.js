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