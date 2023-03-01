let quote = document.getElementById("quote");
let authorName = document.getElementById("author");


let quotes = {
    "- A. P. J. Abdul Kalam": `"Life is a difficult game. You can win it only by retaining your birthright to be a person."`,

    "- Napoleon Bonaparte": `"A soldier will fight long and hard for a bit of colored ribbon."`,

    "- A Soldier": `"We live by chance, we love by choice, we kill by profession."`,

    "- Capt Manoj Kumar Pandey — PVC 1/11 Gorkha Rifles": `“Some goals are so worthy, it's glorious even to fail.”`,

    "- General JJ Singh": `"We fight to win and win with a knock out,because there are no runners up in war."`,

    "- A P J Abdul Kalam": `“Dream is not that which you see while sleeping, it is something that does not let you sleep.”`
}

let authors = Object.keys(quotes);

function generateQuotes() {
    let author = authors[Math.floor(Math.random() * authors.length)];
    console.log(author);

    quote.innerHTML = quotes[author];

    authorName.innerHTML = author;

}