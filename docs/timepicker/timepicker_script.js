var time_picker_element = document.querySelector('.time-picker');

var hr_element = document.querySelector('.time-picker .hour .hr');
var min_element = document.querySelector('.time-picker .minute .min');
var sec_element = document.querySelector('.time-picker .second .sec');

var hr_up = document.querySelector('.time-picker .hour .hr-up');
var hr_down = document.querySelector('.time-picker .hour .hr-down');

var min_up = document.querySelector('.time-picker .minute .min-up');
var min_down = document.querySelector('.time-picker .minute .min-down');

var sec_up = document.querySelector('.time-picker .second .sec-up');
var sec_down = document.querySelector('.time-picker .second .sec-down');

//let d = new Date();

let hour = 0;//d.getHours();
let minute = 0;//d.getMinutes();
let second = 0;//d.getSeconds();


setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

sec_up.addEventListener('click', second_up);
sec_down.addEventListener('click', second_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);
sec_element.addEventListener('change', second_change);

function hour_change (e) {
	if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = timePickerFormatTime(hour);
	}else{
		e.target.value = timePickerFormatTime(e.target.value);
	}

	hour = e.target.value;
}


function minute_change (e) {
	if(e.target.value > 59) {
		e.target.value = '59'
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = timePickerFormatTime(minute);
	}else{
		e.target.value = timePickerFormatTime(e.target.value);
	}

	minute = e.target.value;
}

function second_change (e) {
	console.log(e.target.value);
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = timePickerFormatTime(second);
	}else{
		e.target.value = timePickerFormatTime(e.target.value);
	}
	second = e.target.value;
	console.log(second);
}


function hour_up() {
	hour++;
	setTime();
}

function hour_down() {
	hour--;
	if(hour < 0) {
		hour = 0;
	}
	setTime();
}

function minute_up () {
	minute++;
	if(minute > 59) {
		minute = 0;
		hour++;
	}
	setTime();
}
function minute_down() {
	minute--;
	if (minute < 0) {
		minute = 59;
		if(hour > 0)
		{
			hour--;	
		}
	}
	setTime();
}

function second_up () {
	second++;
	if (second > 59) {
		second = 0;
		minute++;
		if(minute > 59)
		{
			minute = 0;
			hour++;
		}
	}
	setTime();
}
function second_down() {
	second--;
	if (second < 0) {
		second = 59;
		if(minute > 0)
		{
			minute--;
		}else if(hour > 0)
		{
			hour--;
			minute = 59;
		}
	}
	setTime();
}

function setTime () {
	min_element.value = timePickerFormatTime(minute);
	sec_element.value = timePickerFormatTime(second);
	hr_element.value = timePickerFormatTime(hour);
	time_picker_element.dataset.time = timePickerFormatTime(hour) + ':' + timePickerFormatTime(minute) + ':' + timePickerFormatTime(second);
}

function timePickerFormatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	if(time.length > 2)
	{
		time = time.substring(time.length-2,time.length);
	}
	return time;
}
