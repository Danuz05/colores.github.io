const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const color = document.querySelector(".color");
const count = document.querySelector(".rgb");
const input = document.querySelector(".input")
const container = document.querySelector(".container")

let rojo = 0;
let verde = 0;
let azul = 0;

color.style.backgroundColor = "rgb(0,0,0)";
count.textContent = color.style.backgroundColor

function cambiarRojo() {
    if (rojo == 0) {
        rojo = 127
    } else if (rojo == 127) {
        rojo = 255;
    } else {
        rojo = 0;
    }
    color.style.backgroundColor = "rgb(" + rojo + "," + verde + "," + azul + ")"
    count.textContent = color.style.backgroundColor
}

function cambiarVerde() {
    if (verde == 0) {
        verde = 127;
    } else if (verde == 127) {
        verde = 255
    } else {
        verde = 0;
    }
    color.style.backgroundColor = "rgb(" + rojo + "," + verde + "," + azul + ")"
    count.textContent = color.style.backgroundColor
}

function cambiarAzul() {
    if (azul == 0) {
        azul = 127;
    } else if (azul == 127) {
        azul = 255;
    } else {
        azul = 0
    }
    color.style.backgroundColor = "rgb(" + rojo + "," + verde + "," + azul + ")"
    count.textContent = color.style.backgroundColor
}

function reset() {
    color.style.backgroundColor = "rgb(0,0,0)";
    rojo = 0
    verde = 0
    azul = 0
    count.textContent = color.style.backgroundColor
    input.value = "rgb(0,0,0)"
}

document.addEventListener("click", (e) => {
    if (e.target == container) {
        color.style.backgroundColor = input.value
        count.textContent = color.style.backgroundColor
    }
})