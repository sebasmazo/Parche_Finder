
function Login() {
    if(validar()){
        let credenciales = document.getElementsByName("credenciales") //Cambiar a let
        alert("Bienvenido, " + credenciales.item(0).value)
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem("username",credenciales.item(0).value)
          } else {
            // Sorry! No Web Storage support..
            alert("Este navegador no soporta WebStorage")
          }
        
        window.location.href="Browser.html"
    }else{
        alert("Ingrese sus datos para continuar o registrese si aún no lo ha hecho")
    }
}
function Register(){
    if(validarReg()){
        let infoUsuario = document.getElementsByName("credencialesreg")
        console.log(infoUsuario)
        alert("Bienvenido, " + infoUsuario.item(0).value)
        var persona={};
        persona.username = infoUsuario.item(0).value
        persona.email = infoUsuario.item(1).value
        persona.password=infoUsuario.item(5).value
        persona.phone=infoUsuario.item(2).value
        persona.tipoId=infoUsuario.item(3).value
        persona.Id=infoUsuario.item(4).value
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("usuario",persona)
          } else {
            // Sorry! No Web Storage support..
            alert("Este navegador no soporta WebStorage")
          }
        window.location.href="Browser.html"
    }else{
        alert("Por favor ingrese los datos necesarios para su registro");
    }
}
function validarReg() {
    //Datos
    miCampoTexto = document.getElementById("username").value;
    miPassTexto = document.getElementById("password").value;
    IdTexto = document.getElementById("Identificacion").value;
    EmailTexto = document.getElementById("email").value;
    PhoneTexto = document.getElementById("phone_number").value;

    //la condición
    if (miCampoTexto.length == 0 || miPassTexto.length==0 || IdTexto.length==0 || EmailTexto.length==0 ||PhoneTexto.length==0) {
        return false;
    }
    return true;
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

