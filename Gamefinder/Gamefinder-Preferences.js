function alterChecked(parent, value){
	var children = parent.childNodes;
	for (var child in children){
		if(children[child].className == "dropdown-checkbox"){
			children[child].childNodes[0].checked = value;
		}
		if(children[child].className == "sub-option"){
			alterChecked(children[child],value);
		}
	}
}

function collapseSubmenu(parent){
	var children = parent.childNodes;
	for (var child in children){
		if(children[child].style.visibility == "visible"){
			children[child].style.visibility = "hidden";
			collapseSubmeu(children[child]);
		}
	}
}

function toggleSubmenu(e){
	e.stopPropogation();
	var children = e.target.childNodes;
	for(var child in children){
		if(children[child].className == "sub-option"){
			if(children[child].style.visibility == "hidden")
			{
				children[child].style.visibility = "visible";
			}
			else{
				children[child].style.visibility = "hidden";
				collapseSubmenu(children[child]);
			}
		}
	}
}

function toggleChecked(e){
	e.stopPropogation();
	alterChecked(e.target,e.target.checked); 
}

function addEventListeners(){
	var inputElements = document.getElementsByTagName("input");
	var subItems = document.getElementsByClassName("sub-option");
	var topMenuItems = document.getElementsByClassName("top-option");
	for(var inputElement in inputElements){
		if(inputElements[inputElement].type == "checkbox"){
			inputElements[inputElement].addEventListener("click",toggleChecked,false);
		}
	}
	for(var subItem in subItems){
		subItems[subItem].style.visibility = "hidden";
		subItems[subItem].addEventListener("click",toggleSubmenu,false);
	}
	for(var topMenuItem in topMenuItems){
		topMenuItems[topMenuItem].addEventListener("click",toggleSubmenu,false);
	}
}