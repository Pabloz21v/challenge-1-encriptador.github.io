var botonEncriptar = document.querySelector("#botonEncriptar")

var codificadoVisual = document.querySelector("#codificadoId")


botonEncriptar.addEventListener("click",function(event) {
    event.preventDefault();
   
    var textoNuevo = document.querySelector("#textoNuevo");
    var encriptando = textoNuevo.value.split("")

    // restringe letras mayuscula
    var restricciones = 0
    for (let i = 0; i < encriptando.length; i++) {
        if (encriptando[i] !== encriptando[i].toLowerCase()) {
            restricciones = restricciones + 1
        }
    }
   
    // no debera contener signos especiales
    var restricciones2 = 0
    var expresion = /\W/g;
    var hallados = textoNuevo.value.match(expresion)
    if (hallados == null) {
        restricciones2 = 0
    } else {
        restricciones2 = hallados.length
    }

    // resta signos basicos de escritura q fueron sumados en restricciones2
    var restricciones3 = 0
    for (let i = 0; i < encriptando.length; i++) {
        if (encriptando[i] === " " || encriptando[i] === "," || encriptando[i] === "!"|| encriptando[i] === "!" || encriptando[i] === "."|| encriptando[i] === "?"|| encriptando[i] === "¿"|| encriptando[i] === '"'){
            restricciones3 = restricciones3 - 1
        }
    }


    var restriccionesFin = restricciones + restricciones2 + restricciones3

     // revisa q no sean solo signos , . ? !
    if (encriptando.length === (restricciones3*(-1))) {
        alert ('Rellenar el campo con un texto')
        
    } else
    //al pasar las restricciones, codifica
    if (restriccionesFin === 0 && encriptando.length !== 0) {
        var encriptado = []
    for (let i = 0; i < encriptando.length; i++) {
        if        (encriptando[i] == "a") {
            encriptado.push(encriptando[i] + "i")
        } else if (encriptando[i] == "e") {
            encriptado.push(encriptando[i] + "nter")
        } else if (encriptando[i] == "i") {
            encriptado.push(encriptando[i] + "mes")
        } else if (encriptando[i] == "o") {
            encriptado.push(encriptando[i] + "ber")
        } else if (encriptando[i] == "u") {
            encriptado.push(encriptando[i] + "fat")
        } else {
            encriptado.push(encriptando[i])
        }
    }

    var codificado = encriptado.join("")
    
    codificadoVisual.textContent = codificado
    
    visibleNoVisible()
    
    return codificadoVisual

    
    } else if (encriptando.length === 0) {
        alert ('Rellenar el campo "Ingrese el texto aquí"')

    }  else {
        alert ("No debe contener mayusculas, acentos o caracteres especiales")
    }


    
});
