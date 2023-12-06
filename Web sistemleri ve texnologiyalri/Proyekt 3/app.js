var clock = 10;

var countdownId = 0;

start();

function start() {
  //Start clock

  countdownId = setInterval("countdown()", 100);
}

function countdown() {
  if (clock < 100) {
    clock = clock + 1;

    document.getElementById("nums").innerHTML = clock;
  } else {
    //Stop clock
    
    clearInterval(countdownId);
  }
}
