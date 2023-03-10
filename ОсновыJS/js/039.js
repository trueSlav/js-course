// ОСНОВЫ JavaScript
// Урок 039. События и их обработчики.

// действия со страницей находятся в папке 039_DOM

//Как взаимодействовать с элементами на нашей странице.

// Событие - сигнал от браузера о том, что что-то произошло.
// Чтобы использовать событие, мы должны назначить обработчик события.
// Обработчик события - это функция, которая срабатывает как только событие произошло.

// Способы назначения обработчиков событий:

// 1) Использовать html атрибут.
// В этот атрибут мы можем передать функцию и JS.
// для этого мы выбираем тег, которому хотим задать событие.
// событие начитается с букв on() далее идет название события. onclick.
// далее нам требуется раскрыть кавычки и записать какой-то код. onclick="alert('click')"
// может появиться ошибка из-за кавычек. их слеудет комбинировать.
// само событие называется клик дальше обработчик идет с права выполняется функция алерт.
// такую хуйню использовать не будем. Для даунов

// 2) Использовать свойства DOM дерева для событий.
// сначала нам понадобится какой-то элемент, на который будем вешать обработчик события.
// для этого получим кнопку
const btn = document.querySelector('button');
// далее берем тот элемент и присваиваем ему свойство DOM дерева - onclick
// и записываем в это свойство какое-то значение.
// btn.onclick = function(){
//     alert('click');
//};
// в реальных проектах такой код тоже почти не используется.

// 3) вешаем на наш элемент слушатель события.
// в первый аргумент передаем название события. во второй callbeck функцию, которая будет обработчиком.
btn.addEventListener('click',() => {
    alert('click');
});

btn.addEventListener('click',() => {
    alert('click2');
});
//можно вызвать несколько раз и клик выполнится, в отличие от 2 метода.
//события в JS выполняются в порядке очереди. Как только появилось новое событие, оно помещается в 
// очередь, не зависимо от других событий.
btn.addEventListener('mouseenter',() => { //выполнится при наведении мыши
    console.log('hover');
});

// Иногда нам требуется получать данные об элементы, с которым мы взаимодействуем.
// Например какое событие сейчас произошло, какой элемент используется итд.
// для этого у нас есть спец обьект event(событие). 
// он передается как аргумент  в callback функцию. всегда передается первым
// btn.addEventListener('click',(e) => { 
//     console.log(e.target);
//     e.target.style.background = 'red';
// });
//свойство target показывает элемент, с которым мы сейчас взаимодействуем.

//удаление обработчика происходит при помощи метода removeEventListener.
//нам необходимо использовать точно такую же функцию, которую назначали.
//чтобы у нас была возможность удалить функцию, ее нужно вынести в отдельную переменную.
let i = 0;
const del = (e) => { 
    console.log(e.target);
    e.target.style.background = 'red';
    if(i == 1){
        btn.removeEventListener('click', del);
    }
};
btn.addEventListener('click', del);
//обычно метод удаление обработчика выполняется при каком-то условии.

//Всплытие событий. если повесить такоеже событие на родителя, то сначала выполнится дочернее,
// а потом и родителя.

//отмена стандартного поведения браузера
//1)старый
//2)

const link = document.querySelector('a');

link.addEventListener('click', (e) =>{
    e.preventDefault(); // говорим браузеру, что не нужно выполнять действия по умолчанию
});