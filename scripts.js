

sum = (a, b) => a + b;

substract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

function operator(operator, a, b){
    if (operator === '+'){
        return sum(a,b);
    }
    else if (operator === '-'){
        return substract(a,b);
    }
    else if (operator === '*'){
        return multiply(a,b);
    }
    else if (operator === '/'){
        return divide(a,b);
    }
}

const displayedNumber = document.getElementById("displayedNumber");
window.addEventListener('keydown', function (e) {
    actions(e.key);
    console.log(e.key);
});

let currentNumber = 0;
let operatorSign = 0;

function actions(key){
    if (key >= 0 || key <= 9) {
        if (displayedNumber.innerText == "0"){
            displayedNumber.innerText = displayedNumber.innerText.slice(0, -1);
        }

        if (displayedNumber.innerText.length < 28) {
            displayedNumber.innerText = displayedNumber.innerText + key;
        }
    }

    if (key === 'Backspace'){
        displayedNumber.innerText = displayedNumber.innerText.slice(0, -1);
        if(displayedNumber.innerText == ""){
            displayedNumber.innerText = "0";
        }
    }

    if (key === 'Clear'){
        clearScreen();
        currentNumber = 0;
    }

    if (key === '+' || key === '-' || key === '*' || key === '/'){
        if(operatorSign != 0){
            currentNumber = operator(operatorSign, currentNumber, parseInt(displayedNumber.innerText));
            displayedNumber.innerText = currentNumber;
            operatorSign = 0;
        }
        operatorSign = key;
        currentNumber = parseInt(displayedNumber.innerText);
        clearScreen();
    }
    

    if (key === '='){
        currentNumber = operator(operatorSign, currentNumber, parseInt(displayedNumber.innerText));
        displayedNumber.innerText = currentNumber;
        operatorSign = 0;
     }
}

function clearScreen(){
    displayedNumber.innerText = "0";

}

