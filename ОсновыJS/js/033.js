// ОСНОВЫ JavaScript
// Урок 033. Динамическая типизация в JS.

// Динамическая типизация - возможность одного типа данных превращаться в другой.

// *** To String

// 1) старый способ String()
console.log(typeof(String(null)));

// 2) конкатинация             <-----------------------------------------
console.log(typeof(5 + ''));

// *** To Number

// 1) старый способ Number()
console.log(typeof(Number('2')));

// 2) унарный плюс          <-----------------------------------------
console.log(typeof(+'2'));

// 3) методы чисел
console.log(typeof(parseInt('12px', 10)));

// ! Все, что мы получаем от пользователя будет типом Строка !

// *** To boolean

// Всегда false | 0, '', null, undefined, NaN;
// Все остальное будет true.

// 1) нативный способ, когда мы явно используем null

// 2) способ Boolean()
console.log(typeof(Boolean('2')));

// 3) !!
console.log(typeof(!!'2'));



