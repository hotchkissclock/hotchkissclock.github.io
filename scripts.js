var clock = document.getElementById("clock");
var label = document.getElementById("label");
updateTime(clock, label);

function updateTime(clock, label) {
  var date = new Date();
  var hour = date.getHours();
  // hour = (hour > 12) ? (hour - 12) : hour;
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var periods = [0, 830, 920, 1520];

  var time = (hour * 100) + min;
  var periodNum = 0;

  for(i = 0; i < periods.length; i++)
  {
    if (time > periods[i])
    {
      periodNum = i;
      break;
    }
  }
      

  clock.innerHTML = hour + " : " + min + " : " + sec;
  label.innerHTML = "Period " + periodNum + " " + time;

  var timer = setTimeout(function(){ updateTime(clock, label) }, 1000 );
}
