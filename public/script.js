console.log("Script running");
let timer;
let seconds = 0;
let minutes = 0;
let counting = false;
let hit = false;
let style = 1;
async function start(){
	document.getElementById('time').textContent = "0:00";
	counting = true;
	document.getElementById('mainBtn').textContent = "Stop";
	document.getElementById('mainBtn').onclick= stop;
	hit = true;
	timer = setInterval(count,1000);
}
async function stop(){
	counting = false;
	seconds = 0;
	minutes = 0;
	clearTimeout(timer);
	hit = false;
	console.log('stopped');
	document.getElementById('mainBtn').textContent = "Start";
	document.getElementById('mainBtn').onclick= start;
}
function count(){
	if(counting){
		console.log('counting');
		seconds++;
		if(seconds < 10){
		document.getElementById('time').textContent = minutes + ":0" + seconds;
		}
		else{
			document.getElementById('time').textContent = minutes + ":" + seconds;
		}
		if(seconds >= 60){
			minutes++;
			seconds = 0;
			document.getElementById('time').textContent = minutes + ":0" + seconds;
		}
	}
}

document.onkeydown = function (e) {
	let keyCode = e.keyCode;
	if(keyCode == 32) {
		if(hit == false){
			start();
		}
		else{
			stop();
		}

	}
};


function changeColor(){
	if(style < 10){
		style++
		document.getElementById('colors').href = "style" + style + ".css";	
	}
	else{
		style = 1;
		document.getElementById('colors').href = "style" + style + ".css";	
	}
}
