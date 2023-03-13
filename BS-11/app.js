let question = document.getElementById("question");
let answer = document.getElementById("answer");

let createBox = document.getElementsByClassName("create-box")[0];


// Display / Call the Creation Box
function createNewCard() {
    createBox.style.display = "block";
}

// Hide / Close The Creation Box
function hideCreateBox() {
    createBox.style.display = "none";
}

let flashcards = document.getElementsByClassName("flashcards")[0];

let flashcardQueries = localStorage.getItem('cardsQuery') ? JSON.parse(localStorage.getItem('cardsQuery')) : [];

flashcardQueries.forEach(divMaker);

// Create New Card
function divMaker(text, deleteThisCard) {
    let div = document.createElement("div");
    div.className = "flashcard";

    let h2_question = document.createElement("h2");
    let h2_answer = document.createElement("h2");

    h2_question.setAttribute('style', "border-top:2px solid lightgray; padding:15px; margin-top:5px");

    h2_question.innerHTML = text.ask_question;

    h2_answer.setAttribute("style", "text-align:center; display: none; color: red");
    h2_answer.innerHTML = text.feed_answer;


    div.addEventListener("click", function () {
        if (h2_answer.style.display == 'none') {
            h2_answer.style.display = 'block';
        } else {
            h2_answer.style.display = 'none';
        }
    })

    flashcards.appendChild(div);

    // Delete The Current Card

    let deleteCard = document.createElement('button');

    deleteCard.addEventListener("click", () => {
        flashcardQueries.splice(deleteThisCard, 1);
        localStorage.setItem('cardsQuery', JSON.stringify(flashcardQueries));
        window.location.reload();
    })

    deleteCard.setAttribute("style", "padding: 0 10px;border: none; outline: none; font-weight: 1000; font-size: 15px; background-color: white")

    deleteCard.innerHTML = "_"

    div.appendChild(deleteCard);
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

}

// Add New Card

function addFlashCard() {

    let flashcard_info = {
        'ask_question': question.value,
        'feed_answer': answer.value
    }

    flashcardQueries.push(flashcard_info);
    localStorage.setItem('cardsQuery', JSON.stringify(flashcardQueries));

    divMaker(flashcardQueries[flashcardQueries.length - 1]);
    question.value = '';
    answer.value = '';

    hideCreateBox();

    // if (question.value && answer.value) {
        
    // } else {

    //     let div = document.createElement("div");
    //     div.className = "flashcard";

    //     console.log(div)

    //     let h2 = document.createElement("h2");

    //     h2.setAttribute('style', "border-top:2px solid lightgray; padding:15px; margin-top:5px; background: orange");

    //     h2.innerHTML = `Please DO NOT Leave the above INPUT fields Empty`;

    //     div.appendChild(h2);

    //     flashcards.appendChild(div);
    // }
}




// Delete All Cards
function deleteAllCards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    flashcardQueries = [];
}