var settingsButton = document.getElementById("settingsButton");
$("#base-timer").hide();
$("#button-back").hide();
$("#round-picker").hide();


const SettingsState = Object.freeze({ "A_SETTINGS": 1, "B_SETTINGS": 2, "ROUNDS": 3, "TIMER": 4 });
var state = SettingsState.A_SETTINGS;
var timeA = 0, timeB = 0;
var hrA = 0, minA = 0, secA = 0, hrB = 0, minB = 0, secB = 0;

function pressStart() {
	if (state == SettingsState.A_SETTINGS) {
		timeA = formatTimeBack(hour, minute, second) * 100;
		if (timeA > 0) {
			hrA = hour;
			minA = minute;
			secA = second;
			hour = hrB;
			minute = minB;
			second = secB;
			setTime();
			document.getElementById("setting-state-label").innerHTML = "B";
			state = SettingsState.B_SETTINGS;
			$("#button-back").show();
		}
	} else if (state == SettingsState.B_SETTINGS) {
		timeB = formatTimeBack(hour, minute, second) * 100;
		if (timeB > 0) {
			$("#round-picker").show();
			$("#time-picker").hide();
			state = SettingsState.ROUNDS;
		}
	} else if (state == SettingsState.ROUNDS) {
		state = SettingsState.TIMER;
		openTimer();
	}
}

function pressBack() {
	if (state == SettingsState.B_SETTINGS) {
		hrB = hour;
		minB = minute;
		secB = second;
		hour = hrA;
		minute = minA;
		second = secA;
		setTime();
		document.getElementById("setting-state-label").innerHTML = "A";
		state = SettingsState.A_SETTINGS;
		$("#button-back").hide();
	} else if (state == SettingsState.ROUNDS) {
		hrB = hour;
		minB = minute;
		secB = second;
		hour = hrA;
		minute = minA;
		second = secA;
		setTime();
		document.getElementById("setting-state-label").innerHTML = "A";
		state = SettingsState.A_SETTINGS;
		$("#button-back").hide();
		$("#round-picker").hide();
		$("#time-picker").show();
	} else if (state == SettingsState.TIMER) {
		timerDone = false;
        alarmSound.pause();
        timerReset();
		openSettings();
		// Go to A?
		hrB = hour;
		minB = minute;
		secB = second;
		hour = hrA;
		minute = minA;
		second = secA;
		setTime();
		document.getElementById("setting-state-label").innerHTML = "A";
		state = SettingsState.A_SETTINGS;
		$("#button-back").hide();

		//
		//state = SettingsState.B_SETTINGS;
	}
}


function openSettings() {
	$("#base-timer").hide();
	$("#time-picker").show();
	timerReset();
}

function openTimer() {
	$("#round-picker").hide();
	$("#base-timer").show();
	loadTimer(timeA, timeB);
	pressTimer();

}



function clickReset() {
	if (state != SettingsState.TIMER) {
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
