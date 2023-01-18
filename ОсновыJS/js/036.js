// ОСНОВЫ JavaScript
// Урок 036. Получение елементов со страницы.

// действия из этого урока, но без комментариев буду хранить в папке 036_DOM

// DOM - document object model
// Чтобы обратиться к DOM, мы будем использовать сущность document

// ******************************** Методы поиска элементов на странице.
// ПЕРВАя ГРУППА - СТАБИЛЬНЫЕ, СТАРЫЕ.

//getElementById    (вернет ОДИН элемент (Element[не s]) один. не коллекцию)

let box = document.getElementById('box');
console.log(box);

// элементы со страницы поулчаем в псевдомассиве. У псевдомассивов нет методов массивов.

//getElementsByTagName    (вернет КОЛЛЕКЦИЮ элементов (Element[s]))

const btns = document.getElementsByTagName('button');
console.log(btns);

// как получить каждую отдельную кнопку, которая нас интересует
// требуется указать индекс элемента, который нас интересует. 
// 2 способа:

//  1) указать индекс элемента при обьявлении пременной.
const btns2 = document.getElementsByTagName('button')[1];

//  2) указать индекс, когда я хочу использовать кнопку.
console.log(btns[1]);

// даже если на странице один элемент, то мы получим псевдомассив!!!
// это нужно учитывать, когда мы захотим его изменить, но будем обращаться непосредственно
// к псевдомассиву, а не к элементу.

//getElementsByClassName    (вернет КОЛЛЕКЦИЮ элементов (Element[s]))

// получение элемента по классу. заметь, точка не нужна
const circle = document.getElementsByClassName('circle');
console.log(circle);

// ******************************** Методы поиска элементов на странице.
// ВТОРАя ГРУППА - СОВРЕМЕННЫЕ, ФЕНКЦИОНАЛЬНЫЕ.

// во внутрь круглых скобок помещаем css селектор.
// у querySelectorAll есть большой плюс - у него есть метод forEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

// при помощи querySelector мы получаем первый элемент (не коллекцию)
const oneHeart = document.querySelector('.heart');

