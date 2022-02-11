document.open();
var html = ''
for (let i = 0; i < 10; i++) {
    document.write('<div class="parche"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt=""> <div class="detail"> <h1>ParcheTitle'+i+'</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet, error aperiam corrupti saepe, doloribus officiis, praesentium explicabo quasi unde optio reiciendis hic illo necessitatibus alias culpa eum voluptate illum.</p> </div> <div class="data"> <h2 class="personas"><small>0/20</small></h2> <h2 class="costo"><small>100.000$</small></h2> <h2 class="ubicación"><small>La gloria</small></h2> </div> </div>'); 
}
document.close();