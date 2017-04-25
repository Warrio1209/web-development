function populateWeekPlanner(){
	var week = document.getElementsByClassName("week")[0];
	var daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var hours = ["12:00am","1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm"];
	var hourClass = document.createElement("div");
	hourClass.className = "hour-titles";
	for(var hourElement in hours){
		var hourTitle = document.createElement("P");
		hourTitle.appendChild(document.createTextNode(hours[hourElement]));
		hourClass.appendChild(hourTitle);
	}
	week.appendChild(hourClass);
	for(var dayname in daynames){
		var day = document.createElement("div");
		day.className = "day";
		var weekdayTitle = document.createElement("P");
		weekdayTitle.appendChild(document.createTextNode(daynames[dayname]));
		day.appendChild(weekdayTitle);
		week.appendChild(day);
		for(var hourname in hours){
			var hourContainer = document.createElement("div");
			hourContainer.className = "hour-container";
			var hour = document.createElement("INPUT");
			hour.setAttribute("type","checkbox");
			hour.setAttribute("name","hour");
			hour.setAttribute("value", daynames[dayname] + " " + hours[hourname]);
			hourContainer.addEventListener("click",hourColorToggle,false);
			hourContainer.appendChild(hour);
			day.appendChild(hourContainer);
		}
	}
}


function hourColorToggle(e){
	if(e.target.className == "hour-container"){
		e.target.className = "clicked-hour-container";
	}
	else{
		e.target.className = "hour-container";
	}
}