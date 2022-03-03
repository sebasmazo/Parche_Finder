var regresar = document.querySelector(".regresar");

var regresarrec= new Hammer(regresar);
regresarrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		window.location.href="./Settings.html"
	}
});