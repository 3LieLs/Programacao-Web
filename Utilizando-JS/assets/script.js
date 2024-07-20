//

var aumentar = false
var boxVal = window.document.querySelector('div#box')
var runnerVal = window.document.querySelector('div#runner')
var tamanhoVal = window.document.querySelector('div#tamanho')


boxVal.addEventListener('click', changeColor)
runnerVal.addEventListener('mouseover', dislocar)
tamanhoVal.addEventListener('click', aumentarDiminuir)


function changeColor() {
    let cor1, cor2, cor3

    cor1 = Math.floor(Math.random(0) * 255);
    cor2 = Math.floor(Math.random(0) * 255);
    cor3 = Math.floor(Math.random(0) * 255);

    box.style.background = `rgb(${cor1}, ${cor2}, ${cor3})`
}

function dislocar() {
    let aleatorio1, aleatorio2

    aleatorio1 = Math.floor(Math.random(0) * 1000); 
    aleatorio2 = Math.floor(Math.random(0) * 500);

    runner.style = `left: ${aleatorio1}px; top: ${aleatorio2}px;`
}

function aumentarDiminuir() {
    let altura, comprimento

    altura = Math.floor(Math.random(0) * 200);
    comprimento = Math.floor(Math.random(0) * 200);

    comprimento = comprimento + 50
    altura = altura + 50

    tamanho.style = `width: ${comprimento}px; height: ${altura}px;`
}