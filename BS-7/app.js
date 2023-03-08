// Fetch Date and Time

let date = new Date();
console.log(date);

let dayNumber = date.getDay();
console.log(dayNumber);

let hours = date.getHours();
console.log(hours);

let minutes = date.getMinutes();
console.log(minutes);

let ampm = hours >= 12 ? 'PM' : 'AM';
console.log(ampm);

let monthNumber = date.getMonth();

let dayOfMonth = date.getDate();
console.log(dayOfMonth)

// Assign To HTML

let hour = document.getElementById("hour");
hour.innerHTML = hours;

let minute = document.getElementById("minute");
minute.innerHTML = minutes;

let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = document.getElementById("day");
day.innerHTML = dayNames[dayNumber] + ",";

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = document.getElementById("month");
month.innerHTML = monthNames[monthNumber];

let currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayOfMonth;