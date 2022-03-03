var regresar = document.querySelector(".regresar");

var regresarrec= new Hammer(regresar);
regresarrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		alert("Tap en Regresar") 
	}
});