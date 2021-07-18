let tick_ref = undefined;
let timer = 0;
let total_time = 0;

// Helper function to map value from one range to another range
function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Renders the current time to the "time_display" html element
function displayTimer() {
  let seconds = timer % 60;
  let minutes = Math.floor(timer / 60);

  let display = "Stop";

  if(minutes !== 0 || seconds !== 0) {
    display = (minutes !== 0) ? "" + minutes + ":" : ""; // check if minutes are present
    display = (seconds < 10) ? display + "0" + seconds : display + seconds; // format seconds to the output
  }

  time_display.innerHTML = display;
}

// reads the time from the input field
function getSeconds() {
  return Number(seconds.value);
}

// starts the timer, by resetting potential current timer + starting the new one
function startTimer() {
  resetTimer();
  tick_ref = setInterval(tick, 1000);
  tick();
}

// resets the timer
function resetTimer() {
  // Reset timer from last clock
  clearInterval(tick_ref);

  // Recalculate the total time
  timer = getSeconds();
  total_time = timer;


  // Render the timer
  displayTimer();

  // Reset progressbar color & position
  let html = document.getElementsByTagName('html')[0];
  html.style.cssText = "--progress-color: var(--progress-ok);";
  html.style.cssText = "--progress-position: -100%;";
}

// executed every second;
// counts down from initial value to 0;
// animates the progressbar
// color the text/progressbar
function tick() {
  if((timer <= 0)) clearInterval(tick_ref);

  displayTimer();

  let style = "";

  timer--;

  progressbarPosition = map(timer, 0, total_time, 0, 100);

  style += "--progress-position: " + (-progressbarPosition) + "%;";

  if(timer <= 0) {
    style = "--progress-position: 0%;"
  }

  // Change color
  if(timer < 30 && timer >= 10) {
    style += "--progress-color: var(--progress-warn);";
  }
  if(timer < 10) {
     style += "--progress-color: var(--progress-stop);";
  }
  // apply css changes to DOM
  let html = document.getElementsByTagName('html')[0];
  html.style.cssText = style;
}

// attaches EventListener to the buttons
function setup() {
  start.addEventListener('click', () => {
    startTimer();
  });

  reset.addEventListener('click', () => {
    resetTimer();
  });
}
