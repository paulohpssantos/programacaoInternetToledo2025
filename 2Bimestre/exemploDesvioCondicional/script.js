let inputNota1 = document.querySelector("#inputNota1");
let inputNota2 = document.querySelector("#inputNota2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function verificaAprovacao(){

    let nota1 = Number(inputNota1.value)
    let nota2 = Number(inputNota2.value);
    let media = (nota1 + nota2) / 2;

    //APROVADO: média 6.0 ou maior
    //REPROVADO: média menor que 6.0
    if(media >= 6.0){
        h3Resultado.textContent = "Parabens voce esta aprovado!!!";
    }else{
        h3Resultado.textContent = "Nao desista, tente novamente!";
    }

}

btCalcular.onclick = function(){
    verificaAprovacao();
}