/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// *************

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]   
    };
    
    const promoDel = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelectorAll('.promo__genre'),
          interactiveList = document.querySelector('.promo__interactive-list'),
          formAddFilm = document.querySelector('form.add'),
          inputForm = formAddFilm.querySelector('.adding__input'),
          buttonForm = formAddFilm.lastElementChild,
          checkboxForm = formAddFilm.querySelector('[type="checkbox"]');
          // console.log(buttonForm);  
    
    formAddFilm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = inputForm.value;
        const favorite = checkboxForm.checked;

        if(newFilm){
           
           if(newFilm.lenght < 22){
                newFilm = `${newFilm.substring(0, 22)}...`;
           }
           
           if(favorite){
            console.log("Добавляем любимый фильм");
           }

            movieDB.movies.push(newFilm);
            sortFilm(movieDB.movies);
            createMovieList(movieDB.movies, interactiveList);
        }

        e.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        promoGenre[0].innerHTML = 'ДРАМА';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortFilm = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortFilm(films);

        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}.${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }

    deleteAdv(promoDel);
    makeChanges();
    createMovieList(movieDB.movies, interactiveList);

});



