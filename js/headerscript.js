var settings = document.querySelector(".settings");
var user = document.querySelector(".user");


var settingsrec = new Hammer(settings);
settingsrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		window.location.href = "./Settings.html"; //funcionalidad para cambiar de vista
	}
});

var userrec = new Hammer(user);
userrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		window.location.href="./Perfil.html" //funcionalidad para cambiar de vista
	}
});
