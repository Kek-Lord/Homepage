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

var quotes = [
  "You have passed through life without an opponent—no one can ever know what you are capable of, not even you. - Seneca",
  "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too. - Marcus Aurelius",
  "The one who puts the finishing touches on their life each day is never short of time. - Marcus Aurelius",
  "Begin at once to live, and count each separate day as a separate life. - Seneca",
  "It's time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet. - Marcus Aurelius",
  "Whatever can happen at any time can happen today. - Seneca",
  "They lose the day in expectation of the night, and the night in fear of the dawn. - Seneca",
  "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside. - Marcus Aurelius",
  "A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned. - Naval Ravikant",
  "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. - Marcus Aurelius",
  "Think of the life you have lived until now as over and, as a dead man, see what's left as a bonus and live it according to Nature. - Marcus Aurelius",
  "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
  "You could leave life right now. Let that determine what you do and say and think. - Marcus Aurelius"
]

numberOfQuotes = quotes.length;

function newQuote() {
  var randomNumber = Math.floor(Math.random() * numberOfQuotes);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}