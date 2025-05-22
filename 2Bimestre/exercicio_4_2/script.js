let inputSabor1 = document.querySelector("#inputSabor1");
let inputSabor2 = document.querySelector("#inputSabor2");
let inputSabor3 = document.querySelector("#inputSabor3");
let inputSabor4 = document.querySelector("#inputSabor4");
let inputRefri = document.querySelector("#inputRefri");
let btFinalizaPedido = document.querySelector("#btFinalizaPedido");
let pedidoFinal = document.querySelector("#pedidoFinal");

function geraPedidoPizza(){
    
    let qtdRefri = Number(inputRefri.value);
    let qtdSabores = 0;

    if(inputSabor1.value != ""){
        qtdSabores = qtdSabores + 1;
    }
    if(inputSabor2.value != ""){
        qtdSabores = qtdSabores + 1;
    }
    if(inputSabor3.value != ""){
        qtdSabores = qtdSabores + 1;
    }
    if(inputSabor4.value != ""){
        qtdSabores = qtdSabores + 1;
    }

    let totalPizza = (qtdSabores * 12);
    let totalRefri = (qtdRefri * 7);

    pedidoFinal.innerHTML = "Pedido <hr>"+
                            "Total Pizza: "+totalPizza+"<br>"+
                            "Total Refrigerante: "+totalRefri+"<hr>"+
                            "Total Pedido: R$"+(totalPizza+totalRefri)+"<hr>";



}

btFinalizaPedido.onclick = function(){
    geraPedidoPizza();
}