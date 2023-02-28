let button = document.getElementById("btn");
console.log(button);
let hexCode = document.querySelector(".hex-code");

let view = document.getElementsByTagName("body")[0];
console.log(view);

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function colorChange() {
    let hexColor = '';
    for (let i = 0; i < 6; i++) {
        let code = Math.floor(Math.random() * hex.length);
        hexColor += hex[code];
    }

    view.style.backgroundColor = "#" + hexColor;
    hexCode.innerHTML = hexColor;
}