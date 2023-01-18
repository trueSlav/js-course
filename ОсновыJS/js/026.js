// ОСНОВЫ JavaScript
// Урок 026. Обьекты, деструктуризация обьектов.

const options = {
    name : 'значение name',
    width : 1024,
    heigth : 1024,
    colors : {
        border : 'red',
        bg : 'black'
    },
    makeTest : function(){
        console.log('my first method YAP!');
    }
};

// Обратиться к свойству обьекта 
console.log(options.name);

// Удалить пару свойство : значение. Для этого используется оператор delete (удалить что-то).
delete options.name;

// Прямых констант в JS не существует!

// Перебрать все свойства обьекта можно при помощи for in.
let counter = 0;
for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]} `);            
        }
    } else {
            console.log(`Свойство ${key} имеет значение ${options[key]} `);
            counter++; // Покажет кол-во свойств на верхнем уровне.
        }
}
console.log(counter); // Получим 2. Но это из-за условия. В классическом случае перебор
                      // реализуется без условий и ответ был бы 3.
// key - хранит в себе свойства и переберает их. Длинна цикла определяется количеством свойств
// обьекта. Используя for in мы говорим : "берем свойства key и будем копаться внутри options".
// При выводе обьекта в консоль, мы получили [object Object] на том месте, где у нас вложенный
// обьект. Избежать такого вывода можно при помощи рекурсии. Когда мы создаем перебор
// с условием в переборе.

// for of не работает для обьекта!


// ******************** Свойства и методы обьекта ********************

// У обьектов нет свойства lenght. Перебор реализуется при помощи счетчика. Пример выше counter

// *** Object.keys() берет свойства обьекта и образует из них массив.
console.log(Object.keys(options).length);
// Свойство lenght работает у массива. Легче, чем использовать счетчик.

// ******************** Создание собственного метода ********************
// см. строку 4, на которой находится обьект.
options.makeTest();


// Деструктуризация обьектов 
// Вытащить вложенность в отдельные переменные.
const {border, bg} = options.colors;
console.log(border, bg);
