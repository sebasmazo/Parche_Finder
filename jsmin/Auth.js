function login(){if(validar()){let e=document.getElementsByName("credenciales");if("undefined"!=typeof Storage)if(null!=localStorage.getItem("user")){let t=JSON.parse(localStorage.getItem("user"));t.username==e.item(0).value&&t.password==e.item(1).value?(alert("Bienvenido, "+e.item(0).value),window.location.href="./Browser.html"):alert("Datos no encontrados, por favor registrese o verifique sus datos")}else alert("datos no encontrados, por favor registrese o verifique sus datos");else alert("Este navegador no soporta WebStorage")}else alert("Ingrese sus datos para continuar o registrese si aún no lo ha hecho")}function register(){if(validarReg()){let t=document.getElementsByName("credencialesreg");alert("Bienvenido, "+t.item(0).value);var e={};if(e.username=t.item(0).value,e.email=t.item(1).value,e.password=t.item(5).value,e.phone=t.item(2).value,e.tipoId=t.item(3).value,e.Id=t.item(4).value,"undefined"!=typeof Storage){localStorage.user=JSON.stringify({username:e.username,email:e.email,password:e.password,Id:e.Id});JSON.parse(localStorage.user)}else alert("Este navegador no soporta WebStorage");window.location.href="Browser.html"}else alert("Por favor ingrese los datos necesarios para su registro")}function validarReg(){return miCampoTexto=document.getElementById("username").value,miPassTexto=document.getElementById("password").value,IdTexto=document.getElementById("Identificacion").value,EmailTexto=document.getElementById("email").value,PhoneTexto=document.getElementById("phone_number").value,0!=miCampoTexto.length&&0!=miPassTexto.length&&0!=IdTexto.length&&0!=EmailTexto.length&&0!=PhoneTexto.length}function validar(){return miCampoTexto=document.getElementById("username").value,miPassTexto=document.getElementById("password").value,0!=miCampoTexto.length&&0!=miPassTexto.length}