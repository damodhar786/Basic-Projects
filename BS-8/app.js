let userInput = document.getElementById("input-area");

let expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equalTo(){
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}