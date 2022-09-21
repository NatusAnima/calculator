

sum = (a, b) => a + b;

substract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

operator = (operator, a, b) => operator(a, b);



const displayedNumber = document.getElementById("displayedNumber");
window.addEventListener('keydown', function (e) {
    actions(e.key);
    console.log(e.key);
});



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
        displayedNumber.innerText = 0;
        result = 0;
        displayValue = 0;
    }

}

