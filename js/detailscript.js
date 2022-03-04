var join = document.querySelector(".unirme");
var cancel = document.querySelector(".cancelar");
var idparches=[""]
var joinrec = new Hammer(join);
joinrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		if(localStorage.getItem('idParches') != null){
			idParches = JSON.parse(localStorage.getItem('idParches'))
			idparches.push(sessionStorage.getItem("parcheid"))
			localStorage.setItem('idParches',JSON.stringify(idparches))
			alert("Te has unido exitosamente")
		}else{
			idparches.push(sessionStorage.getItem("parcheid"))
			localStorage.setItem('idParches',JSON.stringify(idparches))
			alert("Te has unido exitosamente")
		}
	}
});

window.onload = function(){
	document.getElementById("codigoParche").innerHTML = sessionStorage.getItem('parcheid')
}

var cancelrec = new Hammer(cancel);
cancelrec.on("panleft panright tap press", function (ev) {
	if (ev.type == "tap") {
		window.location.href="./Browser.html" //funcionalidad para cambiar de vista a browser
	}
});
