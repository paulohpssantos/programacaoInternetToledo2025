let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedias(){

    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);

    //Calcular a média aritmética
    let mediaAritmetica = (num1 + num2 + num3) / 3;

    //Fórmula da média ponderada
    // (x1 * p1) + (x2 * p2) + (x3 * p3)
    // ----------------------------------
    //        (p1 + p2 + p3)

    //Calcula a média Ponderada
    let somaValoresPeso = (num1 * 3) + (num2 * 2) + (num3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPeso / somaPesos;

    //Calular a soma das médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    //Calcular a média das médias
    let mediaDasMedias = somaMedias / 2;

    h3Resultado.innerHTML = "Media Aritmetica: "+mediaAritmetica+"<br>"+
        " Media Ponderada: "+mediaPonderada+"<br>"+
        " Soma das Medias: "+somaMedias+"<br>"+
        " Media das Medias "+mediaDasMedias;
        


}

btCalcular.onclick = function(){
    calcularMedias();
}