var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString();
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


var navigationMenu = document.getElementById("leftcolumn")

function openNav() {
  if(navigationMenu.style.opacity == 1) {
    navigationMenu.style.opacity = 0;
  } else {
    navigationMenu.style.opacity = 1;
  }
}