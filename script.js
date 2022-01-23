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
  document.getElementById('extraLinksColumn').style["animation-duration"]="1s";
  document.getElementById('extraLinksColumn').style["animation-fill-mode"]="forward";
  document.getElementById('leftColumnContent').style["animation-duration"]="1s";
  document.getElementById('leftColumnContent').style["animation-fill-mode"]="forward";
  if(mini) {
    document.getElementById('extraLinksColumn').style["animation-name"]="expand";
    document.getElementById('extraLinksColumn').style["width"]="300px";
    document.getElementById('leftColumnContent').style["animation-name"]="expand";
    document.getElementById('leftColumnContent').style["width"]="300px";
  } else {
    document.getElementById('extraLinksColumn').style["animation-name"]="collapse";
    document.getElementById('extraLinksColumn').style["width"]="0px";
    document.getElementById('leftColumnContent').style["animation-name"]="collapse";
    document.getElementById('leftColumnContent').style["width"]="0px";
  }
  mini = !mini;
}
