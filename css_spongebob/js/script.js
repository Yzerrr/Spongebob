var openMouth = document.querySelector(".open-mouth audio");
var titleSong = document.querySelector(".titleSong audio");
var pratendeMond = document.querySelector(".open-mouth");

// left tooth on mouseover
var tooth = document.querySelector(".tooth.right");
var toothSound = document.querySelector(".tooth.right audio");
tooth.addEventListener("mouseover", function () {
    toothSound.play();

});
// right tooth on click
//add class mouthOpen t
//start mp3 
var toothLeft = document.querySelector(".tooth.left");
toothLeft.addEventListener("click", function () {
    document.body.classList.add("mouthOpen");
    openMouth.play()

});

pratendeMond.addEventListener("animationend", doneTalking);
// remove  class mouthOpen 
function doneTalking() {
    document.body.classList.remove("mouthOpen");
    titleSong.play();
}


document.onkeydown = function (eyeColor) {
    var list = document.querySelectorAll(".eye");
    switch (eyeColor.keyCode) {

        case 40:
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove("active-gray");
                list[i].classList.remove("active-white");
                list[i].classList.add("active-red");
            }
            break;
        case 38:
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove("active-red");
                list[i].classList.remove("active-white");
                list[i].classList.add("active-gray");
            }
            break;

        case 32:
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove("active-red");
                list[i].classList.remove("active-gray");
                list[i].classList.add("active-white");
            }
            break;
    }
};

//  backgroundColor
var btnBackground = document.querySelector(".btnChange");

btnBackground.addEventListener("click",
    function changeBackground() {
        var body = document.getElementsByTagName("body")[0];

        color = document.querySelector("#bgInput").value;
        switch (color) {
            case 'red':
                body.style.backgroundColor = color;
                break;
            case 'green':
                body.style.backgroundColor = color;
                break;
            case 'blue':
                body.style.backgroundColor = color;
                break;
            case 'pink':
                body.style.backgroundColor = color;
                break;
            case 'yellow':
                body.style.backgroundColor = color;
                break;
            case 'black':
                body.style.backgroundColor = color;
                break;
            default:
                body.style.backgroundColor = '';
        }
    });




// array of available colors
var colors = ['darkgreen', 'yellow', 'red', 'olivedrab', 'pink', 'blue'];

var greenHoles = Array.from(document.querySelectorAll('.btn'));

greenHoles.forEach((greenHole) => {
    greenHole.addEventListener("click", function () {
        var color = colors[Math.floor(Math.random() * colors.length)];
        greenHole.style.backgroundColor = color;

        console.log(color, greenHole)
    })
});

// option button toggle
var options = document.querySelector(".options");

options.addEventListener("click",
    function options() {
        var menu = document.getElementById("buttons");
        menu.classList.toggle("none");
    });