var settingsButton = document.getElementById("settingsButton");
$("#base-timer").hide();
$("#round-picker").hide();


var showSettings = true;
//divContent.innerHTML = timepickerHTML;

function pressStart() {
	openTimer();
}

function setRounds() {
	var newTime = formatTimeBack(hour, minute, second) * 100;
	if (newTime > 0) {
		$("#time-picker").hide();
		$("#round-picker").show();
	}
}

function pressBack() {
	timerDone = false;
	alarmSound.pause();
	timerReset();
	openSettings();
}


function openTimer() {
	var newTime = formatTimeBack(hour, minute, second) * 100;
	console.log(hour+ ":"+minute+":"+second+" " + newTime);
	if (newTime > 0) {
		$("#round-picker").hide();
		$("#base-timer").show();
		loadTimer(newTime);
		pressTimer();
		showSettings = false;
	} else {
		// notification
	}
}

function openSettings() {
	$("#base-timer").hide();
	$("#time-picker").show();
	timerReset();
	showSettings = true;
}

function clickReset() {
	if (showSettings) {
		round = 0;
		setRound();
		hour = 0;
		minute = 0;
		second = 0;
		setTime();
	} else {
		p = paused;
		timerReset();
		if (!p) {
			startTimer();
		}
	}
}

function formatTimeBack(hr, min, sec) {
	var h = parseInt(hr);
	var m = parseInt(min);
	var s = parseInt(sec);
	return s + m*60 + h *60*60;
}
