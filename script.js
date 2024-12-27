//your JS code here. If required.
let timerdisplay = document.getElementById("timer");

let currDate = new Date();

setInterval()
	function(){
		currDate = new Date();
		timerdisplay.innerHTML = currDate.toLocaleString();
	},
	1000
);