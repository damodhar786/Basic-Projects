// Fetch Date and Time

let date = new Date();

let dayNumber = date.getDay();

let hours = date.getHours();

let minutes = date.getMinutes();

let ampm = hours >= 12 ? 'PM' : 'AM';

let monthNumber = date.getMonth();

let dayOfMonth = date.getDate();

// Assign To HTML

let hour = document.getElementById("hour");

let minute = document.getElementById("minute");

let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = document.getElementById("day");
day.innerHTML = dayNames[dayNumber] + ",";

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = document.getElementById("month");
month.innerHTML = monthNames[monthNumber];

let currentDay = document.getElementById("currentDay");

// Hours and Minutes

hours = hours % 12;

hours = hours < 10 ? "0" + hours : hours;
hour.innerHTML = hours;

minutes = minutes < 10 ? "0" + minutes : minutes;
minute.innerHTML = minutes;

dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
currentDay.innerHTML = dayOfMonth;