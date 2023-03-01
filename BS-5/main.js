let counter = document.getElementById("count");
console.log(counter);

let count = 0;

function changeCounter(next) {
    count = count + next;

    if (count > 0) {
        counter.style.color = "green";
        counter.innerHTML = count;

    }
    else if (count < 0) {
        counter.style.color = "red";
        counter.innerHTML = count;
    }
    else {
        count = 0;
        counter.style.color = "black";
        counter.innerHTML = count;
    }
}