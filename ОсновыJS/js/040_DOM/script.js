'use strict'
//хеад удобно получить, чтобы динамически изменять стили
console.log(document.head);
//получить боди
console.log(document.body);
//для получения всего документа, тега html
console.log(document.documentElement);


// *** путешествия по ДОМ дереву

//1) метод, который позволяет получить узлы, которые являются детьми у бади 
console.log(document.body.childNodes);
//выведет псевдомассив из 11 элементов.

// 0: #text "\n    \n    "​  *это текстовая нода, которая означает перенос строки
// 1: <div class="wrapper">​   
// 2: #text "\n    "​
// 3: <!--  renernh  -->
// 4: #text "\n    "​
// 5: <script src="script.js">​   *наш боди заканчивается на теге скрипт
// 6: #text "\n"​
// 7: <!--  Code injected by live-server  -->
// 8: #text "\n"​
// 9: <script>​
// 10: #text "\n\n"

//все элементы, которые идут за скриптом являются динамически подставленными лайв сервером

//2) получить первого ребенка и последнего
console.log(document.body.firstChild);
//#text "\n    \n    "
console.log(document.body.lastChild);
//<script src="script.js">

// *** получение родителя, соседей и детей

console.log(document.querySelector('#current').parentNode); //это кнопка. получим узел родителя first
console.log(document.querySelector('#current').parentNode.parentNode); //получить родителя родителя
//получим wrapper

// *** Дата-атрибут - некоторый ориентир в коде. Ставится в тегах.
//Всегда начинается с data- после пишется любое слово. data-modal="2"

// получение дата атрибута. html-атрибуты записываются в квадратные скобки
console.log(document.querySelector('[data-current="3"]'));
//получить следующий за ним элемент
console.log(document.querySelector('[data-current="3"]').nextSibling); //получим текстовый узел переноса
//получить предидущий за ним элемент
console.log(document.querySelector('[data-current="3"]').previousSibling);

// *** все методы и свойства выше получали узлы ***
// аналоги, которые получают элемент :
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('#current').parentElement);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//перебрать nodeChild и вывести только элементы родителя

for(let node of document.body.childNodes){

    if(node.nodeName == '#text'){
        continue;
    }

    console.log(node);

}