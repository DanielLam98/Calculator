const display = document.querySelector('.display p');
const digitsBtn = document.querySelectorAll('.operand');
const equalBtn = document.querySelector('#equal');
const operatorBtn = document.querySelectorAll('.operators button');
const clearBtn = document.querySelector('#clear');
let value1 = 0;
let value2= 0 ;
let operatorValue = "";
let result = 0;
digitsBtn.forEach(button => button.addEventListener('click', () =>{
    displayScreen(button.textContent);
}));

document.addEventListener('keydown', (e)=>{
    (e.key === "Backspace")? display.textContent = display.textContent.slice(0,-1): 0;
    (e.key>= 0 && e.key <= 9)? displayScreen(e.key):0;
});

function displayScreen(num){
    if (display.textContent.length >= 12){ //if the result length is greater than 12, user is unable to add to display
        return;
    }
    if (num == "."){
        if (display.textContent.includes(".")){
            return;
    }}
    display.textContent += num;
}

clearBtn.addEventListener('click', () =>{
    display.textContent = "";
    value1 = 0;
    value2 = 0;
    operatorValue = "";
})

equalBtn.addEventListener('click', equalFunc);

function equalFunc(){
    //checks for value on display to operate
    if (value1 != 0 && value2 ==0 && operatorValue != "" && display.textContent != "" ){
        value2 = display.textContent;
        result = operate(operatorValue,value1,value2);
        if (result.toString().length >= 12){
            result = result.toString().slice(0,12);
        }
        display.textContent = result;
        value1= result;
        value2 = 0;
        operatorValue = "";
    }
};
operatorBtn.forEach(button => button.addEventListener('click', () =>{
    // sets value1 and operatorValue
    if (value1 == 0 && value2 == 0){
        operatorValue = button.textContent;
        value1= display.textContent;
        display.textContent = "";
    }
    // sets value2 and operates, value1 already declared
    else if(result == 0 && value2 ==0 && operatorValue != ""){ 
        value2 = display.textContent;
        result = operate(operatorValue,value1,value2);
        if (result.toString().length >= 12){
            result = result.toString().slice(0,12);
        }
        display.textContent = "";
        operatorValue = button.textContent;
        value1= result;
        value2= 0;
    }
    //calculator already computed once
    else if (value1 !=0 && result != 0 && display.textContent == "" && value2== 0){
        result = operate(operatorValue,value1,value2);
        if (result.toString().length >= 12){
            result = result.toString().slice(0,12);
        }
    }
    //calculator already omputed one or more
    else if (result != 0 &&operatorValue =="" &&value2==0 &&value1 !=0){
        value1= display.textContent;
        operatorValue = button.textContent;
        display.textContent = "";
    }

}))

function add(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
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
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            if (num2 == 0){
                return "malfunction!";
            }
            return divide(num1,num2);
        default:
            console.log('something aint right here');
    }
}