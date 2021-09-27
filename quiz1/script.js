function changeColor() {
	var x = document.getElementById("myname");
	if(x.style.color == "red") {
		x.style.color = "green"
	} else if(x.style.color == "green") {
		x.style.color = "blue";
	} else if(x.style.color == "blue") {
		x.style.color = "purple";
	} else {
		x.style.color = "red";
	}
}

function changeText() {
	var x = document.getElementById("myquotes");
	if(x.innerHTML == "\"Don't forget to be grateful today!\"") {
		x.innerHTML = "\"Everyday is a new victory.\"";
	} else if(x.innerHTML == "\"Everyday is a new victory.\"") {
		x.innerHTML = "\"Don’t be afraid to fail! Be afraid not to try!\"";
	} else if(x.innerHTML == "\"Don’t be afraid to fail! Be afraid not to try!\"") {
		x.innerHTML = "\"Your mistake is your best teacher.\"";
	} else if(x.innerHTML == "\"Your mistake is your best teacher.\"") {
		x.innerHTML = "\"Find yourself, and be that!\"";
	} else if(x.innerHTML == "\"Find yourself, and be that!\"") {
		x.innerHTML = "\"Live is a precious gift. Use your days wisely!\"";
	} else {
		x.innerHTML = "\"Don't forget to be grateful today!\"";
	}
}