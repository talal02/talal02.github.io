const row1 = document.querySelector('#row1');
const row2 = document.querySelector('#row2');
const row3 = document.querySelector('#row3');
const row4 = document.querySelector('#row4');
const row5 = document.querySelector('#row5');

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
let input = '', result = '';

const displayOnScreen = ()=>{
    screen2.innerHTML = input;
}

const validation = ()=>{
    const sign = input[input.length - 2];
    if(sign === '/' || sign === '-' || sign === '+' || sign === '*' || sign === '.'){
        input = input.slice(0, -1);
    }
}

const answer = ()=>{
    if(input.length === 0){
        screen2.innerHTML = '';
    }
    if(input[0] === '0' && input[1] !== '.' && input.length > 1) {
        input = input.slice(1);
    }
    result = +(eval(input)).toFixed(3);
    input += ` = ${result}`;
    screen1.innerHTML = input;
    screen2.innerHTML = result;
    input = '';
}

const calculator = () => {
    row1.children[0].addEventListener('click', ()=>{
       input = ''; 
       displayOnScreen();
    });
    row1.children[1].addEventListener('click', ()=>{
        input = input.slice(0, -1);
        displayOnScreen();
    });
    row1.children[2].addEventListener('click', ()=>{
        input += '/';
        validation();
        displayOnScreen();
    });
    row2.children[0].addEventListener('click', ()=>{
        input += '7';
        displayOnScreen();
    });
    row2.children[1].addEventListener('click', ()=>{
        input += '8';
        displayOnScreen();
    });
    row2.children[2].addEventListener('click', ()=>{
        input += '9';
        displayOnScreen();
    });
    row2.children[3].addEventListener('click', ()=>{
        input += '*';
        validation();
        displayOnScreen();
    });
    row3.children[0].addEventListener('click', ()=>{
        input += '4';
        displayOnScreen();
    });
    row3.children[1].addEventListener('click', ()=>{
        input += '5';
        displayOnScreen();
    });
    row3.children[2].addEventListener('click', ()=>{
        input += '6';
        displayOnScreen();
    });
    row3.children[3].addEventListener('click', ()=>{
        input += '-';
        validation();
        displayOnScreen();
    });
    row4.children[0].addEventListener('click', ()=>{
        input += '1';
        displayOnScreen();
    });
    row4.children[1].addEventListener('click', ()=>{
        input += '2';
        displayOnScreen();
    });
    row4.children[2].addEventListener('click', ()=>{
        input += '3';
        displayOnScreen();
    });
    row4.children[3].addEventListener('click', ()=>{
        input += '+';
        validation();
        displayOnScreen();
    });
    row5.children[0].addEventListener('click', ()=>{
        input += '.';
        validation();
        displayOnScreen();
    });
    row5.children[1].addEventListener('click', ()=>{
        input += '0';
        displayOnScreen();
    });
    row5.children[2].addEventListener('click', ()=>{
        answer();
    });
}


calculator();