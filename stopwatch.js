var button = document.getElementById('my-button');
var resetButton = document.getElementById("reset-button");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var time = 0;
var minutesCount = 1;
var myInterval = -1;
button.addEventListener("click", function(event) {
  //if paused start
  if (myInterval == -1) {
    button.innerHTML = "pause";
    myInterval = setInterval(function() {
      time++;
      if (time < 10) {
        seconds.innerHTML = "0" + time;
      } else if (time >= 10 && time < 60) {
        seconds.innerHTML = time;
      } else {
        if (minutesCount < 10) {
          minutes.innerHTML = "0" + minutesCount;
        } else {
          minutes.innerHTML = minutesCount;
        }
        seconds.innerHTML = "00";
        minutesCount++;
        time = 0; //seconds.innerHTML = time;
      }
      //seconds.innerHTML = time;
    }, 1000);
  } else {
    button.innerHTML = "start";
    clearInterval(myInterval);
    myInterval = -1;
  }
});
resetButton.addEventListener("click", function(event) {
  time = 0;
  minutesCount = 1;
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
})