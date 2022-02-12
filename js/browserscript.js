// document.open();
for (let i = 0; i < 10; i++) {
    document.querySelector('.container').innerHTML += '<div class="parche idparche"> <img class="parcheimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt=""> <div class="detail"> <h1>ParcheTitle' + i + '</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet, error aperiam corrupti saepe, doloribus officiis, praesentium explicabo quasi unde optio reiciendis hic illo necessitatibus alias culpa eum voluptate illum.</p> </div> <div class="data"> <h4 class="personas">0/20</h4> <h4 class="costo">100.000$</h4> <h4 class="ubicación">La gloria</h4> </div> </div>'
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
            parche[i].children[0].style.transform = "scale(1.2) translate(130px , 3px)";
        }
        else if (ev.type == "pressup") {
            for (let j = 1; j < parche[i].children.length; j++) {
                parche[i].children[j].style.opacity = 1;
            }
            parche[i].children[0].style.transform = "scale(1.0)";
        }
        else {
            for (let j = 1; j < parche[i].children.length; j++) {
                parche[i].children[j].style.opacity = 1;
            }
            parche[i].children[0].style.transform = "scale(1.0)";
        }
    });
}
// parcherec.on("panleft panright tap press", function (ev) {
// 	if (ev.type == "tap") {
// 		parche.style.transform = "scale(1.1)";
// 	}
// });