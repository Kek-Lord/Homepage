var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString();
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


function darkTheme()
{
    var elements = document.querySelectorAll(".bookmark, .leftcolumn, .rightcolumn, .input_box");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(34, 45,50)";
    }
}

function lightTheme()
{
    var elements = document.querySelectorAll(".bookmark, .leftcolumn, .rightcolumn, .input_box");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(218, 201, 166)";
    }
}