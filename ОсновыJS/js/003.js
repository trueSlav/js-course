// ОСНОВЫ JavaScript
// Урок 003. Переменные и строгий режим.

// Переменные - это некоторый контейнер для каки-либо значений.
let number = 5;
// let можно изменять.
const leftBorderWidth = 1;
// const изменять нельзя. Однако, внутри обьектов это возможно.

// !!ВАЖНО!! - в js нет прямых констант! 

console.log(leftBorderWidth);

// Изменить let
number = 10;
console.log(number);

// Существует устаревший способ обьявления переменных - var.
// Отличие var в том, что переменную видно до ее обьявления в коде. Пузырь.

//"use strict", либо строгий режим - это режим, который исправляет не точности старого кода,
//не позволяя нам испоьзовать устаревшие решения. Например: let a = 12;
//Такой тип записи будет невозможен с активным строгим режимом, так ка это 
//устаревший способ обьявления переменных.



