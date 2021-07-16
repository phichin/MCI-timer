var round_picker_element = document.querySelector('.round-picker');

var round_element = document.querySelector('.round-picker .round .rnd');

var rnd_up = document.querySelector('.round-picker .round .round-up');
var rnd_down = document.querySelector('.round-picker .round .round-down');


let round = 1;


//setRound();

// EVENT LISTENERS
rnd_up.addEventListener('click', round_up);
rnd_down.addEventListener('click', round_down);

round_element.addEventListener('change', hour_change);


function round_up() {
	round++;
	setRound();
}

function round_down() {
	round--;
	if(round < 1) {
		round = 1;
	}
	setRound();
}

function setRound () {
	round_element.value = round;
	round_picker_element.dataset.round = round;
}
