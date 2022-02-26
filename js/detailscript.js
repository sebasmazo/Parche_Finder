var join = document.querySelector(".unirme");
var cancel = document.querySelector(".cancelar");

var joinrec = new Hammer(join);
joinrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		alert("Tap en unirse") //funcionalidad para unirse al parche
	}
});

var cancelrec = new Hammer(cancel);
cancelrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		alert("Tap en cancelar") //funcionalidad para cambiar de vista a browser
	}
});
