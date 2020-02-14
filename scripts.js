var clock = document.getElementById("clock");
var label = document.getElementById("label");
updateTime(clock, label);

function updateTime(clock, label) {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  /* Testing*/
  // hour = hour - 12;
  // var hour = 11;
  // var min = 40;
  // var sec = 2;

  var schedule = {
    monday: [[830, 830,"Period 0"], [915, 920,"Period 1"], [955, 1000,"Period 2"], [1035, 1040,"Chapel/Class Meeting"], 
      [1120, 1125,"Period 3"], [1205, 1210, "Period 4"], [1255, 1255,"Period 5a"], [1340, 1345, "Period 5b"], [1430, 1435, "Period 6"], [1520, 1520, "Period 7"]]
  };

  var periods = schedule.monday;

  var time = (hour * 100) + min;
  var periodNum = 0;

  for(i = 1; i < periods.length; i++)
  {
    if (time > periods[i-1][1] && time <= periods[i][0])
    {
      periodNum = i;
      break;
    }
  }
      
  var hoursToNextPeriod = Math.floor((periods[periodNum][0] - time)/ 100);
  var timeDiff = periods[periodNum][0] - time;
  var minsToNextPeriod = (timeDiff > 60) ? timeDiff - 40: timeDiff;
  var secsToNextPeriod = 60 - sec;

  clock.innerHTML = hoursToNextPeriod + " : " + minsToNextPeriod + " : " + secsToNextPeriod;
  // label.innerHTML = "Period " + periodNum + " " + time + " " + periods[periodNum];
  label.innerHTML = periods[periodNum][2];

  var timer = setTimeout(function(){ updateTime(clock, label) }, 1000 );
}
