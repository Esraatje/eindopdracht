console.log("hallo wereld")

var jongenBtn = document.querySelector("#jongen"); //hier zijn alle variabelen geschreven
var meisjeBtn = document.querySelector("#meisje");
var blauw = document.querySelector("#blauw");
var geel = document.querySelector("#geel");
var roze = document.querySelector("#roze");
var makenDiv = document.querySelector('#maken');
var kiezenDiv = document.querySelector('#planeetkiezen');
var alienstate;
var alien1 = document.querySelector("#alien1");

jongenBtn.addEventListener("click", changeGenderToBoy); //vanaf deze regel tot regel 64 geldt de code voor het veranderen van de kleur en gender van de alien
function changeGenderToBoy() {
    alien1.src = "images/alien_man_groen.png";
    alienstate = "jongen";
}

meisjeBtn.addEventListener("click", changeGenderToGirl);

function changeGenderToGirl() {
    alien1.src = "images/alien_vrouw_groen.png";
    alienstate = "meisje";
}

blauw.addEventListener("click", changeColor);
function changeColor(){
    if (alienstate == "jongen"){
        alien1.src = "images/alien_man_blauw.png";
    } else {
        alien1.src = "images/alien_vrouw_blauw.png";
    }    
}

roze.addEventListener("click", changeColor2);
function changeColor2(){
    if (alienstate == "jongen"){
        alien1.src = "images/alien_man_roze.png";
    } else {
        alien1.src = "images/alien_vrouw_roze.png";
    }    
}

geel.addEventListener("click", changeColor3);
function changeColor3(){
    if (alienstate == "jongen"){
        alien1.src = "images/alien_man_geel.png";
    } else {
        alien1.src = "images/alien_vrouw_geel.png";
    }    
}

groen.addEventListener("click", changeColor4);
function changeColor4(){
    if (alienstate == "jongen"){
        alien1.src = "images/alien_man_groen.png";
    } else {
        alien1.src = "images/alien_vrouw_groen.png";
    }    
}

planeetkiezenknop.addEventListener("click", kiesplaneet); // met deze knop ga je door naar de volgende pagina
function kiesplaneet(){
    console.log("kiesplaneet")
    // maken verbergen
    makenDiv.hidden = true
    // planeet kiezen tonen
    kiezenDiv.hidden = false
}











