let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displayMilliseconds = "00";
let displaySeconds = "00";
let displayMinutes = "00";
let displayHours = "00";

let interval = null; //hold setInterval() functions

let status = "Stopped";

const timeApplication = () => {
	milliseconds++;

	if (milliseconds / 100 === 1) {
		milliseconds = 0;
		seconds++;
		if (seconds / 60 === 1) {
			seconds = 0;
			minutes++;

			if (minutes / 60 === 1) {
				minutes = 0;
				hours++;
			}
		}

		//to add 0 in seconds minutes and hours
		if (seconds < 10) {
			displaySeconds = "0" + seconds.toString();
		} else {
			displaySeconds = seconds;
		}
		if (minutes < 10) {
			displayMinutes = "0" + minutes.toString();
		} else {
			displaySeconds = seconds;
		}
		if (hours < 10) {
			displayHours = "0" + hours.toString();
		} else {
			displayHours = hours;
		}
	}

	//to display on page
	document.querySelector(".hours").innerHTML = displayHours;
	document.querySelector(".minutes").innerHTML = displayMinutes;
	document.querySelector(".seconds").innerHTML = displaySeconds;
	document.querySelector(".milliseconds").innerHTML = milliseconds;
};

const start = () => {
	if (status === "Stopped" || status === "Paused") {
		interval = setInterval(timeApplication, 10);
		status = "Started";
	}
	document.getElementById("animateCircle").classList.add("addAnimation");
	document.getElementById("animateCircle").style.webkitAnimationPlayState =
		"running";
};

const pause = () => {
	if (status === "Started") {
		clearInterval(interval);
		status = "Paused";
		document.getElementById(
			"animateCircle"
		).style.webkitAnimationPlayState = status;
	}
};

const reset = () => {
	clearInterval(interval);
	milliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	displayMilliseconds = 0;
	displaySeconds = 0;
	displayHours = 0;
	displayMinutes = 0;

	status = "Stopped";
	document.querySelector(".hours").innerHTML = "00";
	document.querySelector(".minutes").innerHTML = "00";
	document.querySelector(".seconds").innerHTML = "00";
	document.querySelector(".milliseconds").innerHTML = "00";
	document.getElementById("animateCircle").classList.remove("addAnimation");
};
