var aumentar = false
var boxVal = window.document.querySelector('div#box')
var runnerVal = window.document.querySelector('div#runner')


boxVal.addEventListener('click', changeColor)
runnerVal.addEventListener('mouseover', dislocar)


function changeColor() {
    
    box.style.background = 'orange'
    box.style.width = '200px'
    box.style.height = '200px'

    //document.getElementById("box").style = "background-color :orange"
}
function dislocar() {
    let aleatorio1, aleatorio2 

    aleatorio1 = Math.floor(Math.random(0) * 1000);
    aleatorio2 = Math.floor(Math.random(0) * 500);
    
    runner.style = `left: ${aleatorio1}px; top: ${aleatorio2}px;`
}