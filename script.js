var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("background")
var btn = document.getElementById("random")

function length(value){
    if (value.length < 2){
        value = "0" + value;
    }
    return value
};

function randomColor(){
    var hexa, r, g, b;
    r = Math.floor(Math.random() * 255);
    r = r.toString(16)
    r = length(r)
    g = Math.floor(Math.random() * 255);
    g = g.toString(16)
    g = length(g)
    b = Math.floor(Math.random() * 255);
    b = b.toString(16)
    b = length(b)
    hexa = "#" + r + g + b;
    return hexa
}

function randomizer(){
    color1.value = randomColor();
    color2.value = randomColor();
    gradient()
}

function gradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
};

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);
btn.addEventListener("click", randomizer)