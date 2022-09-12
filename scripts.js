

sum = (a, b) => a + b;

substract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operator = (operator, a, b) => operator(a, b);



const displayedNumber = document.getElementById("displayedNumber");
window.addEventListener('keydown', function (e) {
    actions(e.key);
});

let displayValue = 0;
let previousValue = 0;
let result = 0;

function actions(key){
    if (key >= 0 || key <= 9) {
        console.log(key);
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

    if (key === '+'){
        displayValue = parseInt(displayedNumber.innerText);
        result = operator(sum, displayValue, result);
        displayedNumber.innerText = result;
    }

    if (key === '-'){
        displayValue = parseInt(displayedNumber.innerText);
        result = operator(substract, displayValue, result);
        displayedNumber.innerText = result;
    }

    if (key === '/'){
        displayValue = parseInt(displayedNumber.innerText);
        result = operator(divide, displayValue, result);
        displayedNumber.innerText = result;
    }

    if (key === '*'){
        displayValue = parseInt(displayedNumber.innerText);
        result = operator(multiply, displayValue, result);
        displayedNumber.innerText = result;
    }

    if (key === '=' || key=== 'Enter'){
        displayedNumber.innerText = result;
    }

}

