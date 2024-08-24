let areaTexto = document.querySelector(".area__texto");
let mensagem = document.querySelector(".area__mensagem");
let codigoFonte = [["e" , "enter"] , ["i" , "imes" ] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
console.table(codigoFonte)

function botaoEncripitar() {
    let textoEncripitado = cripitar(areaTexto.value);
    mensagem.value = textoEncripitado;
    areaTexto.value = "";
}

function cripitar(mensagemEncripitada) {

    let codigoFonte = [["e" , "enter"] , ["i" , "imes" ] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemEncripitada = mensagemEncripitada.toLowerCase();

    for(let i = 0; i < codigoFonte.length; i++) {
        if(mensagemEncripitada.includes(codigoFonte[i][0])) {
            mensagemEncripitada = mensagemEncripitada.replaceAll(codigoFonte[i][0], codigoFonte[i][1]);
        }
    }
    return mensagemEncripitada
}


function botaoDesencripitar() {
    let textoDesencripitado = desencripitar(areaTexto.value);
    mensagem.value = textoDesencripitado;
    areaTexto.value = "";
}

function desencripitar(mensagemdesencripitada) {

    let codigoFonte = [["e" , "enter"] , ["i" , "imes" ] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemdesencripitada = mensagemdesencripitada.toLowerCase();

    for(let i = 0; i < codigoFonte.length; i++) {
        if(mensagemdesencripitada.includes(codigoFonte[i][1])) {
            mensagemdesencripitada = mensagemdesencripitada.replaceAll(codigoFonte[i][1], codigoFonte[i][0]);
        }
    }
    return mensagemdesencripitada
}





function botaoCopiar(){

    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";

}