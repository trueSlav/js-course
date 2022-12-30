// ОСНОВЫ JavaScript
// Урок 013. Практика ч.1. Начинаем создавать приложение.

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const lastFilms = prompt('Один из последних просмотренных фильмов', '');
const gradeFilms = prompt('На сколько оцените его?', '');
const lastFilmsTwo = prompt('Один из последних просмотренных фильмов', '');
const gradeFilmsTwo = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilms] = gradeFilms;

personalMovieDB.movies[lastFilmsTwo] = gradeFilmsTwo;


console.log(personalMovieDB);