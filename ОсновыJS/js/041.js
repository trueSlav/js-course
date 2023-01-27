// ОСНОВЫ JavaScript
// Урок 041. Рекурсия

// *** Рекурсия - это прием, когда функция вызывает саму себя.

// *** Базовый способ написать функцию возведения в степень:

function pow(x, n) {
    let res = 1;

    for(let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}

console.log(pow(2, 0)); //1
console.log(pow(2, 1)); //2
console.log(pow(2, 2)); //4
console.log(pow(2, 3)); //8

// *** Используя рекурсию способ написать функцию возведения в степень:

function pow(x, n) {
    if(n === 1){
        return x;
    } else {
       return x * pow(x, n - 1);
    }
}

console.log(pow(2, 1)); //2
console.log(pow(2, 2)); //4
console.log(pow(2, 3)); //8

// В данном примере рекурсия, тоесть вызов функции внутри себя самой, возвращает предидущую
// итерацию, которую мы умножаем на возводимое в степень число. Если 2 в 2, то рекурсия вернет 2,
// которую мы в последствии умножаем на 2 и получаем искомый результат.

// *** База рекурсии - значение, которое приводит к завершению функции. (1)

// *** Шаг рекурсии - запуск вложенной функции с другим аргументом. (n - 1)

// *** Глубина рекурсии - общее кол-во вложенных вызовов вместе с самым первым. (n)

// *** Пример почему рекурсия предпочтительней для многих программистов:

let students = {
    js:[{
        name : 'Ilya',
        progress : 100
    }, {
        name : 'Dima',
        progress : 60
    }],

    html:{
        basic:[{
            name : 'Ruslan',
            progress : 20 
        },{
            name : 'Maxim',
            progress : 18 
        }],
        pro:[{
            name : 'Egor',
            progress : 10 
        }]
    }
};

// *** Задача - посчитать общий процент прохождения курсов.
// Задачу можно решить двумя методами - итеративным и рекурсивным.

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    // Object.values() - метод обьекта, который позволяет получать его значения в массиве.
    // Array.isArray() - метод, возвращающий true, если сущность является массивом.
    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for(let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        } else {
            for(let subCourse of Object.values(course)){
                students += subCourse.length;
                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}
console.log(getTotalProgressByIteration(students));



function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;
        
        for(let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];
        
        for(let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];            
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);