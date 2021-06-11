
const COLOR_CODES = {
    info: {
        color: "green"
    },
    alert: {
        color: "red",
    }
};

let timePassed = 0;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.alert.color;
let paused = true;

function stopwatchReset() {
    clearInterval(timerInterval);

    timePassed = 0
    document.getElementById("base-timer-label").innerHTML = "0:00:00";
    paused = true;
    setPathColor();
}

function pressTimer() {
        if (paused) {
            paused = false;
            startStopwatch()
        } else {
            paused = true;
            clearInterval(timerInterval);
        }
    setPathColor();
}

function startStopwatch() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timePassed
        );

    }, 10);
}

function formatTime(time) {
    const minutes = Math.floor(time / 6000);
    let seconds = parseInt((time / 100) % 60);
    let hunreth = time % 100;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (hunreth < 10) {
        hunreth = `0${hunreth}`;
    }

    return `${minutes}:${seconds}:${hunreth}`;
}

function setPathColor() {
    const { alert, warning, info } = COLOR_CODES;
    if (paused) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(alert.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(info.color);
    }
}