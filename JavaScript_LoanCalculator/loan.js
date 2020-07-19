document.getElementById('loan-form').addEventListener('submit', calculateResults);
let result = document.querySelector('#results');
result.style.display = 'none';
let load = document.querySelector('#loader');
load.style.display = 'none';
function calculateResults(e) {

    let amount = document.querySelector('#amount');
    let interest = document.querySelector('#interest');
    let years = document.querySelector('#years');
    let monthly = document.querySelector('#monthly');
    let total = document.querySelector('#total');
    let totalInterest = document.querySelector('#t-interest');

    let p = parseFloat(amount.value);
    let calInterest = parseFloat(interest.value)/100/12;
    let calPayments = parseFloat(years.value) * 12;

    let x = Math.pow(1 + calInterest, calPayments);
    let month = (p * x * calInterest)/(x - 1);
    
    if(isFinite(month)) {
        monthly.value = month.toFixed(3);
        total.value = (month * calPayments).toFixed(3);
        totalInterest.value = ((month * calPayments) - p).toFixed(3);
        amount.value = undefined;
        interest.value = undefined;
        years.value = undefined;        
        result.style.display = 'none';

        load.style.display = 'block';
        setTimeout(function(){
            load.style.display = 'none';
            displayRes();
        }, 2000);
    } else {

        displayError('Please Check Data You Entered!');
        
    }

    console.log(amount.value);

    e.preventDefault();

}

function displayRes(){

    result.style.display = 'block';
    setTimeout(function(){
        result.style.display = 'none';
    }, 10000);
}

function displayError(e) {
    let eDiv = document.createElement('div');
    
    let card= document.querySelector('.card');
    let heading = document.querySelector('.heading');

    eDiv.className = 'alert alert-warning text-danger font-italic font-weight-bold';

    eDiv.appendChild(document.createTextNode(e));

    card.insertBefore(eDiv, heading);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2500);
}