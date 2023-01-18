// ОСНОВЫ JavaScript
// Урок 017(д). Цикл в цикле и метки.

// задача елочка

// *
// **
// ***
// ****
// *****
// ******

let result = '';

const lenght = 6;

for(let i = 1; i <= 6; i++){

    for(let j = 0; j < i; j++){

        result += '*';
        
    }

    result += '\n';
}

console.log(result);

//метка существует, чтобы перепрыгнуть на определенный фрагмент кода.

first: for(let i = 0; i <= 3; i++){
    console.log(`f lvl: ${i}`);
    for(let j = 0; i <= j; j++){
        console.log(`s lvl: ${j}`);
        for(let k = 0; k <= j; k++){
            if(k === 2) {
                continue first;
            }   //метка
            console.log(`t lvl: ${k}`);
        }
    }
}

