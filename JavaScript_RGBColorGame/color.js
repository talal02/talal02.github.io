let number = 6;
let squares = document.querySelectorAll('.square');
let colors = RandomColorAssign(number);
let randomColor = colorGuessPicker();
let head = document.querySelector('#head'); 
let messageDisplay = document.querySelector('#message');
let heading = document.querySelector('.head-color');
let resetBtn = document.querySelector('#reset');
let easyBtn = document.querySelector('#easy');
let hardBtn = document.querySelector('#hard');



head.textContent = randomColor;

function StartGame(num) {
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function(){
            if(this.style.backgroundColor == randomColor){
                messageDisplay.textContent = "Yea Boy!";
                heading.style.backgroundColor = randomColor;
                resetBtn.textContent = 'Play Again!';
                setTimeout(function(){
                    messageDisplay.textContent = "";
                }, 2000);
            } else {
                squares[i].style.backgroundColor = '#c8e1ff';
                messageDisplay.textContent = "Try Again!";
                heading.style.backgroundColor = '#dc3545';
                setTimeout(function(){
                    heading.style.backgroundColor = '#c8e1ff';
                }, 1000);
            }
        });
    }
    resetBtn.addEventListener('click', function(){
        ResetGame(number);
        resetBtn.textContent = 'New Colors';
    });

    easyBtn.addEventListener('click', function(){
        number = 3;
        ResetGame(number);
        easyBtn.classList.add('active');
        hardBtn.classList.remove('active');
    });

    hardBtn.addEventListener('click', function(){
        number = 6;
        ResetGame(number);
        easyBtn.classList.remove('active');
        hardBtn.classList.add('active');
    });
}

function RandomRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function ResetGame(num) {
    colors = RandomColorAssign(num);
    randomColor = colorGuessPicker();
    for(let i = 0; i<squares.length; i++){
        if(num == 3){
            if(i < 3){
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.backgroundColor = '#c8e1ff';
            }
        } else {
            squares[i].style.backgroundColor = colors[i];
        }
    }
    head.textContent = randomColor;
}

function RandomColorAssign(num){
    let colorArr = [];
        for(let i = 0; i<num; i++){
            colorArr.push(RandomRGB());
        }
    return colorArr;
}

function colorGuessPicker(){
    let i =  Math.floor(Math.random() * colors.length);
    return colors[i];
}

StartGame(number);
