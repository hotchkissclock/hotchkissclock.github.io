var clock = document.getElementById("clock");
var label = document.getElementById("label");
updateTime(clock, label);

function updateTime(clock, label) {
  var date = new Date();
  // var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  /* Testing*/
  var hour = 9;
  // var min = 40;
  // var sec = 2;

  var periods = [830, 920, 1000, 1520];

  var time = (hour * 100) + min;
  var periodNum = 0;

  for(i = 1; i < periods.length; i++)
  {
    if (time > periods[i-1] && time <= periods[i])
    {
      periodNum = i;
      break;
    }
  }
      
  var hoursToNextPeriod = Math.floor((periods[periodNum] - time)/ 100);
  var minsToNextPeriod = (periods[periodNum] > time) ? (periods[periodNum] - time - 40): (time - periods[periodNum] - 40);
  var secsToNextPeriod = 60 - sec;

  clock.innerHTML = hoursToNextPeriod + " : " + minsToNextPeriod + " : " + secsToNextPeriod;
  label.innerHTML = "Period " + periodNum; 

  var timer = setTimeout(function(){ updateTime(clock, label) }, 1000 );
}
