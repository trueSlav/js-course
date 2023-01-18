/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoDel = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelectorAll('.promo__genre'),
      interactiveList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    sort: function(){
        movieDB.movies.sort();
    }
};
movieDB.sort();

promoDel.forEach(item => {
    item.remove();
});

promoGenre[0].innerHTML = 'ДРАМА';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

interactiveList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    interactiveList.innerHTML += `
        <li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
        </li>
    `;
});



