const display = document.querySelector('.display');


function add(a,b){
    return a+b;
}
function subract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(operator, num1,num2){
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        default:
            console.log('something aint right here');
    }
}