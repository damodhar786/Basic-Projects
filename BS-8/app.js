let userInput = document.getElementById("input-area");

let expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equalTo(){
    userInput.value = eval(expression);
}

function erase(){
    expression = '';
    userInput.value = expression;
}