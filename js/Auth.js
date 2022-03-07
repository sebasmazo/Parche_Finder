
function login() {
    if(validar()){
        let credenciales = document.getElementsByName("credenciales") //Cambiar a let
        if (typeof(Storage) !== "undefined") {
            if(localStorage.getItem("user")!=null){ //Implementar autenticación con datos en localStorage
                let CREDENCIALES = JSON.parse(localStorage.getItem("user"))
                
                if(CREDENCIALES.username == credenciales.item(0).value && CREDENCIALES.password == credenciales.item(1).value){
                    alert("Bienvenido, " + credenciales.item(0).value)
                    window.location.href="./Browser.html"
                }else{
                    alert("Datos no encontrados, por favor registrese o verifique sus datos")
                }
            }else{
                alert("datos no encontrados, por favor registrese o verifique sus datos")
            }
            
        } else {
            // Sorry! No Web Storage support..
            alert("Este navegador no soporta WebStorage")
        }
        
        
    }else{
        alert("Ingrese sus datos para continuar o registrese si aún no lo ha hecho")
    }
}
function register(){
    if(validarReg()){
        let infoUsuario = document.getElementsByName("credencialesreg")
        alert("Bienvenido, " + infoUsuario.item(0).value)
        var persona={};
        persona.username = infoUsuario.item(0).value
        persona.email = infoUsuario.item(1).value
        persona.password=infoUsuario.item(5).value
        persona.phone=infoUsuario.item(2).value
        persona.tipoId=infoUsuario.item(3).value
        persona.Id=infoUsuario.item(4).value
        if (typeof(Storage) !== "undefined") {
            localStorage.user = JSON.stringify({username: persona.username, email: persona.email, password: persona.password, Id: persona.Id})
            let user = JSON.parse(localStorage.user)
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

