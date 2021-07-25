var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString();
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

var today = new Date();
var time = today.getHours();
var greet;

if (time > 18) {
  greet = 'Good Evening, Anon';
} else if (time > 12) {
  greet = 'Good Afternoon, Anon';
} else if (time > 6) {
  greet = 'Good Morning, Anon';
} else if (time > 0) {
  greet = 'Late Night, Anon?'
}

var show = document.getElementById('greetingMessage');
show.textContent = greet;