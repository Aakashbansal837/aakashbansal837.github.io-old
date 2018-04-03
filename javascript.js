var contactInstance = document.getElementById("contactbutton");
contactInstance.addEventListener('click', function () {
	var childinstance  = document.getElementById("childmenu");
	if (childinstance.style.display == "none") {
	childinstance.style.display = "block";
	} else {
		childinstance.style.display ="none";
	}
});