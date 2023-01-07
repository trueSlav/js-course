'use strict';

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

// ОСНОВЫ JavaScript
// Урок 018. Практика ч.2. Применяем условия и циклы.

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

//*********************************** while -->
// let i = 0;

// while(i < 2){

//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if((a === '') || (a == null) || (a.length > 50)){
//         console.log('Ошибка. Недопустимый формат');
//         i--;
//     } 
//     else {
//         personalMovieDB.movies[a] = b;
//         console.log('База данных обновленна');
//     }

//     i++;
// }

//*********************************** do while -->

// let i = 0;

// do{

//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');
        
//         if((a === '') || (a == null) || (a.length > 50)){
//             console.log('Ошибка. Недопустимый формат');
//             i--;
//         } 
//         else {
//             personalMovieDB.movies[a] = b;
//             console.log('База данных обновленна');
//         }
//     i++;

// } while (i < 2);

//***********************************

// ОСНОВЫ JavaScript
// Урок 023. Практика ч.3. Использование функций.

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// ОСНОВЫ JavaScript
// Урок 031. Практика ч.4. Используем обьекты.

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    
    movies : {},
    actors : {},
    genres : [],
    privat : true,

    count : function (){ 
        let numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },

    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов', '').trim(),
                  b = prompt('На сколько оцените его?', '');
                
            if((a === '') || (a == null) || (a.length > 50)){
                console.log('Ошибка. Недопустимый формат');
                i--;
            } 
            else {
                personalMovieDB.movies[a] = b;
                console.log('База данных обновленна');
            }
        }
    },

    detectPersonalLvl: function(){
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');    
        } else {console.log('Произошла ошибка');}
    },

    writeYourGenres: function(array){
        for(let i = 1; i <= 3; i++){
            const c = prompt(`Ваш любимый жанр под номером ${i}`);
            if((c === '') || (c == null) || (c.length > 50)){
                console.log('Ошибка. Недопустимый формат');
                i--;
            } 
            else {
                personalMovieDB.genres[i - 1] = c;
                console.log('База данных genres обновленна');
            }
        }
        array.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
        else{
            console.log('У вас нет доступа');
        }
    },

    toggleVisibleMyDB: function(show){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        show(personalMovieDB.privat);
    }

};

personalMovieDB.count();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLvl();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.showMyDB);




// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){

//         const a = prompt('Один из последних просмотренных фильмов', '').trim(),
//               b = prompt('На сколько оцените его?', '');
    
//         if((a === '') || (a == null) || (a.length > 50)){
//             console.log('Ошибка. Недопустимый формат');
//             i--;
//         } 
//         else {
//             personalMovieDB.movies[a] = b;
//             console.log('База данных обновленна');
//         }
//     }
// }
// rememberMyFilms();

// function detectPersonalLvl(){
//     if (personalMovieDB.count < 10){
//         console.log('Просмотрено довольно мало фильмов');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log('Вы классический зритель');
//     } else if(personalMovieDB.count >= 30){
//         console.log('Вы киноман');    
//     } else {console.log('Произошла ошибка');}
// }
// detectPersonalLvl();

// function showMyDB(hidden){

//     if(!hidden){
//         console.log(personalMovieDB);
//     }
//     else{
//         console.log('У вас нет доступа');
//     }
// }

// function writeYourGenres(){

//     for(let i = 1; i <= 3; i++){
//         const c = prompt(`Ваш любимый жанр под номером ${i}`);
        
//         if((c === '') || (c == null) || (c.length > 50)){
//             console.log('Ошибка. Недопустимый формат');
//             i--;
//         } 
//         else {
//             personalMovieDB.genres[i - 1] = c;
//             console.log('База данных genres обновленна');
//         }
//     }
    
// }
