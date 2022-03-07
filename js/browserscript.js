
// document.open();
for (let i = 0; i < 10; i++) {
    document.querySelector('.container').innerHTML += '<div class="parche idparche'+i+'"> <img class="parcheimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt=""> <div class="detail"> <h1>ParcheTitle' + i + '</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet, error aperiam corrupti saepe, doloribus officiis, praesentium explicabo quasi unde optio reiciendis hic illo necessitatibus alias culpa eum voluptate illum.</p> </div> <div class="data"> <h4 class="personas">0/20</h4> <h4 class="costo">100.000$</h4> <h4 class="ubicación">La gloria</h4> </div> </div>'
    // document.write('<div class="parche idparche"> <img class="parcheimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt=""> <div class="detail"> <h1>ParcheTitle' + i + '</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet, error aperiam corrupti saepe, doloribus officiis, praesentium explicabo quasi unde optio reiciendis hic illo necessitatibus alias culpa eum voluptate illum.</p> </div> <div class="data"> <h2 class="personas"><small>0/20</small></h2> <h2 class="costo"><small>100.000$</small></h2> <h2 class="ubicación"><small>La gloria</small></h2> </div> </div>');
}
// document.close();

var parche = document.querySelectorAll(".parche");
var parcherec = [];
for (let i = 0; i < parche.length; i++) {
    parcherec[i] = new Hammer(parche[i]);
}
for (let i = 0; i < parcherec.length; i++) {
    parcherec[i].on("panleft panup pandown panright tap press pressup", function (ev) {
        if (ev.type == "press") {
            for (let j = 1; j < parche[i].children.length; j++) {
                parche[i].children[j].style.opacity = 0;
            }
            parche[i].children[0].style.transform = "scale(1.05) translate(130px , 1px)";
            parche[i].children[0].style.boxShadow = "rgb(0 0 0 / 38%) 0px 0px 14px 5px";
        }
        else if (ev.type == "pressup") {
            for (let j = 1; j < parche[i].children.length; j++) {
                parche[i].children[j].style.opacity = 1;
            }
            parche[i].children[0].style.transform = "scale(1.0)";
            parche[i].children[0].style.boxShadow = "none";
            hidedesp();
            btn.value = "OFF"
        }
        else if (ev.type == "tap"){
            alert("Vamos al parche #:"+i+" clase: "+parche[i].className); //funcionalidad de navegación
            location.replace("./detailparche.html")
        }
        else {
            for (let j = 1; j < parche[i].children.length; j++) {
                parche[i].children[j].style.opacity = 1;
            }
            parche[i].children[0].style.transform = "scale(1.0)";
            parche[i].children[0].style.boxShadow = "none";
            hidedesp();
            btn.value = "OFF"
        }
    });
}


var btn = document.querySelector(".deploy");
var desplegado = document.querySelector(".containerDesp");
desplegado.value="OFF"
btn.value = "OFF";
deployrec = new Hammer(btn);
deployrec.on("panleft panup pandown panright tap press pressup", function (ev) {
    if (ev.type == "tap") {
        if(btn.value == "OFF") {
            btn.value = "ON"
            showdesp();
        }
        else if (btn.value == "ON")
        {
            btn.value = "OFF"
            hidedesp();
        }  
    }
});


var replegado = document.querySelector(".replegado");
var desplegar = document.querySelector(".desplegado");
desplegarrec = new Hammer(desplegar);
desplegarrec.on("panleft panup pandown panright tap press pressup", function (ev) {
    if (ev.type == "tap") {
        if(desplegado.value == "OFF") {
            desplegado.value = "ON"
            showreplegado();
        }
        else if (desplegado.value == "ON")
        {
            desplegado.value = "OFF"
            hidereplegado();
        }  
    }
});


function showreplegado() {
    replegado.className = "repshowed"
    desplegar.style.display ="none"
}
function hidereplegado() {
    replegado.className = "replegado"
    desplegar.style.display ="grid"
}
function showdesp() {
    btn.style.transform = "rotate(90deg)"
    btn.src = "https://e7.pngegg.com/pngimages/1023/763/png-clipart-arrow-font-awesome-computer-icons-back-to-back-angle-logo.png"
    desplegado.className = "showedcontainer"
    desplegado.style.transform = "scale(1.0)" 
}
function hidedesp() {
    btn.style.transform = "rotate(-90deg)"
    btn.src = "https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-svg-png-icon-download-1.png"
    desplegado.style.transform = "scale(0)"
    desplegado.className = "containerDesp"
    hidereplegado();
    desplegado.value = "OFF"
}

//header touch exit
var header = document.querySelector(".header");
headerrec = new Hammer(header);
headerrec.on("panleft panup pandown panright tap press pressup", function (ev) {
    hidedesp();
    btn.value = "OFF"
});   
//crear parche touch exit
var crearparche = document.querySelector(".crear");
crearpacherrec = new Hammer(crearparche);
crearpacherrec.on("panleft panup pandown panright tap press pressup", function (ev) {
    hidedesp();
    btn.value = "OFF"
    //funcion para ir a crear parche
});   
var idaux;
function getId() {
    idaux = document.getElementById("codigo-parche").value
    setId(idaux)    
}
function setId(id){
    sessionStorage.setItem("parcheid",id)
}
function generateRandomString(num) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= Math.random().toString(36).substring(0,num);       

    return result1;
}
var idparches=[]
function addParcheList(id) {
    if(localStorage.getItem('idParches') != null){
        idparches = JSON.parse(localStorage.getItem('idParches'))
        idparches.push(id)
        localStorage.setItem('idParches',JSON.stringify(idparches))
        alert("Te has unido exitosamente")
    }else{
        idparches.push(id)
        localStorage.setItem('idParches',JSON.stringify(idparches))
        alert("Te has unido exitosamente")
    }
}
