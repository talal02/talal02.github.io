const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const count = document.querySelector('#count');

let number = count.innerHTML;
number = parseInt(number);

const mainCounter = () => {
    number = count.innerHTML;
    number = parseInt(number);
    if(number < 0) {
        count.classList.remove('text-success');
        count.classList.add('text-danger');
    } else if(number > 0) {
        count.classList.add('text-success');
        count.classList.remove('text-danger');
    } else {
        count.classList.remove('text-success');
        count.classList.remove('text-danger');
    }
}
decrease.addEventListener('click', ()=>{
    number--;
    count.innerHTML = number;
    mainCounter();
});
increase.addEventListener('click', ()=>{
    number++;
    count.innerHTML = number;
    mainCounter();
});
reset.addEventListener('click', ()=>{
    number = 0;
    count.innerHTML = number;
    mainCounter();
});

mainCounter();