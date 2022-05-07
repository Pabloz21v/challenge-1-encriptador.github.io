var botonCopiar = document.querySelector("#botonCopiar");

var codificadoVisual = document.querySelector("#codificadoId")


botonCopiar.addEventListener("click",function(event){
    event.preventDefault();

    var copiado = document.createElement("input");
    copiado.setAttribute("value", document.getElementById("codificadoId").innerHTML);
    document.body.appendChild(copiado);
    copiado.select();
    document.execCommand("copy");
    document.body.removeChild(copiado);

});

  

/*var codigoACopiar = document.getElementById('codificadoId');
var seleccion = document.createRange();
seleccion.selectNodeContents(codigoACopiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var copiado = document.execCommand('copy');
window.getSelection().removeRange(seleccion);  

 console.log (codigoACopiar)
 console.log (seleccion)
 */