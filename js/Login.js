function Login() {
    if(validar()==true){
        var credenciales = document.getElementsByName("credenciales")
        alert("Bienvenido, " + credenciales.item(0).value)
        window.location.href="Browser.html"
    }else{
        alert("Ingrese sus datos para continuar o registrese si aún no lo ha hecho")
    }
 
}
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        Login();
    }
}
function validar() {
    //obteniendo el valor que se puso en campo text del formulario
    miCampoTexto = document.getElementById("username").value;
    miPassTexto = document.getElementById("password").value;
    //la condición
    if (miCampoTexto.length == 0 || miPassTexto.length==0) {
        return false;
    }
    return true;
}

