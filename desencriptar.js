var botonDesencriptar = document.querySelector("#botonDesencriptar");

var codificadoVisual = document.querySelector("#codificadoId");


botonDesencriptar.addEventListener("click",function(event) {
    event.preventDefault();
    var textoNuevo = document.querySelector("#textoNuevo");
    var desencriptar = textoNuevo.value;
    
    var encriptando = desencriptar.split("");
    
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

    // resta signos basicos de escritura q fueron sumados en restricciones2 ya que restricciones2 si la suma
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
    if (restriccionesFin === 0) {
    var encriptado = []
    for (let i = 0; i < encriptando.length; i++) {
        if  (encriptando[i] == "a" && encriptando[i + 1] == "i") {
            encriptado.push(encriptando[i])
            i = i + 1
        } else if (encriptando[i] == "e" && encriptando[i + 1] == "n" && encriptando[i + 2] == "t" && encriptando[i + 3] == "e"&& encriptando[i + 4] == "r") {
            encriptado.push(encriptando[i])
            i = i + 4
        } else if (encriptando[i] == "i" && encriptando[i + 1] == "m" && encriptando[i + 2] == "e" && encriptando[i + 3] == "s") {
            encriptado.push(encriptando[i])
            i = i + 3
        } else if (encriptando[i] == "o" && encriptando[i + 1] == "b" && encriptando[i + 2] == "e" && encriptando[i + 3] == "r") {
            encriptado.push(encriptando[i])
            i = i + 3
        } else if (encriptando[i] == "u" && encriptando[i + 1] == "f" && encriptando[i + 2] == "a" && encriptando[i + 3] == "t") {
            encriptado.push(encriptando[i])
            i = i + 3
        } else {
            encriptado.push(encriptando[i])
        }
    }
    
    var codificado = encriptado.join("");
   
    codificadoVisual.textContent = codificado;
    

    visibleNoVisible();
    
    return codificadoVisual;
    // revisa que el campo no este vacio
    } else if (encriptando.length === 0) {
        alert ('Rellenar el campo "Ingrese el texto aquí"')

    }  else {
        alert ("No debe contener mayusculas, acentos o caracteres especiales")
    }
});

