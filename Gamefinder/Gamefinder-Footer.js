function calculateTimeSince(date){
	var timeSince = new Date() - date;
	var timeString = timeSince + " Milliseconds";
	var timeNames = [" Second"," Minute"," Hour"," Day"," Week"," Year"];
	var timeDivisor = [1000,60,60,24,7,52];
	for(var timeSize in timeNames){
		if(timeSince/timeDivisor[timeSize] >= 1){
			timeSince = timeSince/timeDivisor[timeSize];
			timeString = Math.floor(timeSince) + timeNames[timeSize];
		}
		else{
			break;
		}
	}
	if(timeSince >= 2){
		timeString += "s";
	}
	return timeString;
}

function updateFooterTimeSince(){
	var timeSinceUpdate = document.getElementById("time-since-last-update");
	var funcReturn = calculateTimeSince(new Date(2017,04,12,23,59,59,999));
	timeSinceUpdate.innerText = "Time since last update: " + funcReturn;
}