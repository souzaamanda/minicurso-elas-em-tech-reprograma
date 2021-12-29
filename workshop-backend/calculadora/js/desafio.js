var valor = document.querySelector("#valor-hora")

var projeto = document.querySelector("#horas-projeto")

var resposta = document.querySelector("#resposta")

// console.log(valor, projeto, resposta)

function calcular(){
    var valorHora = valor.valueAsNumber
    var horasProjeto = projeto.valueAsNumber

    var respostaNatela  = valorHora * horasProjeto

    resposta.textContent = respostaNatela

}