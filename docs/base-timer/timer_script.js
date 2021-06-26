// Credit: Mateusz Rybczonec

//let TIME_LIMIT = prompt("Enter time in seconds:");
let TIME_LIMIT = 1000;
const FULL_DASH_ARRAY = 283;
let WARNING_THRESHOLD = 1000;
let ALERT_THRESHOLD = 500;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    },
    paused: {
        color: "blue"
    }
};

var alarmSound = document.getElementById("alarmSound");
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
let paused = false;
let timerStarted = false;
let timerDone = false;


/*
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
  ${formatTime(timeLeft)}
  </span>
</div>
`;
*/

//startTimer();




function timerReset() {
    clearInterval(timerInterval);
    timerStarted = false;
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    // set color back to green
    document
        .getElementById("base-timer-path-remaining")
        .classList.remove("red");
    document
        .getElementById("base-timer-path-remaining")
        .classList.remove("orange");
    document
        .getElementById("base-timer-path-remaining")
        .classList.add("blue");
    // reset time
    document.getElementById("base-timer-label").innerHTML = formatTime(TIME_LIMIT);

    paused = true;
    $("#base-start-label").show();

    // reset ring
    setCircleDasharray();

}

function loadTimer(time) {
    TIME_LIMIT = time;
    WARNING_THRESHOLD = time / 2;
    ALERT_THRESHOLD = time / 4;
    document.getElementById("base-timer-label").innerHTML = formatTime(time);
    $(".base-timer").show();
}

function onTimesUp() {
    timerDone = true;
    clearInterval(timerInterval);
    setCircleBack()
    alarmSound.load();
    alarmSound.play();
}

function pressTimer() {
    // check if timer is done
    if (timerDone) {
        timerDone = false;
        alarmSound.pause();
        timerReset();
    }
    // check if timer has been started
    else if (!timerStarted) {
        startTimer()

    } else {
        if (paused) {
            paused = false;
            runTimer();
            $("#base-start-label").hide();
        } else {
            paused = true;
			clearInterval(timerInterval);
            $("#base-start-label").show();
        }
    }
}

function startTimer() {
	timerStarted = true;
	paused = false;
	runTimer();
	$("#base-start-label").hide();
	document
		.getElementById("base-timer-path-remaining")
		.classList.remove("blue");
	document
		.getElementById("base-timer-path-remaining")
		.classList.add("green");
}

function runTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
        }

    }, 10);
}

function formatTime(time) {
    time = time + 99;
    const minutes = Math.floor(time / 6000);
    let seconds = parseInt((time / 100) % 60);
    let hunreth = time % 100;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (hunreth < 10) {
        hunreth = `0${hunreth}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= ALERT_THRESHOLD) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= WARNING_THRESHOLD) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

function setCircleBack() {
    const circleDasharray = `283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}