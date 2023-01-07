// ОСНОВЫ JavaScript
// Урок 025. Callback-функции.

// callback - это функция, которая должна будет выполниться после того как другая
// функция завершила свое выполнение.

function lernJS(land, callback){
    console.log(`я изучаю: ${land}`);
    callback();
}

lernJS('JavaScript', function(){
    console.log('я вызвал callback-функцию anon!');
});
// тут мы обьявили анонимную функцию и после выполнения ее нельзя использовать.

function done(){
    console.log('я вызвал callback-функцию done!');
}

lernJS('JavaScript', done);
// заметим, что при передаче в параметр, не нужно указывать скобки.
// мы говорим: функция learnJS, возьми функцию done, подставь ее в callback и вызови где требуется.

