let titulo = document.querySelector("#titulo");   
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    //Retirando o valor digitado no input 
    //e jogando na variável
    let textoDigitado = campoTexto.value;

    //Atribuindo ao elemento titulo o texto que foi digitado
    //no input
    titulo.textContent = textoDigitado;
}

//Atribuindo uma ação de clicar no botão
btTrocarTexto.onclick = function(){
    alterarTexto();
}