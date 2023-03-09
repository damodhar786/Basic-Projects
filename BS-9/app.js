let userInput = document.getElementById("userInput");

let groceryList = document.getElementById("grocery-list");

let clearList = document.getElementById("clear");

let indexNo = 1;

userInput.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        addList();
        indexNo++;
    }
})

function addList() {
    let h3 = document.createElement('h3');

    h3.innerHTML = indexNo + ". " + userInput.value;

    h3.addEventListener("click", function () {
        h3.style.textDecoration = "line-through";
    })

    groceryList.insertAdjacentElement("beforeend", h3);

    userInput.value = '';
}

clearList.addEventListener("click", function () {
    groceryList.innerHTML = '';
    indexNo = 1;
})
