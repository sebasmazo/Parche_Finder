function Login() {
    var credenciales = document.getElementsByName("credenciales")
    console.log(credenciales)
    alert("Bienvenido, " + credenciales.item(0).value)

}
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        Login();
    }
}
function test(){
    print(credenciales)
}
