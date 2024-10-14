let inputClockInHour;
let inputClockInMinute;
let inputHourlyWage;
let checkPM;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inputClockInHour.position(width / 6 - 35, height / 6 * 5 - 50);
  checkPM.position(width / 6 + 25, height / 6 * 5 - 47);
  inputClockInMinute.position((width / 6) * 3 - 25, height / 6 * 5  -50);
  inputHourlyWage.position((width / 6) * 5 - 25, height / 6 * 5 -50);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputClockInHour = createInput("");
  inputClockInHour.style("width", "50px");
  inputClockInHour.style("text-align", "center");
  inputClockInHour.position(width / 6 - 35, height / 6 * 5 - 50);
  
  
  checkPM = createCheckbox('PM');
  checkPM.position(width / 6 + 25, height / 6 * 5 - 47);
  
  
  inputClockInMinute = createInput("");
  inputClockInMinute.style("width", "50px");
  inputClockInMinute.style("text-align", "center");
  inputClockInMinute.position((width / 6) * 3 - 25, height / 6 * 5  -50);
  
  
  inputHourlyWage = createInput("");
  inputHourlyWage.style("width", "50px");
  inputHourlyWage.style("text-align", "center");
  inputHourlyWage.position((width / 6) * 5 - 25, height / 6 * 5 -50);
  textAlign(CENTER);
  textFont("Bungee");
}

function draw() {
  background(194, 225, 194);
  textSize(15);
  fill(204, 71, 71);
  text("Money made since you've clocked in:", width / 2, height / 6);
  textSize(75);
  fill(51, 115, 87);
  text(
    calculateMoney(int(inputClockInHour.value()), int(inputClockInMinute.value())),
    width / 2,
    height / 2
  );
  textSize(12);
  fill(45, 42, 50);
  text("Clock In Hour", width / 6, height / 6 * 5);
  text("Clock In Minute", (width / 6) * 3, height / 6 * 5);
  text("Hourly Wage", (width / 6) * 5, height / 6 * 5);
}

function calculateMoney(hours, minutes) {
  if (checkPM.checked()) {
    hours = hours + 12;
  }
  secondsSince = (hour() - hours) * 3600 + (minute() - minutes) * 60 + second();
  moneyMade = secondsSince * (inputHourlyWage.value() / 3600);
  return "$" + moneyMade.toFixed(2);
}
