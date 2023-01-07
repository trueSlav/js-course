// ОСНОВЫ JavaScript
// Урок 014. Условия.

// ************************ условие if else

if(4 == 8){

    console.log('Это верно!');

} else {

    console.log('Error!');    

}

// ************************ ветвление условий
const num = 50;

if(num < 49){

    console.log('Это ошибка!');

} else if (num > 50){

    console.log('Error!');    

} else {

    console.log('Это верно!');    
    
}

// ************************ тернарный оператор
const numTwo = 50;

// (numTwo == 50) ? console.log('Это верно!') : console.log('Ошибка');

// тернарный оператор называется тернарным, потому что у него имеется три аргумента.
// это единственный тернарный оператор в JS
// бинарные операторы - 4 + 4 (два аргумента)
// унарные операторы - +'2' (один аргумент) 


// ************************ конструкция switch
const numThree = 49;

switch(numThree){
    case 49: 
        console.log('err');
        break;
    case 22:
        console.log('err2');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('no no and no');
        break;
}

// конструкция switch является улучшенным условием if. эта конструкция
// проверяет исключительно на строгое равенство.
// default используется, когда ни один из кейсов не является верным.


