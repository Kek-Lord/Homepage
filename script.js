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

var mini = true;
function toggleSidebar() {
  if(mini) {
    document.getElementById('extraLinksColumn').style.display="flex";
    document.getElementById('extraLinksColumn').style.width="300px";
    mini = false;
  } else {
    document.getElementById('extraLinksColumn').style.display="none";
    document.getElementById('extraLinksColumn').style.width="0px";
    mini = true;
  }
}
