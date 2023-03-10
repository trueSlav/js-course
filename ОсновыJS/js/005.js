// ОСНОВЫ JavaScript
// Урок 005. Классификация типов данных.

//Существует 8 типов данных. 


// 1) Числовой тип

let number = 1;
console.log(number);

//Специфические числовые типы данных

//infinity (бесконечность) тип, который появляется при делении на 0
console.log(1 / 0);
console.log(-1 / 0);

//NaN (Not a number) если операция не подлежит математическому типу.
console.log('string' * 2);

console.log('*************************************************************');

// 2) Строка
console.log('Ilya');

console.log('*************************************************************');

// 3) Логический тип данных
const yes = true;
const no = false;
console.log(yes, no);

console.log('*************************************************************');

// 4) null и 5) undefined

//получим null, что значит: "нечего выводить. Его не существует"
//console.log(nott);

//получим undefined. Если мы заглянем в пустую коробку, то получим undefined.
let und;
console.log(und);

console.log('*************************************************************');

// 6) !!Тип данных ОБЬЕКТ!!
//ОБЬЕКТ - это структура, которая используется для хранения любых данных.

const obj = {
    name: 'Ilya',
    age: 20,
    isProgrammist: true
};

//Для того, чтобы добраться до какого-нибудь свойства обьекта, испольузем точечную запись .
//С помощью точечной записи получим значение(20) свойства age.
console.log(obj.age);


console.log('*************************************************************');

// 7) ВАЖНО!! Массив - частный случай обьекта!!!
//Используется для структуры данных, которые идут по порядку.

let color = ['white', 'blue', 'red'];
console.log(color[0]);

console.log('*************************************************************');

//Добавление свойств в обьект 

// .
obj.colorOb = 'red';
console.log(obj.colorOb);


// []

const testsObj = {
    num : 2,
};

testsObj['color'] = 'red2';
testsObj['numbers'] = {};

for(let i = 1; i <= 5; i++){
    testsObj.numbers[`num${i}`] = i;
}


console.log(testsObj);

