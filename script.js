let result= 0;
let count = 0;
let totalResult = [];

displayNumber();
function displayNumber(){
    const display = document.querySelector("#display");
    const number = document.querySelectorAll('.operand');
    const operator = document.querySelectorAll('.operator');
    let result = 0;
    number.forEach((button) =>{
        button.addEventListener('click', () =>{
            tempNum = button.textContent;
            if (result == '0'){
                result = tempNum;
            }
            else result = tempNum + result;
            display.textContent = result;
        });
    });
}
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operator, firstNum, secondNum){
    if (operator == "+")
        add(firstNum,secondNum);
    else if (operator =="-")
        subtract(firstNum,secondNum);
    else if (operator =="*")
        multiply(firstNum, secondNum);
    else if (operator =="/")
        divide(firstNum, secondNum);
}

