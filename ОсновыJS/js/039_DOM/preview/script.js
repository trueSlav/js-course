const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('clickaaaaaaaaaaaaaaaaaa');
// };

// btn.addEventListener('click',() => {
//     alert('click');
// });
// btn.addEventListener('click',() => {
//     alert('click22222');
// });
// btn.addEventListener('mouseenter',() => { //выполнится при наведении мыши
//     console.log('hover');
// });
// btn.addEventListener('click',(e) => { 
//     console.log(e.target);
//     e.target.style.background = 'red';
// });
// const del = (e) => { 
//     console.log(e.target);
//     e.target.style.background = 'red';
// };
// btn.addEventListener('click', del);
// btn.removeEventListener('click', del);
let i = 0;
const del = (e) => { 
    console.log(e.target);
    e.target.style.background = 'red';
    if(i == 1){
        btn.removeEventListener('click', del);
    }
    i++;
};
btn.addEventListener('click', del);