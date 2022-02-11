// var settings = document.querySelector(".settings");
var settings = document.getElementById('settings');
// if(settings)
// {
//     console.log("aok");
//     settings.addEventListener('click',rec,false);
    
// }
// // var user = document.querySelector(".user");

// function rec() {
//     var settingsrec = new Hammer(settings);
//     settingsrec.on("panleft panright tap press", function (ev) {
//         if (ev.type == "tap") {
//             alert("Tap en settings")
//         }
//     });
// }
var hammertime = new Hammer(settings);
hammertime.on('pan', function(ev) {
	console.log(ev);
});
// var settingsrec = new Hammer(settings);
// var userrec = new Hammer(user);
// function rec() {
//     settingsrec.on("panleft panright tap press", function (ev) {
//         if (ev.type == "tap") {
//             alert("Tap en settings")
//         }
//     });
// }

// userrec.on("panleft panright tap press", function (ev) {
//     if (ev.type == "tap") {
//         alert("Tap en user")
//     }
// });
