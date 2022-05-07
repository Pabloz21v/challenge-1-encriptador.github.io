var codificadoVisual = document.querySelector("#codificadoId")
var muneco = document.querySelector("#muneco");
var datoUno = document.querySelector("#datoUno");
var datoDos = document.querySelector("#datoDos");
var botonCopiar = document.querySelector("#botonCopiar");
var rectanguloDos = document.querySelector("#rectanguloDos");
var rectanguloUno = document.querySelector("#rectanguloUno");
var preCodificacion = document.querySelector("#preCodificacion");

function visibleNoVisible(){

    muneco.classList.add("invisible");
    datoUno.classList.add("invisible");
    datoDos.classList.add("invisible");

    botonCopiar.classList.remove("botonOculto");
    botonCopiar.classList.add("botonVisible");
    codificadoVisual.classList.remove("invisible");
    rectanguloDos.classList.remove("invisible");
    rectanguloUno.classList.add("invisible");
    preCodificacion.classList.add("invisible");
}