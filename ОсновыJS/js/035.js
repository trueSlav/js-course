// ОСНОВЫ JavaScript
// Урок 035. Задачи с собеседований на понимание основ.

// • Какое будет выведено let x = 5; alert( x++ ); ? //5
// постфакстая запись инеремента возвращает сначала не измененное значение.

// • Чему равно такое [ ] + false - null + true ? //NaN
// 

// • Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? //2
// простой тип данных. передаем значенние. в let x = y = 2 идет присвоение в справа на лево.


// • Чему равна сумма [ ] + 1 + 2?  //12 string почему?
let num = [] + 1 + 2;
console.log(typeof(num));
// когда мы ведем работу с пустым массивом, то он приведет к строке.


// • Что выведет этот код: alert( "1"[0] )? // 1
// обращаемся к елементу строки по индексу 


// • Чему равно 2 && 1 && null && 0 && undefined ? // null
// оператор И возвращает первое фолс.

// • Есть ли разница между выражениями? !!( a && b ) и (a && b)? // есть разница
// !! возвращает булевое значение, а И первую ложб или правду.

// • Что выведет этот код: alert( null (0) || 2 && 3 (1) || 4 ); ? 1 // 3

// • a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // false
// разные хранилища данных. два ящика с яблоками. ящик1 и ящик 2 = разные

// • Что выведет этот код: alert( +"Infinity" ); ? // +besk
// выведет инфинити тк я при помощи унарного плюса превращаю строку в числовой тип данных

// • Верно ли сравнение: "Ёжик" > "яблоко"? / -

// • Чему равно 0 || "" || 2 || undefined || true || falsе ? / 1 // 2
// ИЛИ всегда запинается на правде
