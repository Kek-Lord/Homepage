var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString();
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


const select = document.querySelector("select");
const background = document.querySelector(".leftcolumn, .centercolumn, .rightcolumn");

function update(bgColor, textColor) {
  background.style.backgroundColor = bgColor;
  background.style.backgroundColor = textColor;
}

select.onchange = function() {
  ( select.value === "default" ) ? update ("rgb(218, 201, 166)","rgb(28, 28, 28)") : update("rgb(28, 28, 28)","rgb(218, 201, 166)")
}